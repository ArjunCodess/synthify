import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
  level?: 1 | 2
}

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
  level = 2,
}: SectionHeadingProps) {
  const HeadingTag = level === 1 ? "h1" : "h2"

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <HeadingTag className="font-heading text-4xl leading-[0.95] tracking-normal text-balance md:text-6xl">
          {title}
        </HeadingTag>
        {description ? (
          <p className="max-w-[64ch] text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
