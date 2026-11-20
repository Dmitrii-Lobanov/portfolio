import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalAction, SiteFooter } from "@/components/editorial";
import { projectPresentations } from "@/components/project-presentation";
import { cpaRussianProject } from "@/content/case-studies/cpa.ru";
import { getProject, projects } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function isRussianCpa(slug: string) {
  return (
    slug === "cpa-platform" &&
    (await headers()).get("x-portfolio-locale") === "ru"
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const russian = await isRussianCpa(project.slug);
  const copy = russian ? cpaRussianProject : project;

  return {
    title: `${copy.name} | ${russian ? "Дмитрий Лобанов" : "Dmitrii Lobanov"}`,
    description: copy.summary,
    ...(project.slug === "cpa-platform" && {
      alternates: {
        canonical: russian ? "/ru/work/cpa-platform" : "/work/cpa-platform",
        languages: { en: "/work/cpa-platform", ru: "/ru/work/cpa-platform" },
      },
    }),
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const russian = await isRussianCpa(project.slug);
  const copy = russian ? cpaRussianProject : project;
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
          <ArrowLeft size={15} /> {russian ? "Все проекты" : "All work"}
        </Link>
        <div className="project-detail-title">
          <div>
            <p className="eyebrow">
              {project.index} / {copy.label}
            </p>
            <h1>{copy.name}</h1>
          </div>
          <p>{copy.summary}</p>
          <HeroVisual project={project} />
        </div>
        <dl className="project-facts">
          <div>
            <dt>{russian ? "Роль" : "Role"}</dt>
            <dd>{copy.role}</dd>
          </div>
          <div>
            <dt>{russian ? "Период" : "Period"}</dt>
            <dd>{copy.period}</dd>
          </div>
          <div>
            <dt>{russian ? "Масштаб" : presentation.factLabel}</dt>
            <dd>{copy.scale}</dd>
          </div>
          <div>
            <dt>{russian ? "Статус" : "Status"}</dt>
            <dd>{copy.status}</dd>
          </div>
        </dl>
      </section>

      <CaseStudy russian={russian} />

      <section className={cn("project-outcome", presentation.outcomeClassName)}>
        <p className="eyebrow eyebrow-light">
          {presentation.outcomeStep} / {russian ? "Результат" : "Outcome"}
        </p>
        <h2>{copy.outcome}</h2>
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
              {russian ? "Читать полный разбор (EN)" : "Read full study"}
            </ExternalAction>
          )}
        </div>
      </section>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
