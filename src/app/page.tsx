import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard, SiteFooter } from "@/components/editorial";
import { projects } from "@/content/portfolio";

const proof = [
  ["6+", "years in production"],
  ["300k+", "users served"],
  ["15+", "applications migrated"],
  ["3×", "rendering improvement"],
  ["224", "published answers"],
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero-section editorial-home-hero">
        <div className="hero-status fade-in">
          <span className="status-dot" aria-hidden="true" />
          Senior frontend and product engineer
        </div>
        <div className="hero-grid">
          <div className="hero-identity fade-in fade-in-delay-1">
            <h1 className="hero-name">
              Dmitrii <span>Lobanov</span>
            </h1>
          </div>
          <div className="portrait-island fade-in fade-in-delay-2">
            <Image
              src="/dmitrii-editorial-portrait-polished.png"
              alt="Dmitrii Lobanov"
              width={1106}
              height={1408}
              className="portrait-image"
              priority
            />
            <div className="portrait-caption">
              <div>
                <span>Focus</span>
                <strong>Reliable product systems</strong>
              </div>
              <div>
                <span>Current signal</span>
                <strong>
                  <i className="availability-dot" aria-hidden="true" />{" "}
                  Available
                </strong>
              </div>
            </div>
          </div>
          <div className="hero-details fade-in fade-in-delay-1">
            <div className="hero-role">
              <span>Architecture · Reliability · Product</span>
              <span>React · TypeScript · Full stack</span>
            </div>
            <h2 className="hero-statement">
              I build reliable systems
              <span>and explain why they work.</span>
            </h2>
            <p className="hero-intro">
              I design frontend systems for complex products—and turn the
              decisions behind them into tools, case studies, and reusable
              engineering knowledge.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">
                Explore selected work{" "}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                className="button button-secondary"
                href="/thinking/edge-case-inc"
              >
                Read Edge Case Inc.{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="home-proof-grid fade-in fade-in-delay-3">
          {proof.map(([value, label]) => (
            <div key={label} className="proof-card">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="route-section home-featured-work">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">01 / Featured work</p>
            <h2>Evidence before claims.</h2>
          </div>
          <p>
            Production experience, public products, and the decisions that made
            each system reliable.
          </p>
        </div>
        <div className="project-grid project-grid-featured">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <Link className="route-link section-route-link" href="/work">
          View all systems <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>

      <section className="route-section thinking-preview">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">02 / Thinking in public</p>
            <h2>Engineering knowledge, in three forms.</h2>
          </div>
          <p>
            Each format solves a different communication problem: durable
            learning, serialized investigation, or long-form analysis.
          </p>
        </div>
        <div className="editorial-grid">
          <Link
            className="editorial-card editorial-card-accent"
            href="/thinking/knowledge-base"
          >
            <span>Structured knowledge</span>
            <h3>Frontend Engineering Wiki</h3>
            <p>
              Connected handbooks, 224 answers, references, and deliberate
              practice across 12 tracks.
            </p>
            <strong>Learn · Explain · Recall · Practice</strong>
          </Link>
          <Link
            className="editorial-card editorial-card-dark"
            href="/thinking/edge-case-inc"
          >
            <span>Serialized investigations</span>
            <h3>Edge Case Inc.</h3>
            <p>
              One incident followed through runtime behavior, architecture,
              product workflows, and business value.
            </p>
            <strong>Open Case 001 →</strong>
          </Link>
          <Link className="editorial-card" href="/thinking/articles">
            <span>Long-form field notes</span>
            <h3>Architecture essays</h3>
            <p>
              Production-grounded writing about requirements, boundaries,
              performance, and product engineering.
            </p>
            <strong>Read selected essays →</strong>
          </Link>
        </div>
      </section>

      <section className="route-section home-about">
        <p className="eyebrow">03 / About</p>
        <div className="home-about-grid">
          <h2>Implementation is only one part of engineering.</h2>
          <div>
            <p>
              I work where product workflows, architecture, and delivery
              constraints meet. The goal is not a fashionable abstraction—it is
              a system that makes the next safe change easier.
            </p>
            <Link className="route-link" href="/about">
              How I work <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section home-contact">
        <p className="eyebrow eyebrow-light">04 / Start a conversation</p>
        <div className="contact-grid">
          <h2>Have a difficult frontend problem?</h2>
          <div>
            <p>
              I am interested in architecture-heavy frontend and product work
              where reliability and clarity genuinely matter.
            </p>
            <Link className="button button-primary" href="/contact">
              Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <SiteFooter />
      </section>
    </main>
  );
}
