import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectInstrument } from "@/components/project-instrument";
import type { Project } from "@/content/portfolio";
import { workProjectPresentations } from "./presentation";

import { workProjectHref, workProjectRussian } from "./work.ru";

export function WorkProject({
  project,
  featured = false,
  russian,
}: {
  project: Project;
  featured?: boolean;
  russian: boolean;
}) {
  const translated = russian ? workProjectRussian[project.slug] : undefined;
  const copy = translated ?? project;
  const presentation = translated ?? workProjectPresentations[project.slug];

  return (
    <article
      className={`work-project work-project-${project.slug}${featured ? " work-project-featured" : ""}`}
    >
      <header className="work-project-meta work-project-head">
        <span>{copy.label}</span>
        <span>{copy.status}</span>
      </header>
      <div className="work-project-layout">
        <div className="work-project-copy">
          <h2>{copy.name ?? project.name}</h2>
          <p>{copy.summary}</p>
          <div className="work-project-evidence">
            <strong>{presentation.evidenceSignal}</strong>
            <span>{presentation.evidenceCaption}</span>
          </div>
          <Link
            className="action-link route-link"
            href={workProjectHref(project.slug, russian)}
          >
            <span>{russian ? "Читать кейс" : "Open case study"}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ProjectInstrument project={project} />
      </div>
      <footer className="work-project-meta work-project-foot">
        <span>{copy.role}</span>
        <span>{presentation.focus}</span>
        <span>{copy.period}</span>
      </footer>
    </article>
  );
}
