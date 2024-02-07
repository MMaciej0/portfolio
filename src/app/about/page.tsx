import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import GlitchH1 from "@/components/ui/GlitchH1";

const AboutPage = () => {
  return (
    <MaxWidthWrapper className="max-w-5xl px-6 pb-20 pt-40">
      <section className="space-y-6">
        <GlitchH1 text="About me" className="pb-8" />
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Who am I?</h2>
          <article className="text-base font-semibold text-muted-foreground">
            I&apos;m Maciej Mądry, a self-taught frontend developer from Poland.
            My journey into programming began at the start of the Covid19
            pandemic. Initially, I explored Python tutorials, but found them
            somewhat dull. Then, by chance, I discovered HTML and CSS, and
            something clicked. Suddenly, the results of my code weren&apos;t
            just console prompts, and that attracted me to dig deeper. Fast
            forward to 2024, and I&apos;m still immersed in learning frontend
            technologies, feeling like i&apos;ll never lose enthusiasm.
            <p className="py-2">
              When brainstorming new projects, I prioritize exploring
              programming topics I want to delve into, while also considering
              real-world use cases. Looking ahead i want to master frontend
              part, then i&apos;ll aim backend development to become a
              well-rounded programmer.
            </p>
          </article>
        </section>
        <hr className="border-muted" />
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Skills</h2>
          <article className="text-base font-semibold text-muted-foreground">
            <p className="py-2">
              I specialize in frontend development, with a focus on{" "}
              <strong>React</strong> and <strong>Next.js</strong>.
            </p>
            <p>
              Nowadays, all of my applications are written using{" "}
              <strong>Typescript</strong>, and <strong>Tailwindcss</strong> for
              styling and responsiveness. In my projects, you will also find{" "}
              <strong>Zod</strong> and <strong>React Hook Form</strong> for
              validation and form submission. Since user registration and
              authentication are essential for most websites, I utilize{" "}
              <strong>Auth.js</strong> and <strong>Clerk</strong>. Currently, I
              store web data using <strong>MongoDB</strong> in conjunction with{" "}
              <strong>Prisma</strong>.
            </p>
          </article>
        </section>
        <hr className="border-muted" />
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Hobbies</h2>
          <article className="text-base font-semibold text-muted-foreground">
            Besides programming, I love doing sports, expecially cycling.
            Occasionally, I also engage in weightlifting and running. I believe
            that having hobbies outside of coding and work is essential for
            maintaining good mental health.
          </article>
        </section>
        <hr className="border-muted" />
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <article className="text-base font-semibold text-muted-foreground">
            I am open to collaborating on any project or discussing any topic of
            interest. If you have an application you&apos;d like to develop
            together or simply want to have a conversation, please feel free to
            reach out to me at:{" "}
            <span className="bg-accent px-1">maciejmadry0@gmail.com</span>.
          </article>
        </section>
      </section>
    </MaxWidthWrapper>
  );
};

export default AboutPage;
