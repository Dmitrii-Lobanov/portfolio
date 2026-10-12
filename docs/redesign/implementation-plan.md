# Redesign implementation and release plan

## Current state

- Working branch: `codex/engineered-objects-redesign`.
- Design direction and reference images documented in [the brief](design-brief.md).
- Baseline skill retained; redesign-specific skill added and routed through AGENTS.md.
- First redesign slice targets the `/work` introduction at the user's request.
  A layered CSS object and keyboard-accessible separation slider are implemented
  and checked in a production preview at desktop and mobile widths.
- No rendering library selected; the inspected dependencies include Framer Motion,
  but no Three.js or React Three Fiber.

## Implementation sequence

### 1. Establish the baseline

- [ ] Inspect the current rendered homepage and representative secondary routes.
- [ ] Capture desktop/mobile screenshots and performance observations before edits.
- [ ] Inventory portrait, project artwork, content sources, links, and current motion.
- [ ] Inspect relevant installed Next.js guides before framework changes.

### 2. Build one complete visual slice

- [ ] Implement hero plus one project section with current copy and approved portrait.
- [ ] Establish reusable palette, typography, spacing, and material treatments.
- [ ] Compare feasible rendering methods with the concept's quality target.
- [ ] Implement one signature interaction plus a static fallback.
- [ ] Check narrow layouts, keyboard/touch use, reduced motion, and loading cost.
- [ ] Record the chosen rendering approach, actual assets, and measured budgets here.

### 3. Extend the language

- [ ] Apply the system to remaining home sections without repeating the same sculpture.
- [ ] Update work index and project presentations consistently.
- [ ] Carry typography, navigation, surfaces, and controls through case studies,
  about, experience, contact, and thinking routes as appropriate.
- [ ] Preserve project-specific diagrams and editorial identity where they serve
  comprehension; do not replace all imagery with decorative machinery.
- [ ] Verify existing content, metadata, URLs, and project links remain intact.

### 4. Verify the complete release

- [ ] Run `npx tsc --noEmit`, affected-file Biome checks, and `npm run build`.
- [ ] Check production rendering as well as development preview; preserve CSS order.
- [ ] Inspect representative widths such as 1440, 1024, 768, and 390 pixels, plus
  any breakpoint where the actual layout changes materially.
- [ ] Check keyboard focus, accessible control labels, touch, reduced motion,
  contrast, long headings, and image/scene clipping.
- [ ] Confirm meaningful content/navigation remain available with failed media or WebGL.
- [ ] Compare loading and interaction performance against the recorded baseline.
- [ ] Review all affected routes together and document remaining limitations.

## Repository map

| Area | Starting points |
| --- | --- |
| Homepage | `src/app/page.tsx`, `src/components/home/`, `src/styles/home/` |
| Person identity | `src/components/hero-name.tsx`, `src/components/hero-portrait.tsx` |
| Motion | `src/components/motion-effects.tsx`, `src/components/motion/` |
| Work | `src/components/work/`, `src/styles/work/`, `src/app/work/` |
| Case studies | `src/components/*-case-study.tsx`, `src/styles/case-studies/` |
| Content | `src/content/` and existing inline component copy |
| Shared design | `src/styles/tokens.css`, `src/styles/components/`, `src/styles/shared/` |
| CSS loading | `src/app/globals.css`; see [styling guide](../styling.md) |

## Single-release policy

Keep the related redesign work on the dedicated branch. Multiple cohesive commits
are fine; a single deployment does not require a single commit. Do not merge
partial redesign slices into `main` to make them visible in production.

Before a future push, inspect the actual deployment integration and production
branch configuration. A branch name alone does not guarantee deployment isolation.
Use local previews while that configuration is unknown. Preview deployments, when
requested, should remain distinct from production.

When the complete redesign has passed checks and the user requests release,
prepare the merge/release with its validation evidence and known limitations.
Creating these docs does not authorize a push, merge, or production deployment.

## Implementation decisions and evidence

Add dated entries here as work proceeds: changed scope, chosen renderer and why,
asset paths/provenance, measured payload/performance, routes and viewports checked,
commands/results, and remaining work. Keep checklist status tied to actual evidence.

### 2026-10-07 — Work introduction prototype

The user selected the “Not a gallery. A record of decisions.” section as the
first slice. The existing heading and supporting copy are retained. The old
orbit/packet graphic is replaced with code-authored ivory, glass, and orange
layers. A range slider controls actual layer spacing; CSS supports a static
scene and reduced-motion state. No generated image is loaded in the page.
This slice does not select a 3D rendering dependency or change the other routes.
`npx biome check` on affected files, `npx tsc --noEmit`, and `npm run build`
passed. The `/work` production preview rendered at 1280 and 390 pixels without
horizontal overflow at 390 pixels. The range control accepted keyboard `End`
and reached 100% separation. A fuller aesthetic and accessibility review remains
before the whole redesign is ready to release.

The existing `localhost:3000` development process retained a stale CSS
resolution error after the new stylesheet was added. Restarting that process
cleared the error. The user's Chrome tab now renders `/work`, and its slider
reaches 100% through the keyboard.
