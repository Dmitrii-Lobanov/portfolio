import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { articles, edgeCases } from "@/content/portfolio";
import { thinkingCopy } from "@/content/thinking-copy";

async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}

export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussian();
  return {
    title: russian
      ? "Инженерные заметки | Дмитрий Лобанов"
      : "Thinking in Public | Dmitrii Lobanov",
    description: russian
      ? "База знаний по фронтенду, разборы инцидентов и статьи об архитектуре."
      : "Engineering knowledge through a structured wiki, serialized system stories, and production-grounded essays.",
    alternates: {
      canonical: russian ? "/ru/thinking" : "/thinking",
      languages: { en: "/en/thinking", ru: "/ru/thinking" },
    },
  };
}

type ThinkingCopy = (typeof thinkingCopy)[keyof typeof thinkingCopy];

function WikiVisual({ copy }: { copy: ThinkingCopy }) {
  return (
    <div className="thinking-wiki-visual" aria-hidden="true">
      <span className="thinking-wiki-core">
        <small>{copy.connected}</small>
        <strong>{copy.mentalModel}</strong>
      </span>
      {[copy.browser, "React", copy.state, copy.systems].map((item) => (
        <i key={item}>
          <span>{item}</span>
        </i>
      ))}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M17 18 C31 18 34 45 49 51" />
        <path d="M83 18 C70 18 66 42 51 50" />
        <path d="M18 82 C31 82 37 60 49 51" />
        <path d="M83 82 C69 82 65 61 51 51" />
        <circle className="thinking-wiki-packet" r="1.35">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M17 18 C31 18 34 45 49 51 C66 42 70 18 83 18 C70 18 66 42 51 50 C65 61 69 82 83 82 C69 82 65 61 51 51 C37 60 31 82 18 82 C31 82 37 60 49 51 C34 45 31 18 17 18"
          />
        </circle>
      </svg>
    </div>
  );
}

function EdgeVisual({ copy }: { copy: ThinkingCopy }) {
  return (
    <div
      className="thinking-preview-surface thinking-edge-visual"
      aria-hidden="true"
    >
      <div>
        <span>{copy.incident}</span>
        <strong>{copy.duplicate}</strong>
      </div>
      <i />
      <i />
      <i />
      <i />
      <footer>
        <span>{copy.runtime}</span>
        <span>{copy.architecture}</span>
        <span>{copy.product}</span>
        <span>{copy.value}</span>
      </footer>
    </div>
  );
}

function EssayVisual({ copy }: { copy: ThinkingCopy }) {
  return (
    <div
      className="thinking-preview-surface thinking-essay-visual"
      aria-hidden="true"
    >
      <header>
        <i />
        <i />
        <i />
        <span>{copy.fieldNote}</span>
      </header>
      <div>
        <strong>{copy.requirements}</strong>
        <i />
        <i />
        <i />
        <i />
      </div>
      <footer>
        <span>{copy.pressure}</span>
        <i />
        <span>{copy.decision}</span>
        <i />
        <span>{copy.evidence}</span>
      </footer>
    </div>
  );
}

