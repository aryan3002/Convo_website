import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Convo AI Salon Booking - Common Questions Answered",
  description: "Frequently asked questions about Convo AI salon booking software. Learn about AI appointment scheduling, pricing, integrations, setup time, and how it compares to human receptionists.",
  keywords: [
    "Convo FAQ",
    "AI salon booking questions",
    "AI receptionist FAQ",
    "salon software questions",
    "AI appointment booking help",
    "automated booking FAQ",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/faq",
  },
  openGraph: {
    title: "FAQ | Convo AI Salon Booking",
    description: "Common questions about AI appointment booking for salons and beauty businesses.",
    url: "https://convoaiservices.com/faq",
    siteName: "Convo",
    type: "website",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
