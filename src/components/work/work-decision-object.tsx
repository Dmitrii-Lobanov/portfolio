import Image from "next/image";

export function WorkDecisionObject() {
  return (
    <figure className="decision-object">
      <div className="decision-object-stage">
        <Image
          src="/images/redesign/decision-sculpture.webp"
          alt="Ivory interface and architecture panels separated by transparent cyan glass, joined by a vivid orange connector on metal rails."
          width={1254}
          height={1254}
          sizes="(max-width: 620px) 100vw, (max-width: 1050px) 620px, 50vw"
          className="decision-object-render"
        />
      </div>
      <figcaption className="decision-object-caption">
        <span>
          <b>01</b> Interface
        </span>
        <span>
          <b>02</b> State
        </span>
        <span>
          <b>03</b> Architecture
        </span>
      </figcaption>
    </figure>
  );
}
