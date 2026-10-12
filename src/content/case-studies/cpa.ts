export const managerDomains = [
  "Products",
  "Offers",
  "Partners",
  "Conversions",
  "Statistics",
  "Documents",
  "Approvals",
] as const;

export const partnerDomains = [
  "Offer discovery",
  "Performance",
  "Onboarding",
  "Quiz",
  "Academy",
  "Signing",
  "Support",
] as const;

export const stateLayers = [
  {
    name: "Server state",
    owner: "RTK Query",
    purpose: "Remote data, caching, invalidation and request lifecycle",
  },
  {
    name: "Session context",
    owner: "Tab + memory",
    purpose: "Active partner identity and short-lived impersonation tokens",
  },
  {
    name: "Shared UI state",
    owner: "Redux",
    purpose: "Cross-feature client state with an intentional lifetime",
  },
  {
    name: "Local UI state",
    owner: "React",
    purpose: "Forms, drawers and interactions owned by one component tree",
  },
] as const;

export const decisions = [
  {
    number: "01",
    question: "How should one product serve two very different roles?",
    decision: "A modular SPA with explicit domain boundaries",
    why: "The teams shared authentication, routing, UI foundations and release cadence. Independent deployments would have added coordination cost without solving an organisational problem.",
  },
  {
    number: "02",
    question: "How can a manager safely work as several partners?",
    decision: "Identity became explicit request context",
    why: "Each browser tab owns an active partner ID; an in-memory map resolves it to a short-lived token. Manager-owned features remain attached to the original session.",
  },
  {
    number: "03",
    question: "Where should changing product data live?",
    decision: "State ownership follows authority and lifetime",
    why: "Remote data stays in the server-state layer. Session, shared UI and local interaction state each have smaller, deliberate update paths.",
  },
  {
    number: "04",
    question: "How could the system evolve while it was still shipping?",
    decision: "Sequenced migration into shared foundations",
    why: "Product delivery continued while shared contracts, tooling and components became stronger. Each migration reduced risk without requiring a disruptive rewrite.",
  },
] as const;

export const productionMetrics = [
  ["6s → 2s", "Production p75 LCP · critical pages"],
  ["−70%", "Production p75 INP · 500ms → 150ms"],
  ["0.3 → 0.1", "Production p75 CLS · layout stability"],
  ["−35%", "Unnecessary React renders · measured workflows"],
] as const;

export const contributionStories = [
  {
    label: "Performance",
    title: "Measure loading, interaction, and rendering separately.",
    pressure:
      "Critical pages loaded slowly, interactions were delayed, and content shifted as data arrived.",
    action:
      "I optimized bundles, removed unnecessary dependencies, and improved React rendering. Redux Toolkit and RTK Query clarified state and data-fetching boundaries. Reserved loading space, reduced font reflow, and retained content during refetches addressed layout instability.",
    evidence:
      "Production p75 LCP fell from 6s to 2s, INP from 500ms to 150ms, and CLS from 0.3 to 0.1. Separately, state-management changes reduced unnecessary renders by 35% in measured workflows. Performance changes were validated through production monitoring and controlled tests.",
  },
  {
    label: "Onboarding reliability",
    title: "Replace the integration that was losing submissions.",
    pressure:
      "A malfunctioning third-party framework integration caused data loss in approximately 10% of onboarding submissions.",
    action:
      "I replaced that integration with an internally controlled solution, taking responsibility for the behavior the onboarding workflow depended on.",
    evidence:
      "The onboarding defect was resolved, and submission behavior moved from the faulty third-party integration into an internally controlled solution.",
  },
  {
    label: "Delivery",
    title: "Reduce the cost of building and checking a release.",
    pressure:
      "Production builds took 20 minutes and manual regression testing required 90 minutes per release.",
    action:
      "I optimized Vite and Rollup configuration, reduced the initial JavaScript payload, and automated critical user journeys with Cypress and Playwright. Component and integration tests complemented Storybook.",
    evidence:
      "Production build time fell to 6 minutes, a 70% reduction. Manual regression testing fell to 20 minutes per release, while automated journeys covered critical behavior.",
  },
] as const;
