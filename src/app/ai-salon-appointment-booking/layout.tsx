import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Salon Appointment Booking | Automated Scheduling for Hair & Beauty Salons",
  description: "Convo is an AI-powered appointment booking system for salons. Automatically schedule appointments via chat, WhatsApp, and voice calls. Available 24/7. Reduce no-shows by 40%.",
  keywords: [
    "AI salon appointment booking",
    "automated salon scheduling",
    "salon booking chatbot",
    "AI appointment system",
    "hair salon booking AI",
    "beauty salon automation",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/ai-salon-appointment-booking",
  },
  openGraph: {
    title: "AI Salon Appointment Booking | Convo AI",
    description: "Automatically book salon appointments via chat, WhatsApp, and voice. Available 24/7.",
    url: "https://convoaiservices.com/ai-salon-appointment-booking",
  },
}

export default function AISalonBookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
