import { ArrowRight } from "lucide-react";
import { CaseStudySectionHeading } from "@/components/case-study-section-heading";

import {
  learningModes,
  architecture,
  editorialDecisions,
  evidence,
} from "@/content/case-studies/wiki";

const learningVisualMarkers = ["one", "two", "three", "four", "five"];
const evidenceVisualMarkers = ["one", "two", "three", "four", "five", "six"];

export function WikiCaseStudy() {
  return (
    <>
      <section className="wiki-section wiki-problem">
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
          <span className="wiki-map-node wiki-map-source wiki-map-docs">
            <b aria-hidden="true">{`{ }`}</b>
            Documentation
            <small>Source truth</small>
          </span>
          <span className="wiki-map-node wiki-map-source wiki-map-articles">
            <b aria-hidden="true">Aa</b>
            Articles
            <small>Deep context</small>
          </span>
          <span className="wiki-map-node wiki-map-source wiki-map-interviews">
            <b aria-hidden="true">?</b>
            Interview prompts
            <small>Active recall</small>
          </span>
          <span className="wiki-map-node wiki-map-source wiki-map-courses">
            <b aria-hidden="true">▶</b>
            Courses
            <small>Guided practice</small>
          </span>
          <div className="wiki-map-node wiki-map-core">
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

      <section className="wiki-section wiki-learning">
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

      <section className="wiki-section wiki-architecture">
        <CaseStudySectionHeading
          eyebrow="03 / Information architecture"
          title="The structure grows without becoming a content dump."
          description={
            <>
              Readers can navigate by goal, topic, or depth without losing their
              position in the wider system.
            </>
          }
        />
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
                {learningVisualMarkers
                  .slice(0, index === 1 ? 5 : 4)
                  .map((marker) => (
                    <i key={`${label}-visual-${marker}`} />
                  ))}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wiki-section wiki-editorial">
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

      <section className="wiki-section wiki-evidence">
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
                {evidenceVisualMarkers.map((marker) => (
                  <i key={`${label}-${marker}`} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
