import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalAction, SiteFooter } from "@/components/editorial";
import { detailCopy, edgePath, edgeRussian } from "@/content/edge-case-copy";
import { edgeCases, getEdgeCase } from "@/content/portfolio";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return edgeCases.map(({ slug }) => ({ slug }));
}
async function isRussian() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getEdgeCase((await params).slug);
  if (!item) return {};
  const russian = await isRussian();
  const text = russian ? edgeRussian : item;
  const path = `${edgePath}/${item.slug}`;
  return {
    title: `${text.title} — Edge Case Inc.`,
    description: text.summary,
    alternates: {
      canonical: russian ? `/ru${path}` : path,
      languages: { en: `/en${path}`, ru: `/ru${path}` },
    },
  };
}

export default async function EdgeCasePage({ params }: Props) {
  const item = getEdgeCase((await params).slug);
  if (!item) notFound();
  const russian = await isRussian();
  const copy = detailCopy[russian ? "ru" : "en"];
  const text = russian ? edgeRussian : item;
  return (
    <main className="route-main edge-case-detail">
      <section className="case-file-hero">
        <Link
          href={`${russian ? "/ru" : "/en"}${edgePath}`}
          className="action-link back-link"
        >
          <ArrowLeft size={15} /> Edge Case Inc.
        </Link>
        <p className="eyebrow eyebrow-light">
          {text.number} / {russian ? "Материалы дела" : "Incident file"}
        </p>
        <h1>{text.title}</h1>
        <p>{text.summary}</p>
        <div className="incident-tape">
          <span>{russian ? "ИНЦИДЕНТ" : "INCIDENT"}</span>
          <span>{text.mechanism}</span>
          <span>{text.status}</span>
        </div>
      </section>
      <section className="case-mechanism route-section">
        <div className="route-section-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.mechanism}</p>
            <h2>{copy.mechanismTitle}</h2>
          </div>
          <p>{copy.mechanismIntro}</p>
        </div>
        <div className="case-path">
          {text.path.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index < text.path.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>
      </section>
      <section className="route-section lens-section">
        <div className="route-section-heading" data-reveal>
          <div>
            <p className="eyebrow">{copy.perspectives}</p>
            <h2>{copy.perspectivesTitle}</h2>
          </div>
          <p>{copy.perspectivesIntro}</p>
        </div>
        <div className="lens-grid">
          {text.lenses.map((lens, index) => (
            <article className="case-lens" key={lens.name} data-reveal>
              <span>
                {russian ? "ЭПИЗОД" : "EPISODE"} 0{index + 1}
              </span>
              <small>{lens.name}</small>
              <h3>{lens.role}</h3>
              <p>{lens.copy}</p>
            </article>
          ))}
        </div>
        <ExternalAction href={item.linkedin}>{copy.linkedin}</ExternalAction>
      </section>
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
