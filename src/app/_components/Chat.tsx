"use client";

import React, { useEffect, useRef, RefObject, ElementRef, FC } from "react";
import { Message, useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { Bot, SendHorizonal, Trash } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ChatProps {
  inputRef: RefObject<ElementRef<"input">>;
}

const Chat: FC<ChatProps> = ({ inputRef }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div className="flex h-[80vh] w-full flex-col justify-between rounded-lg border border-foreground/20 bg-background p-2 md:h-[700px] md:p-6">
      <div className="h-full overflow-y-auto px-2" ref={scrollRef}>
        {messages.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
        {isLoading && lastMessageIsUser && (
          <ChatMessage
            message={{
              id: "loading",
              role: "assistant",
              content: "Let me think for a while...",
            }}
          />
        )}
        {error && (
          <ChatMessage
            message={{
              id: "error",
              role: "assistant",
              content:
                "Ops. Something went wrong, please explore website manually or try again later.",
            }}
          />
        )}
        {!error && messages.length === 0 && (
          <div className="flex flex-col items-center">
            <Bot size={25} className="mb-2 flex-none" />
            <p className="text-lg font-semibold">
              Hey there! I&apos;m here to assist you. Feel free to ask anything
              about Maciej, i &apos;ll find relevant information from this
              website for you.
            </p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center bg-background pt-2"
      >
        <Button
          onClick={() => setMessages([])}
          type="button"
          size="icon"
          variant="ghost"
          className="mr-2"
          title="Clear chat"
        >
          <Trash />
        </Button>
        <input
          ref={inputRef}
          className="w-full rounded-md border bg-background py-2 pl-4 pr-12 text-muted-foreground outline-none ring-muted-foreground focus:ring-1"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          disabled={isLoading || input.length === 0}
          size="icon"
          variant="ghost"
          className="absolute right-0"
          type="submit"
          title="Submit message"
        >
          <SendHorizonal />
        </Button>
      </form>
    </div>
  );
};

export default Chat;

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message: { role, content } }: ChatMessageProps) => {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-8 flex items-center",
        isAiMessage ? "justify-start" : "justify-end",
      )}
    >
      {isAiMessage && <Bot size={25} className="mr-2 flex-none" />}
      <p
        className={cn(
          "inline rounded-md border p-3 text-base",
          !isAiMessage && "bg-foreground font-semibold text-background",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary underline hover:text-muted-foreground"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </p>
    </div>
  );
};
