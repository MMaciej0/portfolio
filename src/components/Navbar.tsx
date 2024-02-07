import React from "react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Bot, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-background py-4">
      <MaxWidthWrapper className="flex justify-between">
        <ul className="flex space-x-4">
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link href="/">home</Link>
          </li>
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link href="/about">about me</Link>
          </li>
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link href="/projects">projects</Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li className="animate-pulse cursor-pointer text-muted-foreground duration-300 hover:animate-none hover:text-foreground lg:hidden">
            <Bot />
          </li>
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link href="https://github.com/MMaciej0">
              <Github />
            </Link>
          </li>
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link href="https://www.linkedin.com/in/maciej-m%C4%85dry/">
              <Linkedin />
            </Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
