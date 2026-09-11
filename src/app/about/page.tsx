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
    "15+",
    "applications",
    "Migration work that preserved delivery while foundations changed.",
  ],
  [
    "3×",
    "rendering",
    "A measured improvement produced through targeted performance work.",
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
          <p className="eyebrow">About / Product engineer and architect</p>
          <h1>
            I turn complex workflows into systems teams can safely evolve.
          </h1>
          <p>
            I’m a Senior Frontend and Product Engineer working across interface
            architecture, platform boundaries, performance, and delivery. I
            build the product, improve the system beneath it, and make the
            reasoning reusable.
          </p>
          <div className="about-proof-line" aria-label="Professional focus">
            <span>Product engineering</span>
            <span>Frontend architecture</span>
            <span>Engineering knowledge</span>
          </div>
        </div>
        <div
          className="about-portrait"
          aria-label="Portrait of Dmitrii Lobanov"
        >
          <div className="about-portrait-grid" aria-hidden="true" />
          <span className="about-portrait-label">Engineer / educator</span>
          <Image
            src="/my-photo-no-bg-amazed.png"
            alt="Dmitrii Lobanov"
            width={1129}
            height={944}
            className="about-portrait-image"
            priority
          />
          <div className="about-portrait-status">
            <i /> Building systems and explaining why
          </div>
        </div>
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
            <span>2021 — 2026</span>
            <strong>Tinkoff / T-Bank</strong>
          </div>
          <div>
            <h3>Senior Frontend Engineer</h3>
            <p>
              Built and evolved a large CPA platform spanning partner and
              internal operational products, working across architecture,
              performance, design foundations, real-time workflows, complex data
              interfaces, and migration strategy.
            </p>
            <Link className="action-link route-link" href="/work/cpa-platform">
              See the production case study <ArrowRight size={16} />
            </Link>
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
              Translated production lessons into practical guidance on state,
              performance, tooling, architecture, and maintainability.
            </p>
          </article>
          <article>
            <GraduationCap size={28} />
            <span>Mentoring</span>
            <h3>Graduate project mentor</h3>
            <p>
              Helped students move from a product idea through system
              boundaries, implementation, deployment, and technical explanation.
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

      <section className="about-section-surface about-cta">
        <div>
          <p className="eyebrow">05 / Start a conversation</p>
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
