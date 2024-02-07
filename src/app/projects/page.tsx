import React from "react";

import coveloMobileImage from "@/assets/images/covelo-mobile.png";
import coveloDesktopImage from "@/assets/images/covelo-desktop.png";

import GlitchH1 from "@/components/ui/GlitchH1";
import Image from "next/image";
import { Cpu, Github, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const ProjectsPage = () => {
  return (
    <div className="mx-auto h-full min-h-screen w-full max-w-5xl px-6 pb-20 pt-40 md:px-20">
      <GlitchH1 text="My projects" className="pb-20" />
      <section className="grid grid-cols-1 gap-y-10">
        <div className="group relative transition-all duration-300 hover:scale-[1.02]">
          <div className="flex flex-col overflow-hidden rounded-lg border bg-muted/10 shadow-xl shadow-accent">
            <h2 className="py-8 text-center text-3xl font-bold tracking-tighter">
              COVELO
            </h2>
            <div className="relative">
              <Image
                src={coveloDesktopImage}
                alt="Covelo app desktop image"
                className="object-cover object-center"
              />
            </div>
            <hr className="border-accent" />
            <article className="space-y-2 px-4 py-2 text-muted-foreground">
              <p className="font-semibold">
                An application that bringing together cycling enthusiasts. It
                allows users to easily organize bicycle trips around the world.
              </p>
              <hr className="border-accent" />

              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2">
                  <h3 className="py-2">Main functionalities:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <Cpu size={20} className="flex-shrink-0" />
                      <span>server and client-side rendering,</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cpu size={20} className="flex-shrink-0" />
                      <span>server and client-side rendering,</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cpu size={20} className="flex-shrink-0" />
                      <span>
                        server and client-side data fetching with error
                        handling,
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cpu size={20} className="flex-shrink-0" />
                      <span>Next.js server actions,</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cpu size={20} className="flex-shrink-0" />
                      <span>
                        user authentication using Auth.js, including OAuth,
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cpu size={20} className="flex-shrink-0" />
                      <span>
                        form submission and validation using React Hook Form and
                        Zod.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="hidden place-self-end overflow-hidden md:col-span-1 md:block">
                  <div className="relative h-[300px] w-[200px] overflow-hidden rounded-md border-[2px]">
                    <Image
                      src={coveloMobileImage}
                      alt="Covelo app mobile image"
                      className="h-auto w-full transform transition-transform duration-[1s] ease-in-out group-hover:-translate-y-1/3"
                    />
                  </div>
                </div>
              </div>
            </article>
            <hr className="border-accent" />
            <div className="my-4 flex px-2">
              <Link
                href="https://github.com/MMaciej0/co-velo"
                className={cn(
                  buttonVariants({ variant: "ghost", className: "w-full" }),
                )}
              >
                <Github />
                <span className="ml-2">Repo</span>
              </Link>

              <Link
                href="https://co-velo.vercel.app/"
                className={cn(
                  buttonVariants({ variant: "ghost", className: "w-full" }),
                )}
              >
                <Globe />
                <span className="ml-2">Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
