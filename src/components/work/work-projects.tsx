import type { Project } from "@/content/portfolio";
import { WorkProject } from "./work-project";

export function WorkProjects({ projects }: { projects: Project[] }) {
  const [featured, ...publicProjects] = projects;

  return (
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
  );
}
