import { ArrowRight } from "lucide-react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";

import * as english from "@/content/case-studies/polaris";
import { polarisCopy, polarisRussian } from "@/content/case-studies/polaris.ru";

export function PolarisCaseStudy({ russian = false }: { russian?: boolean }) {
  const { boundaries, clocks, constraints, current, decisions, requestStages } =
    russian ? polarisRussian : english;
  const copy = polarisCopy[russian ? "ru" : "en"];
  return (
    <>
      <section className="polaris-pressure">
        <div className="polaris-pressure-copy">
          <p className="eyebrow">{copy.tension}</p>
          <h2>{copy.tensionTitle}</h2>
          <p>{copy.tensionIntro}</p>
        </div>
        <div
          className="polaris-workspace-map"
          role="img"
          aria-label={copy.mapLabel}
        >
          <header>
            <span>{copy.orchestration}</span>
            <span>
              <i /> {copy.session}
            </span>
          </header>
          <div className="polaris-command-bar">
            <span aria-hidden="true">⌘</span>
            <div>
              <small>{copy.intent}</small>
              <strong>{copy.refactor}</strong>
            </div>
            <b>{copy.run}</b>
          </div>
          <div className="polaris-dispatch" aria-hidden="true">
            <span />
            <i />
            <i />
            <i />
          </div>
          <div className="polaris-surfaces">
            <article>
              <div className="polaris-surface-heading">
                <small>{copy.immediate}</small>
                <i />
              </div>
              <strong>{copy.editor}</strong>
              <div className="polaris-editor-lines" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>{copy.selection}</span>
            </article>
            <article>
              <div className="polaris-surface-heading">
                <small>{copy.persistent}</small>
                <i />
              </div>
              <strong>{copy.project}</strong>
              <div className="polaris-file-stack" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>{copy.recorded}</span>
            </article>
            <article>
              <div className="polaris-surface-heading">
                <small>{copy.async}</small>
                <i />
              </div>
              <strong>{copy.assistant}</strong>
              <div className="polaris-assistant-wave" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>{copy.independent}</span>
            </article>
          </div>
          <footer>
            <span>{copy.oneAction}</span>
            <b>{copy.threeLifecycles}</b>
            <i />
          </footer>
        </div>
      </section>

      <section className="polaris-clocks">
        <header>
          <div>
            <p className="eyebrow">{copy.workspace}</p>
            <h2>{copy.workspaceTitle}</h2>
          </div>
          <p>{copy.workspaceIntro}</p>
        </header>
        <div className="polaris-clock-grid">
          {clocks.map(([number, title, copy], index) => (
            <article key={title}>
              <small>{number}</small>
              <div
                className={`polaris-clock-visual polaris-clock-visual-${index + 1}`}
                aria-hidden="true"
              >
                <div className="polaris-clock-window">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="polaris-clock-path">
                  <i />
                </div>
                <b />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="polaris-request">
        <CaseStudySectionHeading
          eyebrow={copy.ai}
          title={copy.aiTitle}
          description={copy.aiIntro}
        />
        <div className="polaris-request-track">
          <header>
            <span>{copy.request}</span>
            <span>
              <i /> {copy.workflow}
            </span>
          </header>
          <div className="polaris-request-rail" aria-hidden="true">
            <i />
          </div>
          <div className="polaris-request-stages">
            {requestStages.map(([stage, detail], index) => (
              <div key={stage}>
                <article>
                  <small>0{index + 1}</small>
                  <div
                    className={`polaris-stage-icon polaris-stage-icon-${index + 1}`}
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </div>
                  <strong>{stage}</strong>
                  <span>{detail}</span>
                </article>
                {index < requestStages.length - 1 && (
                  <ArrowRight aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <footer>
            <span>{copy.accepted}</span>
            <span>{copy.resolved}</span>
            <span>{copy.retained}</span>
          </footer>
        </div>
      </section>

      <section className="polaris-boundaries">
        <CaseStudySectionHeading
          eyebrow={copy.integration}
          title={copy.integrationTitle}
          description={copy.integrationIntro}
        />
        <div className="polaris-boundary-table">
          <header>
            <span>{copy.contracts}</span>
            <span>
              <i /> {copy.boundaries}
            </span>
          </header>
          {boundaries.map(([name, owns, excludes], index) => (
            <article key={name}>
              <div className="polaris-boundary-name">
                <small>0{index + 1}</small>
                <strong>{name}</strong>
              </div>
              <div className="polaris-boundary-owner">
                <small>{copy.owns}</small>
                <span>{owns}</span>
              </div>
              <div className="polaris-boundary-gate" aria-hidden="true">
                <i />
                <b />
              </div>
              <div className="polaris-boundary-excludes">
                <small>{copy.outside}</small>
                <span>{excludes}</span>
              </div>
            </article>
          ))}
          <footer>
            <span>{copy.capability}</span>
            <i />
            <span>{copy.responsibility}</span>
          </footer>
        </div>
      </section>

      <section className="polaris-scope">
        <header>
          <div>
            <p className="eyebrow">{copy.surface}</p>
            <h2>{copy.scopeTitle}</h2>
          </div>
          <p>{copy.scopeIntro}</p>
        </header>
        <div className="polaris-scope-grid">
          <article className="polaris-scope-current">
            <header>
              <span>
                <i /> {copy.implemented}
              </span>
              <b>{copy.working}</b>
            </header>
            <ul>
              {current.map((item, index) => (
                <li key={item}>
                  <i aria-hidden="true" />
                  <small>0{index + 1}</small>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="polaris-scope-bridge" aria-hidden="true">
            <i />
            <b />
            <span>{copy.conditions}</span>
          </div>
          <article className="polaris-scope-next">
            <header>
              <span>
                <i /> {copy.constraints}
              </span>
              <b>{copy.review}</b>
            </header>
            <ul>
              {constraints.map((item, index) => (
                <li key={item}>
                  <i aria-hidden="true" />
                  <small>0{index + 1}</small>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="polaris-decisions">
        <header>
          <div>
            <p className="eyebrow">{copy.decisions}</p>
            <h2>{copy.decisionTitle}</h2>
          </div>
          <p>{copy.decisionIntro}</p>
        </header>
        <div className="polaris-decision-grid">
          {decisions.map(([title, pressure, decision, cost, effect], index) => (
            <article key={title}>
              <div
                className={`polaris-decision-visual polaris-decision-visual-${index + 1}`}
                aria-hidden="true"
              >
                <div className="polaris-decision-scene">
                  <span className="polaris-decision-node node-a" />
                  <span className="polaris-decision-node node-b" />
                  <span className="polaris-decision-node node-c" />
                  <i className="polaris-decision-signal" />
                  <b className="polaris-decision-boundary" />
                </div>
                <em>{copy.scenes[index]}</em>
              </div>
              <small>
                0{index + 1} / {copy.decision}
              </small>
              <h3>{title}</h3>
              <dl>
                <div>
                  <dt>{copy.pressure}</dt>
                  <dd>{pressure}</dd>
                </div>
                <div>
                  <dt>{copy.decision}</dt>
                  <dd>{decision}</dd>
                </div>
                <div>
                  <dt>{copy.cost}</dt>
                  <dd>{cost}</dd>
                </div>
              </dl>
              <footer>
                <i />
                {effect}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
