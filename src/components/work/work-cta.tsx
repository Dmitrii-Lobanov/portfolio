import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function WorkCta() {
  return (
    <section className="work-route-cta">
      <div className="work-route-cta-copy">
        <span>
          <i /> Open to ambitious systems
        </span>
        <strong>Have a product whose complexity is starting to show?</strong>
        <small>
          Let&apos;s turn the pressure points into clear engineering decisions.
        </small>
      </div>
      <div className="work-route-cta-signal" aria-hidden="true">
        <i />
        <i />
        <i />
        <span />
      </div>
      <Link
        className="button-tactile nav-contact work-route-cta-button"
        href="/contact"
      >
        Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </section>
  );
}
