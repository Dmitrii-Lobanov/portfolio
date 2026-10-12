export const impactProof = [
  {
    category: "Experience",
    value: "6+ yrs",
    label: "React and TypeScript product engineering",
    visual: "experience",
  },
  {
    category: "Platform scale",
    value: "300k+",
    label: "Users served by the Tinkoff fintech platform",
    visual: "scale",
  },
  {
    category: "Loading · p75 LCP",
    value: "6s → 2s",
    label: "Production loading time across critical pages",
    visual: "performance",
  },
  {
    category: "Interaction · p75 INP",
    value: "−70%",
    label: "Production interaction latency: 500ms → 150ms",
    visual: "performance",
  },
] as const;

export type ImpactVisualKind = (typeof impactProof)[number]["visual"];
