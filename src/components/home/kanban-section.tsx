import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { KanbanBreakout } from "./home-visuals";

export function KanbanSection() {
  return (
    <section className="project-showcase-section kanban-section">
      <div className="kanban-copy" data-reveal>
        <p className="screenbreak-kicker">02 / Public build</p>
        <h2>State you can feel</h2>
        <p>
          A public Kanban system presented through the physicality of the
          interaction—not another screenshot trapped inside a card.
        </p>
        <Link href="/work/reliable-kanban" className="screenbreak-text-link">
          Open the project <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <KanbanBreakout />
    </section>
  );
}
