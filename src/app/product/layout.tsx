import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product",
  description: "Explore Convo's powerful features: Chat Booking, Voice Agent, and Owner GPT Dashboard. Built for modern salons.",
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
