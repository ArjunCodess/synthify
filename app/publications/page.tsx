import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { MagazineCard } from "@/components/site/magazine-card"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import { externalLinks, magazines } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Read Synthify's 2026 magazine issues across technology, ethics, sustainability, and health.",
}

export default function PublicationsPage() {
  return (
    <div className="flex flex-col">
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
