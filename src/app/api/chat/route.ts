import { LangChainStream, StreamingTextResponse, Message } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  PromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/lib/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { UpstashRedisCache } from "langchain/cache/upstash_redis";
import { Redis } from "@upstash/redis";

export const POST = async (req: Request) => {
  try {
    const { messages } = await req.json();

    const chatHistory = messages
      .slice(0, -1)
      .map((m: Message) =>
        m.role === "assistant"
          ? new AIMessage(m.content)
          : new HumanMessage(m.content),
      );

    const lastMessageContent = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    });

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      cache,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      verbose: true,
      cache,
    });

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to look up in order to get relevant to the current question " +
          "Don't leave out any relevant keywords. Only return the query and no other text",
      ],
    ]);

    const retriever = (await getVectorStore()).asRetriever();

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    // context is replaced by documents with are fetched from vector store
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for a personal portfolio website. You impersonate website owners assistant. " +
          "Answer the user quention based on the below context. " +
          "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
          "Format your messages in markdown format. \n\n" +
          "Context: \n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url} \n\n Page content: \n {page_content}",
      ),
      documentSeparator: "\n---------\n",
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    retrievalChain.invoke({
      input: lastMessageContent,
      chat_history: chatHistory,
    });

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
};
