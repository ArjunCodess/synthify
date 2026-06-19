import type { Metadata } from "next"

import { ExecutiveCard } from "@/components/site/executive-card"
import { SectionHeading } from "@/components/site/section-heading"
import { JsonLd } from "@/components/seo/json-ld"
import { executives } from "@/lib/content"
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createJsonLdGraph,
  createPageMetadata,
  createWebPageJsonLd,
  siteConfig,
} from "@/lib/seo"

const title = "Executive Team"
const description =
  "Meet the Synthify executive board leading student STEM publications, journalism, editing, layout, outreach, and member support."
const path = "/team"

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: ["Synthify team", "student publication leaders", "STEM editors"],
})

export default function TeamPage() {
  const teamJsonLd = {
    "@type": "AboutPage",
    "@id": `${absoluteUrl(path)}#team`,
    url: absoluteUrl(path),
    name: title,
    description,
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      member: executives.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        affiliation: {
          "@id": `${siteConfig.url}/#organization`,
        },
        image: absoluteUrl(member.imageSrc),
        description: member.summary,
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
            { name: "Team", path },
          ]),
          teamJsonLd,
        ])}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive board"
            title="The students behind each publication cycle."
            description="Synthify's executives coordinate departments, deadlines, article quality, layout, partnerships, and member support."
            level={1}
          />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {executives.map((member, index) => (
            <ExecutiveCard
              key={member.name}
              member={member}
              priority={index < 3}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
