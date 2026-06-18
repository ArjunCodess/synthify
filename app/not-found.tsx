import Link from "next/link"

import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60dvh] max-w-3xl flex-col justify-center gap-6 px-4 py-20 text-center sm:px-6">
      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
        Page not found
      </p>
      <h1 className="font-heading text-6xl leading-none md:text-8xl">
        This page is not in the issue.
      </h1>
      <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground">
        The page may have moved, or the link may be incomplete. Return to the
        publication library or the homepage.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className={cn(buttonVariants())}>
          Home
        </Link>
        <Link
          href="/publications"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Publications
        </Link>
      </div>
    </div>
  )
}
