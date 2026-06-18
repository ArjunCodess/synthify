import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  BookOpen01Icon,
  GlobalIcon,
  LibraryIcon,
} from "@hugeicons/core-free-icons"

import { MagazineCard } from "@/components/site/magazine-card"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { externalLinks, executives, magazines, stats } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function Page() {
  const featuredIssues = magazines.slice(-2).reverse()
  const featuredExecutives = executives.slice(0, 3)

  return (
    <div className="flex flex-col">
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
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative min-h-[430px] w-full max-w-lg sm:min-h-[520px]">
              <div className="absolute left-0 top-14 aspect-[595/842] w-[58%] rotate-[-8deg] overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:w-[52%]">
                <Image
                  src={magazines[2].coverSrc}
                  alt={`${magazines[2].title} cover`}
                  fill
                  sizes="(max-width: 768px) 48vw, 260px"
                  className="object-cover p-3 opacity-82 rounded-4xl"
                />
              </div>
              <div className="relative ml-auto aspect-[595/842] w-[76%] max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:w-[68%]">
                <Image
                  src={magazines[3].coverSrc}
                  alt={`${magazines[3].title} cover`}
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 360px"
                  className="object-cover p-3 rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col gap-2 py-5 md:px-6">
              <p className="font-heading text-5xl leading-none text-primary">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
              {index < stats.length - 1 ? (
                <Separator className="mt-4 md:hidden" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-grid bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Publishing is the engine. Access is the point."
            description="Synthify turns student curiosity into magazines that can be shared online and distributed physically to libraries, organizations, and schools."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Write",
                icon: BookOpen01Icon,
                body: "Students research STEM topics and shape them for readers who want depth without jargon.",
              },
              {
                title: "Edit",
                icon: LibraryIcon,
                body: "Editorial members refine structure, clarity, pacing, and publication standards.",
              },
              {
                title: "Design",
                icon: BookOpen01Icon,
                body: "Layout members make complex scientific work readable through visual hierarchy.",
              },
              {
                title: "Donate",
                icon: GlobalIcon,
                body: "Outreach members help magazines reach schools, libraries, and partner organizations.",
              },
            ].map((item) => (
              <Card key={item.title} className="bg-card/88">
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
              <MagazineCard key={issue.slug} issue={issue} priority={index === 0} />
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
          <Link href="/team" className={cn(buttonVariants({ variant: "outline" }))}>
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
            <p className="text-sm uppercase tracking-[0.18em] text-white/65">
              Recruitment
            </p>
            <h2 className="font-heading text-5xl leading-none text-balance md:text-7xl">
              Help build the next issue.
            </h2>
            <p className="text-base leading-7 text-white/75">
              Writers, editors, designers, and outreach members can apply
              through the current recruitment form.
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
