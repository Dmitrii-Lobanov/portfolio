export const learningModes = [
  [
    "01",
    "Understand",
    "Build the mental model through structured, first-principles explanations.",
  ],
  [
    "02",
    "Explain",
    "Turn understanding into concise answers for interviews, reviews, and technical conversations.",
  ],
  [
    "03",
    "Recall",
    "Retrieve important distinctions, rules, and terminology through compact references.",
  ],
  [
    "04",
    "Apply",
    "Reinforce the concept through exercises, debugging scenarios, and implementation prompts.",
  ],
] as const;

export const architecture = [
  [
    "Direction",
    "Tracks provide a route",
    "Twelve learning tracks group related ideas into navigable paths without preventing exploration of individual topics.",
  ],
  [
    "Relationships",
    "Links expose the system",
    "Explanations connect prerequisites, adjacent concepts, practical consequences, and deeper material.",
  ],
  [
    "Depth",
    "Content modes stay distinct",
    "Long explanations, compact answers, references, and exercises each keep the shape appropriate to their purpose.",
  ],
] as const;

export const editorialDecisions = [
  [
    "Depth should be intentional",
    "One reader may need a five-minute reminder; another needs the complete mental model.",
    "Separate quick answers from deep explanations and link them in both directions.",
    "Concision no longer requires sacrificing depth.",
  ],
  [
    "Navigation should teach",
    "A flat article list hides how frontend concepts depend on one another.",
    "Organize material into tracks and expose relationships between topics.",
    "The information architecture becomes part of the learning experience.",
  ],
  [
    "Practice should follow reasoning",
    "Passive reading can feel clear without producing durable understanding.",
    "Connect explanations to recall prompts, questions, and practical exercises.",
    "Knowledge is tested through use rather than page completion.",
  ],
  [
    "Growth should remain visible",
    "An evolving curriculum will always contain unfinished areas.",
    "Show roadmap and coverage states instead of pretending the collection is complete.",
    "Expansion remains understandable and honest.",
  ],
] as const;

export const evidence = [
  ["10", "Chapters", "Subject areas forming the curriculum backbone"],
  ["224", "Explanations", "Focused answers connected to broader mental models"],
  ["12", "Tracks", "Guided paths through related engineering concepts"],
  [
    "4",
    "Learning modes",
    "Different interfaces for understanding and practice",
  ],
] as const;
