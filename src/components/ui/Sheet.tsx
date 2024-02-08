"use client";

import React, { FC, HTMLAttributes, useEffect, useState } from "react";
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

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 500);
    setIsVisible(false);
  };

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
