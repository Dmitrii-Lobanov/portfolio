import type { Metadata } from "next";
import { PageIntro, ProjectCard, SiteFooter } from "@/components/editorial";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Selected Work | Dmitrii Lobanov",
  description:
    "Production systems, public products, and engineering case studies by Dmitrii Lobanov.",
};

export default function WorkPage() {
  return (
    <main className="route-main">
      <PageIntro
        eyebrow="Work / Systems and outcomes"
        title={
          <>
            Systems shaped by
            <br />
            real constraints.
          </>
        }
        description="The interface is only the visible edge. These case studies focus on product pressure, ownership, architecture, reliability, and the outcome a team could defend."
      />
      <section className="route-section route-section-first">
        <div className="work-index-legend">
          <span>Production experience</span>
          <span>Public products</span>
          <span>Knowledge systems</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
