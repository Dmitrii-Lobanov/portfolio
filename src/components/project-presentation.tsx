import type { ComponentType } from "react";
import { CpaCaseStudy } from "@/components/cpa-case-study";
import { KanbanCaseStudy } from "@/components/kanban-case-study";
import { PolarisCaseStudy } from "@/components/polaris-case-study";
import { ProjectInstrument } from "@/components/project-instrument";
import { WikiCaseStudy } from "@/components/wiki-case-study";
import {
  WikiMastersArticle,
  WikiMastersCaseStudy,
} from "@/components/wikimasters-case-study";
import type { Project, ProjectSlug } from "@/content/portfolio";

type ProjectPresentation = {
  CaseStudy: ComponentType;
  HeroVisual: ComponentType<{ project: Project }>;
  OutcomeDetail?: ComponentType;
  factLabel: "Scale" | "Focus";
  heroClassName: string;
  mainClassName?: string;
  outcomeClassName?: string;
  outcomeStep: string;
};

function InstrumentHero({ project }: { project: Project }) {
  return <ProjectInstrument project={project} />;
}

function WikiMastersHero() {
  return <WikiMastersArticle />;
}

function WikiMastersOutcome() {
  return (
    <p className="wm-outcome-copy">
      The MVP brings content persistence, caching, media storage, and AI
      summaries into a single wiki product, with clear responsibilities for each
      part of the system.
    </p>
  );
}

function KanbanOutcome() {
  return (
    <div className="kanban-outcome-signal" aria-hidden="true">
      <div>
        <i />
        <span>Immediate</span>
        <small>local intent</small>
      </div>
      <b>
        <i />
      </b>
      <div>
        <i />
        <span>Validated</span>
        <small>server authority</small>
      </div>
      <b>
        <i />
      </b>
      <div>
        <i />
        <span>Durable</span>
        <small>accepted state</small>
      </div>
    </div>
  );
}

export const projectPresentations: Record<ProjectSlug, ProjectPresentation> = {
  "cpa-platform": {
    CaseStudy: CpaCaseStudy,
    HeroVisual: InstrumentHero,
    factLabel: "Scale",
    heroClassName: "cpa-detail-hero",
    outcomeStep: "06",
  },
  "reliable-kanban": {
    CaseStudy: KanbanCaseStudy,
    HeroVisual: InstrumentHero,
    OutcomeDetail: KanbanOutcome,
    factLabel: "Scale",
    heroClassName: "kanban-detail-hero",
    outcomeClassName: "kanban-outcome",
    outcomeStep: "04",
  },
  "frontend-engineering-wiki": {
    CaseStudy: WikiCaseStudy,
    HeroVisual: InstrumentHero,
    factLabel: "Scale",
    heroClassName: "wiki-detail-hero",
    outcomeClassName: "wiki-outcome",
    outcomeStep: "06",
  },
  polaris: {
    CaseStudy: PolarisCaseStudy,
    HeroVisual: InstrumentHero,
    factLabel: "Scale",
    heroClassName: "polaris-detail-hero",
    outcomeStep: "07",
  },
  wikimasters: {
    CaseStudy: WikiMastersCaseStudy,
    HeroVisual: WikiMastersHero,
    OutcomeDetail: WikiMastersOutcome,
    factLabel: "Focus",
    heroClassName: "",
    mainClassName: "wm-detail",
    outcomeStep: "05",
  },
};
