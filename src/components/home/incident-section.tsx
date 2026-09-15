import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function IncidentSection() {
  return (
    <section className="edge-stage">
      <div className="edge-copy" data-reveal>
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
          Follow the investigations <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div
        className="incident-observatory screenbreak-stage"
        data-depth-stage
        data-reveal
      >
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
            <div className="incident-node incident-node-guard" data-depth="0.5">
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
  );
}
