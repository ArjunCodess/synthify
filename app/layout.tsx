import type { Metadata } from "next"
import { DM_Serif_Text, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Synthify | Student-led STEM publishing",
    template: "%s | Synthify",
  },
  description:
    "Synthify is an international student-led organization publishing accessible STEM magazines written by high school students.",
  metadataBase: new URL("https://synthify.org"),
  openGraph: {
    title: "Synthify",
    description:
      "International student-led STEM magazines written, edited, designed, and shared by high school students.",
    images: ["/logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        inter.variable,
        dmSerif.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <div className="flex min-h-dvh flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
