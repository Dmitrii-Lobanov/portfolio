import { ArrowRight } from "lucide-react";

const clocks = [
  [
    "01",
    "Immediate",
    "Selection, open files, pane layout, and unfinished input.",
  ],
  [
    "02",
    "Persistent",
    "Projects, file records, conversations, and user ownership.",
  ],
  [
    "03",
    "Asynchronous",
    "AI requests, context retrieval, monitoring, and background work.",
  ],
];

const requestStages = [
  "Select code",
  "Add instruction",
  "Assemble context",
  "Run model",
  "Stream response",
  "Persist conversation",
];

const boundaries = [
  ["Editor adapter", "Documents, selection, edits", "Persistence"],
  ["Project service", "Projects and file records", "Editor presentation"],
  ["AI workflow", "Prompt execution and progress", "Workspace layout"],
  ["Conversation model", "Messages and continuity", "Model implementation"],
  ["Observability", "Failures, traces, AI requests", "Product behavior"],
];

const current = [
  "Authenticated project workspace",
  "Resizable IDE layout",
  "Multi-file project management",
  "CodeMirror editor integration",
  "AI suggestions and quick edit",
  "Persistent conversations",
  "Background AI workflows",
  "Error and model monitoring",
];

const next = [
  "AI agent with file tools",
  "WebContainer execution",
  "Integrated terminal and preview",
  "GitHub import and export",
];

const decisions = [
  [
    "Long-running work should not belong to a request",
    "AI tasks can outlive navigation or a server response.",
    "Move durable execution into background workflows.",
    "More states and operational components.",
    "The interface remains responsive while work continues independently.",
  ],
  [
    "The editor should remain replaceable",
    "Specialized editor APIs can leak through an entire product.",
    "Put editor operations behind a narrow workspace adapter.",
    "Additional translation code.",
    "Product workflows depend on editing capabilities, not editor internals.",
  ],
  [
    "Context should be explicit",
    "Useful output depends on code, project state, history, and documentation.",
    "Assemble context as an observable workflow.",
    "More orchestration and monitoring.",
    "AI behavior becomes easier to inspect and improve.",
  ],
];

export function PolarisCaseStudy() {
  return (
    <>
      <section className="polaris-pressure">
        <div className="polaris-pressure-copy">
          <p className="eyebrow">01 / Product tension</p>
          <h2>An AI editor is several systems sharing one workspace.</h2>
          <p>
            Editing a file, requesting a change, switching projects, and
            returning to unfinished work all run on different lifecycles. They
            must feel immediate without becoming one indistinguishable state
            model.
          </p>
        </div>
        <div
          className="polaris-workspace-map"
          role="img"
          aria-label="A workspace command coordinating editor, file persistence, and background assistant systems"
        >
          <header>
            <span>Workspace orchestration</span>
            <span>
              <i /> Session active
            </span>
          </header>
          <div className="polaris-command-bar">
            <span aria-hidden="true">⌘</span>
            <div>
              <small>User intent</small>
              <strong>Refactor the selected component</strong>
            </div>
            <b>Run</b>
          </div>
          <div className="polaris-dispatch" aria-hidden="true">
            <span />
            <i />
            <i />
            <i />
          </div>
          <div className="polaris-surfaces">
            <article>
              <div className="polaris-surface-heading">
                <small>01 / Immediate</small>
                <i />
              </div>
              <strong>Editor intent</strong>
              <div className="polaris-editor-lines" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>Selection preserved</span>
            </article>
            <article>
              <div className="polaris-surface-heading">
                <small>02 / Persistent</small>
                <i />
              </div>
              <strong>Project state</strong>
              <div className="polaris-file-stack" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>Changes recorded</span>
            </article>
            <article>
              <div className="polaris-surface-heading">
                <small>03 / Asynchronous</small>
                <i />
              </div>
              <strong>Assistant task</strong>
              <div className="polaris-assistant-wave" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>Running independently</span>
            </article>
          </div>
          <footer>
            <span>One action</span>
            <b>three lifecycles</b>
            <i />
          </footer>
        </div>
      </section>

      <section className="polaris-clocks">
        <header>
          <div>
            <p className="eyebrow">02 / Workspace model</p>
            <h2>One workspace. Three different clocks.</h2>
          </div>
          <p>
            The workspace stays coherent by giving each kind of state its own
            pace and source of truth. Immediate feedback never pretends to be a
            saved result, and background work never blocks the editor.
          </p>
        </header>
        <div className="polaris-clock-grid">
          {clocks.map(([number, title, copy], index) => (
            <article key={title}>
              <small>{number}</small>
              <div
                className={`polaris-clock-visual polaris-clock-visual-${index + 1}`}
                aria-hidden="true"
              >
                <div className="polaris-clock-window">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="polaris-clock-path">
                  <i />
                </div>
                <b />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="polaris-request">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">03 / AI workflow</p>
            <h2>The interaction continues after the button is released.</h2>
          </div>
          <p>
            The interface acknowledges intent now. Expensive work proceeds
            through an explicit, observable path.
          </p>
        </div>
        <div className="polaris-request-track">
          {requestStages.map((stage, index) => (
            <div key={stage}>
              <article>
                <small>0{index + 1}</small>
                <strong>{stage}</strong>
              </article>
              {index < requestStages.length - 1 && (
                <ArrowRight aria-hidden="true" />
              )}
            </div>
          ))}
          <i className="polaris-request-packet" aria-hidden="true" />
        </div>
      </section>

      <section className="polaris-boundaries">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">04 / Integration boundaries</p>
            <h2>Every subsystem gets a narrow contract.</h2>
          </div>
          <p>
            Adapter code is deliberate friction: it keeps a tool change from
            becoming a workspace rewrite.
          </p>
        </div>
        <div className="polaris-boundary-table">
          <header>
            <span>Boundary</span>
            <span>Owns</span>
            <span>Does not own</span>
          </header>
          {boundaries.map(([name, owns, excludes]) => (
            <article key={name}>
              <strong>{name}</strong>
              <span>{owns}</span>
              <span>{excludes}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="polaris-scope">
        <header>
          <p className="eyebrow">05 / Product surface</p>
          <h2>A functional foundation—with the next boundary left visible.</h2>
        </header>
        <div className="polaris-scope-grid">
          <article>
            <span>
              <i /> Current foundation
            </span>
            <ul>
              {current.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <div className="polaris-scope-bridge" aria-hidden="true">
            <i />
            <b />
          </div>
          <article>
            <span>
              <i /> Next system boundary
            </span>
            <ul>
              {next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="polaris-decisions">
        <header>
          <p className="eyebrow">06 / Engineering decisions</p>
          <h2>The product shape determined the architecture.</h2>
        </header>
        <div className="polaris-decision-grid">
          {decisions.map(([title, pressure, decision, cost, effect], index) => (
            <article key={title}>
              <small>0{index + 1}</small>
              <h3>{title}</h3>
              <dl>
                <div>
                  <dt>Pressure</dt>
                  <dd>{pressure}</dd>
                </div>
                <div>
                  <dt>Decision</dt>
                  <dd>{decision}</dd>
                </div>
                <div>
                  <dt>Cost</dt>
                  <dd>{cost}</dd>
                </div>
              </dl>
              <footer>
                <i />
                {effect}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
