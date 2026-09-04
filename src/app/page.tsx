import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { HeroName } from "@/components/hero-name";
import { HeroPortrait } from "@/components/hero-portrait";

const proof = [
  {
    category: "Experience",
    value: "6+ yrs",
    label: "Building and evolving production systems",
    visual: "experience",
  },
  {
    category: "Scale",
    value: "300k+",
    label: "Users supported across the platform",
    visual: "scale",
  },
  {
    category: "Reliability",
    value: "10% → 0%",
    label: "Data-loss rate after the reliability redesign",
    visual: "reliability",
  },
  {
    category: "Performance",
    value: "3×",
    label: "Faster rendering in measured workflows",
    visual: "performance",
  },
] as const;

const yearMarkers = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const densityMarkers = Array.from(
  { length: 24 },
  (_, index) => `density-${index + 1}`,
);

function ImpactVisual({
  visual,
}: {
  visual: (typeof proof)[number]["visual"];
}) {
  if (visual === "experience") {
    return (
      <div className="impact-microviz impact-years" aria-hidden="true">
        {yearMarkers.map((year) => (
          <i key={year} />
        ))}
      </div>
    );
  }
  if (visual === "scale") {
    return (
      <div className="impact-microviz impact-density" aria-hidden="true">
        {densityMarkers.map((marker) => (
          <i key={marker} />
        ))}
      </div>
    );
  }
  if (visual === "reliability") {
    return (
      <div className="impact-microviz impact-loss" aria-hidden="true">
        <span>10%</span>
        <i />
        <span>0%</span>
      </div>
    );
  }
  return (
    <div className="impact-microviz impact-bars" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

function BrowserBreakout() {
  return (
    <div className="breakout-visual screenbreak-stage" aria-hidden="true">
      <div className="breakout-rig">
        <div className="breakout-monitor">
          <div className="breakout-browser-bar">
            <i />
            <i />
            <i />
            <span>partner.workspace / campaigns</span>
          </div>
          <div className="breakout-screen">
            <div className="breakout-sidebar" />
            <div className="breakout-dashboard">
              <div className="breakout-heading" />
              <div className="breakout-chart">
                <i className="breakout-chart-pulse breakout-chart-pulse-a" />
                <i className="breakout-chart-pulse breakout-chart-pulse-b" />
              </div>
              <div className="breakout-row" />
            </div>
          </div>
        </div>
        <div className="breakout-card breakout-card-a" data-depth="0.55">
          <span>Conversion</span>
          <strong>42.8%</strong>
          <i />
        </div>
        <div className="breakout-card breakout-card-b" data-depth="-0.35">
          <span>Event health</span>
          <strong>99.98</strong>
          <small>stable</small>
        </div>
        <div className="breakout-card breakout-card-c" data-depth="0.28">
          <span>offer.updated</span>
          <small>42 ms</small>
        </div>
        <svg
          className="breakout-route"
          viewBox="0 0 720 500"
          aria-hidden="true"
        >
          <title>Event route leaving the product interface</title>
          <defs>
            <radialGradient id="event-sphere-orange" cx="32%" cy="26%">
              <stop offset="0" stopColor="#ffd8b7" />
              <stop offset="0.32" stopColor="#f27b47" />
              <stop offset="1" stopColor="#b72e15" />
            </radialGradient>
            <radialGradient id="event-sphere-cyan" cx="32%" cy="26%">
              <stop offset="0" stopColor="#e6ffff" />
              <stop offset="0.32" stopColor="#5bd3de" />
              <stop offset="1" stopColor="#08788d" />
            </radialGradient>
          </defs>
          <path
            className="breakout-route-body"
            d="M255 210C360 150 420 82 560 96S660 196 676 250"
          />
          <path
            className="breakout-route-light"
            d="M255 210C360 150 420 82 560 96S660 196 676 250"
          />
          <circle cx="255" cy="210" r="9" />
          <circle cx="560" cy="96" r="9" />
          <circle cx="676" cy="250" r="9" />
          <circle className="breakout-packet breakout-packet-a" r="5">
            <animateMotion
              dur="4.8s"
              path="M255 210C360 150 420 82 560 96S660 196 676 250"
              repeatCount="indefinite"
            />
          </circle>
          <circle className="breakout-packet breakout-packet-b" r="3.5">
            <animateMotion
              begin="-2.4s"
              dur="4.8s"
              path="M255 210C360 150 420 82 560 96S660 196 676 250"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

function KanbanBreakout() {
  return (
    <div className="kanban-breakout screenbreak-stage" aria-hidden="true">
      <div className="kanban-rig">
        <div className="kanban-window">
          <div className="kanban-toolbar">
            <i />
            <span>Product delivery</span>
          </div>
          <div className="kanban-columns">
            <div>
              <b>Backlog</b>
              <i />
              <i />
            </div>
            <div>
              <b>In progress</b>
              <i />
              <i />
            </div>
            <div>
              <b>Done</b>
              <i />
            </div>
          </div>
        </div>
        <svg className="kanban-route" viewBox="0 0 760 500">
          <title>Work item moving through delivery states</title>
          <path d="M185 300C280 230 360 250 430 190S565 118 650 170" />
          <circle r="7">
            <animateMotion
              dur="5.6s"
              path="M185 300C280 230 360 250 430 190S565 118 650 170"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <div
          className="kanban-flying-card kanban-flying-card-a"
          data-depth="0.45"
        >
          <span>Architecture review</span>
          <small>System boundary</small>
        </div>
        <div
          className="kanban-flying-card kanban-flying-card-b"
          data-depth="-0.3"
        >
          <span>Optimistic update</span>
          <small>Interaction state</small>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="screenbreak-home">
      <section className="screenbreak-hero screenbreak-stage">
        <div className="screenbreak-hero-copy fade-in">
          <p className="screenbreak-kicker">Senior frontend engineer</p>
          <HeroName />
          <p className="screenbreak-lead">
            I turn complex product systems into clear, fast, and dependable
            experiences.
          </p>
          <div className="screenbreak-actions">
            <Link className="screenbreak-button" href="/work">
              Explore the work <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="screenbreak-text-link" href="/contact">
              Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="cutout-stage fade-in fade-in-delay-1">
          <div className="cutout-brush cutout-brush-cyan" data-depth="-0.3" />
          <div className="cutout-brush cutout-brush-orange" data-depth="0.18" />
          <p className="cutout-note" data-depth="-0.15">
            The person
            <br />
            behind the system
          </p>
          <HeroPortrait />
          <div className="cutout-trace" data-depth="0.48">
            <span>event</span> offer.updated
            <br />
            <span>state</span> consistent
            <br />
            <span>latency</span> 42ms
          </div>
        </div>
      </section>

      <section className="impact-console" aria-labelledby="impact-title">
        <div className="impact-console-heading">
          <h2 id="impact-title">Measured impact</h2>
          <span>Production outcomes / selected</span>
        </div>
        <div className="impact-console-grid">
          {proof.map(({ category, value, label, visual }) => (
            <article key={category} className="impact-console-item">
              <span className="impact-category">{category}</span>
              <strong>{value}</strong>
              <p>{label}</p>
              <ImpactVisual visual={visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="duality-section screenbreak-stage">
        <div className="duality-list">
          <p className="screenbreak-kicker">Product engineer</p>
          <h2>What people use</h2>
          <ul>
            <li>Complex workflows</li>
            <li>Interaction systems</li>
            <li>Performance</li>
            <li>Accessible interfaces</li>
          </ul>
        </div>
        <div
          className="duality-core"
          role="img"
          aria-label="Product interactions flowing through a reliable architecture core"
        >
          <div className="core-signal core-signal-in" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="core-orbit core-orbit-outer" aria-hidden="true">
            <i />
            <i />
          </div>
          <div className="core-orbit core-orbit-inner" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="core-module" data-depth="0.12">
            <span>Product signals</span>
            <strong>System core</strong>
            <small>Reliable by design</small>
          </div>
          <div className="core-node core-node-state" data-depth="-0.14">
            State
          </div>
          <div className="core-node core-node-events" data-depth="0.2">
            Events
          </div>
          <div className="core-node core-node-data" data-depth="-0.08">
            Data
          </div>
          <div className="core-signal core-signal-out" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="duality-list duality-list-right">
          <p className="screenbreak-kicker">System architect</p>
          <h2>What keeps it reliable</h2>
          <ul>
            <li>Domain boundaries</li>
            <li>Server state</li>
            <li>Real-time events</li>
            <li>Long-lived architecture</li>
          </ul>
        </div>
      </section>

      <section className="breakout-section">
        <BrowserBreakout />
        <div className="breakout-copy">
          <p className="screenbreak-kicker">01 / CPA platform</p>
          <h2>The workflow escapes the screen</h2>
          <p>
            Two connected product surfaces, shared identity, real-time events,
            analytics, documents, and years of architectural evolution.
          </p>
          <Link href="/work/cpa-platform" className="screenbreak-text-link">
            Explore the case study <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="kanban-section">
        <div className="kanban-copy">
          <p className="screenbreak-kicker">02 / Public build</p>
          <h2>State you can feel</h2>
          <p>
            A public Kanban system presented through the physicality of the
            interaction—not another screenshot trapped inside a card.
          </p>
          <Link href="/work/reliable-kanban" className="screenbreak-text-link">
            Open the project <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <KanbanBreakout />
      </section>

      <section className="edge-stage">
        <div className="edge-copy">
          <p className="screenbreak-kicker screenbreak-kicker-light">
            03 / Edge Case Inc.
          </p>
          <h2>When the system breaks character</h2>
          <p>
            Production incidents become visual stories: symptoms escape the
            interface, travel through the system, and reveal the real cause.
          </p>
          <Link
            href="/thinking/edge-case-inc"
            className="screenbreak-text-link screenbreak-text-link-light"
          >
            Follow the investigations{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="incident-observatory screenbreak-stage">
          <div className="incident-console">
            <div className="incident-console-head">
              <span>Live event topology</span>
              <span className="incident-live">System observing</span>
            </div>
            <div className="incident-flow">
              <div className="incident-rail" />
              <svg
                className="incident-branch"
                viewBox="0 0 100 300"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="incident-branch-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0" stopColor="#ffad89" />
                    <stop offset="0.48" stopColor="#ef6743" />
                    <stop offset="1" stopColor="#a93720" />
                  </linearGradient>
                </defs>
                <path
                  className="incident-branch-body"
                  d="M44 95 C44 158 52 168 54 224"
                />
                <path
                  className="incident-branch-light"
                  d="M44 95 C44 158 52 168 54 224"
                />
              </svg>
              <div
                className="incident-node incident-node-source"
                data-depth="0.18"
              >
                <strong>Offer UI</strong>
                <span>event emitted</span>
              </div>
              <div
                className="incident-node incident-node-gateway"
                data-depth="0.28"
              >
                <strong>Event gateway</strong>
                <span>delivery check</span>
              </div>
              <div
                className="incident-node incident-node-state"
                data-depth="0.38"
              >
                <strong>Server state</strong>
                <span>accepted once</span>
              </div>
              <div
                className="incident-node incident-node-guard"
                data-depth="0.5"
              >
                <strong>Idempotency guard</strong>
                <span>duplicate absorbed</span>
              </div>
              <i className="incident-orb incident-orb-primary" />
              <i className="incident-orb incident-orb-duplicate" />
              <div className="incident-resolution">
                Resolved · one state transition
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thinking-stage screenbreak-stage">
        <div>
          <p className="screenbreak-kicker">04 / Thinking in public</p>
          <h2>The reasoning is part of the work</h2>
        </div>
        <div className="thinking-links">
          <Link
            href="/thinking/knowledge-base"
            className="thinking-link thinking-link-wiki"
          >
            <span className="thinking-link-index">01</span>
            <span className="thinking-link-type">Structured knowledge</span>
            <strong>Frontend Engineering Wiki</strong>
            <span
              className="thinking-mini thinking-mini-wiki"
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link
            href="/thinking/articles"
            className="thinking-link thinking-link-essays"
          >
            <span className="thinking-link-index">02</span>
            <span className="thinking-link-type">Long-form field notes</span>
            <strong>Architecture essays</strong>
            <span
              className="thinking-mini thinking-mini-essays"
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
            </span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link
            href="/thinking/edge-case-inc"
            className="thinking-link thinking-link-edge"
          >
            <span className="thinking-link-index">03</span>
            <span className="thinking-link-type">
              Serialized investigations
            </span>
            <strong>Edge Case Inc.</strong>
            <span
              className="thinking-mini thinking-mini-edge"
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
            </span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="screenbreak-contact">
        <p className="screenbreak-kicker screenbreak-kicker-light">
          05 / Start a conversation
        </p>
        <div className="contact-stage">
          <div className="contact-stage-copy">
            <h2>Building a product whose complexity is starting to show?</h2>
            <p>
              Bring me the difficult workflow, the fragile boundary, or the
              performance problem that refuses to stay hidden.
            </p>
          </div>
          <div className="contact-console">
            <div className="contact-console-head">
              <span>Conversation channel</span>
              <span className="contact-console-status">
                <i aria-hidden="true" /> Available
              </span>
            </div>
            <div className="contact-signal" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <dl className="contact-console-details">
              <div>
                <dt>Signal</dt>
                <dd>Product · architecture · frontend</dd>
              </div>
              <div>
                <dt>Next step</dt>
                <dd>A focused first conversation</dd>
              </div>
            </dl>
            <Link
              className="screenbreak-button contact-console-button"
              href="/contact"
            >
              Start the conversation
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <SiteFooter />
      </section>
    </main>
  );
}
