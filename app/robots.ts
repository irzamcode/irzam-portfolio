import type { MetadataRoute } from "next";

const SITE_URL = "https://irzam-portfolio-mocha.vercel.app"; // ★本番URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}