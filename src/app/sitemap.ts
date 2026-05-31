import type { MetadataRoute } from "next";
import { wedding } from "@/lib/wedding";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: wedding.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
