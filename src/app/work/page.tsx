import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { type Project, projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Selected Work | Dmitrii Lobanov",
  description:
    "Production systems, public products, and engineering case studies by Dmitrii Lobanov.",
};

const projectEvidence: Record<
  string,
  { signal: string; caption: string; focus: string }
> = {
  "cpa-platform": {
    signal: "300k+",
    caption: "people supported by the platform",
    focus: "Product architecture · reliability · migration",
  },
  "reliable-kanban": {
    signal: "Versioned",
    caption: "writes reject stale task updates explicitly",
    focus: "Optimistic UX · concurrency · recovery",
  },
  "frontend-engineering-wiki": {
    signal: "224",
    caption: "connected technical explanations",
    focus: "Information architecture · learning systems",
  },
  polaris: {
    signal: "5 systems",
    caption: "combined in one browser workspace",
    focus: "Runtime isolation · AI workflows · adapters",
  },
  wikimasters: {
    signal: "6 layers",
    caption: "with explicit infrastructure ownership",
    focus: "Persistence · caching · storage · AI",
  },
};

const capabilities = [
  "Architecture",
  "Reliability",
  "Product UX",
  "Performance",
  "Data",
  "Knowledge",
] as const;

const projectCapabilityMap: Record<
  string,
  Array<(typeof capabilities)[number]>
> = {
  "cpa-platform": [
    "Architecture",
    "Reliability",
    "Product UX",
    "Performance",
    "Data",
  ],
  "reliable-kanban": ["Architecture", "Reliability", "Product UX", "Data"],
  "frontend-engineering-wiki": ["Product UX", "Performance", "Knowledge"],
  polaris: ["Architecture", "Product UX", "Performance", "Data"],
  wikimasters: [
    "Architecture",
    "Reliability",
    "Product UX",
    "Data",
    "Knowledge",
  ],
};

const projectShortNames: Record<string, string> = {
  "cpa-platform": "CPA platform",
  "reliable-kanban": "Kanban",
  "frontend-engineering-wiki": "Engineering Wiki",
  polaris: "Polaris",
  wikimasters: "WikiMasters",
};

function ProjectInstrument({ project }: { project: Project }) {
  return (
    <div className="work-project-instrument" aria-hidden="true">
      <div className="work-instrument-head">
        <span>System topology</span>
        <span>
          <i /> Live model
        </span>
      </div>
      <div className="work-node-track">
        {project.nodes.map((node, index) => (
          <div className="work-node-wrap" key={node}>
            <span className="work-node">
              <small>{String(index + 1).padStart(2, "0")}</small>
              {node}
            </span>
            {index < project.nodes.length - 1 && <i />}
          </div>
        ))}
      </div>
      <span className="work-instrument-signal" />
    </div>
  );
}

