import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Convo | Request Access or a Demo",
  description: "Contact the Convo team to request access or a demo of AI appointment booking for your salon.",
  keywords: [
    "contact Convo",
    "request demo",
    "salon AI setup",
  ],
  alternates: {
    canonical: "https://convoaiservices.com/contact",
  },
  openGraph: {
    title: "Contact Convo | Request Access",
    description: "Get in touch to request access or a demo of Convo.",
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
