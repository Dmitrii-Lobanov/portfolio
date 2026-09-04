import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SiteFooter } from "@/components/editorial";
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
      data-index={project.index}
    >
      <header className="work-project-head">
        <span>
          {project.index} / {project.label}
        </span>
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
            Open case study <ArrowRight size={16} aria-hidden="true" />
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
      <PageIntro
        eyebrow="Work / Selected systems"
        title={
          <>
            <span>Not a gallery.</span>
            <br />A record of decisions.
          </>
        }
        description="Products are shown here as systems under pressure: the constraint, the engineering response, and the measurable evidence that the response worked."
      />

      <section className="work-route-summary" aria-label="Work overview">
        <div>
          <strong>05</strong>
          <span>systems examined</span>
        </div>
        <div>
          <strong>01</strong>
          <span>long-lived production platform</span>
        </div>
        <div>
          <strong>04</strong>
          <span>public builds and knowledge products</span>
        </div>
        <p>
          <span>Reading guide</span>
          Follow the signal from product pressure to system boundary to outcome.
        </p>
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
