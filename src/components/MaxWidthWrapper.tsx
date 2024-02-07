import React, { HTMLProps } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "m-auto w-full max-w-7xl overflow-x-hidden px-2 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
