import { type HomeLocale, homeSectionCopy } from "@/content/home";
export function DualitySection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = homeSectionCopy.duality[locale];
  return (
    <section className="duality-section screenbreak-stage" data-depth-stage>
      <div className="duality-list" data-reveal>
        <p className="screenbreak-kicker">{copy.productRole}</p>
        <h2>{copy.productTitle}</h2>
        <ul>
          <li>{copy.workflows}</li>
          <li>{copy.interactions}</li>
          <li>{copy.performance}</li>
          <li>{copy.accessibility}</li>
        </ul>
      </div>
      <div className="duality-core" role="img" aria-label={copy.diagram}>
        <div className="core-signal core-signal-in" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="core-orbit core-orbit-outer" aria-hidden="true">
          <i />
          <i />
        </div>
        <div className="core-orbit core-orbit-inner" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="core-module" data-depth="0.12">
          <span>{copy.signals}</span>
          <strong>{copy.core}</strong>
          <small>{copy.reliability}</small>
        </div>
        <div className="core-node core-node-state" data-depth="-0.14">
          State
        </div>
        <div className="core-node core-node-events" data-depth="0.2">
          Events
        </div>
        <div className="core-node core-node-data" data-depth="-0.08">
          Data
        </div>
        <div className="core-signal core-signal-out" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="duality-list duality-list-right" data-reveal>
        <p className="screenbreak-kicker">{copy.architectureRole}</p>
        <h2>{copy.architectureTitle}</h2>
        <ul>
          <li>{copy.boundaries}</li>
          <li>{copy.state}</li>
          <li>{copy.events}</li>
          <li>{copy.architecture}</li>
        </ul>
      </div>
    </section>
  );
}
