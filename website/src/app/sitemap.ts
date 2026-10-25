import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/services",
    "/lab",
    "/about",
    "/resume",
    "/writing",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/work/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
