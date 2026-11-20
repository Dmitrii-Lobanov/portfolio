import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type HomeLocale, homeSectionCopy } from "@/content/home";

export function IncidentSection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = homeSectionCopy.incident[locale];
  return (
    <section className="edge-stage">
      <div className="edge-copy" data-reveal>
        <p className="screenbreak-kicker screenbreak-kicker-light">
          03 / Edge Case Inc.
        </p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        <Link
          href="/thinking/edge-case-inc"
          className="screenbreak-text-link screenbreak-text-link-light"
        >
          {copy.action} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div
        className="incident-observatory screenbreak-stage"
        data-depth-stage
        data-reveal
      >
        <div className="incident-console">
          <div className="incident-console-head">
            <span>{copy.topology}</span>
            <span className="incident-live">{copy.status}</span>
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
              <strong>{copy.source}</strong>
              <span>{copy.emitted}</span>
            </div>
            <div
              className="incident-node incident-node-gateway"
              data-depth="0.28"
            >
              <strong>{copy.gateway}</strong>
              <span>{copy.delivery}</span>
            </div>
            <div
              className="incident-node incident-node-state"
              data-depth="0.38"
            >
              <strong>{copy.state}</strong>
              <span>{copy.accepted}</span>
            </div>
            <div className="incident-node incident-node-guard" data-depth="0.5">
              <strong>{copy.guard}</strong>
              <span>{copy.duplicate}</span>
            </div>
            <i className="incident-orb incident-orb-primary" />
            <i className="incident-orb incident-orb-duplicate" />
            <div className="incident-resolution">{copy.resolution}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
