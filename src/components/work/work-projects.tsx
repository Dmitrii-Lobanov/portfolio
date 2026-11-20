import type { Project } from "@/content/portfolio";
import { WorkProject } from "./work-project";

export function WorkProjects({
  projects,
  russian,
}: {
  projects: Project[];
  russian: boolean;
}) {
  const [featured, ...publicProjects] = projects;

  return (
    <section
      className="route-section work-projects"
      aria-labelledby="selected-work-title"
    >
      <div className="work-section-heading">
        <div>
          <p className="eyebrow">
            {russian ? "01 / Опыт в продакшене" : "01 / Production evidence"}
          </p>
          <h2 id="selected-work-title">
            {russian ? "Флагманский проект" : "The flagship system"}
          </h2>
        </div>
        <p>
          {russian
            ? "Четыре с половиной года развития продукта и архитектурные решения, которые помогали выпускать обновления."
            : "Four and a half years of product evolution, expressed through the architectural decisions that kept delivery moving."}
        </p>
      </div>
      <WorkProject russian={russian} project={featured} featured />

      <div className="work-section-heading work-public-heading">
        <div>
          <p className="eyebrow">
            {russian ? "02 / Открытые проекты" : "02 / Built in public"}
          </p>
          <h2>
            {russian
              ? "Небольшие проекты, сложные задачи"
              : "Smaller systems, sharp questions"}
          </h2>
        </div>
        <p>
          {russian
            ? "В открытых проектах я проверяю инженерные решения на практике."
            : "Public products used as engineering laboratories—not decorative side projects."}
        </p>
      </div>
      <div className="work-project-grid">
        {publicProjects.map((project) => (
          <WorkProject russian={russian} project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
