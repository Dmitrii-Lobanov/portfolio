import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";

export function ContactSection() {
  return (
    <section className="screenbreak-contact">
      <p className="screenbreak-kicker screenbreak-kicker-light">
        05 / Start a conversation
      </p>
      <div className="contact-stage">
        <div className="contact-stage-copy">
          <h2>Building a product whose complexity is starting to show?</h2>
          <p>
            Bring me the difficult workflow, the fragile boundary, or the
            performance problem that refuses to stay hidden.
          </p>
        </div>
        <div className="contact-console">
          <div className="contact-console-head">
            <span>Conversation channel</span>
            <span className="contact-console-status">
              <i aria-hidden="true" /> Available
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
              <dt>Signal</dt>
              <dd>Product · architecture · frontend</dd>
            </div>
            <div>
              <dt>Next step</dt>
              <dd>A focused first conversation</dd>
            </div>
          </dl>
          <Link
            className="button-tactile screenbreak-button contact-console-button"
            href="/contact"
          >
            Start the conversation
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <SiteFooter />
    </section>
  );
}
