import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  ListChecks,
  MessageSquareText,
} from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { knowledgeTracks, learningModes } from "@/content/knowledge-base";
import {
  kbCopy,
  modeRussian,
  statusRussian,
  trackRussian,
} from "@/content/knowledge-base.ru";
import { externalLinks } from "@/content/portfolio";
import "@/styles/knowledge-base.css";

async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}

export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussian();
  return {
    title: russian
      ? "Frontend Engineering Wiki | Дмитрий Лобанов"
      : "Frontend Engineering Wiki | Dmitrii Lobanov",
    description: russian
      ? "Руководства, вопросы для собеседований и планы развития базы знаний по фронтенду."
      : "Connected frontend handbooks and interview Q&A, with a growing roadmap for references and deliberate practice.",
    alternates: {
      canonical: russian
        ? "/ru/thinking/knowledge-base"
        : "/thinking/knowledge-base",
      languages: {
        en: "/en/thinking/knowledge-base",
        ru: "/ru/thinking/knowledge-base",
      },
    },
  };
}

const modeIcons = [BookOpen, MessageSquareText, ListChecks, Code2];

export default async function KnowledgeBasePage() {
  const russian = await isRussian();
  const copy = kbCopy[russian ? "ru" : "en"];
  return (
    <main className="route-main kb-page">
      <section className="kb-hero">
        <div className="kb-hero-copy" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            {copy.titleStart} <span>{copy.titleEnd}</span>
          </h1>
          <p>{copy.intro}</p>
          <div className="kb-actions">
            <a
              className="button-tactile kb-primary"
              href={externalLinks.wiki}
              target="_blank"
              rel="noreferrer"
            >
              {copy.open} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link
              className="route-link"
              href={
                russian
                  ? "/ru/work/frontend-engineering-wiki"
                  : "/en/work/frontend-engineering-wiki"
              }
            >
              {copy.caseStudy} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div
          className="kb-instrument"
          data-depth-stage
          data-reveal
          role="img"
          aria-label={copy.instrumentLabel}
        >
          <div className="kb-instrument-head">
            <span>{copy.instrumentTitle}</span>
            <span>JS · 06</span>
          </div>
          <div className="kb-concept" data-depth="0.12">
            <span>{copy.start}</span>
            <strong>{copy.closures}</strong>
            <p>
              {copy.returns}
              <br />
              {copy.binding}
            </p>
            <div className="kb-binding">
              <code>count</code>
              <i aria-hidden="true" />
              <code>next()</code>
            </div>
          </div>
          <div className="kb-signal" aria-hidden="true">
            <i />
          </div>
          <div className="kb-output" data-depth="0.2">
            <span>{copy.carry}</span>
            <strong>
              {copy.access}
              <br />
              {copy.frozen}
            </strong>
            <div className="kb-output-tags">
              <span>{copy.scope}</span>
              <span>{copy.callbacks}</span>
              <span>{copy.state}</span>
            </div>
          </div>
          <div className="kb-instrument-foot">
            <span>{copy.understand}</span>
            <span>{copy.explain}</span>
          </div>
        </div>
      </section>

      <section className="kb-evidence" aria-label={copy.coverage} data-reveal>
        <div>
          <strong>10</strong>
          <span>{copy.chapters}</span>
        </div>
        <div>
          <strong>224</strong>
          <span>{copy.answers}</span>
        </div>
        <div>
          <strong>{knowledgeTracks.length}</strong>
          <span>{copy.tracks}</span>
        </div>
        <p>
          {copy.growing}
          <br />
          {copy.availability}
        </p>
      </section>

      <section className="kb-modes" aria-labelledby="kb-modes-title">
        <header className="kb-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.modes}</p>
            <h2>
              {copy.deeper}
              <br />
              {copy.useful}
            </h2>
          </div>
          <p>{copy.modesIntro}</p>
        </header>
        <div className="kb-mode-grid">
          {learningModes.map((mode, index) => {
            const Icon = modeIcons[index];
            const text = russian ? modeRussian[mode.name] : mode;
            return (
              <article
                className={`kb-mode${mode.status === "Roadmap" ? " kb-mode-planned" : ""}`}
                key={text.name}
                data-reveal
              >
                <div className="kb-mode-top">
                  <span>
                    {mode.number} / {text.name}
                  </span>
                  <small>
                    {russian ? statusRussian[mode.status] : mode.status}
                  </small>
                </div>
                <Icon size={25} aria-hidden="true" />
                <h3>{text.title}</h3>
                <p>{text.copy}</p>
                <a
                  className="route-link"
                  href={`${externalLinks.wiki.replace(/\/$/, "")}/${mode.path}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.action}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
        <div className="kb-example" data-reveal>
          <div>
            <span className="eyebrow">{copy.example}</span>
            <h3>{copy.exampleTitle}</h3>
            <p>
              {russian ? (
                <>
                  Что вернёт каждый вызов? Объясните, почему значение меняется
                  после завершения <code>makeCounter</code>.
                </>
              ) : (
                <>
                  What does each call return? Explain why the value changes even
                  though <code>makeCounter</code> has finished.
                </>
              )}
            </p>
          </div>
          <div>
            <pre>
              <code>{`function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nnext(); // ?\nnext(); // ?`}</code>
            </pre>
            <details className="kb-answer">
              <summary>
                {copy.reasoning} <ArrowRight size={15} aria-hidden="true" />
              </summary>
              <p>
                {russian ? (
                  <>
                    Вызовы вернут <strong>1</strong> и <strong>2</strong>. Оба
                    используют одну и ту же переменную <code>count</code> из
                    замыкания. После завершения <code>makeCounter</code> она
                    остаётся доступна функции <code>next</code>.
                  </>
                ) : (
                  <>
                    The calls return <strong>1</strong> and <strong>2</strong>.
                    Both use the same captured <code>count</code> binding.
                    Returning from <code>makeCounter</code> does not remove that
                    binding while <code>next</code> still retains access to it.
                  </>
                )}
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="kb-tracks" aria-labelledby="kb-tracks-title">
        <header className="kb-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.entry}</p>
            <h2>
              {copy.question}
              <br />
              {copy.path}
            </h2>
          </div>
          <p>{copy.tracksIntro}</p>
        </header>
        <div className="kb-track-grid">
          {knowledgeTracks.map((track, index) => (
            <a
              className="kb-track"
              href={`${externalLinks.wiki.replace(/\/$/, "")}/${track.path}`}
              key={track.path}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              <div className="kb-track-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small
                  className={
                    track.status === "Available" || track.status === "Expanding"
                      ? "kb-status-active"
                      : undefined
                  }
                >
                  {russian ? statusRussian[track.status] : track.status}
                </small>
              </div>
              <h3>{russian ? trackRussian[track.path].name : track.name}</h3>
              <p>{russian ? trackRussian[track.path].copy : track.copy}</p>
              <span className="kb-track-action">
                {track.status.startsWith("Phase")
                  ? russian
                    ? "Смотреть план"
                    : "Explore the roadmap"
                  : russian
                    ? "Открыть маршрут"
                    : "Explore the track"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <div className="kb-closing" data-reveal>
        <p>
          {copy.closing}
          <br />
          <strong>{copy.connections}</strong>
        </p>
        <a
          className="button-tactile kb-primary"
          href={`${externalLinks.wiki.replace(/\/$/, "")}/javascript/handbook`}
          target="_blank"
          rel="noreferrer"
        >
          {copy.startJS}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
