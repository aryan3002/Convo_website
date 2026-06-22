"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type VerticalStatus = "live" | "soon" | "demo"

export interface VerticalCardProps {
  icon: LucideIcon
  title: string
  tagline: string
  beats: [string, string, string]
  status: VerticalStatus
  statusLabel: string
  href: string
  external?: boolean
}

const beatLabels = ["Capture", "Coordinate", "Commit"] as const

export function VerticalCard({
  icon: Icon,
  title,
  tagline,
  beats,
  status,
  statusLabel,
  href,
  external = false,
}: VerticalCardProps) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href }
  const Arrow = external ? ArrowUpRight : ArrowRight

  return (
    <Link {...linkProps} className="group block h-full">
      <Card className="h-full transition-colors duration-200 group-hover:border-primary/40">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <Badge variant={status}>{statusLabel}</Badge>
          </div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>
          <ul className="mt-5 space-y-2 border-t border-border pt-4">
            {beats.map((beat, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="w-20 shrink-0 text-muted-foreground">{beatLabels[i]}</span>
                <span className="text-foreground">{beat}</span>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
            {external ? "Try the demo" : "Learn more"}
            <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
