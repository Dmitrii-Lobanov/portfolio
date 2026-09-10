import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { articles, edgeCases } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Thinking in Public | Dmitrii Lobanov",
  description:
    "Engineering knowledge through a structured wiki, serialized system stories, and production-grounded essays.",
};

const routes = [
  [
    "Build a mental model",
    "Start with structured knowledge",
    "/thinking/knowledge-base",
  ],
  [
    "Follow one mechanism",
    "Enter a serialized investigation",
    "/thinking/edge-case-inc",
  ],
  [
    "Evaluate a decision",
    "Read a production-grounded essay",
    "/thinking/articles",
  ],
];

function WikiVisual() {
  return (
    <div className="thinking-wiki-visual" aria-hidden="true">
      <span className="thinking-wiki-core">
        <small>Connected</small>
        <strong>Mental model</strong>
      </span>
      {["Browser", "React", "State", "Systems"].map((item) => (
        <i key={item}>
          <span>{item}</span>
        </i>
      ))}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M17 18 C31 18 34 45 49 51" />
        <path d="M83 18 C70 18 66 42 51 50" />
        <path d="M18 82 C31 82 37 60 49 51" />
        <path d="M83 82 C69 82 65 61 51 51" />
        <circle className="thinking-wiki-packet" r="1.35">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M17 18 C31 18 34 45 49 51 C66 42 70 18 83 18 C70 18 66 42 51 50 C65 61 69 82 83 82 C69 82 65 61 51 51 C37 60 31 82 18 82 C31 82 37 60 49 51 C34 45 31 18 17 18"
          />
        </circle>
      </svg>
    </div>
  );
}

function EdgeVisual() {
  return (
    <div className="thinking-edge-visual" aria-hidden="true">
      <div>
        <span>Incident</span>
        <strong>Duplicate event</strong>
      </div>
      <i />
      <i />
      <i />
      <i />
      <footer>
        <span>Runtime</span>
        <span>Architecture</span>
        <span>Product</span>
        <span>Value</span>
      </footer>
    </div>
  );
}

function EssayVisual() {
  return (
    <div className="thinking-essay-visual" aria-hidden="true">
      <header>
        <i />
        <i />
        <i />
        <span>Field note / decision record</span>
      </header>
      <div>
        <strong>Requirements shape architecture.</strong>
        <i />
        <i />
        <i />
        <i />
      </div>
      <footer>
        <span>Pressure</span>
        <i />
        <span>Decision</span>
        <i />
        <span>Evidence</span>
      </footer>
    </div>
  );
}

