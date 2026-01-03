import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingBlobs, GridBackground } from "@/components/background-effects"

export const metadata: Metadata = {
  title: {
    default: "Convo — AI Booking Front Desk for Salons",
    template: "%s | Convo",
  },
  description:
    "The AI-powered booking system for modern salons. Chat-first, voice-first booking that feels like texting. Reduce no-shows, book 24/7, and delight your customers.",
  keywords: [
    "salon booking",
    "AI booking",
    "voice booking",
    "chat booking",
    "salon software",
    "appointment scheduling",
    "beauty salon",
    "hair salon",
    "spa booking",
  ],
  authors: [{ name: "Convo" }],
  creator: "Convo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://convo.ai",
    title: "Convo — AI Booking Front Desk for Salons",
    description:
      "The AI-powered booking system for modern salons. Chat-first, voice-first booking that feels like texting.",
    siteName: "Convo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Convo - AI Booking for Salons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convo — AI Booking Front Desk for Salons",
    description:
      "The AI-powered booking system for modern salons. Chat-first, voice-first booking that feels like texting.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased noise-bg">
        <ThemeProvider defaultTheme="dark" storageKey="convo-theme">
          <FloatingBlobs />
          <GridBackground />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
