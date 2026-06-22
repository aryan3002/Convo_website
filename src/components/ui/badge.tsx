"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "neon" | "live" | "soon" | "demo"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "border border-border bg-transparent text-muted-foreground": variant === "outline",
          "bg-success/15 text-success border border-success/25": variant === "success" || variant === "live",
          "bg-primary/10 text-primary border border-primary/20": variant === "neon" || variant === "demo",
          "bg-secondary text-muted-foreground border border-border": variant === "soon",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
