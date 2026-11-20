import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type HomeLocale, homeSectionCopy } from "@/content/home";
import { BrowserBreakout } from "./home-visuals";

export function CpaSection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = homeSectionCopy.cpa[locale];
  return (
    <section className="project-showcase-section breakout-section">
      <BrowserBreakout locale={locale} />
      <div className="breakout-copy" data-reveal>
        <p className="screenbreak-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        <Link
          href={
            locale === "ru" ? "/ru/work/cpa-platform" : "/work/cpa-platform"
          }
          className="screenbreak-text-link"
        >
          {copy.action} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
