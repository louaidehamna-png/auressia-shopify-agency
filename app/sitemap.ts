import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://auressia-shopify-agency.vercel.app";
  const now = new Date();

  const blogPosts: MetadataRoute.Sitemap = articles
    .filter((a) => a.published)
    .map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.publishedAt!),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
    {
      url: `${baseUrl}/cgv`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
