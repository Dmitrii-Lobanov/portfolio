import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dmitrii Lobanov",
};

export default function About() {
  return (
    <main className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-text-primary tracking-tight">
          About Me
        </h1>
        <div className="flex flex-col gap-6 text-text-secondary text-lg leading-relaxed max-w-3xl">
          <p>
            With 6+ years of engineering experience, I view frontend development
            as system design. I don't just assemble components; I architect
            maintainable, highly performant systems built on React, TypeScript,
            and modern tooling.
          </p>
          <p>
            My engineering philosophy centers on shipping fast, minimizing
            technical debt, and building resilient interfaces. I prioritize
            real-world impact over trendy abstractions, ensuring the products I
            build are accessible, scalable, and secure.
          </p>
        </div>
      </section>
    </main>
  );
}
