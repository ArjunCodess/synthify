import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  InstagramIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

import { buttonVariants } from "@/components/ui/button-variants"
import { Separator } from "@/components/ui/separator"
import { externalLinks, navItems } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div className="flex max-w-xl flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Synthify logo"
                width={48}
                height={48}
                className="size-12 rounded-md object-cover"
              />
              <div>
                <p className="font-heading text-2xl leading-none">Synthify</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  International student-led STEM publishing.
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Synthify writes, edits, designs, publishes, and donates STEM
              magazines created by high school students for teen readers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Pages</p>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Connect</p>
              <a
                href={`mailto:${externalLinks.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {externalLinks.email}
              </a>
              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`mailto:${externalLinks.email}`}
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    strokeWidth={1.8}
                    data-icon="inline-start"
                  />
                  Email
                </a>
                <a
                  href={externalLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <HugeiconsIcon
                    icon={InstagramIcon}
                    strokeWidth={1.8}
                    data-icon="inline-start"
                  />
                  Instagram
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    strokeWidth={1.8}
                    data-icon="inline-end"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">
          Synthify 2026. Built for readers, writers, editors, designers, and
          outreach partners.
        </p>
      </div>
    </footer>
  )
}
