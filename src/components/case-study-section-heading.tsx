import type { ReactNode } from "react";

type CaseStudySectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
};

export function CaseStudySectionHeading({
  eyebrow,
  title,
  description,
}: CaseStudySectionHeadingProps) {
  return (
    <div className="route-section-heading" data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
