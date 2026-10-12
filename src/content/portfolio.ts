export const externalLinks = {
  linkedin: "https://www.linkedin.com/in/dmitrii-lobanov/",
  github: "https://github.com/Dmitrii-Lobanov",
  medium: "https://medium.com/@dmitriilobanov3",
  wiki: "https://site-xi-sandy-18.vercel.app/",
  email: "mailto:dmitriilobanov3@gmail.com",
};

export type ProjectSlug =
  | "cpa-platform"
  | "reliable-kanban"
  | "frontend-engineering-wiki"
  | "polaris"
  | "wikimasters";

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  label: string;
  status: string;
  summary: string;
  context: string;
  role: string;
  period: string;
  scale: string;
  outcome: string;
  nodes: string[];
  decisions: Array<{
    constraint: string;
    decision: string;
    tradeoff: string;
    result: string;
  }>;
  repository?: string;
  demo?: string;
  article?: string;
};

export const projects: Project[] = [
  {
    slug: "cpa-platform",
    index: "01",
    name: "Tinkoff fintech platform",
    label: "Production fintech · CPA partner platform",
    status: "Featured case",
    summary:
      "Built and evolved partner and internal operations frontends for a fintech platform serving 300,000+ users, spanning onboarding, analytics, approvals, documents, and real-time workflows.",
    context:
      "Over 4.5 years, two connected product surfaces evolved around granular permissions, dense operational interfaces, changing business rules, and more than 300,000 users.",
    role: "Frontend Developer → Senior Frontend Developer",
    period: "Aug 2021 — Feb 2026",
    scale: "300,000+ users",
    outcome:
      "Faster pages, responsive workflows, and an onboarding defect resolved.",
    nodes: [
      "Manager UI",
      "Domain modules",
      "State ownership",
      "Events",
      "Services",
    ],
    decisions: [
      {
        constraint: "Two roles, different workflows",
        decision: "Shared platform with explicit domain boundaries",
        tradeoff: "More deliberate contracts between modules",
        result: "One delivery model without mixing responsibilities",
      },
      {
        constraint: "Server, session, shared and local state",
        decision: "Ownership based on lifetime and authority",
        tradeoff: "Several focused state mechanisms",
        result: "Smaller update paths and a safer blast radius",
      },
      {
        constraint: "15+ applications still shipping",
        decision: "Sequenced migration into shared foundations",
        tradeoff: "Longer transition than a clean rewrite",
        result: "Migration continued alongside product delivery",
      },
    ],
    article:
      "https://medium.com/@dmitriilobanov3/frontend-system-design-of-a-large-cpa-platform-b0c448f20ba4",
  },
  {
    slug: "reliable-kanban",
    index: "02",
    name: "Reliable Kanban",
    label: "Independent product · Async reliability",
    status: "Live",
    summary:
      "A full-stack Kanban system built to make drag-and-drop feel immediate while protecting task state when requests fail, sessions overlap, or clients fall behind.",
    context:
      "A board can optimistically move a task in the browser, but the server may reject the request, another session may have changed the same task, or the user may no longer have permission to edit it. The interface had to feel fast without pretending every write succeeds.",
    role: "Product engineer",
    period: "2026",
    scale: "Web + API + database",
    outcome:
      "Moves respond immediately. Failed writes roll back. Stale updates are rejected.",
    nodes: [
      "Intent",
      "Optimistic state",
      "Conflict check",
      "Recovery",
      "Durable truth",
    ],
    decisions: [
      {
        constraint: "Users expect instant drag-and-drop",
        decision: "Make failure reversible with scoped snapshots",
        tradeoff: "Every move needs an explicit recovery path",
        result: "Immediate feedback without pretending every write succeeds",
      },
      {
        constraint: "Concurrent edits can overwrite newer data",
        decision: "Reject stale writes with version checks",
        tradeoff: "An old session must explain the conflict and refresh",
        result: "Newer task state is protected from silent overwrite",
      },
      {
        constraint: "Frontend and API evolve independently",
        decision: "Keep transport contracts typed and visible",
        tradeoff: "Contract changes become deliberate coordination work",
        result: "The UI, API, and database agree on one task lifecycle",
      },
      {
        constraint: "Permission can change between render and write",
        decision: "Treat authorization as part of the transition",
        tradeoff: "The server remains the final authority",
        result: "Only valid moves become durable state",
      },
    ],
    repository: "https://github.com/Dmitrii-Lobanov/kanban-board",
    demo: "https://kanban-board-psi-taupe.vercel.app/",
  },
  {
    slug: "frontend-engineering-wiki",
    index: "03",
    name: "Frontend Engineering Wiki",
    label: "Knowledge product",
    status: "Growing",
    summary:
      "A growing map of frontend engineering connecting first-principles explanations, interview reasoning, quick references, and deliberate practice.",
    context:
      "Documentation explains APIs, articles isolate ideas, interview lists test recall, and courses impose a fixed sequence. The Wiki connects those formats into one navigable learning system.",
    role: "Creator and engineer",
    period: "2026 — ongoing",
    scale: "10 chapters · 224 answers · 12 tracks",
    outcome:
      "Move from a first-principles explanation to a concise answer, a quick reference, and a practice prompt.",
    nodes: ["Understand", "Explain", "Recall", "Apply", "Deepen"],
    decisions: [
      {
        constraint: "Different goals require different depth",
        decision: "Four linked learning modes",
        tradeoff: "Content must be maintained in several forms",
        result: "Readers can enter at the point they need",
      },
      {
        constraint: "The curriculum will grow over time",
        decision: "Track-based information architecture",
        tradeoff: "Roadmap states remain visible",
        result: "Expansion without losing navigation context",
      },
      {
        constraint: "Knowledge must remain useful, not decorative",
        decision: "Connected explanations and practice prompts",
        tradeoff: "Higher editorial effort per topic",
        result: "Recall is tied back to durable mental models",
      },
    ],
    repository: "https://github.com/Dmitrii-Lobanov/javascript-handbook",
    demo: externalLinks.wiki,
  },
  {
    slug: "polaris",
    index: "04",
    name: "Polaris",
    label: "AI development workspace",
    status: "Working prototype",
    summary:
      "A Next.js and TypeScript browser IDE connecting a file tree, code editor, terminal, live preview, GitHub import/export, and AI assistance.",
    context:
      "Browser IDEs combine several independently complex systems: text editing, terminal emulation, runtime isolation, persistence, asynchronous AI work, and repository workflows.",
    role: "Independent frontend and product engineer",
    period: "2026",
    scale: "Editor · runtime · repositories · AI",
    outcome:
      "Import a repository, edit files, run a browser preview, and work with an AI assistant in one workspace.",
    nodes: ["CodeMirror", "Xterm", "WebContainer", "AI SDK", "Convex"],
    decisions: [
      {
        constraint: "Tools have independent lifecycles",
        decision: "Integration through narrow adapters",
        tradeoff: "Additional boundary code",
        result: "Subsystems can change without rewriting the workspace",
      },
      {
        constraint: "Long-running AI work outlives a request",
        decision: "Durable background workflows",
        tradeoff: "More operational components",
        result: "Work can survive navigation and reconnects",
      },
      {
        constraint: "Code must execute safely in the browser",
        decision: "Isolated WebContainer runtime",
        tradeoff: "Browser capability constraints",
        result: "A real development loop without a local install",
      },
    ],
    repository: "https://github.com/Dmitrii-Lobanov/Cursor-clone",
    demo: "https://cursor-clone-delta.vercel.app/",
  },
  {
    slug: "wikimasters",
    index: "05",
    name: "WikiMasters",
    label: "Collaborative knowledge platform",
    status: "MVP",
    summary:
      "A collaborative wiki MVP for creating, editing, and reading articles. Authored knowledge stays central, supported by media, cached reads, and AI summaries.",
    context:
      "A content platform needs more than CRUD: identity, caching, storage, delivery, testing, and AI features must remain understandable as one product.",
    role: "Full-stack engineer",
    period: "2026",
    scale: "Content · caching · media · AI",
    outcome:
      "Create and edit an article, attach media, and help readers browse it through tags and AI summaries.",
    nodes: ["Next.js", "Postgres", "Redis", "Blob", "AI"],
    decisions: [
      {
        constraint: "Content reads dominate writes",
        decision:
          "Cache the article list for 60 seconds and invalidate after writes",
        tradeoff: "Invalidation becomes an owned concern",
        result:
          "Repeated list reads reuse results; article details read from Postgres",
      },
      {
        constraint: "Documents and media have different storage needs",
        decision: "Relational metadata plus object storage",
        tradeoff: "Two persistence systems",
        result: "Each data type uses an appropriate boundary",
      },
      {
        constraint: "AI output is supplemental",
        decision: "Summaries remain downstream of authored content",
        tradeoff: "AI cannot become the primary source",
        result: "Automation enhances rather than owns knowledge",
      },
    ],
    repository: "https://github.com/Dmitrii-Lobanov/wikimasters",
    demo: "https://wikimasters-fsrd.vercel.app/",
  },
];

