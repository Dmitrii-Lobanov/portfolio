import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function WorkCta({ russian }: { russian: boolean }) {
  return (
    <section className="work-route-cta">
      <div className="work-route-cta-copy">
        <span>
          <i />{" "}
          {russian ? "Открыт к сложным задачам" : "Open to ambitious systems"}
        </span>
        <strong>
          {russian
            ? "Строите продукт, которым становится сложнее управлять?"
            : "Have a product whose complexity is starting to show?"}
        </strong>
        <small>
          {russian
            ? "Давайте разберёмся, где возникают сложности и какие решения помогут."
            : "Let's turn the pressure points into clear engineering decisions."}
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
        {russian ? "Связаться" : "Start a conversation"}{" "}
        <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </section>
  );
}
