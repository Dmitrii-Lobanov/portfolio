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
  ["Select code", "Editor range"],
  ["Add instruction", "User intent"],
  ["Assemble context", "Files + history"],
  ["Run model", "Background task"],
  ["Stream response", "Incremental result"],
  ["Persist conversation", "Durable record"],
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
            The interface acknowledges intent immediately, then turns it into
            durable background work. Context assembly, model execution,
            streaming, and persistence remain visible as separate stages—so a
            slow or failed step can be understood and recovered.
          </p>
        </div>
        <div className="polaris-request-track">
          <header>
            <span>AI request / observable execution</span>
            <span>
              <i /> Workflow active
            </span>
          </header>
          <div className="polaris-request-rail" aria-hidden="true">
            <i />
          </div>
          <div className="polaris-request-stages">
            {requestStages.map(([stage, detail], index) => (
              <div key={stage}>
                <article>
                  <small>0{index + 1}</small>
                  <div
                    className={`polaris-stage-icon polaris-stage-icon-${index + 1}`}
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </div>
                  <strong>{stage}</strong>
                  <span>{detail}</span>
                </article>
                {index < requestStages.length - 1 && (
                  <ArrowRight aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <footer>
            <span>Intent accepted</span>
            <span>Context resolved</span>
            <span>Result retained</span>
          </footer>
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
            <span>Contract map / five guarded seams</span>
            <span>
              <i /> Boundaries active
            </span>
          </header>
          {boundaries.map(([name, owns, excludes], index) => (
            <article key={name}>
              <div className="polaris-boundary-name">
                <small>0{index + 1}</small>
                <strong>{name}</strong>
              </div>
              <div className="polaris-boundary-owner">
                <small>Owns</small>
                <span>{owns}</span>
              </div>
              <div className="polaris-boundary-gate" aria-hidden="true">
                <i />
                <b />
              </div>
              <div className="polaris-boundary-excludes">
                <small>Kept outside</small>
                <span>{excludes}</span>
              </div>
            </article>
          ))}
          <footer>
            <span>Capability</span>
            <i />
            <span>Protected responsibility</span>
          </footer>
        </div>
      </section>

      <section className="polaris-scope">
        <header>
          <div>
            <p className="eyebrow">05 / Product surface</p>
            <h2>
              A functional foundation - with the next boundary left visible.
            </h2>
          </div>
          <p>
            The current workspace is useful on its own. The next phase extends
            that foundation into executable projects and repository workflows
            without disguising planned work as finished product.
          </p>
        </header>
        <div className="polaris-scope-grid">
          <article className="polaris-scope-current">
            <header>
              <span>
                <i /> Current foundation
              </span>
              <b>Working now</b>
            </header>
            <ul>
              {current.map((item, index) => (
                <li key={item}>
                  <i aria-hidden="true" />
                  <small>0{index + 1}</small>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="polaris-scope-bridge" aria-hidden="true">
            <i />
            <b />
            <span>Extend</span>
          </div>
          <article className="polaris-scope-next">
            <header>
              <span>
                <i /> Next system boundary
              </span>
              <b>Planned</b>
            </header>
            <ul>
              {next.map((item, index) => (
                <li key={item}>
                  <i aria-hidden="true" />
                  <small>0{index + 1}</small>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="polaris-decisions">
        <header>
          <div>
            <p className="eyebrow">06 / Engineering decisions</p>
            <h2>The product shape determined the architecture.</h2>
          </div>
          <p>
            Each choice turns a product pressure into a deliberate boundary. The
            cost stays visible alongside the behavior it makes possible.
          </p>
        </header>
        <div className="polaris-decision-grid">
          {decisions.map(([title, pressure, decision, cost, effect], index) => (
            <article key={title}>
              <div
                className={`polaris-decision-visual polaris-decision-visual-${index + 1}`}
                aria-hidden="true"
              >
                <div className="polaris-decision-scene">
                  <span className="polaris-decision-node node-a" />
                  <span className="polaris-decision-node node-b" />
                  <span className="polaris-decision-node node-c" />
                  <i className="polaris-decision-signal" />
                  <b className="polaris-decision-boundary" />
                </div>
                <em>
                  {
                    [
                      "Request released · task continues",
                      "Editor swapped · contract remains",
                      "Sources gathered · context made explicit",
                    ][index]
                  }
                </em>
              </div>
              <small>0{index + 1} / Decision</small>
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
