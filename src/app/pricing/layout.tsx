import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for Convo. Choose the plan that fits your salon's needs.",
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
