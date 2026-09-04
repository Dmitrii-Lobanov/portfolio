import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CpaCaseStudy } from "@/components/cpa-case-study";
import { ExternalAction, SiteFooter } from "@/components/editorial";
import { KanbanCaseStudy } from "@/components/kanban-case-study";
import { getProject, projects } from "@/content/portfolio";
import { ProjectInstrument } from "../page";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name} | Dmitrii Lobanov`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main className="route-main project-detail">
      <section
        className={`project-detail-hero${project.slug === "cpa-platform" ? " cpa-detail-hero" : ""}${project.slug === "reliable-kanban" ? " kanban-detail-hero" : ""}`}
      >
        <Link href="/work" className="back-link">
          <ArrowLeft size={15} /> All work
        </Link>
        <div className="project-detail-title">
          <div>
            <p className="eyebrow">
              {project.index} / {project.label}
            </p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.summary}</p>
          {(project.slug === "cpa-platform" ||
            project.slug === "reliable-kanban") && (
            <ProjectInstrument project={project} />
          )}
        </div>
        <dl className="project-facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Scale</dt>
            <dd>{project.scale}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
      </section>

      {project.slug === "cpa-platform" ? (
        <CpaCaseStudy />
      ) : project.slug === "reliable-kanban" ? (
        <KanbanCaseStudy />
      ) : (
        <>
          <section className="project-system-section">
            <div className="project-context">
              <p className="eyebrow eyebrow-light">
                01 /{" "}
                {project.slug === "reliable-kanban"
                  ? "The pressure"
                  : "Context"}
              </p>
              <h2>
                {project.slug === "reliable-kanban"
                  ? "The difficult part was not moving a card. It was knowing when that move was still valid."
                  : "Complexity arrived through the product."}
              </h2>
              <p className="project-context-copy">{project.context}</p>
            </div>
            <div className="detail-system-map">
              <div className="detail-system-caption">
                <span>
                  {project.slug === "reliable-kanban"
                    ? "A task moves through five guarantees"
                    : "System path / simplified"}
                </span>
                <span>{project.outcome}</span>
              </div>
              <div className="detail-system-flow">
                {project.nodes.map((node, index) => (
                  <div key={node}>
                    <span>{node}</span>
                    {index < project.nodes.length - 1 && (
                      <ArrowRight aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="route-section decision-section">
            <div className="route-section-heading">
              <div>
                <p className="eyebrow">02 / Decisions</p>
                <h2>
                  {project.slug === "reliable-kanban"
                    ? "Speed is useful only when the system can recover."
                    : "Constraints became explicit trade-offs."}
                </h2>
              </div>
              <p>
                Technology follows the guarantee the system needs—not the other
                way around.
              </p>
            </div>
            <div className="decision-stack">
              {project.decisions.map((decision, index) => (
                <article className="decision-band" key={decision.constraint}>
                  <span>0{index + 1}</span>
                  <div>
                    <small>Constraint</small>
                    <strong>{decision.constraint}</strong>
                  </div>
                  <div>
                    <small>Decision</small>
                    <strong>{decision.decision}</strong>
                  </div>
                  <div>
                    <small>Trade-off</small>
                    <p>{decision.tradeoff}</p>
                  </div>
                  <div>
                    <small>Outcome</small>
                    <p>{decision.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      <section
        className={`project-outcome${project.slug === "reliable-kanban" ? " kanban-outcome" : ""}`}
      >
        <p className="eyebrow eyebrow-light">
          {project.slug === "cpa-platform"
            ? "06"
            : project.slug === "reliable-kanban"
              ? "04"
              : "03"}{" "}
          / Outcome
        </p>
        <h2>{project.outcome}</h2>
        {project.slug === "reliable-kanban" && (
          <div className="kanban-outcome-signal" aria-hidden="true">
            <div>
              <i />
              <span>Immediate</span>
              <small>local intent</small>
            </div>
            <b>
              <i />
            </b>
            <div>
              <i />
              <span>Validated</span>
              <small>server authority</small>
            </div>
            <b>
              <i />
            </b>
            <div>
              <i />
              <span>Durable</span>
              <small>accepted state</small>
            </div>
          </div>
        )}
        <div className="project-actions">
          {project.demo && (
            <ExternalAction href={project.demo}>
              Open live product
            </ExternalAction>
          )}
          {project.repository && (
            <ExternalAction href={project.repository}>
              View source
            </ExternalAction>
          )}
          {project.article && (
            <ExternalAction href={project.article}>
              Read full study
            </ExternalAction>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
