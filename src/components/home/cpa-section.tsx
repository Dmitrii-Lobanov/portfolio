import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrowserBreakout } from "./home-visuals";

export function CpaSection() {
  return (
    <section className="project-showcase-section breakout-section">
      <BrowserBreakout />
      <div className="breakout-copy" data-reveal>
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
  );
}
