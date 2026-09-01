import type { Metadata } from "next";
import { PageIntro, SiteFooter } from "@/components/editorial";

export const metadata: Metadata = { title: "About | Dmitrii Lobanov" };

const method = [
  [
    "01",
    "Understand the workflow",
    "Find the user task and the business invariant before discussing implementation.",
  ],
  [
    "02",
    "Locate the constraint",
    "Separate real scale, security, delivery, and organizational pressure from imagined complexity.",
  ],
  [
    "03",
    "Define ownership",
    "Give data, state, events, and lifecycle responsibilities an explicit home.",
  ],
  [
    "04",
    "Choose the mechanism",
    "Select the smallest design that can provide the required guarantee.",
  ],
  [
    "05",
    "Measure and explain",
    "Verify the outcome and turn the lesson into knowledge the next engineer can reuse.",
  ],
];

export default function AboutPage() {
  return (
    <main className="route-main">
      <PageIntro
        eyebrow="About / Engineer and educator"
        title={
          <>
            Implementation is
            <br />
            only one part.
          </>
        }
        description="I work between product engineering and architecture: shipping the workflow, improving the system underneath it, and making the reasoning visible to the team."
      />
      <section className="about-story">
        <div>
          <p className="eyebrow">Professional focus</p>
          <h2>Complex products need clear boundaries.</h2>
        </div>
        <div>
          <p>
            I am a Senior Frontend and Product Engineer with 6+ years of
            experience building React and TypeScript systems shaped by real
            operational complexity.
          </p>
          <p>
            My strongest work sits where user workflows, data ownership,
            performance, permissions, and long-lived delivery meet. I care about
            architecture because it changes how safely people can ship—not
            because diagrams look impressive.
          </p>
        </div>
      </section>
      <section className="route-section method-section">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Working model</p>
            <h2>From ambiguity to a defensible decision.</h2>
          </div>
        </div>
        <div className="method-list">
          {method.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="route-section experience-summary">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Built through production pressure.</h2>
          </div>
        </div>
        <article>
          <div>
            <span>2021 — 2026</span>
            <strong>Tinkoff / T-Bank</strong>
          </div>
          <div>
            <h3>Senior Frontend Engineer</h3>
            <p>
              Built and evolved a large CPA platform spanning partner and
              internal operational products. Worked across architecture,
              performance, design foundations, real-time workflows, complex data
              interfaces, and migration strategy.
            </p>
          </div>
          <ul>
            <li>300,000+ users</li>
            <li>15+ applications migrated</li>
            <li>3× rendering improvement</li>
          </ul>
        </article>
        <div className="contribution-grid">
          <div>
            <span>Speaking</span>
            <h3>Technical meetup speaker</h3>
            <p>
              Shared practical lessons about state management, bundlers,
              architecture, performance, and long-term maintainability.
            </p>
          </div>
          <div>
            <span>Mentoring</span>
            <h3>Graduate project mentor</h3>
            <p>
              Guided students from product idea to a production-oriented
              full-stack React application.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
