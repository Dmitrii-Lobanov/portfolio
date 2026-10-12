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
    focus: "Frontend ownership · performance · reliability",
    shortName: "Tinkoff fintech",
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
    evidenceCaption: "explanations supporting recall and deliberate practice",
    evidenceSignal: "224",
    focus: "Information architecture · learning systems",
    shortName: "Engineering Wiki",
  },
  polaris: {
    capabilities: ["Architecture", "Product UX", "Performance", "Data"],
    evidenceCaption: "repositories move into and out of the browser workspace",
    evidenceSignal: "Import → edit → export",
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
    evidenceCaption:
      "article-list cache expires and is invalidated after writes",
    evidenceSignal: "60s cache",
    focus: "Persistence · caching · storage · AI",
    shortName: "WikiMasters",
  },
};
