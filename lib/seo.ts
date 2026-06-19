import type { Metadata } from "next"

import { externalLinks } from "@/lib/content"

const productionUrl = "https://synthify.org"
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

function normalizeSiteUrl(url: string) {
  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`

  return withProtocol.replace(/\/$/, "")
}

export const ogImagePath = "/opengraph-image"
export const twitterImagePath = "/twitter-image"

export const siteConfig = {
  name: "Synthify",
  url: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? productionUrl
  ),
  description:
    "Synthify is an international student-led organization publishing accessible STEM magazines written by high school students.",
  ogImageAlt:
    "Synthify, a student-led STEM magazine publisher for high school students",
  keywords: [
    "Synthify",
    "student STEM magazine",
    "high school science publication",
    "teen science writing",
    "STEM magazine",
    "science communication",
    "student-led publication",
  ],
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [twitterImagePath],
    },
  }
}

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/logo.jpg"),
  },
  sameAs: [externalLinks.instagram, externalLinks.publications],
  contactPoint: {
    "@type": "ContactPoint",
    email: externalLinks.email,
    contactType: "general inquiries",
  },
}

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
}

export function createWebPageJsonLd({
  path,
  name,
  description,
}: {
  path: string
  name: string
  description: string
}) {
  const url = absoluteUrl(path)

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  }
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  const currentUrl = absoluteUrl(items.at(-1)?.path ?? "/")

  return {
    "@type": "BreadcrumbList",
    "@id": `${currentUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function createJsonLdGraph(items: Array<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  }
}
