import { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ashwinkumaarmuralidharan.github.io/neuroresponse-intelligence";
  const posts = getPostSlugs();

  const routes = [
    "",
    "/product",
    "/vns-epilepsy",
    "/approach",
    "/team",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const postRoutes = posts.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
