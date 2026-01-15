import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convo Pricing | AI Salon Booking Plans & Costs",
  description: "Transparent pricing for Convo AI salon booking. Plans for solo stylists to multi-location salons. No hidden fees. Free trial available.",
  keywords: [
    "Convo pricing",
    "AI salon booking cost",
    "salon software pricing",
    "AI receptionist cost",
    "automated booking pricing",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/pricing",
  },
  openGraph: {
    title: "Convo Pricing | AI Salon Booking",
    description: "Transparent pricing for AI salon booking. Plans from solo to enterprise.",
    url: "https://convoaiservices.com/pricing",
    siteName: "Convo",
    type: "website",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
