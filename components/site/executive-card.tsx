import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ExecutiveMember } from "@/lib/content"

type ExecutiveCardProps = {
  member: ExecutiveMember
  priority?: boolean
}

export function ExecutiveCard({ member, priority = false }: ExecutiveCardProps) {
  return (
    <Dialog>
      <Card className="overflow-hidden border-border/80 bg-card/95 shadow-sm">
        <CardHeader className="gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
            <Image
              src={member.imageSrc}
              alt={`${member.name}, ${member.role}`}
              fill
              sizes="(max-width: 768px) 88vw, (max-width: 1200px) 40vw, 320px"
              priority={priority}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Badge className="w-fit" variant="secondary">
              {member.department}
            </Badge>
            <div>
              <CardTitle className="font-heading text-3xl leading-none">
                {member.name}
              </CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            {member.summary}
          </p>
        </CardContent>
        <CardFooter>
          <DialogTrigger render={<Button variant="outline" size="sm" />}>
            Read profile
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar size="xl">
              <AvatarImage src={member.imageSrc} alt={member.name} />
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-3xl">{member.name}</DialogTitle>
              <DialogDescription>
                {member.role} at Synthify. {member.school}, {member.grade}.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="grid gap-5 text-sm leading-6">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Role</p>
            <p className="text-muted-foreground">{member.summary}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium">Goal</p>
            <p className="text-muted-foreground">{member.goal}</p>
          </div>
          <div className="rounded-xl border bg-muted/40 p-4 font-heading text-2xl leading-tight">
            {member.note}
          </div>
        </div>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}
