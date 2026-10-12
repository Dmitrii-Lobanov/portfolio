import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { KanbanBreakout } from "./home-visuals";

export function KanbanSection() {
  return (
    <section className="project-showcase-section kanban-section">
      <div className="kanban-copy" data-reveal>
        <p className="screenbreak-kicker">
          02 / Independent product · Reliable Kanban
        </p>
        <h2>Immediate feedback. Recoverable moves.</h2>
        <p>
          Drag-and-drop updates immediately. Failed moves roll back, stale
          writes are rejected, and unrelated tasks stay available while a move
          is pending.
        </p>
        <Link href="/work/reliable-kanban" className="screenbreak-text-link">
          Open the project <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <KanbanBreakout />
    </section>
  );
}
