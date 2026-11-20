import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Layers,
  ScanLine,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { articlesCopy, essaysRussian } from "@/content/articles-copy";
import { articles, externalLinks } from "@/content/portfolio";
import "@/styles/articles.css";

async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}

export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussian();
  return {
    title: russian
      ? "Инженерные заметки | Дмитрий Лобанов"
      : "Engineering Field Notes | Dmitrii Lobanov",
    description: russian
      ? "Статьи о производительности React, продуктовых сценариях и архитектуре фронтенда."
      : "Production field notes on React performance, product workflows, system boundaries, and frontend architecture.",
    alternates: {
      canonical: russian ? "/ru/thinking/articles" : "/thinking/articles",
      languages: { en: "/en/thinking/articles", ru: "/ru/thinking/articles" },
    },
  };
}

function getEssay(index: string) {
  const article = articles.find((item) => item.index === index);
  if (!article) throw new Error(`Missing selected essay: ${index}`);
  return article;
}

export default async function ArticlesPage() {
  const russian = await isRussian();
  const copy = articlesCopy[russian ? "ru" : "en"];
  const readingLenses = [
    {
      index: "04",
      question: copy.slow,
      takeaway: copy.slowText,
      icon: Gauge,
      label: copy.measure,
    },
    {
      index: "03",
      question: copy.shape,
      takeaway: copy.shapeText,
      icon: ScanLine,
      label: copy.question,
    },
    {
      index: "02",
      question: copy.workflow,
      takeaway: copy.workflowText,
      icon: Workflow,
      label: copy.follow,
    },
    {
      index: "01",
      question: copy.responsibility,
      takeaway: copy.responsibilityText,
      icon: Layers,
      label: copy.inspect,
    },
  ] as const;

  const firstEssay = getEssay("04");
  return (
    <main className="route-main essays-page">
      <section className="essays-hero">
        <div className="essays-hero-copy" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.titleFirst}
            <br />
            {copy.titleLast}
          </h1>
          <p>{copy.intro}</p>
          <div className="essays-actions">
            <a
              className="button-tactile essays-primary"
              href={firstEssay.href}
              target="_blank"
              rel="noreferrer"
            >
              {copy.start} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="route-link"
              href={externalLinks.medium}
              target="_blank"
              rel="noreferrer"
            >
              {copy.medium} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="essays-instrument"
          data-reveal
          data-depth-stage
          role="img"
          aria-label={copy.instrument}
        >
          <div className="essays-instrument-label">
            <span>{copy.instrumentTitle}</span>
            <span>{copy.observe}</span>
          </div>
          <div className="essays-pressure" data-depth="0.12">
            <span>{copy.observeTitle}</span>
            <strong>
              {copy.manager}
              <br />
              {copy.partners}
            </strong>
            <div className="essays-contexts">
              <span>{copy.tabA}</span>
              <span>{copy.tabB}</span>
            </div>
          </div>
          <div className="essays-rail" aria-hidden="true">
            <i />
          </div>
          <div className="essays-note" data-depth="0.2">
            <span>{copy.ownership}</span>
            <strong>
              {copy.identityFirst}
              <br />
              {copy.identityLast}
            </strong>
            <div className="essays-note-rule">
              <span>{copy.decision}</span>
              <p>{copy.decisionText}</p>
            </div>
            <div className="essays-note-rule">
              <span>{copy.tradeoff}</span>
              <p>{copy.tradeoffText}</p>
            </div>
          </div>
          <p className="essays-instrument-foot">{copy.instrumentFoot}</p>
        </div>
      </section>
      <div className="essays-orientation" data-reveal>
        <div>
          <strong>{articles.length}</strong>
          <span>{copy.selected}</span>
        </div>
        <p>{copy.orientation}</p>
        <span>
          {copy.published} <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
      <section
        className="essays-reading"
        aria-labelledby="essays-reading-title"
      >
        <header className="essays-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.choose}</p>
            <h2 id="essays-reading-title">{copy.readingTitle}</h2>
          </div>
          <p>{copy.readingIntro}</p>
        </header>
        <div className="essays-grid">
          {readingLenses.map(
            ({ index, question, takeaway, icon: Icon, label }, position) => {
              const article = getEssay(index);
              const text = russian ? essaysRussian[index] : article;
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
                    <small>{text.readTime}</small>
                  </div>
                  <div className="essay-card-lens">
                    <Icon size={26} aria-hidden="true" />
                    <p>{question}</p>
                  </div>
                  <span className="essay-card-tag">{text.tag}</span>
                  <h3>{text.title}</h3>
                  <p className="essay-card-description">{text.description}</p>
                  <div className="essay-card-takeaway">
                    <span>{copy.useful}</span>
                    <p>{takeaway}</p>
                  </div>
                  <a
                    className="route-link"
                    href={article.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.read} <ArrowUpRight size={16} aria-hidden="true" />
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
          <p className="eyebrow">{copy.context}</p>
          <h2 id="essays-context-title">
            {copy.contextFirst}
            <br />
            {copy.contextLast}
          </h2>
          <p>{copy.contextIntro}</p>
        </div>
        <nav aria-label={copy.nav}>
          <Link
            className="route-link"
            href={russian ? "/ru/work/cpa-platform" : "/en/work/cpa-platform"}
          >
            <span>{copy.tinkoff}</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link
            className="route-link"
            href={
              russian
                ? "/ru/thinking/knowledge-base"
                : "/en/thinking/knowledge-base"
            }
          >
            <span>{copy.wiki}</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </nav>
      </section>
      <div className="essays-closing" data-reveal>
        <p>
          {copy.closing}
          <br />
          <strong>{copy.closingStrong}</strong>
        </p>
        <a
          className="button-tactile essays-primary"
          href={externalLinks.medium}
          target="_blank"
          rel="noreferrer"
        >
          {copy.browse}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
