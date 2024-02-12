"use client";

import React, {
  FC,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

import Button from "@/components/ui/Button";

interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Sheet: FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const childrenRef = useRef(null);

  useEffect(() => {
    setIsVisible(isOpen);
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      onClose();
    }, 500);
    setIsVisible(false);
  }, [onClose]);

  useEffect(() => {
    const handler: EventListener = (e: Event) => {
      const keyboardEvent = e as unknown as KeyboardEvent;
      if (keyboardEvent.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [handleClose]);

  useClickOutside(handleClose, childrenRef);

  if (!isOpen) {
    return null;
  }

  return (
    <div {...props} className="fixed inset-0 z-50 bg-background/95">
      <div className="mx-auto h-full px-6 md:max-w-3xl md:px-20">
        <div className="flex h-full flex-col">
          <div className="relative w-full ">
            <h2 className="py-6 text-center text-2xl font-bold">{title}</h2>
            <Button
              disabled={!isVisible}
              size="icon"
              variant="ghost"
              onClick={handleClose}
              className="absolute right-0 top-[1.5rem]"
            >
              <X size={30} />
            </Button>
          </div>
          <div
            ref={childrenRef}
            className={cn(
              "h-full py-10 transition-transform duration-500 ease-in-out",
              isVisible ? "translate-y-0" : "translate-y-full",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
