"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  Menu01Icon,
  NewsIcon,
} from "@hugeicons/core-free-icons"

import { buttonVariants } from "@/components/ui/button-variants"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { externalLinks, navItems } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Synthify logo"
            width={40}
            height={40}
            priority
            className="size-10 rounded-md object-cover"
          />
          <div className="flex min-w-0 flex-col">
            <span className="font-heading text-xl leading-none tracking-normal">
              Synthify
            </span>
            <span className="mt-1 hidden text-xs text-muted-foreground sm:block">
              Student-led STEM publishing
            </span>
          </div>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  data-active={pathname === item.href}
                  className="px-3"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/publications"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <HugeiconsIcon icon={NewsIcon} strokeWidth={1.8} data-icon="inline-start" />
            Read
          </Link>
          <a
            href={externalLinks.application}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Apply
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={1.8}
              data-icon="inline-end"
            />
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon-sm" }),
                  "lg:hidden"
                )}
                aria-label="Open navigation"
              />
            }
          >
            <HugeiconsIcon icon={Menu01Icon} strokeWidth={1.8} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="data-[side=right]:inset-x-0 data-[side=right]:w-screen data-[side=right]:max-w-none sm:data-[side=right]:left-auto sm:data-[side=right]:w-96 sm:data-[side=right]:max-w-sm"
          >
            <SheetHeader className="gap-4 p-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpg"
                  alt="Synthify logo"
                  width={48}
                  height={48}
                  className="size-12 rounded-md object-cover"
                />
                <div className="flex flex-col gap-1">
                  <SheetTitle className="text-4xl leading-none">
                    Synthify
                  </SheetTitle>
                  <SheetDescription>
                    Student-led STEM publishing.
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>
            <Separator />
            <nav className="flex flex-col gap-1 px-5">
              {navItems.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-3 text-base transition-colors hover:bg-muted",
                        pathname === item.href && "bg-muted text-foreground"
                      )}
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <SheetFooter>
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href={externalLinks.application}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants())}
                  />
                }
              >
                Apply to join
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  strokeWidth={1.8}
                  data-icon="inline-end"
                />
              </SheetClose>
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/publications"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  />
                }
              >
                Read publications
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