export default async function ThinkingPage() {
  const russian = await isRussian();
  const copy = thinkingCopy[russian ? "ru" : "en"];
  const routes = [
    [copy.build, copy.structured, "/thinking/knowledge-base"],
    [copy.mechanism, copy.serialized, "/thinking/edge-case-inc"],
    [copy.evaluate, copy.essay, "/thinking/articles"],
  ];

  return (
    <main className="route-main thinking-route-v2">
      <section className="thinking-hero-v2">
        <p className="eyebrow">{copy.eyebrow}</p>
        <div className="thinking-hero-layout">
          <div className="thinking-hero-copy">
            <h1>
              <span>{copy.heroFirst}</span>
              <br />
              {copy.heroSecond}
            </h1>
            <p>{copy.heroIntro}</p>
          </div>
          <div
            className="thinking-refinery"
            role="img"
            aria-label={copy.refineryLabel}
          >
            <header>
              <span>{copy.active}</span>
              <span>
                <i /> {copy.signal}
              </span>
            </header>
            <div className="thinking-refinery-stage">
              <div className="thinking-refinery-node thinking-refinery-input">
                <small>{copy.input}</small>
                <strong>{copy.question}</strong>
                <i />
                <i />
                <i />
              </div>
              <div className="thinking-refinery-node thinking-refinery-core">
                <span>{copy.engineering}</span>
                <strong>{copy.reasoning}</strong>
                <i />
              </div>
              <div className="thinking-refinery-node thinking-refinery-output">
                <small>{copy.output}</small>
                <strong>{copy.reusable}</strong>
                <i />
                <i />
                <i />
              </div>
              <b className="thinking-refinery-rail">
                <i />
              </b>
            </div>
            <footer>
              <span>{copy.observe}</span>
              <span>{copy.connect}</span>
              <span>{copy.explain}</span>
            </footer>
          </div>
        </div>
      </section>

      <section className="thinking-map-v2">
        <header className="thinking-heading-v2">
          <div>
            <p className="eyebrow">{copy.practice}</p>
            <h2>{copy.formats}</h2>
          </div>
          <p>{copy.formatsIntro}</p>
        </header>
        <div className="thinking-map-console">
          <div className="thinking-map-center">
            <small>{copy.engineering}</small>
            <strong>{copy.knowledge}</strong>
            <i />
          </div>
          <Link href="/thinking/knowledge-base">
            <i className="thinking-map-connector" aria-hidden="true" />
            <span>01</span>
            <strong>{copy.structuredLearning}</strong>
            <small>{copy.durableModels}</small>
          </Link>
          <Link href="/thinking/edge-case-inc">
            <i className="thinking-map-connector" aria-hidden="true" />
            <span>02</span>
            <strong>{copy.investigations}</strong>
            <small>{copy.mechanisms}</small>
          </Link>
          <Link href="/thinking/articles">
            <i className="thinking-map-connector" aria-hidden="true" />
            <span>03</span>
            <strong>{copy.essays}</strong>
            <small>{copy.decisions}</small>
          </Link>
        </div>
      </section>

      <section className="thinking-library-v2">
        <header className="thinking-heading-v2">
          <div>
            <p className="eyebrow">{copy.wikiEyebrow}</p>
            <h2>{copy.wikiTitle}</h2>
          </div>
          <p>{copy.wikiIntro}</p>
        </header>
        <Link
          href="/thinking/knowledge-base"
          className="thinking-format-card thinking-format-featured"
        >
          <div className="thinking-format-copy">
            <span>Frontend Engineering Wiki</span>
            <h3>{copy.wikiHeadline}</h3>
            <p>{copy.wikiDescription}</p>
            <div className="thinking-format-metrics">
              <strong>
                10 <small>{copy.chapters}</small>
              </strong>
              <strong>
                224 <small>{copy.answers}</small>
              </strong>
              <strong>
                12 <small>{copy.tracks}</small>
              </strong>
            </div>
            <b>
              {copy.exploreWiki} <ArrowRight size={16} />
            </b>
          </div>
          <WikiVisual copy={copy} />
          <footer>
            <span>{copy.understand}</span>
            <span>{copy.explain}</span>
            <span>{copy.recall}</span>
            <span>{copy.apply}</span>
          </footer>
        </Link>

        <header className="thinking-heading-v2 thinking-supporting-heading">
          <div>
            <p className="eyebrow">{copy.context}</p>
            <h2>{copy.contextTitle}</h2>
          </div>
          <p>{copy.contextIntro}</p>
        </header>
        <div className="thinking-supporting-grid">
          <Link href="/thinking/edge-case-inc" className="thinking-format-card">
            <EdgeVisual copy={copy} />
            <div className="thinking-format-copy">
              <span>{copy.edgeLabel}</span>
              <h3>Edge Case Inc.</h3>
              <p>{copy.edgeDescription}</p>
              <strong>
                {edgeCases.length} {copy.published}
              </strong>
              <b>
                {copy.edgeAction} <ArrowRight size={16} />
              </b>
            </div>
          </Link>
          <Link href="/thinking/articles" className="thinking-format-card">
            <EssayVisual copy={copy} />
            <div className="thinking-format-copy">
              <span>{copy.notesLabel}</span>
              <h3>{copy.notesTitle}</h3>
              <p>{copy.notesDescription}</p>
              <strong>
                {articles.length} {copy.selected}
              </strong>
              <b>
                {copy.notesAction} <ArrowRight size={16} />
              </b>
            </div>
          </Link>
        </div>
      </section>

      <section className="thinking-route-guide">
        <div>
          <p className="eyebrow">{copy.choose}</p>
          <h2>{copy.chooseTitle}</h2>
        </div>
        <div className="thinking-route-list">
          {routes.map(([need, destination, href], index) => (
            <Link href={href} key={need}>
              <span>0{index + 1}</span>
              <strong>{need}</strong>
              <small>{destination}</small>
              <ArrowRight size={17} />
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