export const articles = [
  {
    index: "04",
    tag: "Performance",
    readTime: "Case study",
    title: "Optimizing a Large React + Redux App",
    description:
      "An investigation of rendering bottlenecks, state boundaries, dependency cleanup, and bundle optimization in a production frontend.",
    href: `${externalLinks.medium}/optimizing-a-large-react-redux-app-from-render-chaos-to-a-3x-faster-ui-9d6b2038eb05`,
  },
  {
    index: "01",
    tag: "System design",
    readTime: "30 min",
    title: "Frontend System Design of a Large CPA Platform",
    description:
      "Domain boundaries, impersonation, server state, real-time events, and the decisions behind a long-lived React platform.",
    href: `${externalLinks.medium}/frontend-system-design-of-a-large-cpa-platform-b0c448f20ba4`,
  },
  {
    index: "02",
    tag: "Product engineering",
    readTime: "15 min",
    title: "Product Workflows Behind a Complex Fintech Frontend",
    description:
      "How offers, analytics, onboarding, permissions, and documents became one coherent product experience.",
    href: `${externalLinks.medium}/building-a-large-cpa-platform-at-tinkoff-product-workflows-behind-a-complex-fintech-frontend-edb82069ad2c`,
  },
  {
    index: "03",
    tag: "Architecture",
    readTime: "8 min",
    title: "Why Requirements Define the Architecture",
    description:
      "Why architecture begins with constraints and measurable qualities—not fashionable implementation patterns.",
    href: `${externalLinks.medium}/frontend-system-design-beyond-patterns-why-requirements-define-the-architecture-e1ba289702db`,
  },
];

