import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface GlitchH1Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const GlitchH1: FC<GlitchH1Props> = ({ text, className, ...props }) => {
  return (
    <h1 {...props} className={cn("grid", className)}>
      <span className="glitch-text col-start-1 row-start-1 text-4xl font-extrabold">
        {text}
      </span>
      <span className="glitch-text col-start-1 row-start-1 text-4xl font-extrabold">
        {text}
      </span>
      <span className="glitch-text col-start-1 row-start-1 text-4xl font-extrabold">
        {text}
      </span>
    </h1>
  );
};

export default GlitchH1;
