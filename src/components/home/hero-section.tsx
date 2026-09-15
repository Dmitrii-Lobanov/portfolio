import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroName } from "@/components/hero-name";
import { HeroPortrait } from "@/components/hero-portrait";

export function HeroSection() {
  return (
    <section className="screenbreak-hero screenbreak-stage" data-depth-stage>
      <div className="screenbreak-hero-copy fade-in">
        <p className="screenbreak-kicker">Senior frontend engineer</p>
        <HeroName />
        <p className="screenbreak-lead">
          I turn complex product systems into clear, fast, and dependable
          experiences.
        </p>
        <div className="screenbreak-actions">
          <Link className="button-tactile screenbreak-button" href="/work">
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
  );
}
