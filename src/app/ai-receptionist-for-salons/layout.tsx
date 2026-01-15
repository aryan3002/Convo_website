import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Receptionist for Salons | 24/7 Virtual Front Desk | Convo",
  description: "Convo is an AI receptionist for salons that answers calls, books appointments, and handles customer inquiries 24/7. Never miss another booking. Works with Fresha, MangoMint, and more.",
  keywords: [
    "AI receptionist for salons",
    "virtual receptionist salon",
    "AI salon receptionist",
    "automated salon front desk",
    "AI phone answering for salons",
    "salon virtual assistant",
    "AI call answering beauty salon",
    "automated booking receptionist",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/ai-receptionist-for-salons",
  },
  openGraph: {
    title: "AI Receptionist for Salons | 24/7 Virtual Front Desk",
    description: "Never miss a booking. Convo AI answers calls, books appointments, and handles inquiries 24/7.",
    url: "https://convoaiservices.com/ai-receptionist-for-salons",
    siteName: "Convo",
    type: "website",
  },
}

export default function AIReceptionistForSalonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
