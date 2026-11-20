import { type HomeLocale, impactHeading, impactProof } from "@/content/home";
import { ImpactVisual } from "./home-visuals";

export function ImpactSection({ locale = "en" }: { locale?: HomeLocale }) {
  const heading = impactHeading[locale];
  return (
    <section className="impact-console" aria-labelledby="impact-title">
      <div className="impact-console-heading">
        <h2 id="impact-title">{heading.title}</h2>
        <span>{heading.subtitle}</span>
      </div>
      <div className="impact-console-grid">
        {impactProof.map(({ [locale]: { category, value, label }, visual }) => (
          <article key={category} className="impact-console-item">
            <span className="impact-category">{category}</span>
            <strong>{value}</strong>
            <p>{label}</p>
            <ImpactVisual visual={visual} />
          </article>
        ))}
      </div>
    </section>
  );
}
