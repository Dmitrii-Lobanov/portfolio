---
name: portfolio-redesign
description: Implement the Engineered Objects visual redesign of this portfolio, including sculptural project imagery, editorial layouts, and interactive motion. Use for redesign work; use portfolio-design alone for unrelated maintenance.
---

# Engineered Objects redesign

Read [the baseline design skill](../portfolio-design/SKILL.md) and
[the design brief](../../docs/redesign/design-brief.md) before making visual
changes. The brief records the selected direction, scoped overrides, and ideas
that still need validation. Existing content remains the editorial source of truth.

Read [the implementation plan](../../docs/redesign/implementation-plan.md) when
choosing the next slice, adding media or rendering dependencies, or preparing a
release. Follow [shared styling conventions](../../docs/styling.md) for CSS work.
Read the installed Next.js guides relevant to any framework code before editing.

## Working decisions

- Work on `codex/engineered-objects-redesign` or an explicitly requested successor.
  Check the current branch and working tree before editing; preserve unrelated
  work. If the branch differs, inspect the context before switching.
- Build the hero and one project as the first complete visual slice. Resolve
  material quality, responsive composition, and motion there before spreading
  the treatment through the site.
- Use the repository concept images as art direction, not as screenshots to
  embed as the page. Keep headings, navigation, copy, and controls in semantic HTML.
- Keep the existing approved portrait asset and person identity. Its absence in
  a generated concept is not an instruction to remove it.
- Give each scene one meaningful action. The orange connector is a recurring
  motif, not permission to draw a moving overlay through text or every section.
- Choose the lightest rendering method that achieves the intended interaction.
  A video cannot implement independently draggable layers; a still image cannot
  expose hidden geometry. Do not present pan/zoom as a completed 3D interaction.
- Do not assume video tools, 3D source models, or a rendering library are available.
  Inspect dependencies and assets first. Describe any approximation honestly.
- Preserve a static, readable scene when animation, media, or WebGL is unavailable.
  All substantive content and project navigation must work without the sculpture.
- Record implemented choices and verification in the plan. Keep exploratory ideas
  marked as proposals until implemented and checked; do not mark progress from
  a mockup alone.

## Completion evidence

For each visual slice, inspect desktop and narrow layouts, keyboard focus, touch
alternatives, reduced motion, clipping, and media failure. Run the checks required
by the baseline and styling docs. Report what changed, what was verified, and any
material limitation. Production release follows the plan's single-release policy;
creating this skill does not authorize publishing or merging.
