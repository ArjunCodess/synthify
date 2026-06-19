import type { MetadataRoute } from "next"

import { magazines, navItems } from "@/lib/content"
import { absoluteUrl } from "@/lib/seo"

const contentLastModified = new Date("2026-06-18")

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutes = ["/", ...navItems.map((item) => item.href)]

  const pages = pageRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: contentLastModified,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.8,
    images:
      route === "/publications"
        ? magazines.map((issue) => absoluteUrl(issue.coverSrc))
        : undefined,
  }))

  const magazinePdfs = magazines.map((issue) => ({
    url: absoluteUrl(issue.pdfHref),
    lastModified: new Date(issue.publishedDate),
    changeFrequency: "yearly" as const,
    priority: 0.5,
    images: [absoluteUrl(issue.coverSrc)],
  }))

  return [...pages, ...magazinePdfs]
}
