import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
} from "lucide-react";
import Image from "next/image";
import {
  CaseStudyVisuals,
  DecisionMatrix,
  EngineeringScope,
  PublicLab,
  WritingConstellation,
} from "@/components/content-visuals";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { MotionEffects } from "@/components/motion-effects";

const mediumProfile = "https://medium.com/@dmitriilobanov3";
const linkedinProfile = "https://www.linkedin.com/in/dmitrii-lobanov/";

const articles = [
  {
    index: "01",
    tag: "System design",
    readTime: "30 min read",
    title: "Frontend System Design of a Large CPA Platform",
    description:
      "A deep dive into domain boundaries, impersonation, server state, real-time events, and the decisions behind a long-lived React platform.",
    href: `${mediumProfile}/frontend-system-design-of-a-large-cpa-platform-b0c448f20ba4`,
  },
  {
    index: "02",
    tag: "Product engineering",
    readTime: "15 min read",
    title: "Product Workflows Behind a Complex Fintech Frontend",
    description:
      "How offer flows, analytics, onboarding, permissions, and documents became one coherent product experience.",
    href: `${mediumProfile}/building-a-large-cpa-platform-at-tinkoff-product-workflows-behind-a-complex-fintech-frontend-edb82069ad2c`,
  },
  {
    index: "03",
    tag: "Architecture",
    readTime: "8 min read",
    title: "Why Requirements Define the Architecture",
    description:
      "Why frontend architecture should begin with constraints and measurable qualities—not fashionable implementation patterns.",
    href: `${mediumProfile}/frontend-system-design-beyond-patterns-why-requirements-define-the-architecture-e1ba289702db`,
  },
];

