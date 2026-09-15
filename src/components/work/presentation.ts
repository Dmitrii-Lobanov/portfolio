import type { ProjectSlug } from "@/content/portfolio";

export const capabilities = [
  "Architecture",
  "Reliability",
  "Product UX",
  "Performance",
  "Data",
  "Knowledge",
] as const;

export type Capability = (typeof capabilities)[number];

type WorkProjectPresentation = {
  capabilities: readonly Capability[];
  evidenceCaption: string;
  evidenceSignal: string;
  focus: string;
  shortName: string;
};

export const workProjectPresentations: Record<
  ProjectSlug,
  WorkProjectPresentation
> = {
  "cpa-platform": {
    capabilities: [
      "Architecture",
      "Reliability",
      "Product UX",
      "Performance",
      "Data",
    ],
    evidenceCaption: "people supported by the platform",
    evidenceSignal: "300k+",
    focus: "Product architecture · reliability · migration",
    shortName: "CPA platform",
  },
  "reliable-kanban": {
    capabilities: ["Architecture", "Reliability", "Product UX", "Data"],
    evidenceCaption: "writes reject stale task updates explicitly",
    evidenceSignal: "Versioned",
    focus: "Optimistic UX · concurrency · recovery",
    shortName: "Kanban",
  },
  "frontend-engineering-wiki": {
    capabilities: ["Product UX", "Performance", "Knowledge"],
    evidenceCaption: "connected technical explanations",
    evidenceSignal: "224",
    focus: "Information architecture · learning systems",
    shortName: "Engineering Wiki",
  },
  polaris: {
    capabilities: ["Architecture", "Product UX", "Performance", "Data"],
    evidenceCaption: "combined in one browser workspace",
    evidenceSignal: "5 systems",
    focus: "Runtime isolation · AI workflows · adapters",
    shortName: "Polaris",
  },
  wikimasters: {
    capabilities: [
      "Architecture",
      "Reliability",
      "Product UX",
      "Data",
      "Knowledge",
    ],
    evidenceCaption: "with explicit infrastructure ownership",
    evidenceSignal: "6 layers",
    focus: "Persistence · caching · storage · AI",
    shortName: "WikiMasters",
  },
};
