import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrowserBreakout } from "./home-visuals";

export function CpaSection() {
  return (
    <section className="project-showcase-section breakout-section">
      <BrowserBreakout />
      <div className="breakout-copy" data-reveal>
        <p className="screenbreak-kicker">01 / Tinkoff · Fintech platform</p>
        <h2>Engineering for 300,000+ users</h2>
        <p>
          I built and evolved partner and internal operations frontends,
          connecting onboarding, analytics, documents, permissions, and
          real-time workflows. Production p75 LCP improved from 6s to 2s.
        </p>
        <Link href="/work/cpa-platform" className="screenbreak-text-link">
          Explore the case study <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
