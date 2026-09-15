export const guarantees = [
  {
    number: "01",
    title: "Respond immediately",
    copy: "The card moves before the network round-trip completes.",
  },
  {
    number: "02",
    title: "Isolate the mutation",
    copy: "Each task owns its pending state, so unrelated work stays available.",
  },
  {
    number: "03",
    title: "Validate the version",
    copy: "The API rejects a write when the client is behind the durable task.",
  },
  {
    number: "04",
    title: "Confirm or recover",
    copy: "Success becomes server truth; failure restores the precise snapshot.",
  },
] as const;

export const decisions = [
  {
    signal: "Interaction",
    title: "Optimism with an exit route",
    copy: "Every optimistic move carries enough local context to reverse itself. Failure is visible beside the affected task rather than hidden in a global toast.",
    result: "Fast when healthy · recoverable when not",
  },
  {
    signal: "Concurrency",
    title: "Stale writes are rejected",
    copy: "Task versions turn concurrent edits into an explicit conflict instead of allowing an older browser session to silently replace newer work.",
    result: "No silent last-write-wins overwrite",
  },
  {
    signal: "Boundaries",
    title: "Persistence stays behind the API",
    copy: "Database enums and records are mapped to stable transport contracts. Column titles remain presentation; stable keys carry behavior.",
    result: "UI and storage can evolve independently",
  },
  {
    signal: "Access",
    title: "Authorization follows the data",
    copy: "Clerk identifies the session, while workspace membership is enforced at the service boundary before data is returned or changed.",
    result: "Protected, user-scoped boards",
  },
] as const;

export const delivery = [
  ["Web", "React 19 · TypeScript · TanStack Query"],
  ["API", "NestJS · Fastify · shared contracts"],
  ["Data", "PostgreSQL · Prisma migrations"],
  ["Confidence", "Unit · component · API · database tests"],
  ["Delivery", "GitHub Actions · Vercel · Render"],
] as const;
