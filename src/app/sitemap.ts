import type { MetadataRoute } from "next";
import { edgeCases, projects } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://portfolio-ten-wine-92.vercel.app";
  const routes = [
    "",
    "/work",
    "/thinking",
    "/thinking/articles",
    "/thinking/knowledge-base",
    "/thinking/edge-case-inc",
    "/about",
    "/contact",
  ];
  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map(({ slug }) => ({
      url: `${base}/work/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...edgeCases.map(({ slug }) => ({
      url: `${base}/thinking/edge-case-inc/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
