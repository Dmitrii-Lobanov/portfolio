import { impactProof } from "@/content/home";
import { ImpactVisual } from "./home-visuals";

export function ImpactSection() {
  return (
    <section className="impact-console" aria-labelledby="impact-title">
      <div className="impact-console-heading">
        <h2 id="impact-title">Measured impact</h2>
        <span>Production outcomes / selected</span>
      </div>
      <div className="impact-console-grid">
        {impactProof.map(({ category, value, label, visual }) => (
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
