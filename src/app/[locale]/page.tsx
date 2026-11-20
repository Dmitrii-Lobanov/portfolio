import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home } from "@/components/home/home";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ru: "/ru" },
    },
    ...(locale === "ru" && {
      title: "Дмитрий Лобанов — Senior-фронтенд-инженер",
      description:
        "Разрабатываю продукты на React, TypeScript и Next.js для финтеха и SaaS.",
      openGraph: {
        title: "Дмитрий Лобанов — Senior-фронтенд-инженер",
        description: "Разработка продуктов на React, TypeScript и Next.js.",
        locale: "ru_RU",
        type: "website",
      },
    }),
  };
}

export default async function LocalizedHome({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return <Home locale={locale} />;
}
