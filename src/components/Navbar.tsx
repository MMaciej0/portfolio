"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Bot, Github, Linkedin } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-background py-4">
      <MaxWidthWrapper className="flex justify-between">
        <ul className="flex space-x-4">
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link
              href="/"
              className={cn(pathname === "/" && "text-foreground")}
            >
              home
            </Link>
          </li>
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link
              href="/about"
              className={cn(pathname === "/about" && "text-foreground")}
            >
              about me
            </Link>
          </li>
          <li className="text-muted-foreground duration-300 hover:text-foreground">
            <Link
              href="/projects"
              className={cn(pathname === "/projects" && "text-foreground")}
            >
              projects
            </Link>
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
