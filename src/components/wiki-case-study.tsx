import { ArrowRight } from "lucide-react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";

import * as english from "@/content/case-studies/wiki";
import { wikiCopy, wikiRussian } from "@/content/case-studies/wiki.ru";

const learningVisualMarkers = ["one", "two", "three", "four", "five"];
const evidenceVisualMarkers = ["one", "two", "three", "four", "five", "six"];

export function WikiCaseStudy({ russian = false }: { russian?: boolean }) {
  const { architecture, editorialDecisions, evidence, learningModes } = russian
    ? wikiRussian
    : english;
  const copy = wikiCopy[russian ? "ru" : "en"];
  return (
    <>
      <section className="wiki-section wiki-problem">
        <div className="wiki-problem-copy">
          <p className="eyebrow">{copy.problem}</p>
          <h2>{copy.problemTitle}</h2>
          <p>{copy.problemIntro}</p>
        </div>
        <div
          className="wiki-connection-map"
          role="img"
          aria-label={copy.mapLabel}
        >
          <header>
            <span>{copy.mapTitle}</span>
            <span>
              <i /> {copy.linking}
            </span>
          </header>
          <svg viewBox="0 0 640 330" aria-hidden="true">
            <defs>
              <linearGradient id="wiki-signal" x1="0" x2="1">
                <stop offset="0" stopColor="#35bec9" />
                <stop offset="1" stopColor="#ef6b3f" />
              </linearGradient>
            </defs>
            <path id="wiki-route-docs" d="M126 78 C220 78 214 165 306 165" />
            <path
              id="wiki-route-interviews"
              d="M126 252 C220 252 214 165 306 165"
            />
            <path
              id="wiki-route-articles"
              d="M514 78 C420 78 426 165 334 165"
            />
            <path
              id="wiki-route-courses"
              d="M514 252 C420 252 426 165 334 165"
            />
            {[
              ["#wiki-route-docs", "0s"],
              ["#wiki-route-articles", "-1.2s"],
              ["#wiki-route-interviews", "-2.4s"],
              ["#wiki-route-courses", "-3.6s"],
            ].map(([route, begin]) => (
              <circle className="wiki-map-packet" r="5" key={route}>
                <animateMotion
                  dur="4.8s"
                  begin={begin}
                  repeatCount="indefinite"
                >
                  <mpath href={route} />
                </animateMotion>
              </circle>
            ))}
          </svg>
          <span className="wiki-map-node wiki-map-source wiki-map-docs">
            <b aria-hidden="true">{`{ }`}</b>
            {copy.docs}
            <small>{copy.source}</small>
          </span>
          <span className="wiki-map-node wiki-map-source wiki-map-articles">
            <b aria-hidden="true">Aa</b>
            {copy.articles}
            <small>{copy.context}</small>
          </span>
          <span className="wiki-map-node wiki-map-source wiki-map-interviews">
            <b aria-hidden="true">?</b>
            {copy.interviews}
            <small>{copy.recall}</small>
          </span>
          <span className="wiki-map-node wiki-map-source wiki-map-courses">
            <b aria-hidden="true">▶</b>
            {copy.courses}
            <small>{copy.guided}</small>
          </span>
          <div className="wiki-map-node wiki-map-core">
            <small>{copy.connected}</small>
            <strong>{copy.mentalModel}</strong>
          </div>
          <footer>
            <span>{copy.understand}</span>
            <i />
            <span>{copy.explain}</span>
            <i />
            <span>{copy.apply}</span>
          </footer>
        </div>
      </section>

      <section className="wiki-section wiki-learning">
        <header>
          <p className="eyebrow">{copy.learning}</p>
          <h2>{copy.learningTitle}</h2>
          <p>{copy.learningIntro}</p>
        </header>
        <div
          className="wiki-learning-loop"
          aria-label={copy.learningLabel}
          role="img"
        >
          {learningModes.map(([index, title, copy], modeIndex) => (
            <div className="wiki-learning-step" key={title}>
              <article>
                <small>{index}</small>
                <div
                  className={`wiki-learning-visual wiki-learning-visual-${modeIndex + 1}`}
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
              {modeIndex < learningModes.length - 1 && (
                <ArrowRight aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="wiki-section wiki-architecture">
        <CaseStudySectionHeading
          eyebrow={copy.architecture}
          title={copy.architectureTitle}
          description={copy.architectureIntro}
        />
        <div className="wiki-architecture-grid">
          {architecture.map(([label, title, copy], index) => (
            <article key={title}>
              <span>
                0{index + 1} / {label}
              </span>
              <div
                className={`wiki-architecture-visual architecture-visual-${index + 1}`}
                aria-hidden="true"
              >
                {learningVisualMarkers
                  .slice(0, index === 1 ? 5 : 4)
                  .map((marker) => (
                    <i key={`${label}-visual-${marker}`} />
                  ))}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wiki-section wiki-editorial">
        <header>
          <p className="eyebrow">{copy.editorial}</p>
          <h2>{copy.editorialTitle}</h2>
        </header>
        <div className="wiki-editorial-grid">
          {editorialDecisions.map(
            ([title, constraint, decision, result], index) => (
              <article key={title}>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <dl>
                  <div>
                    <dt>{copy.pressure}</dt>
                    <dd>{constraint}</dd>
                  </div>
                  <div>
                    <dt>{copy.decision}</dt>
                    <dd>{decision}</dd>
                  </div>
                </dl>
                <footer>
                  <i />
                  {result}
                </footer>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="wiki-section wiki-evidence">
        <div className="wiki-evidence-head">
          <p className="eyebrow">{copy.evidence}</p>
          <h2>{copy.evidenceTitle}</h2>
        </div>
        <div className="wiki-evidence-grid">
          {evidence.map(([number, label, description], index) => (
            <article
              className={`wiki-evidence-card visual-${index + 1}`}
              data-value={number}
              key={label}
            >
              <strong>{number}</strong>
              <span>{label}</span>
              <p>{description}</p>
              <div
                className="wiki-evidence-visual"
                data-label={copy.evidenceLabels[index]}
                aria-hidden="true"
              >
                <em>{copy.evidenceLabels[index]}</em>
                {evidenceVisualMarkers.map((marker) => (
                  <i key={`${label}-${marker}`} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
