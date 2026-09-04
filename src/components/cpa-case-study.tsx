import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";

const managerDomains = [
  "Products",
  "Offers",
  "Partners",
  "Conversions",
  "Statistics",
  "Documents",
  "Approvals",
];

const partnerDomains = [
  "Offer discovery",
  "Performance",
  "Onboarding",
  "Quiz",
  "Academy",
  "Signing",
  "Support",
];

const stateLayers = [
  {
    name: "Server state",
    owner: "RTK Query",
    purpose: "Remote data, caching, invalidation and request lifecycle",
  },
  {
    name: "Session context",
    owner: "Tab + memory",
    purpose: "Active partner identity and short-lived impersonation tokens",
  },
  {
    name: "Shared UI state",
    owner: "Redux",
    purpose: "Cross-feature client state with an intentional lifetime",
  },
  {
    name: "Local UI state",
    owner: "React",
    purpose: "Forms, drawers and interactions owned by one component tree",
  },
];

const decisions = [
  {
    number: "01",
    question: "How should one product serve two very different roles?",
    decision: "A modular SPA with explicit domain boundaries",
    why: "The teams shared authentication, routing, UI foundations and release cadence. Independent deployments would have added coordination cost without solving an organisational problem.",
  },
  {
    number: "02",
    question: "How can a manager safely work as several partners?",
    decision: "Identity became explicit request context",
    why: "Each browser tab owns an active partner ID; an in-memory map resolves it to a short-lived token. Manager-owned features remain attached to the original session.",
  },
  {
    number: "03",
    question: "Where should changing product data live?",
    decision: "State ownership follows authority and lifetime",
    why: "Remote data stays in the server-state layer. Session, shared UI and local interaction state each have smaller, deliberate update paths.",
  },
  {
    number: "04",
    question: "How could the system evolve while it was still shipping?",
    decision: "Sequenced migration into shared foundations",
    why: "Product delivery continued while shared contracts, tooling and components became stronger. Each migration reduced risk without requiring a disruptive rewrite.",
  },
];

export function CpaCaseStudy() {
  return (
    <>
      <section className="cpa-overview">
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
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">02 / The hard part</p>
            <h2>Identity was a runtime context.</h2>
          </div>
          <p>
            A manager could open multiple tabs as different partners while
            global notifications and chat still belonged to the manager session.
          </p>
        </div>

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

      <section className="cpa-architecture-section">
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
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">04 / Decisions</p>
            <h2>Architecture followed the constraints.</h2>
          </div>
          <p>
            The important choices were less about picking libraries and more
            about making ownership, identity and change safe at product scale.
          </p>
        </div>
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
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">05 / Contribution</p>
            <h2>Built inside a living product.</h2>
          </div>
          <p>
            Over 4.5 years I worked across architecture, feature delivery,
            performance and migration—not as a detached redesign, but alongside
            continuous product change.
          </p>
        </div>
        <div className="cpa-impact-strip">
          <article>
            <strong>300k+</strong>
            <span>people supported across the platform</span>
          </article>
          <article>
            <strong className="cpa-reliability-metric">10% → 0%</strong>
            <span>data-loss rate after the reliability redesign</span>
          </article>
          <article>
            <strong>3×</strong>
            <span>rendering improvement in measured workflows</span>
          </article>
          <article>
            <strong>4.5 yrs</strong>
            <span>shipping while the system kept evolving</span>
          </article>
        </div>
        <div className="cpa-reading-list">
          <span>Related field notes</span>
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
