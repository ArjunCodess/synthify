import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BookOpen02Icon,
  GlobalIcon,
  LibraryIcon,
  SchoolIcon,
} from "@hugeicons/core-free-icons"

import { SectionHeading } from "@/components/site/section-heading"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { JsonLd } from "@/components/seo/json-ld"
import { stats } from "@/lib/content"
import {
  createBreadcrumbJsonLd,
  createJsonLdGraph,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo"

const title = "Mission and Impact"
const description =
  "Learn how Synthify publishes student-led STEM magazines, makes science accessible for teenagers, and distributes issues online and in print."
const path = "/about"

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: ["student science organization", "STEM access", "science magazines"],
})

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={createJsonLdGraph([
          createWebPageJsonLd({ path, name: title, description }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path },
          ]),
        ])}
      />
      <section className="bg-ink-blue text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-6xl leading-[0.9] text-balance md:text-8xl">
              Making science readable, shareable, and student-led.
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-5 text-white/78">
            <p className="text-lg leading-8">
              Synthify is an international student-led organization dedicated
              to making science accessible for teenagers.
            </p>
            <p className="text-base leading-7">
              We produce in-depth STEM magazines written by high school
              students and designed for distribution online and in physical
              copies to libraries, organizations, and schools nearby.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Mission"
            title="A publication lab for teen science communication."
            description="Synthify gives students a real editorial cycle: research, drafting, editing, layout, publication, promotion, and distribution."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Accessibility",
                icon: LibraryIcon,
                body: "Articles are written for teenagers who want real scientific depth without academic gatekeeping.",
              },
              {
                title: "Student voice",
                icon: SchoolIcon,
                body: "High school students select issues, write articles, edit, design, and lead outreach.",
              },
              {
                title: "Global team",
                icon: GlobalIcon,
                body: "Members work internationally, bringing different school contexts and scientific interests into each issue.",
              },
              {
                title: "Physical reach",
                icon: BookOpen02Icon,
                body: "The publication model is built for digital reading and physical magazine donations.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader className="gap-5">
                  <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                  </div>
                  <CardTitle className="font-heading text-3xl leading-none">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-grid bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Impact"
            title="Small enough to stay student-run. Wide enough to matter."
          />
          <div className="grid gap-0 overflow-hidden rounded-2xl border bg-card md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col gap-2 p-6">
                <p className="font-heading text-5xl text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {index < stats.length - 1 ? (
                  <Separator className="mt-4 md:hidden" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
