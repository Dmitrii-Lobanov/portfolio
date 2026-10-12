export const clocks = [
  [
    "01",
    "Immediate",
    "Selection, open files, pane layout, and unfinished input.",
  ],
  [
    "02",
    "Persistent",
    "Projects, file records, conversations, and user ownership.",
  ],
  [
    "03",
    "Asynchronous",
    "AI requests, context retrieval, monitoring, and background work.",
  ],
] as const;

export const requestStages = [
  ["Select code", "Editor range"],
  ["Add instruction", "User intent"],
  ["Assemble context", "Files + history"],
  ["Run model", "Background task"],
  ["Stream response", "Incremental result"],
  ["Persist conversation", "Durable record"],
] as const;

export const boundaries = [
  ["Editor adapter", "Documents, selection, edits", "Persistence"],
  ["Project service", "Projects and file records", "Editor presentation"],
  ["AI workflow", "Prompt execution and progress", "Workspace layout"],
  ["Conversation model", "Messages and continuity", "Model implementation"],
  ["Observability", "Failures, traces, AI requests", "Product behavior"],
] as const;

export const current = [
  "Authenticated project workspace and file tree",
  "Resizable layout and multi-file editing",
  "CodeMirror editor, AI suggestions, and quick edit",
  "Persistent conversations and background AI workflows",
  "Coding agent with project file tools",
  "WebContainer execution, terminal, and live preview",
  "GitHub repository import and export",
  "Error and model monitoring",
] as const;

export const constraints = [
  "Browser execution depends on WebContainer support",
  "GitHub workflows require connected repository access",
  "AI and persistence depend on configured external services",
  "Generated changes still require engineering review",
] as const;

export const decisions = [
  [
    "Long-running work should not belong to a request",
    "AI tasks can outlive navigation or a server response.",
    "Move durable execution into background workflows.",
    "More states and operational components.",
    "The interface remains responsive while work continues independently.",
  ],
  [
    "The editor should remain replaceable",
    "Specialized editor APIs can leak through an entire product.",
    "Put editor operations behind a narrow workspace adapter.",
    "Additional translation code.",
    "Product workflows depend on editing capabilities, not editor internals.",
  ],
  [
    "Context should be explicit",
    "Useful output depends on code, project state, history, and documentation.",
    "Assemble context as an observable workflow.",
    "More orchestration and monitoring.",
    "AI behavior becomes easier to inspect and improve.",
  ],
] as const;
