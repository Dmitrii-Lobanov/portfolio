import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/ui/fade-in";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 md:gap-32 pb-24">
      {/* Hero Section */}
      <FadeIn delay={0.1}>
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Dmitrii Lobanov
            </h1>
            <h2 className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-medium">
              Senior Frontend Engineer
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed text-base md:text-lg">
            I build fast, scalable, and complex web applications. Ex-Tinkoff.
            Specializing in React, Next.js, frontend architecture, and
            performance optimization.
          </p>
          <div className="flex gap-6 items-center mt-2">
            <a
              href="#experience"
              className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-5 py-2.5 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-sm"
            >
              View Experience
            </a>
            <div className="flex items-center gap-4 text-zinc-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* About Section */}
      <FadeIn delay={0.2}>
        <section id="about" className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            About
          </h3>
          <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            <p>
              With over 6 years of experience, I specialize in frontend
              architecture, system design, and performance optimization. I don't
              just write React—I build maintainable systems that scale to
              hundreds of thousands of users.
            </p>
            <p>
              My focus is on delivering exceptional user experiences through
              clean code, modern architectures, and a deep understanding of
              browser internals.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Experience Section */}
      <FadeIn delay={0.3}>
        <section id="experience" className="flex flex-col gap-8">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Experience
          </h3>

          <div className="flex flex-col gap-12">
            {/* Job 1 */}
            <div className="flex flex-col gap-3 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Senior Frontend Engineer
                </h4>
                <span className="text-zinc-500 text-sm font-mono tracking-tight">
                  2020 — Present
                </span>
              </div>
              <div className="text-zinc-800 dark:text-zinc-300 font-medium">
                Tinkoff
              </div>
              <ul className="list-disc list-outside ml-4 mt-2 flex flex-col gap-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">
                <li>
                  Led frontend architecture for a fintech platform serving
                  300,000+ users.
                </li>
                <li>
                  Improved application performance by 3x by reducing bundle
                  size, optimizing rendering pipelines, and improving Lighthouse
                  scores.
                </li>
                <li>
                  Developed and maintained complex real-time dashboards and UI
                  systems.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Case Studies Section */}
      <FadeIn delay={0.4}>
        <section id="projects" className="flex flex-col gap-8">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Case Studies & Projects
          </h3>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeInStaggerItem>
              <ProjectCard
                title="Real-time Fintech Dashboard"
                description="Engineered a high-performance dashboard for traders using WebSockets. Handled massive state updates without frame drops."
                tags={["React", "TypeScript", "WebSockets", "Zustand"]}
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <ProjectCard
                title="Frontend Monorepo Architecture"
                description="Migrated 15+ legacy applications into a cohesive Turborepo monorepo, cutting CI/CD times by 40% and unifying the design system."
                tags={["Turborepo", "Next.js", "Design System", "CI/CD"]}
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <ProjectCard
                title="Core UI Component Library"
                description="Built a highly accessible, unstyled component library powering multiple company products. 100% test coverage."
                tags={["React", "Radix UI", "Tailwind CSS", "Jest"]}
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <ProjectCard
                title="Performance Optimization Engine"
                description="Implemented dynamic imports, aggressive tree-shaking, and custom service workers to reduce initial load times by 3x."
                tags={["Webpack", "Service Workers", "Performance"]}
              />
            </FadeInStaggerItem>
          </FadeInStagger>
        </section>
      </FadeIn>
    </main>
  );
}
