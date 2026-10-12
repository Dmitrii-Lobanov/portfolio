import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";

import {
  contributionStories,
  decisions,
  managerDomains,
  partnerDomains,
  productionMetrics,
  stateLayers,
} from "@/content/case-studies/cpa";

export function CpaCaseStudy() {
  return (
    <>
      <section className="case-study-surface cpa-overview">
        <div className="cpa-section-heading">
          <div>
            <p className="eyebrow eyebrow-light">01 / Product system</p>
            <h2>
              Two products.
              <br />
              One operating model.
            </h2>
          </div>
          <p>
            The frontend was not a collection of screens. It coordinated two
            connected experiences, shared infrastructure, and business workflows
            that crossed role boundaries.
          </p>
        </div>

        <section
          className="surface-map"
          aria-label="Manager and partner product surfaces"
        >
          <article>
            <div className="surface-title">
              <span>01 / Operations</span>
              <h3>Manager UI</h3>
              <p>
                Control the network, configure products and resolve exceptions.
              </p>
            </div>
            <div className="domain-cloud">
              {managerDomains.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </div>
          </article>

          <div className="surface-bridge">
            <span>Shared foundation</span>
            <i />
            <strong>Auth · UI · routing · API · events</strong>
            <i />
            <span>Impersonation bridge</span>
          </div>

          <article>
            <div className="surface-title">
              <span>02 / Self-service</span>
              <h3>Partner UI</h3>
              <p>
                Discover offers, track results and complete operational
                workflows.
              </p>
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
          eyebrow="02 / The hard part"
          title="Identity was a runtime context."
          description={
            <>
              A manager could open multiple tabs as different partners while
              global notifications and chat still belonged to the manager
              session.
            </>
          }
        />

        <div className="identity-diagram">
          <div className="identity-origin">
            <ShieldCheck aria-hidden="true" />
            <span>Original session</span>
            <strong>Manager identity</strong>
            <small>Owns global features</small>
          </div>
          <div className="identity-rail" aria-hidden="true">
            <i />
            <span>explicit context</span>
            <i />
          </div>
          <div className="identity-tabs">
            <article>
              <span>Browser tab A</span>
              <strong>Partner 1842</strong>
              <small>sessionStorage → token map</small>
            </article>
            <article>
              <span>Browser tab B</span>
              <strong>Partner 7291</strong>
              <small>sessionStorage → token map</small>
            </article>
          </div>
          <ArrowDown className="identity-arrow" aria-hidden="true" />
          <div className="identity-request">
            <span>Every request</span>
            <strong>Authentication · permission check · audit context</strong>
            <span>Backend remains authoritative</span>
          </div>
        </div>
      </section>

      <section className="case-study-surface cpa-architecture-section">
        <div className="cpa-section-heading">
          <div>
            <p className="eyebrow eyebrow-light">03 / Architecture</p>
            <h2>Data changed shape at deliberate boundaries.</h2>
          </div>
          <p>
            An MVVM-inspired flow kept transport models away from view concerns.
            Components received UI-ready data instead of interpreting backend
            responses themselves.
          </p>
        </div>

        <div
          className="cpa-data-flow"
          role="img"
          aria-label="Data flow from backend models to React interface"
        >
          {[
            ["01", "Backend", "Domain models"],
            ["02", "Data access", "RTK Query"],
            ["03", "View model", "Hooks + selectors"],
            ["04", "Interface", "React components"],
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
            <span>State ownership matrix</span>
            <span>Authority × lifetime × update radius</span>
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
          eyebrow="04 / Decisions"
          title="Architecture followed the constraints."
          description={
            <>
              The important choices were less about picking libraries and more
              about making ownership, identity and change safe at product scale.
            </>
          }
        />
        <div className="cpa-decision-grid">
          {decisions.map((decision) => (
            <article key={decision.number}>
              <span>{decision.number}</span>
              <p>{decision.question}</p>
              <h3>{decision.decision}</h3>
              <small>Why this fit</small>
              <p className="cpa-decision-explanation">{decision.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section cpa-contribution-section">
        <CaseStudySectionHeading
          eyebrow="05 / Contribution"
          title="Built inside a living product."
          description={
            <>
              I built the frontend from scratch, defined its architecture and
              state-management approach, and owned delivery for critical
              workflows. From requirements through release, I worked with
              product, design, backend, and QA. I was promoted to Senior in
              January 2024.
            </>
          }
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
                    <dt>Product pressure</dt>
                    <dd>{pressure}</dd>
                  </div>
                  <div>
                    <dt>My contribution</dt>
                    <dd>{action}</dd>
                  </div>
                  <div>
                    <dt>Observed result</dt>
                    <dd>{evidence}</dd>
                  </div>
                </dl>
              </article>
            ),
          )}
        </div>
        <div className="cpa-reading-list">
          <span>Related field notes</span>
          <a
            className="gradient-action"
            href="https://medium.com/@dmitriilobanov3/optimizing-a-large-react-redux-app-from-render-chaos-to-a-3x-faster-ui-9d6b2038eb05"
            target="_blank"
            rel="noreferrer"
          >
            <span>React performance investigation</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="gradient-action"
            href="https://medium.com/@dmitriilobanov3/frontend-system-design-of-a-large-cpa-platform-b0c448f20ba4"
            target="_blank"
            rel="noreferrer"
          >
            <span>Frontend system design</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="gradient-action"
            href="https://medium.com/@dmitriilobanov3/building-a-large-cpa-platform-at-tinkoff-product-workflows-behind-a-complex-fintech-frontend-edb82069ad2c"
            target="_blank"
            rel="noreferrer"
          >
            <span>Product workflows</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p className="cpa-confidentiality">
          The diagrams use simplified flows and generalized domain names. They
          contain no proprietary source code, customer data, or internal system
          details.
        </p>
      </section>
    </>
  );
}
