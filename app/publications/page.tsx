import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { MagazineCard } from "@/components/site/magazine-card"
import { SectionHeading } from "@/components/site/section-heading"
import { JsonLd } from "@/components/seo/json-ld"
import { buttonVariants } from "@/components/ui/button-variants"
import { issuuArchives, magazines } from "@/lib/content"
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
            description="Cover previews are lightweight images. Full PDFs open only when selected, keeping the page fast while preserving the original magazines. Issuu archives are split by publication year."
            level={1}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {issuuArchives.map((archive) => (
              <a
                key={archive.href}
                href={archive.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-32 flex-col justify-between rounded-xl border border-border bg-card/90 p-5 transition-colors hover:border-primary/45 hover:bg-card"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {archive.years}
                </span>
                <span className="flex items-end justify-between gap-4">
                  <span className="flex flex-col gap-2">
                    <span className="font-heading text-3xl leading-none">
                      {archive.label}
                    </span>
                    <span className="max-w-md text-sm leading-6 text-muted-foreground">
                      {archive.description}
                    </span>
                  </span>
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "shrink-0 group-hover:border-primary/45"
                    )}
                    aria-hidden="true"
                  >
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      strokeWidth={1.8}
                    />
                  </span>
                </span>
              </a>
            ))}
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