const principles = [
  {
    number: "01",
    title: "Start with constraints",
    text: "Architecture follows product workflows, scale, team boundaries, security, and performance targets—not the other way around.",
    proof: "Requirements → architecture",
  },
  {
    number: "02",
    title: "Make ownership explicit",
    text: "Server state, session context, shared application state, and local UI state need distinct owners and update paths.",
    proof: "Clear state boundaries",
  },
  {
    number: "03",
    title: "Measure the hot path",
    text: "Profile production-like workloads, optimize the actual bottleneck, and ship the result as a metric the team can defend.",
    proof: "3× rendering gain",
  },
  {
    number: "04",
    title: "Prefer evolution",
    text: "Sequence migrations so product teams can keep delivering. A safe path forward usually beats a heroic rewrite.",
    proof: "15+ apps migrated",
  },
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <section className="hero-section" id="top">
        <div className="hero-status fade-in">
          <span className="status-dot" aria-hidden="true" />
          Senior frontend engineer · Open to ambitious systems
        </div>

        <div className="hero-grid">
          <div className="hero-identity fade-in fade-in-delay-1">
            <h1 className="hero-name">
              Dmitrii
              <span>Lobanov</span>
            </h1>
          </div>

          <div className="portrait-island fade-in fade-in-delay-2">
            <div className="portrait-grid" aria-hidden="true" />
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
                <span>Based in</span>
                <strong>Frontend systems</strong>
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
              <span>Senior Frontend Engineer</span>
              <span>Architecture · Performance · Product systems</span>
            </div>
            <h2 className="hero-statement">
              I make complex
              <span>frontends feel simple.</span>
            </h2>
            <p className="hero-intro">
              I design and build high-performance web platforms where product
              complexity, large datasets, and long-lived architecture meet.
              Previously at Tinkoff.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#case-study">
                Explore the work <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href={linkedinProfile}
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="impact-grid fade-in fade-in-delay-3">
          <div className="impact-item">
            <strong>300k+</strong>
            <span>users served</span>
          </div>
          <div className="impact-item">
            <strong>3×</strong>
            <span>rendering improvement</span>
          </div>
          <div className="impact-item">
            <strong>15+</strong>
            <span>applications migrated</span>
          </div>
          <div className="impact-item">
            <strong>40%</strong>
            <span>faster delivery pipeline</span>
          </div>
        </div>
      </section>

      <EngineeringScope />

      <section className="section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Selected systems</p>
            <h2>
              Production work,
              <br />
              not portfolio theatre.
            </h2>
          </div>
          <p>
            The work that matters most often cannot be reduced to a screenshot.
            These stories focus on architecture, decisions, and outcomes.
          </p>
        </div>

        <div className="work-grid">
          <a className="work-card work-card-featured" href="#case-study">
            <div className="work-card-topline">
              <span>Fintech · Platform architecture</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
            <div className="work-visual">
              <div className="flow-column">
                <span>MANAGER UI</span>
                <i />
                <span>PARTNER UI</span>
              </div>
              <div className="flow-hub">
                SHARED
                <br />
                PLATFORM
              </div>
              <div className="flow-column flow-column-right">
                <span>REST API</span>
                <i />
                <span>REAL-TIME</span>
              </div>
            </div>
            <div className="work-card-copy">
              <p className="work-number">01</p>
              <div>
                <h3>Scaling a complex CPA platform</h3>
                <p>
                  A multi-role React system coordinating offers, permissions,
                  analytics, documents, impersonation, and real-time workflows.
                </p>
              </div>
            </div>
          </a>

          <article className="work-card">
            <div className="work-card-topline">
              <span>Performance · Rendering</span>
              <span className="case-label">Case 02</span>
            </div>
            <div className="metric-visual">
              <div className="metric-line">
                <span>Before</span>
                <i style={{ width: "92%" }} />
              </div>
              <div className="metric-line metric-line-after">
                <span>After</span>
                <i style={{ width: "31%" }} />
              </div>
              <strong>3×</strong>
              <small>faster rendering</small>
            </div>
            <div className="work-card-copy">
              <p className="work-number">02</p>
              <div>
                <h3>Finding the real hot path</h3>
                <p>
                  Profiling render propagation and data-heavy interfaces to
                  target the work users were actually waiting on.
                </p>
              </div>
            </div>
          </article>

          <article className="work-card">
            <div className="work-card-topline">
              <span>Platform · Developer experience</span>
              <span className="case-label">Case 03</span>
            </div>
            <div className="migration-visual" aria-hidden="true">
              <div className="app-cloud">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((id) => (
                  <i key={id}>APP</i>
                ))}
              </div>
              <ArrowRight size={24} />
              <div className="mono-repo">
                <span>MONOREPO</span>
                <small>one delivery graph</small>
              </div>
            </div>
            <div className="work-card-copy">
              <p className="work-number">03</p>
              <div>
                <h3>Migrating without stopping delivery</h3>
                <p>
                  Moving 15+ applications into shared foundations while teams
                  continued shipping product work.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="case-study-section" id="case-study">
        <div className="case-study-intro">
          <div>
            <p className="eyebrow eyebrow-light">03 / Featured case study</p>
            <h2>
              A frontend became
              <br />a product system.
            </h2>
          </div>
          <div className="case-summary">
            <p>
              Over 4.5 years, a CPA platform grew into two connected product
              surfaces with complex identity, data, and real-time requirements.
            </p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>Senior Frontend Engineer</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>CPA / partner platform</dd>
              </div>
              <div>
                <dt>Scale</dt>
                <dd>300,000+ users</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Architecture & performance</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="case-steps">
          <article>
            <span className="step-number">01</span>
            <div>
              <p className="step-kicker">The pressure</p>
              <h3>Complexity arrived through the product.</h3>
              <p>
                Permissions became granular. Data-heavy screens grew. Managers
                needed to impersonate partners safely. Background events began
                affecting workflows across the interface.
              </p>
            </div>
          </article>
          <article>
            <span className="step-number">02</span>
            <div>
              <p className="step-kicker">The decision</p>
              <h3>A modular system with explicit boundaries.</h3>
              <p>
                We kept one product and delivery model while separating domain
                modules, server state, local state, shared events, and session
                context—including tab-specific impersonation.
              </p>
            </div>
          </article>
          <article>
            <span className="step-number">03</span>
            <div>
              <p className="step-kicker">The result</p>
              <h3>One foundation that could keep evolving.</h3>
              <p>
                The platform supported manager and partner workflows, real-time
                synchronization, dense operational interfaces, and changing
                business rules without distributing the frontend prematurely.
              </p>
            </div>
          </article>
        </div>

        <CaseStudyVisuals />

        <div className="architecture-panel">
          <div className="architecture-caption">
            <p>System map / simplified</p>
            <span>Responsibilities remain visible</span>
          </div>
          <div className="architecture-map">
            <div className="arch-layer arch-layer-ui">
              <span>Manager UI</span>
              <span>Partner UI</span>
            </div>
            <div className="arch-connector">
              <i />
              <b>DOMAIN MODULES</b>
              <i />
            </div>
            <div className="arch-layer arch-layer-state">
              <span>Server state</span>
              <span>UI state</span>
              <span>Session context</span>
            </div>
            <div className="arch-connector">
              <i />
              <b>EVENTS + CONTRACTS</b>
              <i />
            </div>
            <div className="arch-layer arch-layer-services">
              <span>REST API</span>
              <span>WebSockets</span>
              <span>Observability</span>
            </div>
          </div>
        </div>

        <div className="case-study-footer">
          <p>Want the complete architecture?</p>
          <ExternalLink
            href={articles[0].href}
            className="text-link text-link-light"
          >
            Read the 30-minute system design study
            <ArrowUpRight size={18} aria-hidden="true" />
          </ExternalLink>
        </div>
      </section>

      <section className="section" id="principles">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Working principles</p>
            <h2>
              How I reduce
              <br />
              the blast radius.
            </h2>
          </div>
          <p>
            Good architecture does not remove real product complexity. It gives
            that complexity a place to live and makes the next change safer.
          </p>
        </div>
        <div className="principles-list">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
              <small>
                <Check size={14} aria-hidden="true" />
                {principle.proof}
              </small>
            </article>
          ))}
        </div>
        <DecisionMatrix />
      </section>

      <PublicLab />

      <section className="section writing-section" id="writing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">06 / Selected writing</p>
            <h2>
              Systems,
              <br />
              not syntax.
            </h2>
          </div>
          <p>
            Long-form field notes about the decisions behind scalable frontend
            platforms, written from production experience.
          </p>
        </div>
        <WritingConstellation />
        <div className="articles-list">
          {articles.map((article) => (
            <ExternalLink
              key={article.index}
              href={article.href}
              className="article-row"
            >
              <span className="article-index">{article.index}</span>
              <div className="article-meta">
                <span>{article.tag}</span>
                <small>{article.readTime}</small>
              </div>
              <div className="article-copy">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <span className="article-arrow">
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </ExternalLink>
          ))}
        </div>
        <ExternalLink href={mediumProfile} className="text-link writing-link">
          View all writing on Medium{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </ExternalLink>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">07 / Experience</p>
            <h2>
              Built through
              <br />
              production pressure.
            </h2>
          </div>
          <p>
            My work sits between implementation and architecture: shipping
            product, improving the system beneath it, and helping teams move.
          </p>
        </div>
        <div className="experience-row">
          <div className="experience-date">2021 — 2026</div>
          <div className="experience-role">
            <h3>Senior Frontend Engineer</h3>
            <p>Tinkoff / T-Bank</p>
          </div>
          <div className="experience-copy">
            <p>
              Built and evolved a large CPA platform spanning partner and
              internal operational products. Worked across architecture,
              performance, design foundations, real-time workflows, and complex
              data interfaces.
            </p>
            <ul>
              <li>
                <CircleDot size={13} />
                React & TypeScript systems
              </li>
              <li>
                <CircleDot size={13} />
                Frontend architecture
              </li>
              <li>
                <CircleDot size={13} />
                Performance engineering
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow eyebrow-light">08 / Start a conversation</p>
        <div className="contact-grid">
          <h2>
            Have a difficult
            <br />
            frontend problem?
          </h2>
          <div>
            <p>
              I am interested in senior frontend and platform work where
              architecture, performance, and product quality genuinely matter.
            </p>
            <div className="contact-links">
              <a
                className="contact-email"
                href={linkedinProfile}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon width={20} height={20} aria-hidden="true" />
                Connect with me on LinkedIn
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a
                className="contact-email"
                href="https://github.com/Dmitrii-Lobanov"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon width={20} height={20} aria-hidden="true" />
                Explore my GitHub
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <footer>
          <span>© {new Date().getFullYear()} Dmitrii Lobanov</span>
          <span>Designed around decisions, not decoration.</span>
        </footer>
      </section>
    </main>
  );
}
