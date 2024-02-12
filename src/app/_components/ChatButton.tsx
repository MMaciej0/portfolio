"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";

import Sheet from "@/components/ui/Sheet";
import Chat from "@/app/_components/Chat";

interface ChatButtonProps {
  pathname: string;
}

const ChatButton: FC<ChatButtonProps> = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
