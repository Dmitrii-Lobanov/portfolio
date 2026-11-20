import {
  ArrowRight,
  Blocks,
  BookOpen,
  Gauge,
  GraduationCap,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/editorial";
import { copyByLocale } from "@/content/about-copy";

async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}
export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussian();
  return {
    title: russian ? "Обо мне | Дмитрий Лобанов" : "About | Dmitrii Lobanov",
    alternates: {
      canonical: russian ? "/ru/about" : "/about",
      languages: { en: "/en/about", ru: "/ru/about" },
    },
  };
}

export default async function AboutPage() {
  const russian = await isRussian();
  const copy = copyByLocale[russian ? "ru" : "en"];
  const prefix = russian ? "/ru" : "/en";
  const focus = [
    {
      icon: Workflow,
      number: "01",
      title: copy.workflows,
      copy: copy.workflowsText,
    },
    {
      icon: Blocks,
      number: "02",
      title: copy.architecture,
      copy: copy.architectureText,
    },
    {
      icon: Gauge,
      number: "03",
      title: copy.leverage,
      copy: copy.leverageText,
    },
  ];

  const method = [
    ["01", copy.workflow, copy.workflowQ],
    ["02", copy.constraint, copy.constraintQ],
    ["03", copy.ownership, copy.ownershipQ],
    ["04", copy.mechanism, copy.mechanismQ],
    ["05", copy.evidence, copy.evidenceQ],
  ];

  const evidence = [
    ["300,000+", copy.users, copy.usersText],
    ["−70%", copy.inp, copy.inpText],
    ["−67%", copy.lcp, copy.lcpText],
  ];

  const principles = [
    copy.principle1,
    copy.principle2,
    copy.principle3,
    copy.principle4,
    copy.principle5,
  ];

  return (
    <main className="route-main about-page">
      <section className="about-section-surface about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.heading}</h1>
          <p>{copy.intro}</p>
          <div className="about-proof-line">
            <span>React · TypeScript · Next.js</span>
            <span>{copy.industries}</span>
            <span>{copy.quality}</span>
          </div>
        </div>
        <figure className="about-portrait">
          <span className="about-portrait-label">{copy.portrait}</span>
          <Image
            src="/my-photo-no-bg-amazed.png"
            alt={copy.name}
            width={1129}
            height={944}
            className="about-portrait-image"
            sizes="(max-width: 680px) calc(100vw - 100px), (max-width: 1000px) 480px, 40vw"
            priority
          />
          <figcaption className="about-portrait-status">
            <strong>{copy.name}</strong>
            <span>
              <i aria-hidden="true" /> {copy.portraitStatus}
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="about-section-surface about-surface about-focus">
        <header className="about-heading">
          <div>
            <p className="eyebrow">{copy.focus}</p>
            <h2>{copy.focusTitle}</h2>
          </div>
          <p>{copy.focusIntro}</p>
        </header>
        <div className="about-focus-grid">
          {focus.map(({ icon: Icon, number, title, copy }) => (
            <article key={number}>
              <div className="about-focus-visual" aria-hidden="true">
                <Icon size={30} />
                <span>
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <span className="about-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-surface about-surface about-method">
        <header className="about-heading">
          <div>
            <p className="eyebrow">{copy.method}</p>
            <h2>{copy.methodTitle}</h2>
          </div>
          <p>{copy.methodIntro}</p>
        </header>
        <div className="about-method-track">
          <div className="about-method-signal" aria-hidden="true">
            <i />
          </div>
          {method.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-surface about-surface about-experience">
        <header className="about-heading">
          <div>
            <p className="eyebrow">{copy.experience}</p>
            <h2>{copy.experienceTitle}</h2>
          </div>
          <p>{copy.experienceIntro}</p>
        </header>
        <div className="about-role">
          <div>
            <span>{copy.independentPeriod}</span>
            <strong>{copy.independent}</strong>
          </div>
          <div>
            <h3>{copy.seniorEngineer}</h3>
            <p>{copy.independentText}</p>
            <Link className="action-link route-link" href={`${prefix}/work`}>
              {copy.independentLink} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="about-role">
          <div>
            <span>{copy.seniorPeriod}</span>
            <strong>Tinkoff / T-Bank</strong>
          </div>
          <div>
            <h3>{copy.seniorDeveloper}</h3>
            <p>{copy.seniorText}</p>
            <Link
              className="action-link route-link"
              href={`${prefix}/work/cpa-platform`}
            >
              {copy.caseLink} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="about-role">
          <div>
            <span>{copy.developerPeriod}</span>
            <strong>Tinkoff / T-Bank</strong>
          </div>
          <div>
            <h3>{copy.developer}</h3>
            <p>{copy.developerText}</p>
          </div>
        </div>
        <div className="about-role">
          <div>
            <span>2020 — 2021</span>
            <strong>{copy.earlierRole}</strong>
          </div>
          <div>
            <h3>{copy.earlierTitle}</h3>
            <p>{copy.earlierText}</p>
          </div>
        </div>
        <div className="about-evidence-grid">
          {evidence.map(([value, label, copy]) => (
            <article key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section-surface about-surface about-knowledge">
        <header className="about-heading">
          <div>
            <p className="eyebrow">{copy.knowledge}</p>
            <h2>{copy.knowledgeTitle}</h2>
          </div>
          <p>{copy.knowledgeIntro}</p>
        </header>
        <div className="about-contribution-grid">
          <article>
            <MessageSquareText size={28} />
            <span>{copy.speaking}</span>
            <h3>{copy.speakingTitle}</h3>
            <p>{copy.speakingText}</p>
          </article>
          <article>
            <GraduationCap size={28} />
            <span>{copy.mentoring}</span>
            <h3>{copy.mentoringTitle}</h3>
            <p>{copy.mentoringText}</p>
          </article>
          <article className="about-principles">
            <BookOpen size={28} />
            <span>{copy.principles}</span>
            <ul>
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section-surface about-surface about-method">
        <header className="about-heading">
          <div>
            <p className="eyebrow">{copy.practice}</p>
            <h2>{copy.practiceTitle}</h2>
          </div>
          <p>{copy.practiceIntro}</p>
        </header>
        <p>{copy.availability}</p>
      </section>
      <section className="about-section-surface about-cta">
        <div>
          <p className="eyebrow">{copy.cta}</p>
          <h2>{copy.ctaTitle}</h2>
        </div>
        <nav aria-label={copy.nav}>
          <Link href={`${prefix}/work`}>
            {copy.workLink} <ArrowRight size={17} />
          </Link>
          <Link href={`${prefix}/thinking`}>
            {copy.writingLink} <ArrowRight size={17} />
          </Link>
          <Link href={`${prefix}/contact`} className="about-primary-action">
            {copy.contactLink} <ArrowRight size={17} />
          </Link>
        </nav>
      </section>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
