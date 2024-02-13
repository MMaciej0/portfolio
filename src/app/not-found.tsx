"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/Button";
import GlitchH1 from "@/components/ui/GlitchH1";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <MaxWidthWrapper className="pt-40">
      <GlitchH1 text="Ops. This page doesn't exist." className="text-center" />
      <div className="flex flex-col space-y-4 py-20 md:flex-row md:space-x-4 md:space-y-0">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "mx-auto w-full md:max-w-[350px]",
            }),
          )}
        >
          Home Page
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default NotFoundPage;
