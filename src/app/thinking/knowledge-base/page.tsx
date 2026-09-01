import type { Metadata } from "next";
import Link from "next/link";
import { ExternalAction, PageIntro, SiteFooter } from "@/components/editorial";
import { externalLinks } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Frontend Engineering Wiki | Dmitrii Lobanov",
  description:
    "A structured frontend learning system with handbooks, explanations, references, and deliberate practice.",
};

const tracks = [
  "JavaScript",
  "TypeScript",
  "React",
  "Browser platform",
  "System design",
  "Performance",
  "Testing",
  "Security",
];

export default function KnowledgeBasePage() {
  return (
    <main className="route-main">
      <PageIntro
        eyebrow="Thinking / Structured knowledge"
        title={
          <>
            Learn deeply.
            <br />
            Practice clearly.
          </>
        }
        description="The Frontend Engineering Wiki organizes durable mental models, concise explanations, quick recall, and practice without losing the context connecting them."
      />
      <section className="knowledge-system">
        <div className="knowledge-metrics">
          <div>
            <strong>10</strong>
            <span>chapters available</span>
          </div>
          <div>
            <strong>224</strong>
            <span>answers available</span>
          </div>
          <div>
            <strong>12</strong>
            <span>knowledge tracks</span>
          </div>
        </div>
        <div className="learning-loop">
          {[
            ["01", "Learn", "Build a connected mental model"],
            ["02", "Explain", "Practice concise reasoning"],
            ["03", "Recall", "Retrieve facts and comparisons"],
            ["04", "Practice", "Turn knowledge into skill"],
          ].map(([number, name, copy]) => (
            <div key={name}>
              <span>{number}</span>
              <strong>{name}</strong>
              <p>{copy}</p>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
      <section className="route-section knowledge-tracks">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Knowledge tracks</p>
            <h2>One system, multiple paths.</h2>
          </div>
          <p>
            Readers can follow the phased curriculum or enter directly through
            the engineering problem they need to solve.
          </p>
        </div>
        <div className="track-cloud">
          {tracks.map((track, index) => (
            <span key={track}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {track}
            </span>
          ))}
        </div>
        <div className="project-actions knowledge-actions">
          <ExternalAction href={externalLinks.wiki}>
            Open the wiki
          </ExternalAction>
          <Link className="route-link" href="/work/frontend-engineering-wiki">
            Read the product case study →
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
