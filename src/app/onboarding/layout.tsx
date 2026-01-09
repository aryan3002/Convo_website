import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onboarding | Getting Started with Convo",
  description: "Getting started with Convo is simple. We'll help you get Convo running alongside your current system — no rip-and-replace required.",
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
