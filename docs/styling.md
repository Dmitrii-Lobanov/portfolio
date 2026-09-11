# Shared styles

Reuse shared classes in `src/app/globals.css` for matching visual treatments.
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

The shared rules remain at their original cascade positions. Moving them to the
end of the stylesheet or increasing their specificity can change existing page
styles. Consult `skills/portfolio-design/SKILL.md` before changing the design.
