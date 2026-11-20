import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type HomeLocale, homeSectionCopy } from "@/content/home";

export function ThinkingSection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = homeSectionCopy.thinking[locale];
  return (
    <section className="thinking-stage screenbreak-stage" data-depth-stage>
      <div>
        <p className="screenbreak-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
      </div>
      <div className="thinking-links">
        <Link
          href="/thinking/knowledge-base"
          className="thinking-link thinking-link-wiki"
          data-reveal
        >
          <span className="thinking-link-index">01</span>
          <span className="thinking-link-type">{copy.wikiType}</span>
          <strong>Frontend Engineering Wiki</strong>
          <span className="thinking-mini thinking-mini-wiki" aria-hidden="true">
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
          data-reveal
        >
          <span className="thinking-link-index">02</span>
          <span className="thinking-link-type">{copy.articlesType}</span>
          <strong>{copy.articlesTitle}</strong>
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
          data-reveal
        >
          <span className="thinking-link-index">03</span>
          <span className="thinking-link-type">{copy.investigationsType}</span>
          <strong>Edge Case Inc.</strong>
          <span className="thinking-mini thinking-mini-edge" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
