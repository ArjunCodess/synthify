import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  Megaphone01Icon,
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { departments, externalLinks, joinFaq } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Join",
  description:
    "Apply to join Synthify as a writer, editor, layout member, or outreach member.",
}

export default function JoinPage() {
  return (
    <div className="flex flex-col">
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
                Application form
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-sm leading-6 text-white/75">
              <p>
                The current recruitment flow is handled through the Google Form
                provided by Synthify.
              </p>
              <p>
                Use the same form for writing, editing, layout, outreach, and
                general member applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Departments"
            title="Choose where your work belongs."
            description="The publication needs different strengths. Applicants can orient around writing, editing, design, or outreach."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {departments.map((department) => (
              <Card key={department.name}>
                <CardHeader className="gap-5">
                  <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <HugeiconsIcon icon={Megaphone01Icon} strokeWidth={1.8} />
                  </div>
                  <CardTitle className="font-heading text-3xl leading-none">
                    {department.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {department.description}
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
            description="A few practical notes for prospective members."
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
