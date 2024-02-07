import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/images/portfolio-color-img.png";
import { MessageCircleWarning } from "lucide-react";

import GlitchH1 from "@/components/ui/GlitchH1";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
  title: "Maciej Mądry - Portfolio",
};

export default function Home() {
  return (
    <MaxWidthWrapper className="h-screen w-full overflow-hidden pt-24">
      <article className="mx-auto flex max-w-[600px] items-center justify-center space-x-3 rounded border text-sm md:text-base">
        <p className="pl-4">
          <MessageCircleWarning size={25} className="flex-shrink-0" />
        </p>
        <p className="flex-grow p-2">
          It seems like your browser settings are preventing me from loading my
          digital avatar properly. No worries though! Feel free to chat with my
          assistant or browse the web manually. Thanks for dropping by!
        </p>
      </article>
      <div className="grid h-full grid-cols-1 overflow-hidden py-2 lg:grid-cols-2">
        <header className="grid h-full grid-cols-1 grid-rows-7">
          <div className="row-span-2 my-auto px-4 text-2xl text-muted-foreground">
            <p>Hello</p>
            <GlitchH1 text="I'm Maciej Mądry" />
            <p className="glitch-text w-full text-right">Frontend Developer</p>
          </div>
          <div className="relative row-span-5">
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
        </header>
        <section className="hidden p-6 lg:flex lg:items-center lg:justify-center">
          chat bot
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
