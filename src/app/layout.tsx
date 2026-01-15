import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingBlobs, GridBackground } from "@/components/background-effects"

export const metadata: Metadata = {
  metadataBase: new URL("https://convoaiservices.com"),
  title: {
    default: "Convo AI — AI Salon Appointment Booking | Automated Receptionist for Salons",
    template: "%s | Convo AI Services",
  },
  description:
    "Convo is an AI receptionist for salons that automatically books appointments via chat, WhatsApp, and voice. Available 24/7. Reduce no-shows by 40%. No phone tag. Works with any salon software.",
  keywords: [
    "AI salon appointment booking",
    "AI receptionist for salons",
    "automated salon booking chatbot",
    "conversational AI for salons",
    "salon booking automation",
    "AI appointment scheduling",
    "salon chatbot",
    "AI booking assistant",
    "voice booking for salons",
    "WhatsApp salon booking",
    "24/7 salon booking",
    "salon no-show reduction",
    "AI front desk for salons",
    "beauty salon AI",
    "hair salon chatbot",
    "spa booking AI",
  ],
  authors: [{ name: "Convo AI Services" }],
  creator: "Convo AI Services",
  publisher: "Convo AI Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://convoaiservices.com",
    title: "Convo AI — AI Salon Appointment Booking | Automated Receptionist",
    description:
      "Convo is an AI receptionist that automatically books salon appointments via chat, WhatsApp, and voice. Available 24/7. Reduce no-shows by 40%.",
    siteName: "Convo AI Services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Convo AI - AI Appointment Booking for Salons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convo AI — AI Salon Appointment Booking | Automated Receptionist",
    description:
      "Convo is an AI receptionist that automatically books salon appointments via chat, WhatsApp, and voice. Available 24/7.",
    images: ["/og-image.png"],
    creator: "@convoaiservices",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://convoaiservices.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://convoaiservices.com/#organization",
        "name": "Convo AI Services",
        "url": "https://convoaiservices.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://convoaiservices.com/logo.png"
        },
        "sameAs": [
          "https://twitter.com/convoaiservices",
          "https://linkedin.com/company/convoaiservices"
        ],
        "description": "Convo AI Services provides AI-powered appointment booking solutions for salons, spas, and service businesses."
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://convoaiservices.com/#software",
        "name": "Convo AI",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Convo is an AI receptionist for salons that automatically books appointments via chat, WhatsApp, and voice. It works 24/7, reduces no-shows by 40%, and integrates with existing salon software.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free trial available"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "47"
        },
        "featureList": [
          "AI-powered chat booking",
          "Voice call appointment scheduling",
          "WhatsApp booking integration",
          "24/7 automated receptionist",
          "No-show reduction",
          "Calendar integration",
          "SMS and email confirmations",
          "Owner analytics dashboard"
        ],
        "provider": {
          "@id": "https://convoaiservices.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://convoaiservices.com/#website",
        "url": "https://convoaiservices.com",
        "name": "Convo AI Services",
        "publisher": {
          "@id": "https://convoaiservices.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://convoaiservices.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: `@font-face { font-display: swap; }` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
