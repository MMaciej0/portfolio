"use client";

import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Link from "next/link";
import GlitchH1 from "@/components/ui/GlitchH1";
import Button, { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);
  return (
    <MaxWidthWrapper className="pt-40">
      <GlitchH1 text="Ops. Something went wrong..." className="text-center" />
      <div className="flex flex-col space-y-4 py-20 md:flex-row md:space-x-4 md:space-y-0">
        <Button
          variant="outline"
          className="w-full md:max-w-[350px]"
          onClick={reset}
        >
          Try Again
        </Button>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "w-full md:max-w-[350px]",
            }),
          )}
        >
          Home Page
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default error;
