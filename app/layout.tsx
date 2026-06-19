import type { Metadata, Viewport } from "next"
import { DM_Serif_Text, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { JsonLd } from "@/components/seo/json-ld"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import {
  createJsonLdGraph,
  ogImagePath,
  organizationJsonLd,
  siteConfig,
  twitterImagePath,
  websiteJsonLd,
} from "@/lib/seo"
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
    default: "Synthify | Student-Led STEM Magazines",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: "Synthify", url: siteConfig.url }],
  creator: "Synthify",
  publisher: "Synthify",
  keywords: siteConfig.keywords,
  category: "education",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Synthify | Student-Led STEM Magazines",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synthify | Student-Led STEM Magazines",
    description: siteConfig.description,
    images: [twitterImagePath],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#101828" },
  ],
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
        <JsonLd data={createJsonLdGraph([organizationJsonLd, websiteJsonLd])} />
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
