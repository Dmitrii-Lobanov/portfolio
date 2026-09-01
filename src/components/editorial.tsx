import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/portfolio";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="route-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div className="route-intro-grid">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span>{project.index}</span>
        <span>{project.status}</span>
      </div>
      <p className="project-label">{project.label}</p>
      <h2>{project.name}</h2>
      <div
        className="project-flow"
        role="img"
        aria-label={`${project.name} system flow`}
      >
        {project.nodes.map((node, index) => (
          <div key={node}>
            <span>{node}</span>
            {index < project.nodes.length - 1 && <i aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="project-summary">{project.summary}</p>
      <Link className="route-link" href={`/work/${project.slug}`}>
        View case study <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ExternalAction({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="route-link">
      {children} <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Dmitrii Lobanov</span>
      <span>Systems · Product · Engineering knowledge</span>
    </footer>
  );
}
