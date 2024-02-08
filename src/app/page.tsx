import { Metadata } from "next";
import Image from "next/image";

import { MessageCircleWarning } from "lucide-react";
import GlitchH1 from "@/components/ui/GlitchH1";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import me from "@/assets/images/portfolio-color-img.png";

export const metadata: Metadata = {
  title: "Maciej Mądry - Portfolio",
};

export default function Home() {
  return (
    <MaxWidthWrapper className="h-screen w-full max-w-4xl overflow-hidden pt-24">
      <article className="mx-auto flex items-center justify-center space-x-3 rounded border text-sm md:text-base">
        <p className="pl-4">
          <MessageCircleWarning size={25} className="flex-shrink-0" />
        </p>
        <p className="flex-grow p-2">
          It seems like your browser settings are preventing me from loading my
          digital avatar properly. No worries though! Feel free to chat with my
          assistant or browse the web manually. Thanks for dropping by!
        </p>
      </article>
      <section className="grid h-full grid-rows-7">
        <header className="row-span-2 my-auto px-4 text-2xl text-muted-foreground">
          <p>Hello</p>
          <GlitchH1 text="I'm Maciej Mądry" />
          <p className="glitch-text w-full text-right">Frontend Developer</p>
        </header>
        <div className="relative row-span-5 mx-auto w-full max-w-xl">
          <Image
            src={me}
            alt="A photo of me"
            fill
            className="animate-image object-cover object-top"
          />
          <div className="glitch__layers">
            <div className="glitch__layer"></div>
            <div className="glitch__layer"></div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
