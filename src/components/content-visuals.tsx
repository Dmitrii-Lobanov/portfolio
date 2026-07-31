import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { GithubIcon } from "@/components/icons";

const scopeTracks = [
  ["Multiple roles", "Explicit boundaries", "Safer workflows"],
  ["Render pressure", "Profile the hot path", "3× improvement"],
  ["Fragmented apps", "Shared foundations", "15+ migrations"],
  ["Server waiting", "Measure full path", "Earlier useful UI"],
];

const timings = [
  ["Auth", "45 ms", "18%"],
  ["Permissions", "80 ms", "31%"],
  ["Partner", "120 ms", "46%"],
  ["Offers", "180 ms", "69%"],
  ["Documents", "260 ms", "100%"],
];

const decisions = [
  ["State", "Explicit ownership", "One global dumping ground"],
  ["Real time", "Named event contracts", "Scattered socket handlers"],
  ["Abstraction", "Stable repeated behavior", "Premature generic layers"],
  ["Tools", "Constraint-driven choice", "Framework loyalty"],
  ["Performance", "Measure the full path", "Guess from React alone"],
];

const labs = [
  {
    index: "01",
    name: "Polaris",
    label: "Browser IDE + AI",
    href: "https://github.com/Dmitrii-Lobanov/Cursor-clone",
    summary:
      "An in-browser development environment connecting editor, terminal, runtime, AI workflows, persistence, and GitHub.",
    nodes: ["CodeMirror", "Xterm", "WebContainer", "AI SDK", "Convex"],
  },
  {
    index: "02",
    name: "WikiMasters",
    label: "Knowledge platform",
    href: "https://github.com/Dmitrii-Lobanov/wikimasters",
    summary:
      "A full-stack wiki exploring typed persistence, caching, object storage, AI summaries, email, and production testing.",
    nodes: ["Next.js", "Postgres", "Redis", "Blob", "AI"],
  },
  {
    index: "03",
    name: "CourseForge",
    label: "Architecture in progress",
    href: "https://github.com/Dmitrii-Lobanov/course-creation-platform",
    summary:
      "An honest work-in-progress focused on lifecycle design, role boundaries, validation, publishing, and learning progress.",
    nodes: ["Draft", "Validate", "Publish", "Learn", "Analyze"],
  },
];

