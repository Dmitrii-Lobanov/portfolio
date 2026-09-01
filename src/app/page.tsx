import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard, SiteFooter } from "@/components/editorial";
import { projects } from "@/content/portfolio";

const proof = [
  ["6+ yrs", "building production systems"],
  ["300k+", "users at platform scale"],
  ["15+", "applications migrated safely"],
  ["3×", "measured rendering improvement"],
  ["224", "technical answers published"],
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero-section editorial-home-hero">
        <div className="hero-status fade-in">
          <span className="status-dot" aria-hidden="true" />
          Senior frontend engineer · Open to ambitious product systems
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
                <strong>Complex frontend systems</strong>
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
              <span>Frontend architecture · Product engineering</span>
              <span>React · TypeScript · System design</span>
            </div>
            <h2 className="hero-statement">
              I turn complex workflows
              <span>into reliable frontend systems.</span>
            </h2>
            <p className="hero-intro">
              I work where product logic, state, performance, permissions, and
              long-lived delivery meet—and make the architecture understandable
              enough for teams to keep changing it safely.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">
                Explore selected work{" "}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" href="/about">
                How I work <ArrowRight size={17} aria-hidden="true" />
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
            <h2>One production system, examined properly.</h2>
          </div>
          <p>
            Four and a half years of product evolution distilled into its
            essential workflows, boundaries, identity model, and trade-offs.
          </p>
        </div>
        <Link href="/work/cpa-platform" className="home-flagship">
          <div className="home-flagship-copy">
            <span>Featured production case</span>
            <h3>CPA product platform</h3>
            <p>
              Two connected interfaces serving operational managers and
              partners—coordinating permissions, analytics, documents,
              impersonation, and real-time workflows at scale.
            </p>
            <strong>
              Read the case study <ArrowRight size={16} aria-hidden="true" />
            </strong>
          </div>
          <div
            className="home-flagship-system"
            role="img"
            aria-label="Manager interface and partner interface connected through shared platform foundations"
          >
            <div>
              <small>Operations</small>
              <b>Manager UI</b>
              <span>Products · offers · approvals</span>
            </div>
            <i aria-hidden="true" />
            <div className="home-flagship-core">
              <small>Shared platform</small>
              <b>Identity + domains</b>
              <span>Auth · state · API · events</span>
            </div>
            <i aria-hidden="true" />
            <div>
              <small>Self-service</small>
              <b>Partner UI</b>
              <span>Offers · analytics · onboarding</span>
            </div>
          </div>
          <div className="home-flagship-metrics">
            <span>
              <strong>300k+</strong> users
            </span>
            <span>
              <strong>4.5 yrs</strong> evolution
            </span>
            <span>
              <strong>15+</strong> apps migrated
            </span>
          </div>
        </Link>

        <div className="home-public-heading">
          <p className="eyebrow">Public proof</p>
          <p className="home-public-description">
            Products you can open, inspect, and challenge.
          </p>
        </div>
        <div className="project-grid home-public-grid">
          {projects.slice(1, 3).map((project) => (
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
            <h2>The reasoning is part of the work.</h2>
          </div>
          <p>
            I document decisions at different resolutions: a structured learning
            system, incident narratives, and production-grounded essays.
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
              A connected curriculum for learning, explaining, recalling, and
              practising frontend engineering across 12 tracks.
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
              Production incidents followed from the first technical symptom to
              their architecture, product, and business consequences.
            </p>
            <strong>Open Case 001 →</strong>
          </Link>
          <Link className="editorial-card" href="/thinking/articles">
            <span>Long-form field notes</span>
            <h3>Architecture essays</h3>
            <p>
              Field notes on requirements, domain boundaries, identity, state,
              performance, and long-lived product delivery.
            </p>
            <strong>Read selected essays →</strong>
          </Link>
        </div>
      </section>

      <section className="route-section home-about">
        <p className="eyebrow">03 / Working model</p>
        <div className="home-about-grid">
          <h2>Make the next safe change easier.</h2>
          <div>
            <p>
              I begin with the workflow and the invariant, locate the real
              constraint, assign ownership, choose the smallest mechanism that
              provides the guarantee, and make the reasoning reusable.
            </p>
            <Link className="route-link" href="/about">
              See my working model <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section home-contact">
        <p className="eyebrow eyebrow-light">04 / Start a conversation</p>
        <div className="contact-grid">
          <h2>Building a product whose complexity is starting to show?</h2>
          <div>
            <p>
              I am interested in senior frontend and product engineering work
              where reliability, architecture, and clear technical communication
              genuinely matter.
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
