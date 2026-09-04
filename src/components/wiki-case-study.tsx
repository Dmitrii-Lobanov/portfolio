import { ArrowRight } from "lucide-react";

const learningModes = [
  [
    "01",
    "Understand",
    "Build the mental model through structured, first-principles explanations.",
  ],
  [
    "02",
    "Explain",
    "Turn understanding into concise answers for interviews, reviews, and technical conversations.",
  ],
  [
    "03",
    "Recall",
    "Retrieve important distinctions, rules, and terminology through compact references.",
  ],
  [
    "04",
    "Apply",
    "Reinforce the concept through exercises, debugging scenarios, and implementation prompts.",
  ],
];

const architecture = [
  [
    "Direction",
    "Tracks provide a route",
    "Twelve learning tracks group related ideas into navigable paths without preventing exploration of individual topics.",
  ],
  [
    "Relationships",
    "Links expose the system",
    "Explanations connect prerequisites, adjacent concepts, practical consequences, and deeper material.",
  ],
  [
    "Depth",
    "Content modes stay distinct",
    "Long explanations, compact answers, references, and exercises each keep the shape appropriate to their purpose.",
  ],
];

const editorialDecisions = [
  [
    "Depth should be intentional",
    "One reader may need a five-minute reminder; another needs the complete mental model.",
    "Separate quick answers from deep explanations and link them in both directions.",
    "Concision no longer requires sacrificing depth.",
  ],
  [
    "Navigation should teach",
    "A flat article list hides how frontend concepts depend on one another.",
    "Organize material into tracks and expose relationships between topics.",
    "The information architecture becomes part of the learning experience.",
  ],
  [
    "Practice should follow reasoning",
    "Passive reading can feel clear without producing durable understanding.",
    "Connect explanations to recall prompts, questions, and practical exercises.",
    "Knowledge is tested through use rather than page completion.",
  ],
  [
    "Growth should remain visible",
    "An evolving curriculum will always contain unfinished areas.",
    "Show roadmap and coverage states instead of pretending the collection is complete.",
    "Expansion remains understandable and honest.",
  ],
];

const evidence = [
  ["10", "Chapters", "Subject areas forming the curriculum backbone"],
  ["224", "Explanations", "Focused answers connected to broader mental models"],
  ["12", "Tracks", "Guided paths through related engineering concepts"],
  [
    "4",
    "Learning modes",
    "Different interfaces for understanding and practice",
  ],
];

