import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { MagazineCard } from "@/components/site/magazine-card"
import { SectionHeading } from "@/components/site/section-heading"
import { JsonLd } from "@/components/seo/json-ld"
import { buttonVariants } from "@/components/ui/button-variants"
import { externalLinks, magazines } from "@/lib/content"
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createJsonLdGraph,
  createPageMetadata,
  createWebPageJsonLd,
  siteConfig,
} from "@/lib/seo"
import { cn } from "@/lib/utils"

const title = "STEM Magazine Publications"
const description =
  "Read Synthify's 2026 STEM magazine issues covering technology, ethics, global health, sustainability, medicine, and student science writing."
const path = "/publications"

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "Synthify publications",
    "student STEM articles",
    "science magazine PDF",
    "high school science writing",
  ],
})

export default function PublicationsPage() {
  const publicationJsonLd = {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#collection`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: magazines.map((issue, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "PublicationIssue",
          name: `${siteConfig.name} ${issue.title}`,
          url: absoluteUrl(issue.pdfHref),
          image: absoluteUrl(issue.coverSrc),
          datePublished: issue.publishedDate,
          numberOfPages: issue.pages,
          about: issue.theme,
          isPartOf: {
            "@type": "Periodical",
            name: siteConfig.name,
            publisher: {
              "@id": `${siteConfig.url}/#organization`,
            },
          },
        },
      })),
    },
  }

  return (
    <div className="flex flex-col">
      <JsonLd
        data={createJsonLdGraph([
          createWebPageJsonLd({ path, name: title, description }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Publications", path },
          ]),
          publicationJsonLd,
        ])}
      />
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Publications"
            title="The 2026 Synthify library."
            description="Cover previews are lightweight images. Full PDFs open only when selected, keeping the page fast while preserving the original magazines."
            level={1}
          />
          <div>
            <a
              href={externalLinks.publications}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Open latest issues on Issuu
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                strokeWidth={1.8}
                data-icon="inline-end"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          {magazines.map((issue, index) => (
            <MagazineCard key={issue.slug} issue={issue} priority={index < 2} />
          ))}
        </div>
      </section>
    </div>
  )
}
