import type { Metadata } from "next"

import { ExecutiveCard } from "@/components/site/executive-card"
import { SectionHeading } from "@/components/site/section-heading"
import { executives } from "@/lib/content"

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Synthify executive board leading publications, editing, layout, journalism, and outreach.",
}

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive board"
            title="The students behind each publication cycle."
            description="Synthify's executives coordinate departments, deadlines, article quality, layout, partnerships, and member support."
            level={1}
          />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {executives.map((member, index) => (
            <ExecutiveCard
              key={member.name}
              member={member}
              priority={index < 3}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
