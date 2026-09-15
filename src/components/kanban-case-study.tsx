import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";

import { guarantees, decisions, delivery } from "@/content/case-studies/kanban";

export function KanbanCaseStudy() {
  return (
    <>
      <section className="kanban-story">
        <div className="kanban-story-copy">
          <p className="eyebrow">01 / Product tension</p>
          <h2>
            Moving a card is easy.
            <span> Keeping the move trustworthy is the work.</span>
          </h2>
          <p>
            A board can change instantly in the browser while the request is
            still travelling. During that gap, the API can fail, another session
            can edit the same task, or access can change. The product needed to
            feel immediate without presenting hopeful UI as durable truth.
          </p>
        </div>

        <div
          className="kanban-guarantee-panel"
          role="img"
          aria-label="Task update lifecycle"
        >
          <div className="kanban-panel-label kanban-panel-head">
            <span>Task update / reliability loop</span>
            <span>
              <i /> System observing
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
            <span>Client intent</span>
            <b />
            <span>Durable task state</span>
          </div>
        </div>
      </section>

      <section className="kanban-decisions">
        <CaseStudySectionHeading
          eyebrow="02 / Reliability decisions"
          title="Four boundaries make the board feel simple."
          description={
            <>
              Reliability is expressed through product behavior: what updates
              immediately, what waits for authority, and what happens when the
              two disagree.
            </>
          }
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
          <p className="eyebrow">03 / Production shape</p>
          <h2>Designed as a deployed system, not an isolated interface.</h2>
          <p>
            The repository keeps web, API, contracts, persistence, tests, and
            delivery visible as parts of the same product. That makes the
            reliability claims inspectable rather than decorative.
          </p>
        </div>
        <div
          className="kanban-production-visual"
          aria-label="Production system layers from web to delivery"
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
            <span>Commit</span>
            <b />
            <span>Verified</span>
            <b />
            <span>Deployed</span>
          </div>
        </div>
      </section>
    </>
  );
}
