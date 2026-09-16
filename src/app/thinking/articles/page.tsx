import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  ScanLine,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { articles, externalLinks } from "@/content/portfolio";
import "@/styles/articles.css";

export const metadata: Metadata = {
  title: "Architecture Essays | Dmitrii Lobanov",
  description:
    "Production field notes on product workflows, system boundaries, and the requirements that shape frontend architecture.",
};

const readingLenses = [
  {
    index: "03",
    question: "What should shape the architecture?",
    takeaway:
      "You need to assess whether a proposed architecture answers an actual product requirement.",
    icon: ScanLine,
    label: "Start with the question",
  },
  {
    index: "02",
    question: "What makes the workflow complex?",
    takeaway:
      "A feature crosses roles, permissions, and several connected product surfaces.",
    icon: Workflow,
    label: "Follow the product",
  },
  {
    index: "01",
    question: "Where do the responsibilities belong?",
    takeaway:
      "You need to reason about identity and state ownership across a frontend platform.",
    icon: Layers,
    label: "Inspect the system",
  },
] as const;

function getEssay(index: string) {
  const article = articles.find((item) => item.index === index);
  if (!article) throw new Error(`Missing selected essay: ${index}`);
  return article;
}

export default function ArticlesPage() {
  const firstEssay = getEssay("03");
  return (
    <main className="route-main essays-page">
      <section className="essays-hero">
        <div className="essays-hero-copy" data-reveal>
          <p className="eyebrow">Thinking / Architecture essays</p>
          <h1>
            The decisions
            <br />
            behind the system.
          </h1>
          <p>
            Field notes on how product pressure becomes frontend architecture.
            Follow the workflows, ownership boundaries, and trade-offs behind
            the implementation.
          </p>
          <div className="essays-actions">
            <a
              className="button-tactile essays-primary"
              href={firstEssay.href}
              target="_blank"
              rel="noreferrer"
            >
              Start with requirements{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="route-link"
              href={externalLinks.medium}
              target="_blank"
              rel="noreferrer"
            >
              All writing on Medium{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="essays-instrument"
          data-reveal
          data-depth-stage
          role="img"
          aria-label="A product constraint becomes an explicit ownership decision, with its trade-off recorded alongside it."
        >
          <div className="essays-instrument-label">
            <span>Field note / trace the reasoning</span>
            <span>Pressure → decision</span>
          </div>
          <div className="essays-pressure" data-depth="0.12">
            <span>01 / Observe the product</span>
            <strong>
              One manager.
              <br />
              Several partner contexts.
            </strong>
            <div className="essays-contexts">
              <span>Tab A · Partner A</span>
              <span>Tab B · Partner B</span>
            </div>
          </div>
          <div className="essays-rail" aria-hidden="true">
            <i />
          </div>
          <div className="essays-note" data-depth="0.2">
            <span>02 / Make ownership explicit</span>
            <strong>
              Identity belongs
              <br />
              to the request context.
            </strong>
            <div className="essays-note-rule">
              <span>Decision</span>
              <p>Keep each tab’s partner context separate.</p>
            </div>
            <div className="essays-note-rule">
              <span>Trade-off</span>
              <p>Resolve identity deliberately at the boundary.</p>
            </div>
          </div>
          <p className="essays-instrument-foot">
            A constraint. A mechanism. A consequence.
          </p>
        </div>
      </section>
      <div className="essays-orientation" data-reveal>
        <div>
          <strong>{articles.length}</strong>
          <span>selected essays</span>
        </div>
        <p>
          Three ways into the same engineering practice: start with the
          requirement, follow the product, then inspect the system.
        </p>
        <span>
          Published on Medium <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
      <section
        className="essays-reading"
        aria-labelledby="essays-reading-title"
      >
        <header className="essays-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / Choose the question</p>
            <h2 id="essays-reading-title">Read for the reasoning.</h2>
          </div>
          <p>
            Each essay takes a different view of the work. Choose the question
            closest to your own product; the short requirements essay is a
            useful starting point.
          </p>
        </header>
        <div className="essays-grid">
          {readingLenses.map(
            ({ index, question, takeaway, icon: Icon, label }, position) => {
              const article = getEssay(index);
              return (
                <article
                  className={`essay-card${position === 0 ? " essay-card-start" : ""}`}
                  key={index}
                  data-reveal
                >
                  <div className="essay-card-meta">
                    <span>
                      {String(position + 1).padStart(2, "0")} / {label}
                    </span>
                    <small>{article.readTime}</small>
                  </div>
                  <div className="essay-card-lens">
                    <Icon size={26} aria-hidden="true" />
                    <p>{question}</p>
                  </div>
                  <span className="essay-card-tag">{article.tag}</span>
                  <h3>{article.title}</h3>
                  <p className="essay-card-description">
                    {article.description}
                  </p>
                  <div className="essay-card-takeaway">
                    <span>Useful when</span>
                    <p>{takeaway}</p>
                  </div>
                  <a
                    className="route-link"
                    href={article.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read the essay <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              );
            },
          )}
        </div>
      </section>
      <section
        className="essays-context"
        aria-labelledby="essays-context-title"
        data-reveal
      >
        <div>
          <p className="eyebrow">02 / Keep the context connected</p>
          <h2 id="essays-context-title">
            From field notes
            <br />
            to working knowledge.
          </h2>
          <p>
            See the production system behind the essays, or use the Wiki to
            explore the frontend concepts underneath the decisions.
          </p>
        </div>
        <nav aria-label="Related engineering work">
          <Link className="route-link" href="/work/cpa-platform">
            <span>Explore the CPA case study</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="route-link" href="/thinking/knowledge-base">
            <span>Explore the Engineering Wiki</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </nav>
      </section>
      <div className="essays-closing" data-reveal>
        <p>
          Follow the constraint.
          <br />
          <strong>Understand the choice.</strong>
        </p>
        <a
          className="button-tactile essays-primary"
          href={externalLinks.medium}
          target="_blank"
          rel="noreferrer"
        >
          Browse all writing
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <SiteFooter />
    </main>
  );
}