export const edgeCases = [
  {
    slug: "websocket-duplicate-events",
    number: "CASE 001",
    title: "The event that happened twice",
    mechanism: "WebSocket lifecycle and duplicate processing",
    summary:
      "A harmless-looking reconnection crosses runtime behavior, ownership boundaries, user workflows, and business correctness.",
    status: "Series opening",
    linkedin:
      "https://www.linkedin.com/posts/dmitrii-lobanov_edge-case-inc-processed-the-same-websocket-activity-7500145408241811456-bugc",
    path: [
      "Server event",
      "Connection A",
      "Reconnect",
      "Connection B",
      "Duplicate effect",
    ],
    lenses: [
      {
        name: "Fox",
        role: "Production engineering",
        copy: "Trace listener registration, cleanup, reconnection, and the evidence that separates transport duplication from client duplication.",
      },
      {
        name: "Bear",
        role: "Architecture in practice",
        copy: "Decide which boundary owns the connection and how one active subscription becomes an enforceable invariant.",
      },
      {
        name: "Rabbit",
        role: "Product engineering",
        copy: "Follow the duplicate event into notifications, user decisions, task state, and the meaning of an action in progress.",
      },
      {
        name: "Hedgehog",
        role: "Business value",
        copy: "Test the explanation against observable evidence and connect technical duplication to support cost and trust.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getEdgeCase(slug: string) {
  return edgeCases.find((edgeCase) => edgeCase.slug === slug);
}
