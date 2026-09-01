import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SiteFooter } from "@/components/editorial";
import { edgeCases } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Edge Case Inc. | Dmitrii Lobanov",
  description:
    "Serialized engineering stories following one production incident through runtime behavior, architecture, product workflows, and business value.",
};

const characters = [
  ["FOX", "Behavior", "Investigates what the system actually did."],
  ["RABBIT", "User task", "Keeps the person and workflow visible."],
  ["BEAR", "Boundaries", "Examines ownership and long-term consequences."],
  ["HEDGEHOG", "Evidence", "Tests explanations against observable facts."],
  ["OWL", "Automation", "Joins when AI changes the equation."],
];

export default function EdgeCaseIndexPage() {
  return (
    <main className="route-main edge-case-index">
      <PageIntro
        eyebrow="Thinking / Serialized investigations"
        title={
          <>
            Welcome to
            <br />
            Edge Case Inc.
          </>
        }
        description="A fictional miniature software company where the smallest technical behavior is followed through architecture, user workflows, and business outcomes."
      />
      <section className="edge-case-method">
        <div className="incident-core">
          <span>ONE</span>
          <strong>production incident</strong>
        </div>
        <div className="perspective-orbit">
          {[
            "Production engineering",
            "Architecture in practice",
            "Product engineering",
            "Business value",
          ].map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="route-section characters-section">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">The team</p>
            <h2>Five lenses, one mechanism.</h2>
          </div>
          <p>
            The characters make invisible system behavior physical. Their
            questions remain grounded in real engineering trade-offs.
          </p>
        </div>
        <div className="character-grid">
          {characters.map(([name, focus, copy]) => (
            <article key={name}>
              <span>{name.slice(0, 1)}</span>
              <small>{focus}</small>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="route-section case-directory">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Case directory</p>
            <h2>Something unexpected happens every week.</h2>
          </div>
        </div>
        {edgeCases.map((edgeCase) => (
          <Link
            className="edge-case-card"
            href={`/thinking/edge-case-inc/${edgeCase.slug}`}
            key={edgeCase.slug}
          >
            <div>
              <span>{edgeCase.number}</span>
              <small>{edgeCase.status}</small>
            </div>
            <div>
              <p>{edgeCase.mechanism}</p>
              <h3>{edgeCase.title}</h3>
              <p>{edgeCase.summary}</p>
            </div>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
