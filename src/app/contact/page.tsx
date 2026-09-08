import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Mail,
  MessageSquareText,
  Route,
  Share2,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { externalLinks } from "@/content/portfolio";

export const metadata: Metadata = { title: "Contact | Dmitrii Lobanov" };

const goodFit = [
  "Architecture-heavy frontend and product engineering",
  "Complex workflows, permissions, and operational interfaces",
  "Platform modernization and migration strategy",
  "Performance, reliability, and engineering foundations",
  "Technical speaking, mentoring, and knowledge systems",
];

const usefulContext = [
  ["01", "The product", "What people are trying to accomplish."],
  [
    "02",
    "The pressure",
    "What is slow, risky, unclear, or difficult to evolve.",
  ],
  ["03", "The outcome", "What a better system should make possible."],
];

export default function ContactPage() {
  return (
    <main className="route-main contact-page contact-editorial">
      <section className="contact-hero-light">
        <div className="contact-hero-copy">
          <p className="eyebrow">Contact / Current signal: available</p>
          <h1>Let’s make the difficult part explicit.</h1>
          <p>
            I’m interested in senior frontend and product engineering work where
            architecture, reliability, performance, and product quality
            genuinely matter.
          </p>
          <a className="contact-hero-action" href={externalLinks.email}>
            Start with an email <ArrowUpRight size={18} />
          </a>
        </div>

        <div
          className="contact-handoff"
          role="img"
          aria-label="A message moving from product context to a focused engineering conversation"
        >
          <header>
            <span>Conversation / useful context</span>
            <span>
              <i /> Signal open
            </span>
          </header>
          <div className="contact-handoff-track" aria-hidden="true">
            <i />
          </div>
          <div className="contact-handoff-stages">
            <article>
              <span>01 / Brief</span>
              <MessageSquareText size={27} />
              <strong>Product context</strong>
              <small>Intent received</small>
            </article>
            <article>
              <span>02 / Discuss</span>
              <Route size={27} />
              <strong>Real constraint</strong>
              <small>Pressure located</small>
            </article>
            <article>
              <span>03 / Decide</span>
              <Sparkles size={27} />
              <strong>Useful next step</strong>
              <small>Direction clear</small>
            </article>
          </div>
          <footer>One thoughtful message → one grounded conversation</footer>
        </div>
      </section>

      <section className="contact-surface contact-fit">
        <header className="contact-heading">
          <div>
            <p className="eyebrow">01 / Good conversations</p>
            <h2>Bring work with a real product constraint.</h2>
          </div>
          <p>
            I’m most useful when the interface and the system underneath it both
            need careful engineering judgment.
          </p>
        </header>
        <div className="contact-fit-layout">
          <ul>
            {goodFit.map((item) => (
              <li key={item}>
                <Check size={17} />
                {item}
              </li>
            ))}
          </ul>
          <aside>
            <span className="contact-mono-label">
              A strong fit usually includes
            </span>
            <strong>Ownership</strong>
            <i />
            <strong>Product pressure</strong>
            <i />
            <strong>Room to improve the system</strong>
          </aside>
        </div>
      </section>

      <section className="contact-surface contact-brief">
        <header className="contact-heading">
          <div>
            <p className="eyebrow">02 / A useful first message</p>
            <h2>Context is more helpful than a polished specification.</h2>
          </div>
          <p>
            You do not need to have the solution. A short description of the
            product, pressure, and desired outcome is enough to begin.
          </p>
        </header>
        <div className="contact-context-grid">
          {usefulContext.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-surface contact-channels">
        <header className="contact-heading">
          <div>
            <p className="eyebrow">03 / Choose a channel</p>
            <h2>Use the route that fits the conversation.</h2>
          </div>
          <p>
            Email is best for context. LinkedIn works well for an introduction.
            GitHub shows how I build and explain technical decisions.
          </p>
        </header>
        <div className="contact-channel-grid">
          <a
            href={externalLinks.email}
            className="contact-channel contact-channel-primary"
          >
            <span>
              <Mail size={25} /> Preferred
            </span>
            <strong>dmitriilobanov3@gmail.com</strong>
            <p>Send a role, project, or difficult engineering problem.</p>
            <ArrowUpRight size={20} />
          </a>
          <a
            href={externalLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-channel"
          >
            <span>
              <Share2 size={25} /> Introduction
            </span>
            <strong>Connect on LinkedIn</strong>
            <p>Start a professional conversation or share an opportunity.</p>
            <ArrowUpRight size={20} />
          </a>
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer"
            className="contact-channel"
          >
            <span>
              <Code2 size={25} /> Code
            </span>
            <strong>Explore GitHub</strong>
            <p>Review repositories, experiments, and implementation work.</p>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <section className="contact-closing">
        <div>
          <p className="eyebrow">04 / Before you write</p>
          <h2>Want more context first?</h2>
        </div>
        <nav aria-label="Explore before contacting">
          <Link href="/work">
            View selected work <ArrowRight size={17} />
          </Link>
          <Link href="/about">
            Read how I work <ArrowRight size={17} />
          </Link>
          <Link href="/thinking">
            Explore technical writing <ArrowRight size={17} />
          </Link>
        </nav>
      </section>
      <SiteFooter />
    </main>
  );
}
