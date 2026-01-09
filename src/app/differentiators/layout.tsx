import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Differentiators | Convo vs MangoMint & Fresha",
  description: "Understand the difference: Convo is the AI front desk that answers calls, books via chat, and keeps your team in sync. MangoMint and Fresha are management tools.",
}

export default function DifferentiatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
