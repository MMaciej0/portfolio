"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";

import Sheet from "@/components/ui/Sheet";
import Chat from "@/app/_components/Chat";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  return (
    <>
      <button
        className="animate-pulse cursor-pointer text-muted-foreground duration-300 hover:animate-none hover:text-foreground"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <Bot />
      </button>
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Assistant">
        <Chat inputRef={inputRef} />
      </Sheet>
    </>
  );
};

export default ChatButton;
