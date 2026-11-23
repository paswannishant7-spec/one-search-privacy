import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.publicationReady || !siteConfig.productionUrl) return [];
  const routes = ["", "/privacy-policy", "/delete-account", "/contact"];
  return routes.map((route) => ({
    url: `${siteConfig.productionUrl}${route}`,
    lastModified: new Date("2026-11-23"),
    changeFrequency: "monthly",
    priority: route === "" || route === "/privacy-policy" ? 1 : 0.8,
  }));
}
