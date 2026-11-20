import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";
import * as cpaEnglish from "@/content/case-studies/cpa";
import { cpaRussian } from "@/content/case-studies/cpa.ru";
import { cpaCopy } from "@/content/case-studies/cpa-copy";

export function CpaCaseStudy({ russian = false }: { russian?: boolean } = {}) {
  const copy = cpaCopy[russian ? "ru" : "en"];
  const {
    contributionStories,
    decisions,
    managerDomains,
    partnerDomains,
    productionMetrics,
    stateLayers,
  } = russian ? cpaRussian : cpaEnglish;
  return (
    <>
      <section className="case-study-surface cpa-overview">
        <div className="cpa-section-heading">
          <div>
            <p className="eyebrow eyebrow-light">{copy.overview}</p>
            <h2>
              {copy.twoProducts}
              <br />
              {copy.oneModel}
            </h2>
          </div>
          <p>{copy.overviewDescription}</p>
        </div>

        <section className="surface-map" aria-label={copy.surfaces}>
          <article>
            <div className="surface-title">
              <span>{copy.operations}</span>
              <h3>{copy.manager}</h3>
              <p>{copy.managerDescription}</p>
            </div>
            <div className="domain-cloud">
              {managerDomains.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </div>
          </article>

          <div className="surface-bridge">
            <span>{copy.foundation}</span>
            <i />
            <strong>{copy.foundationParts}</strong>
            <i />
            <span>{copy.bridge}</span>
          </div>

          <article>
            <div className="surface-title">
              <span>{copy.selfService}</span>
              <h3>{copy.partner}</h3>
              <p>{copy.partnerDescription}</p>
            </div>
            <div className="domain-cloud">
              {partnerDomains.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </div>
          </article>
        </section>
      </section>

      <section className="route-section cpa-identity-section">
        <CaseStudySectionHeading
          eyebrow={copy.identity}
          title={copy.identityTitle}
          description={copy.identityDescription}
        />

        <div className="identity-diagram">
          <div className="identity-origin">
            <ShieldCheck aria-hidden="true" />
            <span>{copy.session}</span>
            <strong>{copy.managerIdentity}</strong>
            <small>{copy.global}</small>
          </div>
          <div className="identity-rail" aria-hidden="true">
            <i />
            <span>{copy.explicit}</span>
            <i />
          </div>
          <div className="identity-tabs">
            <article>
              <span>{copy.tabA}</span>
              <strong>{copy.partnerA}</strong>
              <small>{copy.tokenMap}</small>
            </article>
            <article>
              <span>{copy.tabB}</span>
              <strong>{copy.partnerB}</strong>
              <small>{copy.tokenMap}</small>
            </article>
          </div>
          <ArrowDown className="identity-arrow" aria-hidden="true" />
          <div className="identity-request">
            <span>{copy.request}</span>
            <strong>{copy.checks}</strong>
            <span>{copy.authority}</span>
          </div>
        </div>
      </section>

      <section className="case-study-surface cpa-architecture-section">
        <div className="cpa-section-heading">
          <div>
            <p className="eyebrow eyebrow-light">{copy.architecture}</p>
            <h2>{copy.architectureTitle}</h2>
          </div>
          <p>{copy.architectureDescription}</p>
        </div>

        <div className="cpa-data-flow" role="img" aria-label={copy.flow}>
          {[
            ["01", copy.backend, copy.models],
            ["02", copy.access, "RTK Query"],
            ["03", copy.viewModel, copy.hooks],
            ["04", copy.interface, copy.react],
          ].map(([number, label, value], index) => (
            <div key={number}>
              <article>
                <span>
                  {number} / {label}
                </span>
                <strong>{value}</strong>
              </article>
              {index < 3 && <ArrowRight aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="state-ownership">
          <div className="state-caption">
            <span>{copy.ownership}</span>
            <span>{copy.factors}</span>
          </div>
          {stateLayers.map((layer, index) => (
            <article key={layer.name}>
              <span>0{index + 1}</span>
              <strong>{layer.name}</strong>
              <b>{layer.owner}</b>
              <p>{layer.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section cpa-decisions-section">
        <CaseStudySectionHeading
          eyebrow={copy.decisions}
          title={copy.decisionsTitle}
          description={copy.decisionsDescription}
        />
        <div className="cpa-decision-grid">
          {decisions.map((decision) => (
            <article key={decision.number}>
              <span>{decision.number}</span>
              <p>{decision.question}</p>
              <h3>{decision.decision}</h3>
              <small>{copy.why}</small>
              <p className="cpa-decision-explanation">{decision.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section cpa-contribution-section">
        <CaseStudySectionHeading
          eyebrow={copy.contribution}
          title={copy.contributionTitle}
          description={copy.contributionDescription}
        />
        <div className="cpa-impact-strip">
          {productionMetrics.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
        <div className="cpa-contribution-stories">
          {contributionStories.map(
            ({ label, title, pressure, action, evidence }) => (
              <article key={label}>
                <p className="eyebrow">{label}</p>
                <h3>{title}</h3>
                <dl>
                  <div>
                    <dt>{copy.pressure}</dt>
                    <dd>{pressure}</dd>
                  </div>
                  <div>
                    <dt>{copy.action}</dt>
                    <dd>{action}</dd>
                  </div>
                  <div>
                    <dt>{copy.result}</dt>
                    <dd>{evidence}</dd>
                  </div>
                </dl>
              </article>
            ),
          )}
        </div>
        <div className="cpa-reading-list">
          <span>{copy.notes}</span>
          <a
            className="gradient-action"
            href="https://medium.com/@dmitriilobanov3/optimizing-a-large-react-redux-app-from-render-chaos-to-a-3x-faster-ui-9d6b2038eb05"
            target="_blank"
            rel="noreferrer"
          >
            <span>{copy.performance}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="gradient-action"
            href="https://medium.com/@dmitriilobanov3/frontend-system-design-of-a-large-cpa-platform-b0c448f20ba4"
            target="_blank"
            rel="noreferrer"
          >
            <span>{copy.system}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="gradient-action"
            href="https://medium.com/@dmitriilobanov3/building-a-large-cpa-platform-at-tinkoff-product-workflows-behind-a-complex-fintech-frontend-edb82069ad2c"
            target="_blank"
            rel="noreferrer"
          >
            <span>{copy.workflows}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p className="cpa-confidentiality">{copy.confidentiality}</p>
      </section>
    </>
  );
}
