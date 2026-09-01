import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SiteFooter } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Thinking in Public | Dmitrii Lobanov",
  description:
    "Engineering knowledge through a structured wiki, serialized system stories, and long-form field notes.",
};

export default function ThinkingPage() {
  return (
    <main className="route-main">
      <PageIntro
        eyebrow="Thinking / Knowledge as a system"
        title={
          <>
            Engineering ideas
            <br />
            in three forms.
          </>
        }
        description="The format changes with the job: a wiki for durable learning, serialized incidents for connected reasoning, and essays for deep technical arguments."
      />
      <section className="route-section route-section-first">
        <div className="thinking-formats">
          <Link href="/thinking/knowledge-base" className="thinking-format">
            <span>01 / Structured knowledge</span>
            <h2>Frontend Engineering Wiki</h2>
            <p>
              A growing learning system with connected handbooks, explanations,
              references, and deliberate practice.
            </p>
            <div className="format-metrics">
              <strong>10 chapters</strong>
              <strong>224 answers</strong>
              <strong>12 tracks</strong>
            </div>
            <b>
              Explore the knowledge base <ArrowRight size={16} />
            </b>
          </Link>
          <Link
            href="/thinking/edge-case-inc"
            className="thinking-format thinking-format-dark"
          >
            <span>02 / Serialized investigations</span>
            <h2>Edge Case Inc.</h2>
            <p>
              One small production incident followed until its architecture,
              product, and business consequences become visible.
            </p>
            <div className="case-perspectives">
              <i>Runtime</i>
              <i>Architecture</i>
              <i>Product</i>
              <i>Value</i>
            </div>
            <b>
              Enter the company <ArrowRight size={16} />
            </b>
          </Link>
          <Link href="/thinking/articles" className="thinking-format">
            <span>03 / Long-form field notes</span>
            <h2>Architecture essays</h2>
            <p>
              Production-grounded arguments about system boundaries, product
              workflows, state, performance, and requirements.
            </p>
            <div className="article-signal" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <b>
              Read selected writing <ArrowRight size={16} />
            </b>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
