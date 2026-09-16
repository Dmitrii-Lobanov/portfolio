import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { edgeCases } from "@/content/portfolio";
import "@/styles/articles.css";
import "@/styles/edge-case-index.css";

export const metadata: Metadata = {
  title: "Edge Case Inc. | Dmitrii Lobanov",
  description:
    "Visual engineering investigations: follow unexpected behavior through runtime ownership, user workflows, and business consequences.",
};
const characters = [
  [
    "Fox",
    "Runtime behavior",
    "What actually ran?",
    "Traces listeners, cleanup, and reconnection before naming the cause.",
  ],
  [
    "Bear",
    "System boundaries",
    "Who owns the lifecycle?",
    "Looks for the boundary that can enforce one active subscription.",
  ],
  [
    "Rabbit",
    "User workflows",
    "What did the person experience?",
    "Follows duplicate effects into notifications, task state, and decisions.",
  ],
  [
    "Hedgehog",
    "Evidence & value",
    "What can we prove?",
    "Tests the explanation against observable behavior and its consequences for trust.",
  ],
  [
    "Owl",
    "AI & automation",
    "What changes when we automate?",
    "Joins investigations where AI changes the mechanism or the responsibility.",
  ],
];
export default function EdgeCaseIndexPage() {
  const opening = edgeCases[0];
  return (
    <main className="route-main essays-page investigations-page">
      <section className="essays-hero">
        <div className="essays-hero-copy" data-reveal>
          <p className="eyebrow">Thinking / Edge Case Inc.</p>
          <h1>
            Small incident.
            <br />
            Whole-system story.
          </h1>
          <p>
            A fictional software company. Real engineering questions. Follow an
            unexpected behavior through the runtime, the architecture, and the
            people who depend on it.
          </p>
          <div className="essays-actions">
            {opening && (
              <Link
                className="button-tactile essays-primary"
                href={`/thinking/edge-case-inc/${opening.slug}`}
              >
                Open the first case <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
            <a className="route-link" href="#investigation-team">
              Meet the investigators <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="essays-instrument"
          data-reveal
          role="img"
          aria-label="One server event reaches two active listeners after reconnection, producing duplicate effects. The investigation asks who owns the subscription lifecycle."
        >
          <div className="essays-instrument-label">
            <span>Case 001 / Runtime trace</span>
            <span>Observe → explain</span>
          </div>
          <div className="essays-pressure investigation-input">
            <span>01 / The input</span>
            <strong>One event from the server.</strong>
            <div className="essays-contexts">
              <span>Connection re-established</span>
            </div>
          </div>
          <div className="investigation-rails" aria-hidden="true">
            <div>
              <i />
            </div>
            <div>
              <i />
            </div>
          </div>
          <div className="investigation-listeners">
            <span>Listener A · still active</span>
            <span>Listener B · registered</span>
          </div>
          <div className="investigation-result">
            <span>02 / The symptom</span>
            <strong>Two effects in the interface.</strong>
            <p>
              The transport reconnected. Did the previous subscription leave?
            </p>
          </div>
          <p className="essays-instrument-foot">
            Trace the behavior. Find the ownership boundary.
          </p>
        </div>
      </section>
      <section className="essays-orientation" aria-label="About the series">
        <div>
          <strong>{edgeCases.length.toString().padStart(2, "0")}</strong>
          <span>{edgeCases.length === 1 ? "open case" : "open cases"}</span>
        </div>
        <p>
          Each case follows one mechanism through four perspectives: production
          behavior, architecture, product workflows, and business value.
        </p>
        <span>Fictional team · real trade-offs</span>
      </section>
      <section
        className="essays-reading"
        aria-labelledby="investigation-directory-title"
      >
        <div className="essays-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / Case directory</p>
            <h2 id="investigation-directory-title">Start with the symptom.</h2>
          </div>
          <p>
            The opening investigation begins with a duplicate WebSocket effect.
            Follow the mechanism before deciding where the fix belongs.
          </p>
        </div>
        {edgeCases.map((item) => (
          <article className="investigation-case" key={item.slug} data-reveal>
            <div className="investigation-case-summary">
              <div className="essay-card-meta">
                <span>{item.number}</span>
                <small>{item.status}</small>
              </div>
              <p className="essay-card-tag">{item.mechanism}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link
                className="route-link"
                href={`/thinking/edge-case-inc/${item.slug}`}
              >
                Follow the investigation{" "}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="investigation-case-route">
              <p className="eyebrow">What you’ll investigate</p>
              <ol>
                {item.lenses.map((lens) => (
                  <li key={lens.name}>
                    <span>{lens.name}</span>
                    <strong>{lens.role}</strong>
                    <p>{lens.copy}</p>
                  </li>
                ))}
              </ol>
              <a
                className="route-link"
                href={item.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Read the series on LinkedIn{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>
      <section
        className="essays-reading"
        id="investigation-team"
        aria-labelledby="investigation-team-title"
      >
        <div className="essays-heading" data-reveal>
          <div>
            <p className="eyebrow">02 / The investigators</p>
            <h2 id="investigation-team-title">
              Different questions.
              <br />
              One shared trace.
            </h2>
          </div>
          <p>
            The characters make invisible behavior easier to discuss. Four
            follow the opening case; Owl joins when AI or automation changes the
            question.
          </p>
        </div>
        <div className="investigation-team">
          {characters.map(([name, focus, question, copy], index) => (
            <article key={name} data-reveal>
              <span className="investigation-character-mark" aria-hidden="true">
                0{index + 1}
              </span>
              <p className="essay-card-tag">{focus}</p>
              <h3>{name}</h3>
              <strong>{question}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="essays-context" data-reveal>
        <div>
          <p className="eyebrow">03 / Keep following the reasoning</p>
          <h2>
            From an incident
            <br />
            to a working principle.
          </h2>
          <p>
            Explore the architectural decisions behind product systems, or use
            the Engineering Wiki to study the underlying concepts.
          </p>
        </div>
        <nav aria-label="Related thinking">
          <Link className="route-link" href="/thinking/articles">
            Read the architecture essays{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="route-link" href="/thinking/knowledge-base">
            Explore the Engineering Wiki{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </section>
      <SiteFooter />
    </main>
  );
}
