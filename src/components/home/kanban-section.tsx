import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type HomeLocale, homeSectionCopy } from "@/content/home";
import { KanbanBreakout } from "./home-visuals";

export function KanbanSection({ locale = "en" }: { locale?: HomeLocale }) {
  const copy = homeSectionCopy.kanban[locale];
  return (
    <section className="project-showcase-section kanban-section">
      <div className="kanban-copy" data-reveal>
        <p className="screenbreak-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        <Link href="/work/reliable-kanban" className="screenbreak-text-link">
          {copy.action} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <KanbanBreakout />
    </section>
  );
}
