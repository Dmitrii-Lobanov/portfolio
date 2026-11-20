import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroName } from "@/components/hero-name";
import { HeroPortrait } from "@/components/hero-portrait";

import { type HomeLocale, heroCopy } from "@/content/home";

export function HeroSection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = heroCopy[locale];
  return (
    <section className="screenbreak-hero screenbreak-stage" data-depth-stage>
      <div className="screenbreak-hero-copy fade-in">
        <p className="screenbreak-kicker">{copy.role}</p>
        <HeroName name={copy.name} />
        <p className="screenbreak-lead">{copy.intro}</p>
        <p className="screenbreak-stack">
          React · TypeScript · Next.js / Fintech &amp; SaaS
        </p>
        <div className="screenbreak-actions">
          <Link className="button-tactile screenbreak-button" href="/work">
            {copy.work} <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="screenbreak-text-link" href="/contact">
            {copy.contact} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="cutout-stage fade-in fade-in-delay-1">
        <div className="cutout-brush cutout-brush-cyan" data-depth="-0.3" />
        <div className="cutout-brush cutout-brush-orange" data-depth="0.18" />
        <p className="cutout-note" data-depth="-0.15">
          {copy.portraitNote[0]}
          <br />
          {copy.portraitNote[1]}
        </p>
        <HeroPortrait />
        <div className="cutout-trace" data-depth="0.48">
          <span>event</span> offer.updated
          <br />
          <span>state</span> consistent
          <br />
          <span>context</span> illustrative
        </div>
      </div>
    </section>
  );
}
