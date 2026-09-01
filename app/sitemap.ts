import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sujincha.com/", priority: 1 },
    { url: "https://sujincha.com/research/", priority: 0.9 },
    { url: "https://sujincha.com/teaching/", priority: 0.8 },
  ];
}
