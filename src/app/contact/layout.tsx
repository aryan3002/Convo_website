import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Convo | Start Your AI Salon Booking Trial",
  description: "Contact the Convo team to start your free trial. Get AI appointment booking for your salon. Quick setup, dedicated support, no commitment required.",
  keywords: [
    "contact Convo",
    "Convo free trial",
    "AI salon booking trial",
    "request demo",
    "salon AI setup",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/contact",
  },
  openGraph: {
    title: "Contact Convo | Start Free Trial",
    description: "Get in touch to start your free AI salon booking trial.",
    url: "https://convoaiservices.com/contact",
    siteName: "Convo",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
