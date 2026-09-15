import { ContactSection } from "@/components/home/contact-section";
import { CpaSection } from "@/components/home/cpa-section";
import { DualitySection } from "@/components/home/duality-section";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { IncidentSection } from "@/components/home/incident-section";
import { KanbanSection } from "@/components/home/kanban-section";
import { ThinkingSection } from "@/components/home/thinking-section";

export default function Home() {
  return (
    <main id="top" className="screenbreak-home">
      <HeroSection />
      <ImpactSection />
      <DualitySection />
      <CpaSection />
      <KanbanSection />
      <IncidentSection />
      <ThinkingSection />
      <ContactSection />
    </main>
  );
}
