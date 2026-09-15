import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalAction, SiteFooter } from "@/components/editorial";
import { projectPresentations } from "@/components/project-presentation";
import { getProject, projects } from "@/content/portfolio";
import { cn } from "@/lib/utils";

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

  const presentation = projectPresentations[project.slug];
  const { CaseStudy, HeroVisual, OutcomeDetail } = presentation;

  return (
    <main
      className={cn("route-main project-detail", presentation.mainClassName)}
    >
      <section
        className={cn("project-detail-hero", presentation.heroClassName)}
      >
        <Link href="/work" className="action-link back-link">
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
          <HeroVisual project={project} />
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
            <dt>{presentation.factLabel}</dt>
            <dd>{project.scale}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
      </section>

      <CaseStudy />

      <section className={cn("project-outcome", presentation.outcomeClassName)}>
        <p className="eyebrow eyebrow-light">
          {presentation.outcomeStep} / Outcome
        </p>
        <h2>{project.outcome}</h2>
        {OutcomeDetail && <OutcomeDetail />}
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
