import type { MetadataRoute } from "next";

const SITE_URL = "https://irzam-portfolio-mocha.vercel.app"; // ★本番URL

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}