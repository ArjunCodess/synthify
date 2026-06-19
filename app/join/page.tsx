import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  BookOpen02Icon,
  GlobalIcon,
  LibraryIcon,
  SentIcon,
} from "@hugeicons/core-free-icons"

import { SectionHeading } from "@/components/site/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JsonLd } from "@/components/seo/json-ld"
import { externalLinks, joinFaq } from "@/lib/content"
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createJsonLdGraph,
  createPageMetadata,
  createWebPageJsonLd,
  siteConfig,
} from "@/lib/seo"
import { cn } from "@/lib/utils"

const title = "Student Publication Applications"
const description =
  "Apply to join Synthify as a high school writer, editor, layout designer, outreach member, or student STEM publication contributor."
const path = "/join"

const applicationNotes = [
  "One Google Form covers writing, editing, layout, outreach, and general membership.",
  "No prior publication experience is required; curiosity and reliability matter more.",
  "The team follows up through the contact information submitted in the form.",
]

const roleGuides = [
  {
    name: "Journalism",
    icon: BookOpen02Icon,
    bestFor:
      "Best if you like research, interviews, and explaining complex ideas.",
    responsibility:
      "Pitch article angles, gather sources, and write drafts for teen STEM readers.",
    output: "Output: article drafts ready for editorial review.",
  },
  {
    name: "Editorial",
    icon: LibraryIcon,
    bestFor:
      "Best if you like structure, clarity, fact-checking, and careful pacing.",
    responsibility:
      "Shape drafts into publishable work while protecting accuracy and voice.",
    output: "Output: edited articles with clearer arguments and stronger flow.",
  },
  {
    name: "Layout",
    icon: SentIcon,
    bestFor:
      "Best if you like visual hierarchy, readable pages, and design systems.",
    responsibility:
      "Turn articles into magazine spreads that help readers move through STEM topics.",
    output:
      "Output: readable issue pages and publication-ready visual structure.",
  },
  {
    name: "Outreach",
    icon: GlobalIcon,
    bestFor:
      "Best if you like partnerships, promotion, and getting issues to readers.",
    responsibility:
      "Build connections with schools, organizations, libraries, and online audiences.",
    output:
      "Output: distribution opportunities, promotion plans, and partner contact.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "join Synthify",
    "student publication application",
    "STEM writing",
  ],
})

export default function JoinPage() {
  const faqJsonLd = {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: joinFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const joinActionJsonLd = {
    "@type": "JoinAction",
    target: externalLinks.application,
    agent: {
      "@id": `${siteConfig.url}/#organization`,
    },
    object: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
  }

  return (
    <div className="flex flex-col">
      <JsonLd
        data={createJsonLdGraph([
          createWebPageJsonLd({ path, name: title, description }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Join", path },
          ]),
          faqJsonLd,
          joinActionJsonLd,
        ])}
      />
      <section className="bg-ink-blue text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-6xl leading-[0.9] text-balance md:text-8xl">
              Join the next Synthify issue.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/78">
              Synthify needs students who can write carefully, edit clearly,
              design readable pages, and help magazines reach real readers.
            </p>
            <p className="max-w-xl text-sm leading-6 text-white/68">
              Choose the role that matches how you want to contribute. The form
              opens externally and covers every department listed below.
            </p>
            <a
              href={externalLinks.application}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "light", size: "xl" }),
                "w-fit"
              )}
            >
              Open application
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                strokeWidth={1.8}
                data-icon="inline-end"
              />
            </a>
          </div>
          <Card className="border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur-md">
            <CardHeader className="gap-5">
              <div className="flex size-10 items-center justify-center rounded-md bg-white text-primary">
                <HugeiconsIcon icon={SentIcon} strokeWidth={1.8} />
              </div>
              <CardTitle className="font-heading text-4xl leading-none">
                Before you open the form
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 text-sm leading-6 text-white/75">
              <ul className="flex flex-col gap-3">
                {applicationNotes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${externalLinks.email}`}
                className="text-white underline underline-offset-4 transition-colors hover:text-white/82"
              >
                If the form is unavailable, email {externalLinks.email}.
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Departments"
            title="Choose where your work belongs."
            description="Each department owns a different part of the publication cycle. Use these prompts to decide where your strengths fit."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {roleGuides.map((role) => (
              <Card key={role.name}>
                <CardHeader className="gap-5">
                  <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <HugeiconsIcon icon={role.icon} strokeWidth={1.8} />
                  </div>
                  <CardTitle className="font-heading text-3xl leading-none">
                    {role.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm leading-6 font-medium text-foreground">
                    {role.bestFor}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {role.responsibility}
                  </p>
                  <p className="rounded-md bg-muted px-3 py-2 text-sm leading-6 text-muted-foreground">
                    {role.output}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Before applying"
            description="The main reassurance: applicants do not need prior publication experience. Strong curiosity, reliability, and willingness to improve matter most."
          />
          <Accordion defaultValue={[joinFaq[0].question]} className="w-full">
            {joinFaq.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
