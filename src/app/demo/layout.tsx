import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convo Demo | See AI Salon Booking in Action",
  description: "Watch Convo AI book appointments in real-time. Interactive demos of chat booking, AI voice calls, and the owner dashboard. See why salons switch to AI.",
  keywords: [
    "Convo demo",
    "AI booking demo",
    "salon AI demo",
    "AI receptionist demo",
    "automated booking demo",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/demo",
  },
  openGraph: {
    title: "Convo Demo | AI Salon Booking",
    description: "Watch Convo AI book appointments in real-time. See the chat, voice, and dashboard in action.",
    url: "https://convoaiservices.com/demo",
    siteName: "Convo",
    type: "website",
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