export default function ThinkingPage() {
  return (
    <main className="route-main thinking-route-v2">
      <section className="thinking-hero-v2">
        <p className="eyebrow">Thinking / Engineering knowledge</p>
        <div className="thinking-hero-layout">
          <div className="thinking-hero-copy">
            <h1>
              <span>Not a feed.</span>
              <br />A system for thinking.
            </h1>
            <p>
              Ideas are organized by the job they need to do: build a durable
              mental model, follow a production mechanism, or examine an
              architectural decision in depth.
            </p>
          </div>
          <div
            className="thinking-refinery"
            role="img"
            aria-label="Engineering questions becoming connected and reusable knowledge"
          >
            <header>
              <span>Knowledge system / active</span>
              <span>
                <i /> Signal connected
              </span>
            </header>
            <div className="thinking-refinery-stage">
              <div className="thinking-refinery-input">
                <small>Input</small>
                <strong>Production question</strong>
                <i />
                <i />
                <i />
              </div>
              <div className="thinking-refinery-core">
                <span>Engineering</span>
                <strong>Reasoning</strong>
                <i />
              </div>
              <div className="thinking-refinery-output">
                <small>Output</small>
                <strong>Reusable knowledge</strong>
                <i />
                <i />
                <i />
              </div>
              <b className="thinking-refinery-rail">
                <i />
              </b>
            </div>
            <footer>
              <span>Observe</span>
              <span>Connect</span>
              <span>Explain</span>
            </footer>
          </div>
        </div>
      </section>

      <section className="thinking-map-v2">
        <header className="thinking-heading-v2">
          <div>
            <p className="eyebrow">Knowledge practice</p>
            <h2>Three formats. One connected body of work.</h2>
          </div>
          <p>
            The format changes with the question. The underlying practice stays
            the same: understand the mechanism, expose the trade-off, and make
            the conclusion reusable.
          </p>
        </header>
        <div className="thinking-map-console">
          <div className="thinking-map-center">
            <small>Engineering</small>
            <strong>Knowledge</strong>
            <i />
          </div>
          <Link href="/thinking/knowledge-base">
            <i className="thinking-map-connector" aria-hidden="true" />
            <span>01</span>
            <strong>Structured learning</strong>
            <small>Durable mental models</small>
          </Link>
          <Link href="/thinking/edge-case-inc">
            <i className="thinking-map-connector" aria-hidden="true" />
            <span>02</span>
            <strong>Investigations</strong>
            <small>Mechanisms in motion</small>
          </Link>
          <Link href="/thinking/articles">
            <i className="thinking-map-connector" aria-hidden="true" />
            <span>03</span>
            <strong>Essays</strong>
            <small>Decisions in depth</small>
          </Link>
        </div>
      </section>

      <section className="thinking-library-v2">
        <header className="thinking-heading-v2">
          <div>
            <p className="eyebrow">01 / Structured knowledge</p>
            <h2>The durable learning system.</h2>
          </div>
          <p>
            Use the Wiki when the goal is understanding: concepts are connected
            to explanations, quick recall, and deliberate practice.
          </p>
        </header>
        <Link
          href="/thinking/knowledge-base"
          className="thinking-format-card thinking-format-featured"
        >
          <div className="thinking-format-copy">
            <span>Frontend Engineering Wiki</span>
            <h3>Learn deeply. Practice clearly.</h3>
            <p>
              A growing system that keeps individual answers connected to
              broader frontend mental models.
            </p>
            <div className="thinking-format-metrics">
              <strong>
                10 <small>chapters</small>
              </strong>
              <strong>
                224 <small>answers</small>
              </strong>
              <strong>
                12 <small>tracks</small>
              </strong>
            </div>
            <b>
              Explore the knowledge base <ArrowRight size={16} />
            </b>
          </div>
          <WikiVisual />
          <footer>
            <span>Understand</span>
            <span>Explain</span>
            <span>Recall</span>
            <span>Apply</span>
          </footer>
        </Link>

        <header className="thinking-heading-v2 thinking-supporting-heading">
          <div>
            <p className="eyebrow">02 / Reasoning in context</p>
            <h2>Follow the incident—or examine the decision.</h2>
          </div>
          <p>
            Use the investigations for connected narrative and the essays for
            concentrated architectural arguments.
          </p>
        </header>
        <div className="thinking-supporting-grid">
          <Link href="/thinking/edge-case-inc" className="thinking-format-card">
            <EdgeVisual />
            <div className="thinking-format-copy">
              <span>Serialized investigations</span>
              <h3>Edge Case Inc.</h3>
              <p>
                One small production incident followed through runtime behavior,
                architecture, product workflow, and business value.
              </p>
              <strong>{edgeCases.length} published case</strong>
              <b>
                Enter the company <ArrowRight size={16} />
              </b>
            </div>
          </Link>
          <Link href="/thinking/articles" className="thinking-format-card">
            <EssayVisual />
            <div className="thinking-format-copy">
              <span>Long-form field notes</span>
              <h3>Architecture essays</h3>
              <p>
                Production-grounded arguments about requirements, system
                boundaries, state, performance, and product workflows.
              </p>
              <strong>{articles.length} selected essays</strong>
              <b>
                Read selected writing <ArrowRight size={16} />
              </b>
            </div>
          </Link>
        </div>
      </section>

      <section className="thinking-route-guide">
        <div>
          <p className="eyebrow">03 / Choose by need</p>
          <h2>Start with the question you have.</h2>
        </div>
        <div className="thinking-route-list">
          {routes.map(([need, destination, href], index) => (
            <Link href={href} key={need}>
              <span>0{index + 1}</span>
              <strong>{need}</strong>
              <small>{destination}</small>
              <ArrowRight size={17} />
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
