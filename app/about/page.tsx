import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  BookOpen02Icon,
  GlobalIcon,
  LibraryIcon,
  SchoolIcon,
} from "@hugeicons/core-free-icons"

import { SectionHeading } from "@/components/site/section-heading"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { JsonLd } from "@/components/seo/json-ld"
import { externalLinks, magazines, stats } from "@/lib/content"
import {
  createBreadcrumbJsonLd,
  createJsonLdGraph,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo"
import { cn } from "@/lib/utils"

const title = "Mission and Impact"
const description =
  "Learn how Synthify publishes student-led STEM magazines, makes science accessible for teenagers, and distributes issues online and in print."
const path = "/about"

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "student science organization",
    "STEM access",
    "science magazines",
  ],
})

const missionPillars = [
  {
    title: "Accessibility",
    icon: LibraryIcon,
    body: "Articles are written for teenagers who want real scientific depth without academic gatekeeping.",
  },
  {
    title: "Student voice",
    icon: SchoolIcon,
    body: "High school students select issue themes, write articles, edit drafts, design pages, and lead outreach.",
  },
  {
    title: "Global team",
    icon: GlobalIcon,
    body: "Members work across countries and school systems, bringing different contexts into each issue.",
  },
  {
    title: "Physical reach",
    icon: BookOpen02Icon,
    body: "The publication model supports digital reading and physical magazine donations for schools and libraries.",
  },
]

const publicationCycle = [
  {
    phase: "Research",
    detail:
      "Writers choose teen-readable STEM questions and build article drafts from credible sources.",
  },
  {
    phase: "Edit",
    detail:
      "Editors refine structure, language, accuracy, and pacing before articles move into layout.",
  },
  {
    phase: "Design",
    detail:
      "Layout members turn articles into readable issue spreads with hierarchy and publication rhythm.",
  },
  {
    phase: "Distribute",
    detail:
      "Outreach members share issues online and prepare physical copies for nearby schools and libraries.",
  },
]

export default function AboutPage() {
  const latestIssue = magazines[magazines.length - 1]

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
            {missionPillars.map((item) => (
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

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.78fr_0.8fr] lg:px-8">
          <SectionHeading
            title="The work moves through a real publication cycle."
            description="Each issue is built by students, but the process is not casual. The team follows the same broad path a reader would expect from a serious magazine."
          />
          <ol className="grid gap-3">
            {publicationCycle.map((item, index) => (
              <li
                key={item.phase}
                className="grid gap-4 rounded-xl border border-border bg-card/92 p-5 sm:grid-cols-[5rem_1fr]"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-heading text-3xl leading-none text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.phase}
                  </span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground sm:pt-1">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="editorial-grid bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Impact"
            title="Small enough to stay student-run. Wide enough to matter."
          />
          <div className="grid gap-0 overflow-hidden rounded-xl border bg-card md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col gap-2 p-6">
                <p className="font-heading text-5xl text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {index < stats.length - 1 ? (
                  <Separator className="mt-4 md:hidden" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-blue text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="font-heading text-5xl leading-none text-balance md:text-7xl">
              Start with the magazines.
            </h2>
            <p className="text-base leading-7 text-white/75">
              Read the current library, then join the team if you want to help
              write, edit, design, or distribute the next issue.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/publications"
              className={cn(buttonVariants({ variant: "light", size: "xl" }))}
            >
              Open library
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                strokeWidth={1.8}
                data-icon="inline-end"
              />
            </Link>
            <a
              href={externalLinks.application}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
              )}
            >
              Apply
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                strokeWidth={1.8}
                data-icon="inline-end"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
