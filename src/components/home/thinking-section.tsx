import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ThinkingSection() {
  return (
    <section className="thinking-stage screenbreak-stage" data-depth-stage>
      <div>
        <p className="screenbreak-kicker">04 / Thinking in public</p>
        <h2>The reasoning is part of the work</h2>
      </div>
      <div className="thinking-links">
        <Link
          href="/thinking/knowledge-base"
          className="thinking-link thinking-link-wiki"
          data-reveal
        >
          <span className="thinking-link-index">01</span>
          <span className="thinking-link-type">Structured knowledge</span>
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
          data-reveal
        >
          <span className="thinking-link-index">03</span>
          <span className="thinking-link-type">Serialized investigations</span>
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
