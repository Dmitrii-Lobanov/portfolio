import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { capabilities, workProjectPresentations } from "./presentation";

export function WorkCapabilityMap({ projects }: { projects: Project[] }) {
  return (
    <section
      className="work-capability-section"
      aria-labelledby="capability-title"
    >
      <header className="work-capability-heading">
        <div>
          <p className="eyebrow">Portfolio capability map</p>
          <h2 id="capability-title">Five systems. One engineering practice.</h2>
        </div>
        <p>
          Follow each project through the capabilities it exercises. Bright
          cells mark substantial, documented responsibility—not a technology
          checklist.
        </p>
      </header>
      <div className="capability-console">
        <div
          className="system-grid-visual project-constellation"
          aria-label="Five connected portfolio projects"
          role="img"
        >
          <span className="constellation-orbit constellation-orbit-a" />
          <span className="constellation-orbit constellation-orbit-b" />
          <span className="constellation-core">
            <small>Engineering</small>
            <strong>Practice</strong>
            <i />
          </span>
          {projects.map((project) => (
            <Link
              className={`constellation-project constellation-project-${project.index}`}
              href={`/work/${project.slug}`}
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
          aria-label="Projects by engineering capability"
        >
          <thead>
            <tr className="capability-matrix-head">
              <th scope="col">Project</th>
              {capabilities.map((capability) => (
                <th scope="col" key={capability}>
                  {capability}
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
                        aria-label={`${capability}: ${active ? "demonstrated" : "not a primary focus"}`}
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
                    <i /> Documented responsibility
                  </span>
                  <span>
                    <i /> Adjacent capability
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
