import type { Project } from "@/content/portfolio";

export function ProjectInstrument({ project }: { project: Project }) {
  return (
    <div
      className={`work-project-instrument work-product-art work-product-art-${project.slug}`}
      aria-hidden="true"
    >
      <div className="work-art-halo" />
      <div className="work-art-orbit work-art-orbit-a" />
      <div className="work-art-orbit work-art-orbit-b" />
      <div className="work-art-device">
        <div className="work-art-device-top">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="work-art-canvas">
          <div className="work-art-sidebar">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="work-art-content">
            {project.slug === "cpa-platform" && (
              <>
                <div className="work-art-title-line" />
                <div className="work-art-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="work-art-row">
                  <i />
                  <i />
                  <i />
                </div>
              </>
            )}
            {project.slug === "reliable-kanban" && (
              <div className="work-art-kanban">
                {["backlog", "progress", "done"].map((column, index) => (
                  <div
                    className={`work-art-kanban-column work-art-kanban-column-${index + 1}`}
                    key={column}
                  >
                    <span />
                    <i
                      className={
                        index === 1 ? "work-art-kanban-active" : undefined
                      }
                    />
                    <i />
                    {index !== 2 && <i />}
                  </div>
                ))}
                <b />
              </div>
            )}
            {project.slug === "frontend-engineering-wiki" && (
              <div className="work-art-knowledge">
                <svg
                  className="work-art-knowledge-links"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M15.5 14 C28 14 35 39 50.5 51.5" />
                  <path d="M84.5 13 C72 13 66 39 50.5 51.5" />
                  <path d="M11.5 52 C26 52 35 52 50.5 51.5" />
                  <path d="M89.5 80 C73 80 67 63 50.5 51.5" />
                  <path d="M25.5 88 C34 76 41 63 50.5 51.5" />
                </svg>
                <span className="work-art-knowledge-core" />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            )}
            {project.slug === "polaris" && (
              <div className="work-art-workspace">
                <span />
                <span />
                <span />
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            )}
            {project.slug === "wikimasters" && (
              <div className="work-art-stack">
                <span />
                <span />
                <span />
                <span />
                <span />
                <i />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="work-art-ribbon work-art-ribbon-cyan" />
      <div className="work-art-ribbon work-art-ribbon-orange" />
      <div className="work-art-floater work-art-floater-a">
        <i />
        <span />
        <span />
      </div>
      <div className="work-art-floater work-art-floater-b">
        <i />
        <span />
      </div>
      <div className="work-art-particles">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
