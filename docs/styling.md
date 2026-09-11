# Shared styles

Reuse shared classes in `src/styles/` for matching visual treatments.
Compose them with a component class for its layout, content, or state differences:

```tsx
<Link className="button-tactile nav-contact" href="/contact">
  Let's talk
</Link>
```

| Shared class | Treatment |
| --- | --- |
| `button-tactile` | Glossy primary controls, including hover, active, and highlight |
| `action-link` | Editorial action and back links |
| `editorial-feature-section` | Home case-study and contact section shell |
| `project-showcase-section` | Home project showcase layout |
| `metric-chart` | Metric and migration chart layout |
| `system-grid-visual` | Project constellation and capability matrix frame |
| `work-project-meta` | Project card header and footer metadata |
| `case-study-surface` | CPA overview and architecture surface |
| `wiki-section` | Wiki case-study sections and heading typography |
| `wiki-map-node` | Wiki source and core diagram nodes |
| `kanban-panel-label` | Kanban panel heading and result labels |
| `wm-flow-panel` | WikiMasters article, responsibility, and lifecycle panels |
| `about-section-surface` | About hero, content sections, and closing surface |
| `contact-section-surface` | Contact hero, content sections, and closing surface |
| `thinking-refinery-node` | Thinking input, core, and output nodes |
| `thinking-preview-surface` | Thinking article and essay preview frames |

Keep shared responsive and interaction rules on the shared class. Keep deliberate
component differences on their existing classes. Similar-looking components may
have different dimensions, descendant selectors, or responsive behavior; compare
the complete rule family before combining them.

## Stylesheet organization

`src/app/globals.css` is the single stylesheet entry point imported by the root
layout. It loads Tailwind, design tokens, and the following style families:

| Location under `src/styles/` | Responsibility |
| --- | --- |
| `tokens.css`, `base.css` | Font/color/spacing tokens, document defaults, and reset |
| `components/` | Navigation, tactile controls, and reusable content illustrations |
| `shared/` | Route layouts, editorial cards, and cross-component responsive rules |
| `home/` | Homepage hero, editorial sections, project previews, and animated scenes |
| `work/` | Work index, project artwork, and Polaris card presentation |
| `case-studies/shared.css` | Common case-study structure, facts, decisions, and outcomes |
| `case-studies/cpa/`, `polaris/`, `wiki/`, `wikimasters/` | Each case study's surfaces, story, and instruments |
| `case-studies/kanban.css` | Kanban narrative and illustrations |
| `about.css`, `contact.css`, `thinking.css` | Standalone page presentation |

### Cascade and overrides

Import order in `globals.css` is intentional. These remain global styles, loaded
once through the root layout; do not import individual files from route pages or
alphabetize the imports. The stylesheet split preserves the existing cascade,
including cases where an early instrument rule must precede a shared route rule.
Some features therefore have separate surface, story, and scene files.

Edit a selector in its existing file instead of appending a new override to the
entry point. Use `rg` across `src/styles/` to find its base, interaction, and media
rules before changing it. Keep component-specific media queries and keyframes
with their owning feature. Cross-component responsive rules remain in
`shared/editorial-responsive.css` because their position affects several pages.

Superseded declarations for the same selector and media/supports conditions have
been removed where every selector in the rule is covered by a later declaration.
Different breakpoints, specificity, shorthand/longhand relationships, and animation
states are still deliberate parts of the cascade; do not collapse them solely
because their class names repeat.

### Verification

After changing styles, run `npx tsc --noEmit`,
`npx biome check src/app/globals.css src/styles`, and `npm run build`.
Check the affected routes at desktop and mobile widths, including hover/focus
states and reduced motion. Production CSS ordering matters as well as the dev
preview. Consult `skills/portfolio-design/SKILL.md` before changing the design.
