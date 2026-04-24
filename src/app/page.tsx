import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 pt-16">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-text-primary leading-tight max-w-4xl">
          Senior Frontend Engineer specializing in high&#8209;performance
          architectures.
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
          I build scalable web applications and complex UI systems. Previously
          led frontend architecture at Tinkoff, scaling platforms to 300,000+
          users and improving rendering performance by 3x.
        </p>
        <div className="flex gap-6 items-center mt-4">
          <a
            href="#contact"
            className="bg-accent-indigo text-white px-6 py-3 rounded-md font-medium hover:brightness-110 transition-all focus-visible:ring-2 focus-visible:ring-accent-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base outline-none shadow-sm"
          >
            Get in touch
          </a>
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
      </section>

      {/* Selected Impact */}
      <section id="impact" className="flex flex-col gap-8">
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

      {/* About */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <h2 className="text-sm font-mono tracking-widest uppercase text-text-secondary md:col-span-1">
          About
        </h2>
        <div className="md:col-span-3 flex flex-col gap-6 text-text-secondary text-lg leading-relaxed max-w-3xl">
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

      {/* Engineering Case Studies */}
      <section
        id="case-studies"
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <h2 className="text-sm font-mono tracking-widest uppercase text-text-secondary md:col-span-1">
          Case Studies
        </h2>
        <div className="md:col-span-3 grid grid-cols-1 gap-6">
          <a
            href="#"
            className="group flex flex-col sm:flex-row gap-6 p-6 bg-bg-surface border border-border-subtle rounded-xl hover:bg-bg-elevated transition-colors focus-visible:ring-2 focus-visible:ring-accent-indigo outline-none"
          >
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-xl font-medium text-text-primary flex items-center gap-2 group-hover:text-accent-indigo transition-colors">
                Real-Time Trading Dashboard
                <ArrowUpRight className="w-4 h-4 text-accent-indigo opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Architected a high-throughput React dashboard consuming
                WebSockets. Managed rapidly changing state by bypassing React's
                standard render cycle for high-frequency data chunks, resulting
                in a smooth 60fps experience without main-thread blocking.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs font-mono px-2 py-1 bg-bg-base border border-border-subtle rounded text-text-muted">
                  React
                </span>
                <span className="text-xs font-mono px-2 py-1 bg-bg-base border border-border-subtle rounded text-text-muted">
                  WebSockets
                </span>
                <span className="text-xs font-mono px-2 py-1 bg-bg-base border border-border-subtle rounded text-text-muted">
                  Performance
                </span>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group flex flex-col sm:flex-row gap-6 p-6 bg-bg-surface border border-border-subtle rounded-xl hover:bg-bg-elevated transition-colors focus-visible:ring-2 focus-visible:ring-accent-indigo outline-none"
          >
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-xl font-medium text-text-primary flex items-center gap-2 group-hover:text-accent-indigo transition-colors">
                Monorepo Infrastructure Migration
                <ArrowUpRight className="w-4 h-4 text-accent-indigo opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Led the migration of 15 standalone legacy applications into a
                cohesive Turborepo monorepo. Established shared internal
                packages (UI, core logic, configs), unified the CI/CD pipeline,
                and dropped average deployment times from 25m to 12m.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs font-mono px-2 py-1 bg-bg-base border border-border-subtle rounded text-text-muted">
                  Turborepo
                </span>
                <span className="text-xs font-mono px-2 py-1 bg-bg-base border border-border-subtle rounded text-text-muted">
                  Next.js
                </span>
                <span className="text-xs font-mono px-2 py-1 bg-bg-base border border-border-subtle rounded text-text-muted">
                  CI/CD
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <h2 className="text-sm font-mono tracking-widest uppercase text-text-secondary md:col-span-1">
          Experience
        </h2>
        <div className="md:col-span-3 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Senior Frontend Engineer
                </h3>
                <h4 className="text-text-secondary">Tinkoff</h4>
              </div>
              <span className="text-sm font-mono text-text-muted">
                2020 — Present
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Led the architecture and development of core financial products.
              Spearheaded performance initiatives resulting in a 3x speedup in
              TTI (Time to Interactive). Mentored junior and mid-level
              engineers, enforced strict code quality standards, and closely
              collaborated with product and design to align technical
              constraints with business objectives.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Frontend Engineer
                </h3>
                <h4 className="text-text-secondary">Previous Company</h4>
              </div>
              <span className="text-sm font-mono text-text-muted">
                2018 — 2020
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Developed and scaled responsive web applications using React and
              Redux. Integrated complex third-party APIs and established
              comprehensive testing suites using Jest and Cypress.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex flex-col gap-6 pt-16 border-t border-border-subtle"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-text-primary">
            Ready to scale?
          </h2>
          <p className="text-text-secondary">
            I am open to senior remote opportunities globally.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-text-primary hover:text-accent-indigo transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
