import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Salon Booking Features | Chat, Voice & Dashboard | Convo",
  description: "Explore Convo's AI-powered features for salons: 24/7 chat booking, AI voice receptionist, and Owner Dashboard. Automate appointments across chat, phone, and WhatsApp.",
  keywords: [
    "AI salon booking features",
    "salon chat booking",
    "AI voice receptionist",
    "salon owner dashboard",
    "WhatsApp booking salon",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/product",
  },
  openGraph: {
    title: "AI Salon Booking Features | Convo",
    description: "AI-powered chat booking, voice receptionist, and owner dashboard for salons.",
    url: "https://convoaiservices.com/product",
    siteName: "Convo",
    type: "website",
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
