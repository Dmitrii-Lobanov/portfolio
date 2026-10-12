import {
  ArrowRight,
  Blocks,
  BookOpen,
  Gauge,
  GraduationCap,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";

export const metadata: Metadata = { title: "About | Dmitrii Lobanov" };

const focus = [
  {
    icon: Workflow,
    number: "01",
    title: "Complex workflows",
    copy: "Interfaces shaped by permissions, asynchronous state, operational rules, and large datasets.",
  },
  {
    icon: Blocks,
    number: "02",
    title: "Product architecture",
    copy: "Boundaries that clarify ownership and keep systems understandable and replaceable.",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Engineering leverage",
    copy: "Performance work, migration strategy, shared foundations, and knowledge that teams can reuse.",
  },
];

const method = [
  ["01", "Workflow", "What must the user accomplish?"],
  ["02", "Constraint", "What creates genuine pressure?"],
  ["03", "Ownership", "Which system owns the responsibility?"],
  ["04", "Mechanism", "What is the smallest sufficient design?"],
  ["05", "Evidence", "How will we know it worked?"],
];

const evidence = [
  [
    "300,000+",
    "users",
    "Product decisions made for meaningful operational scale.",
  ],
  [
    "−70%",
    "interaction latency",
    "Production p75 INP improved from 500ms to 150ms across critical workflows.",
  ],
  [
    "−67%",
    "loading time",
    "Production p75 LCP improved from 6s to 2s across critical pages.",
  ],
];

const principles = [
  "Product pressure should determine architecture.",
  "Ownership should be visible in code and interfaces.",
  "Performance work needs measurements.",
  "Replaceability is a product capability.",
  "Knowledge should survive the person who discovered it.",
];

export default function AboutPage() {
  return (
    <main className="route-main about-page">
      <section className="about-section-surface about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About / Senior Frontend Engineer</p>
          <h1>
            I turn complex workflows into systems teams can safely evolve.
          </h1>
          <p>
            I’m a Senior Frontend Engineer with 6+ years building React,
            TypeScript, and Next.js applications. I take ownership from the
            first architecture decision through release, working with product,
            design, backend, and QA to turn complex requirements into useful
            experiences.
          </p>
          <div className="about-proof-line">
            <span>React · TypeScript · Next.js</span>
            <span>Fintech &amp; SaaS</span>
            <span>Performance &amp; reliability</span>
          </div>
        </div>
        <figure className="about-portrait">
          <span className="about-portrait-label">Engineer / educator</span>
          <Image
            src="/my-photo-no-bg-amazed.png"
            alt="Dmitrii Lobanov"
            width={1129}
            height={944}
            className="about-portrait-image"
            sizes="(max-width: 680px) calc(100vw - 100px), (max-width: 1000px) 480px, 40vw"
            priority
          />
          <figcaption className="about-portrait-status">
            <strong>Dmitrii Lobanov</strong>
            <span>
              <i aria-hidden="true" /> Building systems and explaining why
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="about-section-surface about-surface about-focus">
        <header className="about-heading">
          <div>
            <p className="eyebrow">01 / Where I do my best work</p>
            <h2>Product pressure becomes an engineering shape.</h2>
          </div>
          <p>
            My strongest work sits where user workflows, data ownership,
            performance, permissions, and long-lived delivery meet.
          </p>
        </header>
        <div className="about-focus-grid">
          {focus.map(({ icon: Icon, number, title, copy }) => (
            <article key={number}>
              <div className="about-focus-visual" aria-hidden="true">
                <Icon size={30} />
                <span>
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <span className="about-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-surface about-surface about-method">
        <header className="about-heading">
          <div>
            <p className="eyebrow">02 / Working model</p>
            <h2>From ambiguity to a defensible decision.</h2>
          </div>
          <p>
            Architecture starts with the guarantee a product needs—not with a
            preferred library or an impressive diagram.
          </p>
        </header>
        <div className="about-method-track">
          <div className="about-method-signal" aria-hidden="true">
            <i />
          </div>
          {method.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-surface about-surface about-experience">
        <header className="about-heading">
          <div>
            <p className="eyebrow">03 / Production evidence</p>
            <h2>Built through real operational pressure.</h2>
          </div>
          <p>
            Six-plus years of React and TypeScript work shaped by users,
            migrations, delivery constraints, and systems that had to keep
            running while they changed.
          </p>
        </header>
        <div className="about-role">
          <div>
            <span>Mar 2026 — present</span>
            <strong>Independent products</strong>
          </div>
          <div>
            <h3>Senior Frontend Engineer</h3>
            <p>
              After relocating to Ecuador, I focused on independent product
              development: Reliable Kanban for optimistic state, concurrency,
              and recovery, and Polaris for editor, runtime, repository, and AI
              workflows. These projects extend my frontend expertise with
              hands-on API and persistence work.
            </p>
            <Link className="action-link route-link" href="/work">
              Explore the independent products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="about-role">
          <div>
            <span>Jan 2024 — Feb 2026</span>
            <strong>Tinkoff / T-Bank</strong>
          </div>
          <div>
            <h3>Senior Frontend Developer</h3>
            <p>
              Owned frontend architecture and delivery for critical workflows on
              a fintech platform serving 300,000+ users. Improved production
              loading, interaction latency, and layout stability, and replaced a
              faulty onboarding integration causing data loss in approximately
              10% of submissions.
            </p>
            <Link className="action-link route-link" href="/work/cpa-platform">
              See the production case study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="about-role">
          <div>
            <span>Aug 2021 — Dec 2023</span>
            <strong>Tinkoff / T-Bank</strong>
          </div>
          <div>
            <h3>Frontend Developer</h3>
            <p>
              Built the frontend application from scratch and defined its
              architecture and state-management approach. Reduced unnecessary
              React renders by 35%, production build time from 20 to 6 minutes,
              and manual regression testing from 90 to 20 minutes per release.
              Promoted to Senior in January 2024.
            </p>
          </div>
        </div>
        <div className="about-role">
          <div>
            <span>2020 — 2021</span>
            <strong>Earlier frontend work</strong>
          </div>
          <div>
            <h3>Trading, enterprise, and real-time interfaces</h3>
            <p>
              At T-Soft, I built trading dashboards, forms, and messaging
              workflows with GraphQL and Apollo Client. At IBS, I delivered
              data-heavy B2B interfaces across enterprise projects. Earlier work
              at Promobot connected a React interface to voice and live-data
              APIs for robot interaction.
            </p>
          </div>
        </div>
        <div className="about-evidence-grid">
          {evidence.map(([value, label, copy]) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-surface about-surface about-knowledge">
        <header className="about-heading">
          <div>
            <p className="eyebrow">04 / Engineering knowledge</p>
            <h2>The work becomes more valuable when the reasoning travels.</h2>
          </div>
          <p>
            I turn production lessons into explanations other engineers can
            question, apply, and improve.
          </p>
        </header>
        <div className="about-contribution-grid">
          <article>
            <MessageSquareText size={28} />
            <span>Speaking</span>
            <h3>Technical meetup speaker</h3>
            <p>
              At Tinkoff’s October 2025 meetup, I spoke about state management,
              bundlers, and the evolution of frontend engineering, drawing on
              lessons from large React and TypeScript applications.
            </p>
          </article>
          <article>
            <GraduationCap size={28} />
            <span>Mentoring</span>
            <h3>Graduate project mentor</h3>
            <p>
              From November 2024 to May 2025, I guided students building a
              full-stack React parking-booking application, covering
              architecture, API integration, state management, reusable
              components, and debugging.
            </p>
          </article>
          <article className="about-principles">
            <BookOpen size={28} />
            <span>Operating principles</span>
            <ul>
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section-surface about-surface about-method">
        <header className="about-heading">
          <div>
            <p className="eyebrow">05 / Development practice</p>
            <h2>AI-assisted work, with engineering ownership.</h2>
          </div>
          <p>
            I use Codex to accelerate focused implementation and review. I
            define acceptance criteria, inspect generated changes, and validate
            behavior through tests and build checks. Architecture and code
            quality remain my responsibility.
          </p>
        </header>
        <p>
          Based in Ecuador · UTC−5 · English C1 · Open to remote roles through
          international B2B contracts.
        </p>
      </section>
      <section className="about-section-surface about-cta">
        <div>
          <p className="eyebrow">06 / Start a conversation</p>
          <h2>
            Building a product with difficult workflows or architectural
            pressure?
          </h2>
        </div>
        <nav aria-label="About page actions">
          <Link href="/work">
            View selected work <ArrowRight size={17} />
          </Link>
          <Link href="/thinking">
            Read technical writing <ArrowRight size={17} />
          </Link>
          <Link href="/contact" className="about-primary-action">
            Let’s talk <ArrowRight size={17} />
          </Link>
        </nav>
      </section>
      <SiteFooter />
    </main>
  );
}
