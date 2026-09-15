import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectInstrument } from "@/components/project-instrument";
import type { Project } from "@/content/portfolio";
import { workProjectPresentations } from "./presentation";

export function WorkProject({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const presentation = workProjectPresentations[project.slug];

  return (
    <article
      className={`work-project work-project-${project.slug}${featured ? " work-project-featured" : ""}`}
    >
      <header className="work-project-meta work-project-head">
        <span>{project.label}</span>
        <span>{project.status}</span>
      </header>
      <div className="work-project-layout">
        <div className="work-project-copy">
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
          <div className="work-project-evidence">
            <strong>{presentation.evidenceSignal}</strong>
            <span>{presentation.evidenceCaption}</span>
          </div>
          <Link
            className="action-link route-link"
            href={`/work/${project.slug}`}
          >
            <span>Open case study</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ProjectInstrument project={project} />
      </div>
      <footer className="work-project-meta work-project-foot">
        <span>{project.role}</span>
        <span>{presentation.focus}</span>
        <span>{project.period}</span>
      </footer>
    </article>
  );
}
