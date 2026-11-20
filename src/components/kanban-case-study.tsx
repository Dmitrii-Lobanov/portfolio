import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";

import * as english from "@/content/case-studies/kanban";
import { kanbanCopy, kanbanRussian } from "@/content/case-studies/kanban.ru";

export function KanbanCaseStudy({ russian = false }: { russian?: boolean }) {
  const { decisions, delivery, guarantees } = russian ? kanbanRussian : english;
  const copy = kanbanCopy[russian ? "ru" : "en"];
  return (
    <>
      <section className="kanban-story">
        <div className="kanban-story-copy">
          <p className="eyebrow">{copy.tension}</p>
          <h2>
            {copy.title}
            <span> {copy.subtitle}</span>
          </h2>
          <p>{copy.intro}</p>
        </div>

        <div
          className="kanban-guarantee-panel"
          role="img"
          aria-label={copy.lifecycle}
        >
          <div className="kanban-panel-label kanban-panel-head">
            <span>{copy.loop}</span>
            <span>
              <i /> {copy.observing}
            </span>
          </div>
          <div className="kanban-guarantee-flow">
            {guarantees.map((guarantee, index) => (
              <div className="kanban-guarantee-step" key={guarantee.title}>
                <article>
                  <small>{guarantee.number}</small>
                  <strong>{guarantee.title}</strong>
                  <p>{guarantee.copy}</p>
                </article>
                {index < guarantees.length - 1 && (
                  <ArrowRight aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="kanban-panel-label kanban-loop-result">
            <span>{copy.intent}</span>
            <b />
            <span>{copy.durable}</span>
          </div>
        </div>
      </section>

      <section className="kanban-decisions">
        <CaseStudySectionHeading
          eyebrow={copy.decisions}
          title={copy.decisionTitle}
          description={copy.decisionDescription}
        />
        <div className="kanban-decision-grid">
          {decisions.map((decision, index) => (
            <article key={decision.title}>
              <header>
                <span>0{index + 1}</span>
                <small>{decision.signal}</small>
              </header>
              <h3>{decision.title}</h3>
              <p>{decision.copy}</p>
              <footer>
                <i /> {decision.result}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="kanban-delivery">
        <div>
          <p className="eyebrow">{copy.production}</p>
          <h2>{copy.productionTitle}</h2>
          <p>{copy.repo}</p>
          <p>{copy.scenario}</p>
          <p>{copy.tests}</p>
        </div>
        <div
          className="kanban-production-visual"
          aria-label={copy.layers}
          role="img"
        >
          <div className="kanban-production-orbit orbit-one" />
          <div className="kanban-production-orbit orbit-two" />
          <div className="kanban-production-spine" />
          <div className="kanban-production-packet" />
          <div className="kanban-production-layers">
            {delivery.map(([label, value], index) => (
              <article
                className="kanban-production-layer"
                key={label}
                style={{ "--delivery-index": index } as CSSProperties}
              >
                <span>{label}</span>
                <strong>{value}</strong>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="kanban-production-status" aria-hidden="true">
            <span>{copy.commit}</span>
            <b />
            <span>{copy.verified}</span>
            <b />
            <span>{copy.deployed}</span>
          </div>
        </div>
      </section>
    </>
  );
}
