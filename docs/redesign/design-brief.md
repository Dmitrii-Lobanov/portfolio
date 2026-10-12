# Engineered Objects — design brief

Status: selected creative direction; first `/work` introduction slice in progress.
Branch: `codex/engineered-objects-redesign`.

## Intent and scope

Transform the portfolio's visual presentation into a distinctive, beautiful,
tactile exhibition of product engineering. Retain the existing content, verified
claims, project identity, navigation destinations, and case-study substance.
The user wants the redesign developed separately and released together.

The chosen direction combines sculptural engineered objects with oversized
editorial typography and deliberate whitespace. The other proposed directions
(Oversized Editorial and Living Blueprint) are not separate deliverables.

## Visual references

- [Initial Engineered Objects concept](references/engineered-objects.png): overall
  palette, typography scale, material quality, and hero/project composition.
- [Elevated kinetic concept](references/engineered-objects-elevated.png): separated
  layers, an orange connector, rails, a drag affordance, and a macro detail.

These are generated art-direction references, not finished website assets or
precise layout specifications. Their UI text, metrics, serif variation, and
portrait omission are not approved changes to the existing site. The LinkedIn
banner is a separate social asset, not the website hero specification.

## Design language

Use warm ivory and cream fields, deep Atlantic ink, clear pale-cyan glass, and
restrained vivid orange-red accents. Sculptures combine thin ceramic-like panels,
polished glass edges, fine etching, and occasional precise metal details. Lighting
is directional and soft, with controlled contact shadows and believable depth.

Keep oversized display sans typography and small mono annotations. Make the name,
role, value proposition, and work navigation immediately readable. Let composition
and material quality carry the visual impact. Avoid repetitive card grids, random
geometry, neon glow, dark-blue slabs, and simultaneous decorative loops.

The orange component is a recognizable visual motif: a connector in the hero,
a state or event indicator in project imagery, and an echo of the established CTA.
It should never imply an unsupported product behavior or measured outcome.

## Scoped departures from the baseline

| Baseline | Redesign direction |
| --- | --- |
| Paper-like UI and light perspective | More ambitious ceramic/glass sculpture and convincing spatial depth |
| Existing section/card compositions | More open editorial spreads and varied project compositions; maintain aligned content and clear separation |
| Current hero arrangement | May be recomposed around a signature sculpture while retaining the approved portrait and early person identity |
| Current illustrative motion | May be replaced by deliberate assembly, layer separation, or project-specific movement |

Existing content accuracy, portrait restrictions, tactile CTA treatment,
readability, accessibility, and responsive requirements remain in force. Update
this brief when a later user decision changes direction, rather than accumulating
contradictory rules.

## Proposed choreography to prototype

These are implementation candidates, not promises that every effect will ship.

| Moment | Intended behavior | Static/touch alternative |
| --- | --- | --- |
| Arrival | Short assembly sequence, then rest | Fully composed object immediately |
| Hero exploration | Gentle pointer tilt; controlled separation of interface, state, and architecture | Keyboard/touch-accessible layer selection or slider |
| Project delivery | Orange sample work item moves along Kanban rails | Clear states and ordinary project link |
| System/reliability project | Signal travels or connection recovers, if supported by that project's story | Labeled static relationship |
| Material detail | Occasional cinematic close-up | Poster image |

Choose one primary separation control in the first prototype; avoid competing
scroll, drag, and autoplay controls. Do not hijack scrolling. If a slider ships,
give it a visible label, keyboard operation, and an equivalent static explanation.
Dragging and hovering must never be the only way to reach content.

## Media and rendering

Interactive 3D is a candidate for the hero, not a selected dependency. Short
video loops may suit complex pre-rendered material details. CSS/SVG and existing
motion tools may suit simpler scenes. Prefer optimized video over large GIFs for
cinematic loops; user interest in GIFs expresses a desire for animation, not a
required file format.

Generated images do not contain separable 3D objects. True layer interaction needs
authored geometry or independently prepared layers. Generated video may distort
mechanical details and cannot offer physical dragging. Assess visual fidelity
and runtime cost before committing to a rendering approach.

Keep readable text in HTML. Store selected production assets in the repository,
with dimensions, source, and usage documented when introduced. Do not depend on
machine-local generated-image paths. Current reference PNGs are documentation
only and must not enter the page's asset payload automatically.

## Quality targets

Beauty must survive small screens, static states, and reduced motion. Keep the
portrait respectful, controls reachable, and imagery separate from copy. Simplify
nonessential effects before shrinking text. Pause offscreen motion and avoid
loading expensive scenes before they are needed. Provide posters and fallbacks;
layout and navigation must remain usable when media fails.

Set measured media/performance budgets after capturing the current baseline and
testing the first slice. Do not invent current performance scores or promise the
photorealistic concept will render identically on every device.