export function EngineeringScope() {
  return (
    <section className="section evidence-section" id="evidence">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Engineering evidence</p>
          <h2>
            Pressure becomes
            <br />a measurable decision.
          </h2>
        </div>
        <p>
          My work starts with product pressure, makes the engineering response
          explicit, and ends with an outcome that can be defended.
        </p>
      </div>
      <div className="scope-map">
        <div className="scope-map-head" aria-hidden="true">
          <span>Product pressure</span>
          <span>Engineering decision</span>
          <span>Outcome</span>
        </div>
        {scopeTracks.map(([pressure, decision, outcome], index) => (
          <div className="scope-track" key={pressure}>
            <small>0{index + 1}</small>
            <strong>{pressure}</strong>
            <ArrowRight aria-hidden="true" />
            <strong>{decision}</strong>
            <ArrowRight aria-hidden="true" />
            <strong>{outcome}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyVisuals() {
  return (
    <div className="case-visual-suite">
      <div className="visual-story-grid">
        <article className="topology-card">
          <div className="visual-card-heading">
            <span>Product topology</span>
            <small>Two surfaces · one platform</small>
          </div>
          <div className="topology-map">
            <div className="topology-actor">
              <small>Actor 01</small>
              <strong>Partners</strong>
            </div>
            <div className="topology-actor">
              <small>Actor 02</small>
              <strong>Managers</strong>
            </div>
            <div className="topology-line" aria-hidden="true" />
            <div className="topology-surface">
              <strong>Partner workspace</strong>
              <span>Offers</span>
              <span>Links</span>
              <span>Documents</span>
              <span>Statistics</span>
              <span>Onboarding</span>
            </div>
            <div className="topology-surface">
              <strong>Manager workspace</strong>
              <span>Moderation</span>
              <span>Support</span>
              <span>Permissions</span>
              <span>Impersonation</span>
              <span>Operations</span>
            </div>
            <div className="topology-platform">
              <small>Shared foundation</small>
              <strong>Domain contracts · events · identity · data</strong>
            </div>
          </div>
        </article>

        <article className="performance-card">
          <div className="visual-card-heading">
            <span>Performance investigation</span>
            <small>Illustrative diagnostic model</small>
          </div>
          <div className="timing-chart">
            {timings.map(([label, value, size]) => (
              <div className="timing-row" key={label}>
                <span>{label}</span>
                <i style={{ "--timing-size": size } as CSSProperties} />
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="performance-path">
            <span>Measure</span>
            <ArrowRight aria-hidden="true" />
            <span>Separate blockers</span>
            <ArrowRight aria-hidden="true" />
            <span>Render useful UI</span>
          </div>
          <p>
            Example timings adapted from my Server-Timing writing—not production
            telemetry.
          </p>
        </article>
      </div>

      <article className="state-map-card">
        <div className="visual-card-heading">
          <span>State ownership</span>
          <small>Different lifetimes need different owners</small>
        </div>
        <div className="state-lanes">
          <div>
            <span>Server state</span>
            <strong>Offers</strong>
            <strong>Documents</strong>
            <strong>Statistics</strong>
          </div>
          <div>
            <span>Session context</span>
            <strong>Identity</strong>
            <strong>Permissions</strong>
            <strong>Impersonation</strong>
          </div>
          <div>
            <span>Shared UI state</span>
            <strong>Notifications</strong>
            <strong>Events</strong>
            <strong>Feature state</strong>
          </div>
          <div>
            <span>Local UI state</span>
            <strong>Forms</strong>
            <strong>Selection</strong>
            <strong>Modal state</strong>
          </div>
        </div>
      </article>
    </div>
  );
}

export function DecisionMatrix() {
  return (
    <div className="decision-matrix">
      <div className="decision-matrix-head">
        <span>Decision area</span>
        <span>Prefer</span>
        <span>Avoid</span>
      </div>
      {decisions.map(([area, prefer, avoid]) => (
        <div className="decision-row" key={area}>
          <strong>{area}</strong>
          <span>{prefer}</span>
          <span>{avoid}</span>
        </div>
      ))}
    </div>
  );
}

export function PublicLab() {
  return (
    <section className="section lab-section" id="lab">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / Public engineering lab</p>
          <h2>
            Experiments with
            <br />a product spine.
          </h2>
        </div>
        <p>
          A curated view of recent public work. These projects demonstrate
          integration and product thinking—not a contribution scoreboard.
        </p>
      </div>
      <div className="lab-grid">
        {labs.map((lab) => (
          <a
            className="lab-card"
            href={lab.href}
            target="_blank"
            rel="noreferrer"
            key={lab.name}
          >
            <div className="lab-card-top">
              <span>{lab.index}</span>
              <GithubIcon width={18} height={18} aria-hidden="true" />
            </div>
            <p>{lab.label}</p>
            <h3>{lab.name}</h3>
            <div className="lab-pipeline">
              {lab.nodes.map((node, index) => (
                <div key={node}>
                  <span>{node}</span>
                  {index < lab.nodes.length - 1 && <i aria-hidden="true" />}
                </div>
              ))}
            </div>
            <p className="lab-summary">{lab.summary}</p>
            <strong className="lab-link">
              View repository <ArrowUpRight size={16} aria-hidden="true" />
            </strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export function WritingConstellation() {
  const nodes = [
    "Requirements",
    "Boundaries",
    "Workflows",
    "State + events",
    "Performance",
    "Delivery",
  ];
  return (
    <div className="writing-constellation">
      {nodes.map((node, index) => (
        <div key={node}>
          <span>{node}</span>
          {index < nodes.length - 1 && <i aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
