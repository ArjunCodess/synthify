import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, GlobalIcon } from "@hugeicons/core-free-icons"

import { MagazineCard } from "@/components/site/magazine-card"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { JsonLd } from "@/components/seo/json-ld"
import { Separator } from "@/components/ui/separator"
import { externalLinks, executives, magazines } from "@/lib/content"
import { createJsonLdGraph, createWebPageJsonLd, siteConfig } from "@/lib/seo"
import { cn } from "@/lib/utils"

export default function Page() {
  const featuredIssues = magazines.slice(-2).reverse()
  const featuredExecutives = executives.slice(0, 3)
  const publicationSteps = [
    {
      step: "Pitch",
      title: "Choose a question worth reading",
      body: "Members start with teen-readable STEM questions, then shape article angles around curiosity, accuracy, and access.",
    },
    {
      step: "Draft",
      title: "Turn research into plain language",
      body: "Writers build article drafts that keep scientific depth without asking readers to decode academic language.",
    },
    {
      step: "Edit",
      title: "Refine structure, claims, and pacing",
      body: "Editors check clarity, flow, and publication standards before work moves into magazine layout.",
    },
    {
      step: "Publish",
      title: "Design, release, and distribute",
      body: "Layout and outreach teams prepare readable issues for online readers and physical donation partners.",
    },
  ]
  const impactStats = [
    {
      value: "40+",
      label: "members",
      detail: "coordinating writing, editing, layout, and outreach",
    },
    {
      value: "9+",
      label: "countries",
      detail: "bringing student science perspectives across time zones",
    },
    {
      value: "20+",
      label: "high schools",
      detail: "feeding each issue with different classrooms and communities",
    },
  ]
  const title = "Synthify | Student-Led STEM Magazines"
  const description = siteConfig.description

  return (
    <div className="flex flex-col">
      <JsonLd
        data={createJsonLdGraph([
          createWebPageJsonLd({ path: "/", name: title, description }),
          {
            "@type": "ItemList",
            "@id": `${siteConfig.url}/#featured-publications`,
            name: "Featured Synthify publications",
            itemListElement: featuredIssues.map((issue, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "PublicationIssue",
                name: `${siteConfig.name} ${issue.title}`,
                url: `${siteConfig.url}${issue.pdfHref}`,
                image: `${siteConfig.url}${issue.coverSrc}`,
                datePublished: issue.publishedDate,
                about: issue.theme,
              },
            })),
          },
        ])}
      />
      <section className="soft-noise bg-ink-blue text-primary-foreground">
        <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <HugeiconsIcon icon={GlobalIcon} strokeWidth={1.8} />
              <span>40+ members across 9+ countries</span>
            </div>
            <div className="flex max-w-4xl flex-col gap-6">
              <h1 className="font-heading text-6xl leading-[0.88] tracking-normal text-balance sm:text-7xl lg:text-8xl">
                Science magazines, written by teenagers for teenagers.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/80">
                Synthify is an international student-led organization making
                science accessible through in-depth STEM magazines written,
                edited, designed, and shared by high school students.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={externalLinks.application}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "light", size: "xl" }))}
              >
                Apply to join
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  strokeWidth={1.8}
                  data-icon="inline-end"
                />
              </a>
              <Link
                href="/publications"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                )}
              >
                Read magazines
              </Link>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/68">
              The application opens in Google Forms and covers writing, editing,
              layout, outreach, and general member interest.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative min-h-[430px] w-full max-w-lg sm:min-h-[520px]">
              <div className="absolute top-14 left-0 aspect-[595/842] w-[58%] rotate-[-8deg] overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:w-[52%]">
                <Image
                  src={magazines[2].coverSrc}
                  alt={`${magazines[2].title} cover`}
                  fill
                  sizes="(max-width: 768px) 48vw, 260px"
                  className="rounded-4xl object-cover p-3 opacity-82"
                />
              </div>
              <div className="relative ml-auto aspect-[595/842] w-[76%] max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:w-[68%]">
                <Image
                  src={magazines[3].coverSrc}
                  alt={`${magazines[3].title} cover`}
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 360px"
                  className="rounded-4xl object-cover p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {impactStats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col gap-3 py-5 md:px-6">
              <p className="font-heading text-5xl leading-none text-primary">
                {stat.value}
              </p>
              <div className="flex max-w-xs flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                  {stat.label}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {stat.detail}
                </p>
              </div>
              {index < impactStats.length - 1 ? (
                <Separator className="mt-4 md:hidden" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-grid bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Publishing is the engine. Access is the point."
            description="Synthify turns student curiosity into magazines that can be shared online and distributed physically to libraries, organizations, and schools."
          />
          <ol className="grid gap-3">
            {publicationSteps.map((item, index) => (
              <li
                key={item.step}
                className="grid gap-3 rounded-xl border border-border bg-card/82 p-5 sm:grid-cols-[6rem_1fr]"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-heading text-3xl leading-none text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.step}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-2xl leading-none">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Latest issues"
              title="Recent magazines"
              description="Read the newest issues without loading the full PDF until you choose one."
            />
            <Link
              href="/publications"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              View library
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                strokeWidth={1.8}
                data-icon="inline-end"
              />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredIssues.map((issue, index) => (
              <MagazineCard
                key={issue.slug}
                issue={issue}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive board"
            title="Students running a real publication cycle."
            description="The board coordinates writing, editing, design, outreach, deadlines, and partnerships across time zones."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredExecutives.map((member, index) => (
              <Card key={member.name} className="overflow-hidden bg-card/90">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 88vw, 30vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-3xl">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Link
            href="/team"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Meet the team
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={1.8}
              data-icon="inline-end"
            />
          </Link>
        </div>
      </section>

      <section className="bg-ink-blue text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="font-heading text-5xl leading-none text-balance md:text-7xl">
              Help build the next issue.
            </h2>
            <p className="text-base leading-7 text-white/75">
              Writers, editors, designers, and outreach members can apply
              through the current recruitment form. No prior publication
              experience is required; reliability, curiosity, and care matter
              most.
            </p>
          </div>
          <a
            href={externalLinks.application}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "light", size: "xl" }))}
          >
            Apply now
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={1.8}
              data-icon="inline-end"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
