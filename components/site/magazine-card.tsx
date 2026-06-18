import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Download01Icon,
} from "@hugeicons/core-free-icons"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { MagazineIssue } from "@/lib/content"
import { cn } from "@/lib/utils"

type MagazineCardProps = {
  issue: MagazineIssue
  priority?: boolean
}

export function MagazineCard({ issue, priority = false }: MagazineCardProps) {
  return (
    <Card className="group h-full overflow-hidden border-border/80 bg-card/95 shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="grid h-full gap-0 md:grid-cols-[minmax(150px,0.78fr)_1fr]">
        <CardContent className="p-4 md:p-5">
          <AspectRatio
            ratio={595 / 842}
            className="overflow-hidden rounded-xl bg-muted"
          >
            <Image
              src={issue.coverSrc}
              alt={`${issue.title} magazine cover`}
              fill
              sizes="(max-width: 768px) 88vw, (max-width: 1200px) 34vw, 320px"
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </AspectRatio>
        </CardContent>
        <div className="flex min-w-0 flex-col">
          <CardHeader className="gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{issue.month}</Badge>
              <Badge variant="secondary">{issue.pages} pages</Badge>
            </div>
            <CardTitle className="font-heading text-4xl leading-none text-balance">
              {issue.theme}
            </CardTitle>
            <p className="text-sm font-medium">{issue.title}</p>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-2">
            <ul className="flex flex-col gap-1 text-sm leading-6 text-muted-foreground">
              {issue.articles.slice(0, 5).map((article) => (
                <li key={article} className="text-pretty">
                  <span>{article}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto flex flex-wrap gap-2 pt-5 md:pt-6">
            <a
              href={issue.pdfHref}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              View PDF
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                strokeWidth={1.8}
                data-icon="inline-end"
              />
            </a>
            <a
              href={issue.pdfHref}
              download
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <HugeiconsIcon
                icon={Download01Icon}
                strokeWidth={1.8}
                data-icon="inline-start"
              />
              Download
            </a>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
