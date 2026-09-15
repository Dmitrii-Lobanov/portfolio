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
