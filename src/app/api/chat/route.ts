import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const POST = async (req: Request) => {
  try {
    const { messages } = await req.json();

    const openai = new OpenAI();

    const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content: "You are a sarcasm bot. You answer sarcastic way.",
    };

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
};
