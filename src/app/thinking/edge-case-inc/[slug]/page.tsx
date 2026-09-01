import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalAction, SiteFooter } from "@/components/editorial";
import { edgeCases, getEdgeCase } from "@/content/portfolio";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return edgeCases.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getEdgeCase((await params).slug);
  return item
    ? { title: `${item.title} — Edge Case Inc.`, description: item.summary }
    : {};
}

export default async function EdgeCasePage({ params }: Props) {
  const item = getEdgeCase((await params).slug);
  if (!item) notFound();
  return (
    <main className="route-main edge-case-detail">
      <section className="case-file-hero">
        <Link href="/thinking/edge-case-inc" className="back-link">
          <ArrowLeft size={15} /> Edge Case Inc.
        </Link>
        <p className="eyebrow eyebrow-light">{item.number} / Incident file</p>
        <h1>{item.title}</h1>
        <p>{item.summary}</p>
        <div className="incident-tape">
          <span>INCIDENT</span>
          <span>{item.mechanism}</span>
          <span>{item.status}</span>
        </div>
      </section>
      <section className="case-mechanism route-section">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">01 / Mechanism</p>
            <h2>Follow the duplicate.</h2>
          </div>
          <p>
            The visible symptom occurs at the end. The ownership mistake starts
            earlier in the connection lifecycle.
          </p>
        </div>
        <div className="case-path">
          {item.path.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index < item.path.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>
      </section>
      <section className="route-section lens-section">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">02 / Perspectives</p>
            <h2>One mechanism, four consequences.</h2>
          </div>
          <p>
            Each episode can stand alone on LinkedIn. Together they expose the
            complete system problem.
          </p>
        </div>
        <div className="lens-grid">
          {item.lenses.map((lens, index) => (
            <article className="case-lens" key={lens.name}>
              <span>EPISODE 0{index + 1}</span>
              <small>{lens.name}</small>
              <h3>{lens.role}</h3>
              <p>{lens.copy}</p>
            </article>
          ))}
        </div>
        <ExternalAction href={item.linkedin}>
          Read the series on LinkedIn
        </ExternalAction>
      </section>
      <SiteFooter />
    </main>
  );
}
