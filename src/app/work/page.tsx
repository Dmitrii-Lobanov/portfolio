import type { Metadata } from "next";
import { SiteFooter } from "@/components/editorial";
import { WorkCapabilityMap } from "@/components/work/work-capability-map";
import { WorkCta } from "@/components/work/work-cta";
import { WorkHero } from "@/components/work/work-hero";
import { WorkProjects } from "@/components/work/work-projects";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Selected Work | Dmitrii Lobanov",
  description:
    "Production systems, public products, and engineering case studies by Dmitrii Lobanov.",
};

export default function WorkPage() {
  return (
    <main className="route-main work-route">
      <WorkHero />
      <WorkCapabilityMap projects={projects} />
      <WorkProjects projects={projects} />
      <WorkCta />
      <SiteFooter />
    </main>
  );
}
