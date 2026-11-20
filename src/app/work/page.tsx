import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter } from "@/components/editorial";
import { WorkCapabilityMap } from "@/components/work/work-capability-map";
import { WorkCta } from "@/components/work/work-cta";
import { WorkHero } from "@/components/work/work-hero";
import { WorkProjects } from "@/components/work/work-projects";
import { projects } from "@/content/portfolio";

export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussianWork();
  return {
    title: russian
      ? "Проекты | Дмитрий Лобанов"
      : "Selected Work | Dmitrii Lobanov",
    description: russian
      ? "Избранные проекты и инженерные кейсы Дмитрия Лобанова."
      : "Production systems, public products, and engineering case studies by Dmitrii Lobanov.",
    alternates: {
      canonical: russian ? "/ru/work" : "/work",
      languages: { en: "/work", ru: "/ru/work" },
    },
  };
}

async function isRussianWork() {
  return (await headers()).get("x-portfolio-locale") === "ru";
}

export default async function WorkPage() {
  const russian = await isRussianWork();
  return (
    <main className="route-main work-route">
      <WorkHero russian={russian} />
      <WorkCapabilityMap russian={russian} projects={projects} />
      <WorkProjects russian={russian} projects={projects} />
      <WorkCta russian={russian} />
      <SiteFooter locale={russian ? "ru" : "en"} />
    </main>
  );
}
