import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { capabilities, workProjectPresentations } from "./presentation";
import { capabilityRussian, workProjectHref } from "./work.ru";

export function WorkCapabilityMap({
  projects,
  russian,
}: {
  projects: Project[];
  russian: boolean;
}) {
  return (
    <section
      className="work-capability-section"
      aria-labelledby="capability-title"
    >
      <header className="work-capability-heading">
        <div>
          <p className="eyebrow">
            {russian ? "Карта компетенций" : "Portfolio capability map"}
          </p>
          <h2 id="capability-title">
            {russian
              ? "Пять проектов. Общий инженерный подход."
              : "Five systems. One engineering practice."}
          </h2>
        </div>
        <p>
          {russian
            ? "В таблице видно, какие задачи я решал в каждом проекте. Яркие ячейки отмечают области, за которые я отвечал."
            : "Follow each project through the capabilities it exercises. Bright cells mark substantial, documented responsibility—not a technology checklist."}
        </p>
      </header>
      <div className="capability-console">
        <div
          className="system-grid-visual project-constellation"
          aria-label={
            russian
              ? "Пять проектов портфолио"
              : "Five connected portfolio projects"
          }
          role="img"
        >
          <span className="constellation-orbit constellation-orbit-a" />
          <span className="constellation-orbit constellation-orbit-b" />
          <span className="constellation-core">
            <small>{russian ? "Инженерная" : "Engineering"}</small>
            <strong>{russian ? "Практика" : "Practice"}</strong>
            <i />
          </span>
          {projects.map((project) => (
            <Link
              className={`constellation-project constellation-project-${project.index}`}
              href={workProjectHref(project.slug, russian)}
              key={project.slug}
            >
              <small>{project.index}</small>
              {workProjectPresentations[project.slug].shortName}
            </Link>
          ))}
          <i className="constellation-packet constellation-packet-a" />
          <i className="constellation-packet constellation-packet-b" />
        </div>

        <table
          className="system-grid-visual capability-matrix"
          aria-label={
            russian
              ? "Компетенции по проектам"
              : "Projects by engineering capability"
          }
        >
          <thead>
            <tr className="capability-matrix-head">
              <th scope="col">{russian ? "Проект" : "Project"}</th>
              {capabilities.map((capability) => (
                <th scope="col" key={capability}>
                  {russian ? capabilityRussian[capability] : capability}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              const presentation = workProjectPresentations[project.slug];

              return (
                <tr className="capability-matrix-row" key={project.slug}>
                  <th scope="row">
                    <small>{project.index}</small>
                    {presentation.shortName}
                  </th>
                  {capabilities.map((capability) => {
                    const active =
                      presentation.capabilities.includes(capability);

                    return (
                      <td
                        aria-label={
                          russian
                            ? `${capabilityRussian[capability]}: ${active ? "область ответственности" : "смежная область"}`
                            : `${capability}: ${active ? "demonstrated" : "not a primary focus"}`
                        }
                        key={capability}
                      >
                        <i className={active ? "is-active" : undefined} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7}>
                <div className="capability-matrix-legend">
                  <span>
                    <i />{" "}
                    {russian
                      ? "Область ответственности"
                      : "Documented responsibility"}
                  </span>
                  <span>
                    <i /> {russian ? "Смежная область" : "Adjacent capability"}
                  </span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
