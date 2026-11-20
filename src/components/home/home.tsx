import { ContactSection } from "@/components/home/contact-section";
import { CpaSection } from "@/components/home/cpa-section";
import { DualitySection } from "@/components/home/duality-section";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { IncidentSection } from "@/components/home/incident-section";
import { KanbanSection } from "@/components/home/kanban-section";
import { ThinkingSection } from "@/components/home/thinking-section";
import type { HomeLocale } from "@/content/home";

export function Home({ locale }: { locale: HomeLocale }) {
  return (
    <main id="top" className="screenbreak-home">
      <HeroSection locale={locale} />
      <ImpactSection locale={locale} />
      <DualitySection locale={locale} />
      <CpaSection locale={locale} />
      <KanbanSection locale={locale} />
      <IncidentSection locale={locale} />
      <ThinkingSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}