export function WikiCaseStudy() {
  return (
    <>
      <section className="wiki-problem">
        <div className="wiki-problem-copy">
          <p className="eyebrow">01 / The problem</p>
          <h2>
            Frontend knowledge is abundant. Finding the right explanation is
            difficult.
          </h2>
          <p>
            Documentation, articles, interview lists, and courses each solve a
            different part of learning. The Wiki connects them into a route from
            first understanding to confident application.
          </p>
        </div>
        <div
          className="wiki-connection-map"
          role="img"
          aria-label="Separate knowledge formats converging into one connected mental model"
        >
          <header>
            <span>Knowledge fragments / connection map</span>
            <span>
              <i /> System linking
            </span>
          </header>
          <svg viewBox="0 0 640 330" aria-hidden="true">
            <defs>
              <linearGradient id="wiki-signal" x1="0" x2="1">
                <stop offset="0" stopColor="#35bec9" />
                <stop offset="1" stopColor="#ef6b3f" />
              </linearGradient>
            </defs>
            <path id="wiki-route-docs" d="M126 78 C220 78 214 165 306 165" />
            <path
              id="wiki-route-interviews"
              d="M126 252 C220 252 214 165 306 165"
            />
            <path
              id="wiki-route-articles"
              d="M514 78 C420 78 426 165 334 165"
            />
            <path
              id="wiki-route-courses"
              d="M514 252 C420 252 426 165 334 165"
            />
            {[
              ["#wiki-route-docs", "0s"],
              ["#wiki-route-articles", "-1.2s"],
              ["#wiki-route-interviews", "-2.4s"],
              ["#wiki-route-courses", "-3.6s"],
            ].map(([route, begin]) => (
              <circle className="wiki-map-packet" r="5" key={route}>
                <animateMotion
                  dur="4.8s"
                  begin={begin}
                  repeatCount="indefinite"
                >
                  <mpath href={route} />
                </animateMotion>
              </circle>
            ))}
          </svg>
          <span className="wiki-map-source wiki-map-docs">
            <b aria-hidden="true">{`{ }`}</b>
            Documentation
            <small>Source truth</small>
          </span>
          <span className="wiki-map-source wiki-map-articles">
            <b aria-hidden="true">Aa</b>
            Articles
            <small>Deep context</small>
          </span>
          <span className="wiki-map-source wiki-map-interviews">
            <b aria-hidden="true">?</b>
            Interview prompts
            <small>Active recall</small>
          </span>
          <span className="wiki-map-source wiki-map-courses">
            <b aria-hidden="true">▶</b>
            Courses
            <small>Guided practice</small>
          </span>
          <div className="wiki-map-core">
            <small>Connected</small>
            <strong>Mental model</strong>
          </div>
          <footer>
            <span>Understand</span>
            <i />
            <span>Explain</span>
            <i />
            <span>Apply</span>
          </footer>
        </div>
      </section>

      <section className="wiki-learning">
        <header>
          <p className="eyebrow">02 / The learning loop</p>
          <h2>One topic. Four useful ways to engage with it.</h2>
        </header>
        <div
          className="wiki-learning-loop"
          aria-label="Learning loop"
          role="img"
        >
          {learningModes.map(([index, title, copy], modeIndex) => (
            <div className="wiki-learning-step" key={title}>
              <article>
                <small>{index}</small>
                <div
                  className={`wiki-learning-visual wiki-learning-visual-${modeIndex + 1}`}
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
              {modeIndex < learningModes.length - 1 && (
                <ArrowRight aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="wiki-architecture">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">03 / Information architecture</p>
            <h2>The structure grows without becoming a content dump.</h2>
          </div>
          <p>
            Readers can navigate by goal, topic, or depth without losing their
            position in the wider system.
          </p>
        </div>
        <div className="wiki-architecture-grid">
          {architecture.map(([label, title, copy], index) => (
            <article key={title}>
              <span>
                0{index + 1} / {label}
              </span>
              <div
                className={`wiki-architecture-visual architecture-visual-${index + 1}`}
                aria-hidden="true"
              >
                {Array.from({ length: index === 1 ? 5 : 4 }, (_, item) => (
                  <i key={`${label}-visual-${item}`} />
                ))}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wiki-editorial">
        <header>
          <p className="eyebrow">04 / Editorial decisions</p>
          <h2>Content is designed as deliberately as an interface.</h2>
        </header>
        <div className="wiki-editorial-grid">
          {editorialDecisions.map(
            ([title, constraint, decision, result], index) => (
              <article key={title}>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <dl>
                  <div>
                    <dt>Pressure</dt>
                    <dd>{constraint}</dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>{decision}</dd>
                  </div>
                </dl>
                <footer>
                  <i />
                  {result}
                </footer>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="wiki-evidence">
        <div className="wiki-evidence-head">
          <p className="eyebrow">05 / Shape of the system</p>
          <h2>Evidence of structure - not vanity metrics</h2>
        </div>
        <div className="wiki-evidence-grid">
          {evidence.map(([number, label, copy], index) => (
            <article
              className={`wiki-evidence-card visual-${index + 1}`}
              data-value={number}
              key={label}
            >
              <strong>{number}</strong>
              <span>{label}</span>
              <p>{copy}</p>
              <div
                className="wiki-evidence-visual"
                data-label={
                  ["Coverage", "Connected", "In progress", "Modes"][index]
                }
                aria-hidden="true"
              >
                <em>
                  {["Coverage", "Connected", "In progress", "Modes"][index]}
                </em>
                {Array.from({ length: 6 }, (_, item) => (
                  <i key={`${label}-${item}`} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
