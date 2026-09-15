export const impactProof = [
  {
    category: "Experience",
    value: "6+ yrs",
    label: "Building and evolving production systems",
    visual: "experience",
  },
  {
    category: "Scale",
    value: "300k+",
    label: "Users supported across the platform",
    visual: "scale",
  },
  {
    category: "Reliability",
    value: "10% → 0%",
    label: "Data-loss rate after the reliability redesign",
    visual: "reliability",
  },
  {
    category: "Performance",
    value: "3×",
    label: "Faster rendering in measured workflows",
    visual: "performance",
  },
] as const;

export type ImpactVisualKind = (typeof impactProof)[number]["visual"];
