import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  InstagramIcon,
  Mail01Icon,
  NewsIcon,
} from "@hugeicons/core-free-icons"

import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { JsonLd } from "@/components/seo/json-ld"
import { externalLinks } from "@/lib/content"
import {
  createBreadcrumbJsonLd,
  createJsonLdGraph,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo"
import { cn } from "@/lib/utils"

const title = "Contact and Links"
const description =
  "Contact Synthify, follow the student STEM publication on Instagram, read magazine issues, or open the current member application."
const path = "/connect"

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: ["contact Synthify", "Synthify Instagram", "student STEM publication"],
})

export default function ConnectPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={createJsonLdGraph([
          createWebPageJsonLd({ path, name: title, description }),
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Connect", path },
          ]),
        ])}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Connect"
            title="Find Synthify, read the work, or apply."
            description="Use the publication hub for the latest Synthify issues, or open the local library for archived PDF downloads."
            level={1}
          />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <Card className="flex h-full flex-col">
            <CardHeader className="gap-5">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.8} />
              </div>
              <CardTitle className="font-heading text-3xl leading-none">
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="break-words text-sm leading-6 text-muted-foreground">
                {externalLinks.email}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <a
                href={`mailto:${externalLinks.email}`}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                Send email
              </a>
            </CardFooter>
          </Card>

          <Card className="flex h-full flex-col">
            <CardHeader className="gap-5">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <HugeiconsIcon icon={InstagramIcon} strokeWidth={1.8} />
              </div>
              <CardTitle className="font-heading text-3xl leading-none">
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-6 text-muted-foreground">
                Follow updates, member posts, and publication announcements.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                Open Instagram
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  strokeWidth={1.8}
                  data-icon="inline-end"
                />
              </a>
            </CardFooter>
          </Card>

          <Card className="flex h-full flex-col">
            <CardHeader className="gap-5">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <HugeiconsIcon icon={NewsIcon} strokeWidth={1.8} />
              </div>
              <CardTitle className="font-heading text-3xl leading-none">
                Publications
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-6 text-muted-foreground">
                Open the publication library, then continue to Issuu for the latest issues.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link
                href="/publications"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                Open library
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  strokeWidth={1.8}
                  data-icon="inline-end"
                />
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex h-full flex-col">
            <CardHeader className="gap-5">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={1.8} />
              </div>
              <CardTitle className="font-heading text-3xl leading-none">
                Apply
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-6 text-muted-foreground">
                Join as a writer, editor, layout member, outreach member, or
                general contributor.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <a
                href={externalLinks.application}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                Open form
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  strokeWidth={1.8}
                  data-icon="inline-end"
                />
              </a>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
