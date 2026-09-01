import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { PageIntro, SiteFooter } from "@/components/editorial";
import { externalLinks } from "@/content/portfolio";

export const metadata: Metadata = { title: "Contact | Dmitrii Lobanov" };

export default function ContactPage() {
  return (
    <main className="route-main contact-page">
      <PageIntro
        eyebrow="Contact / Current signal: available"
        title={
          <>
            Bring the difficult
            <br />
            frontend problem.
          </>
        }
        description="I am interested in senior frontend and product engineering work where architecture, reliability, performance, and product quality genuinely matter."
      />
      <section className="contact-route-panel">
        <div>
          <p className="eyebrow eyebrow-light">Good conversations</p>
          <ul>
            <li>Architecture-heavy frontend roles</li>
            <li>Platform modernization</li>
            <li>Complex product workflows</li>
            <li>Performance and reliability</li>
            <li>Engineering education</li>
          </ul>
        </div>
        <div className="contact-route-actions">
          <a href={externalLinks.linkedin} target="_blank" rel="noreferrer">
            <span>Preferred</span>
            <strong>Connect on LinkedIn</strong>
            <ArrowUpRight />
          </a>
          <a href={externalLinks.email}>
            <span>Direct</span>
            <strong>dmitriilobanov3@gmail.com</strong>
            <ArrowUpRight />
          </a>
          <a href={externalLinks.github} target="_blank" rel="noreferrer">
            <span>Code</span>
            <strong>Explore GitHub</strong>
            <ArrowUpRight />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
