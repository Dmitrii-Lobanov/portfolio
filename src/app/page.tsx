import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-end justify-between pt-16 pb-16 md:pb-24 gap-12 relative">
        {/* Text Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-text-primary">
            Dmitrii Lobanov
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-text-secondary leading-snug max-w-xl">
            Senior Frontend Engineer specializing in high&#8209;performance
            architectures.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            I build scalable web applications and complex UI systems. Previously
            led frontend architecture at Tinkoff, scaling platforms to 300,000+
            users and improving rendering performance by 3x.
          </p>
          <div className="flex gap-6 items-center mt-4">
            <Link
              href="/contact"
              className="bg-accent-indigo text-white px-6 py-3 rounded-md font-medium hover:brightness-110 transition-all focus-visible:ring-2 focus-visible:ring-accent-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base outline-none shadow-sm"
            >
              Get in touch
            </Link>
            <div className="flex items-center gap-4 text-text-secondary">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-text-primary transition-colors p-1"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-text-primary transition-colors p-1"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full h-125 md:w-1/2 flex justify-center items-end relative">
          <Image
            src="/my-photo-no-bg-amazed.png"
            alt="Dmitrii Lobanov"
            width={600}
            height={600}
            className="object-contain object-bottom h-full w-full drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Selected Impact */}
      <section
        id="impact"
        className="py-24 border-t border-border-subtle flex flex-col gap-8"
      >
        <h2 className="text-sm font-mono tracking-widest uppercase text-text-secondary">
          Selected Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-6 bg-bg-surface border border-border-subtle rounded-xl">
            <span className="text-3xl font-semibold text-text-primary">
              300k+
            </span>
            <span className="text-text-primary font-medium">Active Users</span>
            <span className="text-sm text-text-secondary">
              Scaled complex fintech platforms to handle massive daily traffic
              with zero downtime.
            </span>
          </div>
          <div className="flex flex-col gap-2 p-6 bg-bg-surface border border-border-subtle rounded-xl">
            <span className="text-3xl font-semibold text-text-primary">3x</span>
            <span className="text-text-primary font-medium">
              Performance Boost
            </span>
            <span className="text-sm text-text-secondary">
              Optimized rendering pipelines and reduced bundle sizes across
              multiple core applications.
            </span>
          </div>
          <div className="flex flex-col gap-2 p-6 bg-bg-surface border border-border-subtle rounded-xl">
            <span className="text-3xl font-semibold text-text-primary">
              15+
            </span>
            <span className="text-text-primary font-medium">Apps Migrated</span>
            <span className="text-sm text-text-secondary">
              Architected and executed monorepo transitions, cutting CI/CD
              deployment times by 40%.
            </span>
          </div>
        </div>
      </section>

      {/* Part Engineer / Part Architect */}
      <section className="py-24 border-t border-border-subtle flex flex-col gap-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
          Part engineer <br className="md:hidden" />
          <span className="text-text-muted font-normal">/</span> Part architect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-text-primary">
              Frontend Engineering
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I specialize in building highly interactive, accessible, and
              performant web applications.
            </p>
            <ul className="flex flex-col gap-3 text-text-primary font-medium">
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> WebGL & Animation
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-text-primary">
              System Architecture
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I design robust architectures that scale, focusing on performance,
              CI/CD, and developer experience.
            </p>
            <ul className="flex flex-col gap-3 text-text-primary font-medium">
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> Monorepo Design
                (Turborepo)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> Performance
                Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> State Management
                Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-indigo">▹</span> Design Systems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Random Facts */}
      <section className="py-24 border-t border-border-subtle flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-bg-surface rounded-2xl flex items-center justify-center border border-border-subtle text-text-muted shadow-sm">
            [ Illustration Placeholder ]
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-text-primary tracking-tight">
            Random facts
          </h2>
          <ul className="flex flex-col gap-4 text-lg text-text-secondary list-disc pl-5">
            <li>I drink way too much coffee while debugging.</li>
            <li>I can optimize a Webpack bundle in my sleep.</li>
            <li>I'm slightly obsessed with clean Git histories.</li>
            <li>I prefer tabs over spaces, but I let Prettier decide.</li>
            <li>I once shaved 2 seconds off TTI with a single code-split.</li>
          </ul>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-24 border-t border-border-subtle flex flex-col gap-12 items-center text-center">
        <h2 className="text-3xl font-bold text-text-primary tracking-tight">
          Companies I've worked with
        </h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-bold text-text-primary">Tinkoff</span>
          <span className="text-2xl font-bold text-text-primary">Yandex</span>
          <span className="text-2xl font-bold text-text-primary">VK</span>
          <span className="text-2xl font-bold text-text-primary">Sber</span>
        </div>
      </section>
    </main>
  );
}
