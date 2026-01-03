import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demo",
  description: "See Convo in action. Interactive demos of Chat Booking, Voice Agent, and Owner Dashboard.",
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
