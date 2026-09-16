import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  ListChecks,
  MessageSquareText,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { knowledgeTracks, learningModes } from "@/content/knowledge-base";
import { externalLinks } from "@/content/portfolio";
import "@/styles/knowledge-base.css";

export const metadata: Metadata = {
  title: "Frontend Engineering Wiki | Dmitrii Lobanov",
  description:
    "Connected frontend handbooks and interview Q&A, with a growing roadmap for references and deliberate practice.",
};

const modeIcons = [BookOpen, MessageSquareText, ListChecks, Code2];

export default function KnowledgeBasePage() {
  return (
    <main className="route-main kb-page">
      <section className="kb-hero">
        <div className="kb-hero-copy" data-reveal>
          <p className="eyebrow">Thinking / Frontend Engineering Wiki</p>
          <h1>
            Knowledge you can explain <span>and apply.</span>
          </h1>
          <p>
            Connected explanations for frontend engineers who want to understand
            the mechanism, articulate the trade-offs, and carry the reasoning
            into their work.
          </p>
          <div className="kb-actions">
            <a
              className="button-tactile kb-primary"
              href={externalLinks.wiki}
              target="_blank"
              rel="noreferrer"
            >
              Open the Wiki <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link className="route-link" href="/work/frontend-engineering-wiki">
              The product case study <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div
          className="kb-instrument"
          data-depth-stage
          data-reveal
          role="img"
          aria-label="One topic, closures, connects a mental model to an explanation, a reference, and practice. Handbooks and Q&A are available; reference and practice are on the roadmap."
        >
          <div className="kb-instrument-head">
            <span>One topic / connected understanding</span>
            <span>JS · 06</span>
          </div>
          <div className="kb-concept" data-depth="0.12">
            <span>Start with the mechanism</span>
            <strong>Closures</strong>
            <p>
              The function returns.
              <br />
              The binding stays reachable.
            </p>
            <div className="kb-binding">
              <code>count</code>
              <i aria-hidden="true" />
              <code>next()</code>
            </div>
          </div>
          <div className="kb-signal" aria-hidden="true">
            <i />
          </div>
          <div className="kb-output" data-depth="0.2">
            <span>Carry it into the explanation</span>
            <strong>
              Access to a binding.
              <br />
              Not a frozen value.
            </strong>
            <div className="kb-output-tags">
              <span>Scope</span>
              <span>Callbacks</span>
              <span>Retained state</span>
            </div>
          </div>
          <div className="kb-instrument-foot">
            <span>Understand the relationship.</span>
            <span>Then explain the behavior.</span>
          </div>
        </div>
      </section>

      <section className="kb-evidence" aria-label="Wiki coverage" data-reveal>
        <div>
          <strong>10</strong>
          <span>chapters available</span>
        </div>
        <div>
          <strong>224</strong>
          <span>answers available</span>
        </div>
        <div>
          <strong>{knowledgeTracks.length}</strong>
          <span>tracks in the curriculum</span>
        </div>
        <p>
          A growing system.
          <br />
          Availability is shown at each entry point.
        </p>
      </section>

      <section className="kb-modes" aria-labelledby="kb-modes-title">
        <header className="kb-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / One topic, four modes</p>
            <h2>
              Go deeper.
              <br />
              Then make it useful.
            </h2>
          </div>
          <p>
            Start with closures: an available chapter connects lexical scope to
            mutation, callbacks, and memory. Handbooks and Q&A are ready to
            explore; the reference and practice modes are still growing.
          </p>
        </header>
        <div className="kb-mode-grid">
          {learningModes.map((mode, index) => {
            const Icon = modeIcons[index];
            return (
              <article
                className={`kb-mode${mode.status === "Roadmap" ? " kb-mode-planned" : ""}`}
                key={mode.name}
                data-reveal
              >
                <div className="kb-mode-top">
                  <span>
                    {mode.number} / {mode.name}
                  </span>
                  <small>{mode.status}</small>
                </div>
                <Icon size={25} aria-hidden="true" />
                <h3>{mode.title}</h3>
                <p>{mode.copy}</p>
                <a
                  className="route-link"
                  href={`${externalLinks.wiki.replace(/\/$/, "")}/${mode.path}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {mode.action}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
        <div className="kb-example" data-reveal>
          <div>
            <span className="eyebrow">
              Try the mental model / example prompt
            </span>
            <h3>Two calls. One shared binding.</h3>
            <p>
              What does each call return? Explain why the value changes even
              though <code>makeCounter</code> has finished.
            </p>
          </div>
          <div>
            <pre>
              <code>{`function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nnext(); // ?\nnext(); // ?`}</code>
            </pre>
            <details className="kb-answer">
              <summary>
                Reveal the reasoning <ArrowRight size={15} aria-hidden="true" />
              </summary>
              <p>
                The calls return <strong>1</strong> and <strong>2</strong>. Both
                use the same captured <code>count</code> binding. Returning from{" "}
                <code>makeCounter</code> does not remove that binding while{" "}
                <code>next</code> still retains access to it.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="kb-tracks" aria-labelledby="kb-tracks-title">
        <header className="kb-heading" data-reveal>
          <div>
            <p className="eyebrow">02 / Find your entry point</p>
            <h2>
              Follow the question.
              <br />
              Choose a path.
            </h2>
          </div>
          <p>
            All 12 curriculum tracks are shown here. Start with available
            JavaScript material, explore expanding subjects, or inspect the
            phased roadmap for what comes next.
          </p>
        </header>
        <div className="kb-track-grid">
          {knowledgeTracks.map((track, index) => (
            <a
              className="kb-track"
              href={`${externalLinks.wiki.replace(/\/$/, "")}/${track.path}`}
              key={track.path}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              <div className="kb-track-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small
                  className={
                    track.status === "Available" || track.status === "Expanding"
                      ? "kb-status-active"
                      : undefined
                  }
                >
                  {track.status}
                </small>
              </div>
              <h3>{track.name}</h3>
              <p>{track.copy}</p>
              <span className="kb-track-action">
                Explore{" "}
                {track.status.startsWith("Phase") ? "the roadmap" : "the track"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>
      <div className="kb-closing" data-reveal>
        <p>
          Start with one concept.
          <br />
          <strong>Follow the connections.</strong>
        </p>
        <a
          className="button-tactile kb-primary"
          href={`${externalLinks.wiki.replace(/\/$/, "")}/javascript/handbook`}
          target="_blank"
          rel="noreferrer"
        >
          Start with JavaScript
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <SiteFooter />
    </main>
  );
}
