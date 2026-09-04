---
name: portfolio-design
description: Design and edit Dmitrii Lobanov's portfolio UI, motion, responsive layouts, project cards, and case-study content while preserving its established visual and editorial language.
---

# Portfolio design language

Use this skill for visual, animation, responsive, and content work in this
portfolio. Inspect the current page before editing; the existing implementation
is the primary reference when it agrees with the decisions below.

## Creative direction

The site is an editorial engineering portfolio with tactile, physical UI. It
should feel precise, authored, playful, and technically sophisticated—not like a
dashboard template or a generic AI-generated portfolio.

- Use warm off-white, cream, and very pale cyan paper surfaces.
- Use deep Atlantic ink for text and structural contrast.
- Use cyan and orange as the principal signal colors, often as a restrained
  gradient.
- Do not introduce dark blue image panels, large blue slabs, or gray-gradient
  backgrounds unless the user explicitly requests them.
- Use dark sections sparingly and only when their narrative purpose is clear.
- Prefer generous editorial composition, clear hierarchy, asymmetric visual
  tension, and aligned section widths.

## Tactile surfaces

- Cards and controls may have rounded corners, thin cool borders, an inset top
  highlight, and a short crisp lower edge to imply physical depth.
- Keep shadows controlled and structural. Avoid large muddy blurs, exaggerated
  extrusion, stacked fake outlines, and heavy neumorphism.
- Primary buttons use the established glossy orange-red tactile style. Reuse the
  navigation “Let's talk” button treatment rather than inventing a new button.
- Do not apply the button treatment to ordinary text links.
- Adjacent sections must have deliberate vertical separation. Their rounded
  surfaces must never visually merge.

## Typography and links

- Use the display sans for large editorial statements and the mono face for
  eyebrows, system labels, statuses, and small technical metadata.
- Keep type treatments internally consistent. Do not switch weight, family, or
  color halfway through a sentence unless the contrast is deliberate and
  clearly improves meaning.
- Preserve readable line lengths and intentional wrapping at desktop, tablet,
  and mobile widths.
- Editorial action links use the established cyan-to-orange gradient on hover.
  The text must remain visible throughout the transition.
- Arrows communicate direction. Keep them visually attached to their link or
  connector and never style them like unexplained circular buttons.

## Illustration and motion

Build project imagery as authored visual metaphors, not decorative diagrams.
Use layered paper-like UI, simple spatial depth, system paths, product fragments,
and light 3D perspective consistent with the main page.

- Animation must explain a relationship or state change: signal travel,
  validation, recovery, deployment, ownership, or progression.
- Moving particles and packets must stay inside their rails or paths. They must
  never cross through text.
- Use cyan-to-orange signals when depicting progression from input to outcome.
- Keep autonomous movement slow and calm. Use stronger motion only on direct
  hover or pointer interaction.
- Avoid gratuitous orbit circles, random floating geometry, excessive glow,
  simultaneous looping effects, and motion without semantic meaning.
- A section should have one dominant animation idea. Secondary movement should
  support it.
- Always provide `prefers-reduced-motion` behavior and preserve the information
  in the static state.

## Portrait treatment

- Use the approved transparent portrait asset already referenced by the hero.
- The hero portrait is monochrome by default and may reveal color through the
  established pointer interaction.
- Do not regenerate, retouch, crop, or replace the portrait unless explicitly
  requested.
- Do not add halos, circles, or religious-looking backlighting behind the face.

## Layout and responsive behavior

- Reuse the same maximum-width container for sibling section cards unless a
  deliberate full-bleed section is requested.
- Account for both outer card width and inner padding when aligning headings,
  grids, and adjacent sections.
- Verify that illustrations remain fully visible and do not clip at common
  desktop, medium, and mobile widths.
- On mobile, preserve the person/project identity early, keep portrait crops
  respectful, stack flows clearly, and remove nonessential animation before
  compressing legibility.

## Content principles

Case studies should demonstrate engineering judgment, not enumerate a stack.

- Structure the story around product pressure, constraints, decisions,
  trade-offs, system behavior, and an earned outcome.
- Explain what the technical decision changes for a user, team, or system.
- Use technologies as supporting evidence, not as the central narrative.
- Never invent metrics, scale, responsibilities, or results. Verify project
  claims against the repository, live product, supplied profile, or existing
  source content.
- If no measured outcome exists, use an accurate qualitative result rather than
  manufacturing a number.
- Avoid generic claims such as “scalable,” “robust,” or “seamless” unless the
  surrounding copy identifies the mechanism and evidence.
- Keep overview cards concise; reserve detailed reasoning for project pages.

## Workflow and quality bar

Before editing, identify which existing component or section is the closest
approved reference—usually the main page, navigation CTA, measured-impact card,
or an already refined case-study section. Reuse its tokens and interaction
language.

After editing:

1. Format and type-check the affected code.
2. Inspect the rendered page at the target viewport and at one narrower width.
3. Verify alignment, clipping, hover readability, animation paths, and the
   reduced-motion state.
4. Check that the change improves the content hierarchy rather than merely
   adding decoration.
