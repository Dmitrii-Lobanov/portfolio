import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Mail,
  MessageSquareText,
  Route,
  Share2,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { copyByLocale } from "@/content/contact-copy";
import { externalLinks } from "@/content/portfolio";

async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}
export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussian();
  return {
    title: russian ? "Контакты | Дмитрий Лобанов" : "Contact | Dmitrii Lobanov",
    alternates: {
      canonical: russian ? "/ru/contact" : "/contact",
      languages: { en: "/en/contact", ru: "/ru/contact" },
    },
  };
}

export default async function ContactPage() {
  const russian = await isRussian();
  const copy = copyByLocale[russian ? "ru" : "en"];
  const prefix = russian ? "/ru" : "/en";
  const goodFit = [copy.fit1, copy.fit2, copy.fit3, copy.fit4, copy.fit5];

  const usefulContext = [
    ["01", copy.product, copy.productText],
    ["02", copy.problem, copy.problemText],
    ["03", copy.result, copy.resultText],
  ];

  return (
    <main className="route-main contact-page contact-editorial">
      <section className="contact-section-surface contact-hero-light">
        <div className="contact-hero-copy" data-reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.heading}</h1>
          <p>{copy.intro}</p>
          <p>{copy.english}</p>
          <a
            className="button-tactile contact-hero-action"
            href={externalLinks.email}
          >
            {copy.email} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div
          className="contact-handoff"
          data-depth-stage
          data-reveal
          role="img"
          aria-label={copy.diagram}
        >
          <header>
            <span>{copy.conversation}</span>
            <span>
              <i /> {copy.open}
            </span>
          </header>
          <div className="contact-handoff-track" aria-hidden="true">
            <b />
            <b />
            <b />
            <i />
          </div>
          <div className="contact-handoff-stages">
            <article data-depth="0.12">
              <span>{copy.brief}</span>
              <MessageSquareText size={27} />
              <strong>{copy.productContext}</strong>
              <small>{copy.received}</small>
            </article>
            <article data-depth="0.2">
              <span>{copy.discuss}</span>
              <Route size={27} />
              <strong>{copy.realConstraint}</strong>
              <small>{copy.located}</small>
            </article>
            <article data-depth="0.3">
              <span>{copy.decide}</span>
              <Sparkles size={27} />
              <strong>{copy.next}</strong>
              <small>{copy.direction}</small>
            </article>
          </div>
          <footer>{copy.oneMessage}</footer>
        </div>
      </section>

      <section className="contact-section-surface contact-surface contact-fit">
        <header className="contact-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.fit}</p>
            <h2>{copy.fitTitle}</h2>
          </div>
          <p>{copy.fitIntro}</p>
        </header>
        <div className="contact-fit-layout">
          <ul>
            {goodFit.map((item) => (
              <li key={item} data-reveal>
                <Check size={17} />
                {item}
              </li>
            ))}
          </ul>
          <aside data-reveal>
            <span className="contact-mono-label">{copy.strongFit}</span>
            <strong>{copy.ownership}</strong>
            <i />
            <strong>{copy.pressure}</strong>
            <i />
            <strong>{copy.improvement}</strong>
          </aside>
        </div>
      </section>

      <section className="contact-section-surface contact-surface contact-brief">
        <header className="contact-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.message}</p>
            <h2>{copy.messageTitle}</h2>
          </div>
          <p>{copy.messageIntro}</p>
        </header>
        <div className="contact-context-grid">
          {usefulContext.map(([number, title, copy]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section-surface contact-surface contact-channels">
        <header className="contact-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.channels}</p>
            <h2>{copy.channelsTitle}</h2>
          </div>
          <p>{copy.channelsIntro}</p>
        </header>
        <div className="contact-channel-grid">
          <a
            href={externalLinks.email}
            className="contact-channel contact-channel-primary"
            data-reveal
          >
            <span>
              <Mail size={25} /> {copy.preferred}
            </span>
            <strong>
              dmitriilobanov3
              <wbr />
              @gmail.com
            </strong>
            <p>{copy.preferredText}</p>
            <ArrowUpRight size={20} />
          </a>
          <a
            href={externalLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-channel"
            data-reveal
          >
            <span>
              <Share2 size={25} /> {copy.linkedin}
            </span>
            <strong>{copy.linkedinTitle}</strong>
            <p>{copy.linkedinText}</p>
            <ArrowUpRight size={20} />
          </a>
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer"
            className="contact-channel"
            data-reveal
          >
            <span>
              <Code2 size={25} /> {copy.github}
            </span>
            <strong>{copy.githubTitle}</strong>
            <p>{copy.githubText}</p>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <section className="contact-section-surface contact-closing">
        <div data-reveal>
          <p className="eyebrow">{copy.before}</p>
          <h2>{copy.beforeTitle}</h2>
        </div>
        <nav aria-label={copy.nav}>
          <Link href={`${prefix}/work`} className="route-link" data-reveal>
            {copy.workLink} <ArrowRight size={17} />
          </Link>
          <Link href={`${prefix}/about`} className="route-link" data-reveal>
            {copy.aboutLink} <ArrowRight size={17} />
          </Link>
          <Link href={`${prefix}/thinking`} className="route-link" data-reveal>
            {copy.thinkingLink} <ArrowRight size={17} />
          </Link>
        </nav>
      </section>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
