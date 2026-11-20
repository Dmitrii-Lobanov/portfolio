import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { type HomeLocale, homeSectionCopy } from "@/content/home";

export function ContactSection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = homeSectionCopy.contact[locale];
  return (
    <section className="screenbreak-contact">
      <p className="screenbreak-kicker screenbreak-kicker-light">
        {copy.kicker}
      </p>
      <div className="contact-stage">
        <div className="contact-stage-copy">
          <h2>{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="contact-console">
          <div className="contact-console-head">
            <span>{copy.channel}</span>
            <span className="contact-console-status">
              <i aria-hidden="true" /> {copy.availability}
            </span>
          </div>
          <div className="contact-signal" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <dl className="contact-console-details">
            <div>
              <dt>{copy.topicsLabel}</dt>
              <dd>{copy.topics}</dd>
            </div>
            <div>
              <dt>{copy.nextLabel}</dt>
              <dd>{copy.nextStep}</dd>
            </div>
          </dl>
          <Link
            className="button-tactile screenbreak-button contact-console-button"
            href="/contact"
          >
            {copy.action}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <SiteFooter />
    </section>
  );
}
