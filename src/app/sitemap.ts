import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.novaorganizasyon7.com.tr";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/?lang=en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
