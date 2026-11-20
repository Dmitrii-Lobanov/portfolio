import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import {
  edgePath,
  edgeRussian,
  indexCopy,
  russianCharacters,
} from "@/content/edge-case-copy";
import { edgeCases } from "@/content/portfolio";
import "@/styles/articles.css";
import "@/styles/edge-case-index.css";

async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}
export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussian();
  return {
    title: russian
      ? "Edge Case Inc. | Дмитрий Лобанов"
      : "Edge Case Inc. | Dmitrii Lobanov",
    description: russian
      ? "Визуальные расследования инженерных инцидентов: от работы кода до последствий для продукта."
      : "Visual engineering investigations: follow unexpected behavior through runtime ownership, user workflows, and business consequences.",
    alternates: {
      canonical: russian ? `/ru${edgePath}` : edgePath,
      languages: { en: `/en${edgePath}`, ru: `/ru${edgePath}` },
    },
  };
}
const characters = [
  [
    "Fox",
    "Runtime behavior",
    "What actually ran?",
    "Traces listeners, cleanup, and reconnection before naming the cause.",
  ],
  [
    "Bear",
    "System boundaries",
    "Who owns the lifecycle?",
    "Looks for the boundary that can enforce one active subscription.",
  ],
  [
    "Rabbit",
    "User workflows",
    "What did the person experience?",
    "Follows duplicate effects into notifications, task state, and decisions.",
  ],
  [
    "Hedgehog",
    "Evidence & value",
    "What can we prove?",
    "Tests the explanation against observable behavior and its consequences for trust.",
  ],
  [
    "Owl",
    "AI & automation",
    "What changes when we automate?",
    "Joins investigations where AI changes the mechanism or the responsibility.",
  ],
];
export default async function EdgeCaseIndexPage() {
  const russian = await isRussian();
  const copy = indexCopy[russian ? "ru" : "en"];
  const prefix = russian ? "/ru" : "/en";
  const opening = edgeCases[0];
  return (
    <main className="route-main essays-page investigations-page">
      <section className="essays-hero">
        <div className="essays-hero-copy" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.first}
            <br />
            {copy.last}
          </h1>
          <p>{copy.intro}</p>
          <div className="essays-actions">
            {opening && (
              <Link
                className="button-tactile essays-primary"
                href={`${prefix}${edgePath}/${opening.slug}`}
              >
                {copy.open} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
            <a className="route-link" href="#investigation-team">
              {copy.meet} <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="essays-instrument"
          data-reveal
          role="img"
          aria-label={copy.diagram}
        >
          <div className="essays-instrument-label">
            <span>{copy.trace}</span>
            <span>{copy.observe}</span>
          </div>
          <div className="essays-pressure investigation-input">
            <span>{copy.input}</span>
            <strong>{copy.event}</strong>
            <div className="essays-contexts">
              <span>{copy.reconnect}</span>
            </div>
          </div>
          <div className="investigation-rails" aria-hidden="true">
            <div>
              <i />
            </div>
            <div>
              <i />
            </div>
          </div>
          <div className="investigation-listeners">
            <span>{copy.listenerA}</span>
            <span>{copy.listenerB}</span>
          </div>
          <div className="investigation-result">
            <span>{copy.symptom}</span>
            <strong>{copy.effects}</strong>
            <p>{copy.question}</p>
          </div>
          <p className="essays-instrument-foot">{copy.foot}</p>
        </div>
      </section>
      <section className="essays-orientation" aria-label={copy.series}>
        <div>
          <strong>{edgeCases.length.toString().padStart(2, "0")}</strong>
          <span>
            {russian
              ? edgeCases.length === 1
                ? "открытое дело"
                : "открытые дела"
              : edgeCases.length === 1
                ? "open case"
                : "open cases"}
          </span>
        </div>
        <p>{copy.perspectives}</p>
        <span>{copy.fictional}</span>
      </section>
      <section
        className="essays-reading"
        aria-labelledby="investigation-directory-title"
      >
        <div className="essays-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.directory}</p>
            <h2 id="investigation-directory-title">{copy.directoryTitle}</h2>
          </div>
          <p>{copy.directoryIntro}</p>
        </div>
        {edgeCases
          .map((entry) =>
            russian && entry.slug === edgeRussian.slug
              ? { ...entry, ...edgeRussian }
              : entry,
          )
          .map((item) => (
            <article className="investigation-case" key={item.slug} data-reveal>
              <div className="investigation-case-summary">
                <div className="essay-card-meta">
                  <span>{item.number}</span>
                  <small>{item.status}</small>
                </div>
                <p className="essay-card-tag">{item.mechanism}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link
                  className="route-link"
                  href={`${prefix}${edgePath}/${item.slug}`}
                >
                  {copy.follow} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className="investigation-case-route">
                <p className="eyebrow">{copy.what}</p>
                <ol>
                  {item.lenses.map((lens) => (
                    <li key={lens.name}>
                      <span>{lens.name}</span>
                      <strong>{lens.role}</strong>
                      <p>{lens.copy}</p>
                    </li>
                  ))}
                </ol>
                <a
                  className="route-link"
                  href={item.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.linkedin} <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
      </section>
      <section
        className="essays-reading"
        id="investigation-team"
        aria-labelledby="investigation-team-title"
      >
        <div className="essays-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.team}</p>
            <h2 id="investigation-team-title">
              {copy.teamFirst}
              <br />
              {copy.teamLast}
            </h2>
          </div>
          <p>{copy.teamIntro}</p>
        </div>
        <div className="investigation-team">
          {(russian ? russianCharacters : characters).map(
            ([name, focus, question, copy], index) => (
              <article key={name} data-reveal>
                <span
                  className="investigation-character-mark"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <p className="essay-card-tag">{focus}</p>
                <h3>{name}</h3>
                <strong>{question}</strong>
                <p>{copy}</p>
              </article>
            ),
          )}
        </div>
      </section>
      <section className="essays-context" data-reveal>
        <div>
          <p className="eyebrow">{copy.context}</p>
          <h2>
            {copy.contextFirst}
            <br />
            {copy.contextLast}
          </h2>
          <p>{copy.contextIntro}</p>
        </div>
        <nav aria-label={copy.related}>
          <Link className="route-link" href={`${prefix}/thinking/articles`}>
            {copy.articles} <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            className="route-link"
            href={`${prefix}/thinking/knowledge-base`}
          >
            {copy.wiki} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </section>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