function WorkProject({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const evidence = projectEvidence[project.slug];

  return (
    <article
      className={`work-project work-project-${project.slug}${featured ? " work-project-featured" : ""}`}
    >
      <header className="work-project-head">
        <span>{project.label}</span>
        <span>{project.status}</span>
      </header>
      <div className="work-project-layout">
        <div className="work-project-copy">
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
          <div className="work-project-evidence">
            <strong>{evidence.signal}</strong>
            <span>{evidence.caption}</span>
          </div>
          <Link className="route-link" href={`/work/${project.slug}`}>
            <span>Open case study</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ProjectInstrument project={project} />
      </div>
      <footer className="work-project-foot">
        <span>{project.role}</span>
        <span>{evidence.focus}</span>
        <span>{project.period}</span>
      </footer>
    </article>
  );
}

export default function WorkPage() {
  const [featured, ...publicProjects] = projects;

  return (
    <main className="route-main work-route">
      <section className="route-intro work-intro">
        <p className="eyebrow">Work / Selected systems</p>
        <div className="work-intro-layout">
          <div className="work-intro-copy">
            <h1>
              <span>Not a gallery.</span>
              <br />A record of decisions.
            </h1>
            <p>
              Products are shown here as systems under pressure: the constraint,
              the engineering response, and the measurable evidence that the
              response worked.
            </p>
          </div>
          <div className="work-decision-engine" aria-hidden="true">
            <div className="system-sculpture">
              <div className="sculpture-caption sculpture-caption-input">
                Product pressure
                <span>Unsorted signals</span>
              </div>
              <div className="sculpture-fragments">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="sculpture-machine">
                <span className="machine-spine" />
                <span className="machine-ring machine-ring-outer" />
                <span className="machine-ring machine-ring-inner" />
                <span className="machine-core">
                  <small>Engineering</small>
                  <strong>Judgment</strong>
                  <i />
                </span>
                <span className="machine-gate machine-gate-top">Boundary</span>
                <span className="machine-gate machine-gate-bottom">
                  Ownership
                </span>
                <i className="machine-packet packet-one" />
                <i className="machine-packet packet-two" />
              </div>
              <div className="sculpture-output">
                <span>
                  <small>01</small>Clear
                </span>
                <span>
                  <small>02</small>Fast
                </span>
                <span>
                  <small>03</small>Dependable
                </span>
              </div>
              <div className="sculpture-caption sculpture-caption-output">
                Stable system
                <span>Defensible outcome</span>
              </div>
              <span className="sculpture-floor" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="work-capability-section"
        aria-labelledby="capability-title"
      >
        <header className="work-capability-heading">
          <div>
            <p className="eyebrow">Portfolio capability map</p>
            <h2 id="capability-title">
              Five systems. One engineering practice.
            </h2>
          </div>
          <p>
            Follow each project through the capabilities it exercises. Bright
            cells mark substantial, documented responsibility—not a technology
            checklist.
          </p>
        </header>
        <div className="capability-console">
          <div
            className="project-constellation"
            aria-label="Five connected portfolio projects"
            role="img"
          >
            <span className="constellation-orbit constellation-orbit-a" />
            <span className="constellation-orbit constellation-orbit-b" />
            <span className="constellation-core">
              <small>Engineering</small>
              <strong>Practice</strong>
              <i />
            </span>
            {projects.map((project) => (
              <Link
                className={`constellation-project constellation-project-${project.index}`}
                href={`/work/${project.slug}`}
                key={project.slug}
              >
                <small>{project.index}</small>
                {projectShortNames[project.slug]}
              </Link>
            ))}
            <i className="constellation-packet constellation-packet-a" />
            <i className="constellation-packet constellation-packet-b" />
          </div>

          <table
            className="capability-matrix"
            aria-label="Projects by engineering capability"
          >
            <thead>
              <tr className="capability-matrix-head">
                <th scope="col">Project</th>
                {capabilities.map((capability) => (
                  <th scope="col" key={capability}>
                    {capability}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr className="capability-matrix-row" key={project.slug}>
                  <th scope="row">
                    <small>{project.index}</small>
                    {projectShortNames[project.slug]}
                  </th>
                  {capabilities.map((capability) => {
                    const active =
                      projectCapabilityMap[project.slug].includes(capability);
                    return (
                      <td
                        aria-label={`${capability}: ${active ? "demonstrated" : "not a primary focus"}`}
                        key={capability}
                      >
                        <i className={active ? "is-active" : undefined} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>
                  <div className="capability-matrix-legend">
                    <span>
                      <i /> Documented responsibility
                    </span>
                    <span>
                      <i /> Adjacent capability
                    </span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section
        className="route-section work-projects"
        aria-labelledby="selected-work-title"
      >
        <div className="work-section-heading">
          <div>
            <p className="eyebrow">01 / Production evidence</p>
            <h2 id="selected-work-title">The flagship system</h2>
          </div>
          <p>
            Four and a half years of product evolution, expressed through the
            architectural decisions that kept delivery moving.
          </p>
        </div>
        <WorkProject project={featured} featured />

        <div className="work-section-heading work-public-heading">
          <div>
            <p className="eyebrow">02 / Built in public</p>
            <h2>Smaller systems, sharp questions</h2>
          </div>
          <p>
            Public products used as engineering laboratories—not decorative side
            projects.
          </p>
        </div>
        <div className="work-project-grid">
          {publicProjects.map((project) => (
            <WorkProject project={project} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="work-route-cta">
        <span>Need the reasoning behind a particular decision?</span>
        <Link href="/contact">
          Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
