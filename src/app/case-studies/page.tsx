import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Dmitrii Lobanov",
};

export default function CaseStudies() {
  return (
    <main className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-text-primary tracking-tight">
          Case Studies
        </h1>
        <div className="grid grid-cols-1 gap-6">
          <a
            href="/#case-study"
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
            href="/#case-study"
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
    </main>
  );
}
