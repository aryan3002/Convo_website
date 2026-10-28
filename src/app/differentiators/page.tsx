"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  XCircle,
  AlertCircle,
  MinusCircle,
  Lightbulb,
  Play,
  PhoneCall,
  CalendarCheck,
  UserCheck,
  Timer,
  Layers,
  MessageCircle,
  Target,
  Activity,
  BarChart3,
  TrendingDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animations"
import { useState, useEffect } from "react"

// Navigation Anchor Bar
function NavAnchorBar() {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "matrix", label: "Matrix" },
    { id: "scenarios", label: "Real-life scenarios" },
    { id: "switching", label: "Switching" },
    { id: "faq", label: "FAQ" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="sticky top-20 z-40 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 bg-card border border-border rounded-full">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <AnimatedSection>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 text-sm font-medium text-muted-foreground"
            >
              Understanding the Difference
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6"
            >
              Stop running your{" "}
              <span className="text-primary">front desk.</span>
              <br />
              Let Convo run it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Convo answers every call and chat. Books appointments. Keeps your team in sync.
              Spots patterns. Recommends what to do next.
            </motion.p>

            {/* Quiet feature labels */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MessageCircle className="w-3.5 h-3.5 text-primary" />
                Conversation-first
              </div>
              <span className="text-border">·</span>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Activity className="w-3.5 h-3.5 text-primary" />
                Real-time ops
              </div>
              <span className="text-border">·</span>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Target className="w-3.5 h-3.5 text-primary" />
                Actionable insights
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Right: Stacked Device Mock */}
          <AnimatedSection delay={0.2}>
            <div className="relative space-y-4">
              {/* Chat booking bubble */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border border-border bg-card p-5 ml-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Chat Booking</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary rounded-lg p-2.5 text-sm">
                    "Can I get a cut tomorrow afternoon?"
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-2.5 text-sm ml-4">
                    "Sure! Alex has 2pm or 4pm open. Which works?"
                  </div>
                </div>
              </motion.div>

              {/* Employee schedule card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-2xl border border-border bg-card p-5 mr-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Staff Updates</p>
                    <p className="text-xs text-muted-foreground">Real-time sync</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-secondary rounded-lg p-2 text-center">
                    <div className="w-6 h-6 rounded-full bg-success/15 mx-auto mb-1 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-success" />
                    </div>
                    <p className="text-xs">Alex: Acknowledged</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-2 text-center">
                    <div className="w-6 h-6 rounded-full bg-primary/10 mx-auto mb-1 flex items-center justify-center">
                      <Clock className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-xs">Maria: In session</p>
                  </div>
                </div>
              </motion.div>

              {/* Owner analytics tile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="rounded-2xl border border-border bg-card p-5 ml-12"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Owner Insights</p>
                    <p className="text-xs text-muted-foreground">This week</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-primary">24</p>
                    <p className="text-xs text-muted-foreground">Bookings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-foreground">8</p>
                    <p className="text-xs text-muted-foreground">Calls</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-success">↓12%</p>
                    <p className="text-xs text-muted-foreground">No-shows</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// The Difference In One Glance
function DifferenceGlanceSection() {
  const cards = [
    {
      icon: MessageSquare,
      title: "Convo speaks customer.",
      description: 'No forms. Customers say "tomorrow afternoon" and Convo suggests slots. Natural conversation, instant booking.',
      example: "Captures bookings other tools miss",
    },
    {
      icon: Users,
      title: "Convo keeps everyone in sync.",
      description: "Staff sees updates in real-time. Acknowledges bookings. Marks when they're running late. Customers stay informed.",
      example: "Reduces interruptions and confusion",
    },
    {
      icon: Lightbulb,
      title: "Convo recommends what to do.",
      description: "Spots no-show patterns. Suggests policy changes. Flags opportunities. More than analytics — actionable guidance.",
      example: "Turns data into decisions",
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">Why Convo is different</p>
        </AnimatedSection>
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Most tools record what happened.
            <br />
            Convo tells you what to do next.
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <StaggeredItem key={index}>
              <Card className="p-6 h-full group hover:border-primary/30 transition-colors duration-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary mb-5 group-hover:bg-primary/10 transition-colors duration-200">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{card.description}</p>
                <p className="text-xs text-primary/70 font-medium">{card.example}</p>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// Comparison Matrix Types
type CellStatus = "native" | "limited" | "manual" | "not-core"

interface MatrixRow {
  feature: string
  convo: { status: CellStatus; detail?: string }
  mangomint: { status: CellStatus; detail?: string }
  fresha: { status: CellStatus; detail?: string }
}

interface MatrixGroup {
  name: string
  icon: React.ElementType
  rows: MatrixRow[]
}

// Comparison Matrix Section
function ComparisonMatrixSection() {
  const legend: { status: CellStatus; label: string; icon: React.ElementType; color: string }[] = [
    { status: "native", label: "Native", icon: CheckCircle2, color: "text-success" },
    { status: "limited", label: "Limited", icon: AlertCircle, color: "text-yellow-500" },
    { status: "manual", label: "Manual", icon: MinusCircle, color: "text-orange-500" },
    { status: "not-core", label: "Not core", icon: XCircle, color: "text-muted-foreground" },
  ]

  const matrixGroups: MatrixGroup[] = [
    {
      name: "Front Door",
      icon: Phone,
      rows: [
        {
          feature: "Captures phone calls (after-hours included)",
          convo: { status: "native", detail: "AI voice agent 24/7" },
          mangomint: { status: "not-core", detail: "Optimized for dashboard workflows" },
          fresha: { status: "not-core", detail: "Primarily booking/POS" },
        },
        {
          feature: "Books via chat naturally",
          convo: { status: "native", detail: "Conversation-first booking" },
          mangomint: { status: "limited", detail: "Web widget available" },
          fresha: { status: "limited", detail: "Basic online booking" },
        },
        {
          feature: 'Handles "tomorrow afternoon" ambiguity',
          convo: { status: "native", detail: "AI interprets intent" },
          mangomint: { status: "manual", detail: "Requires specific input" },
          fresha: { status: "manual", detail: "Requires specific input" },
        },
        {
          feature: "Offers suggested times proactively",
          convo: { status: "native", detail: "Smart slot suggestions" },
          mangomint: { status: "limited", detail: "Shows availability" },
          fresha: { status: "limited", detail: "Shows availability" },
        },
        {
          feature: "Escalates to human when uncertain",
          convo: { status: "native", detail: "Built-in handoff logic" },
          mangomint: { status: "not-core" },
          fresha: { status: "not-core" },
        },
      ],
    },
    {
      name: "Intelligence & Policies",
      icon: Shield,
      rows: [
        {
          feature: "Slot holds (prevents double booking)",
          convo: { status: "native", detail: "Temporary hold during chat" },
          mangomint: { status: "native", detail: "Calendar locking" },
          fresha: { status: "native", detail: "Calendar locking" },
        },
        {
          feature: "Deposit / cancellation policy enforcement",
          convo: { status: "native", detail: "Configurable AI rules" },
          mangomint: { status: "native", detail: "Policy settings" },
          fresha: { status: "native", detail: "Policy settings" },
        },
        {
          feature: "Smart follow-ups / reminders",
          convo: { status: "native", detail: "Context-aware messaging" },
          mangomint: { status: "limited", detail: "Automated reminders" },
          fresha: { status: "limited", detail: "Automated reminders" },
        },
        {
          feature: "Reschedules gracefully",
          convo: { status: "native", detail: "Conversational rebooking" },
          mangomint: { status: "manual", detail: "Typically manual" },
          fresha: { status: "manual", detail: "Typically manual" },
        },
      ],
    },
    {
      name: "Operations (Real-time)",
      icon: Activity,
      rows: [
        {
          feature: "Employee acknowledgements",
          convo: { status: "native", detail: "Staff confirms via app" },
          mangomint: { status: "not-core" },
          fresha: { status: "not-core" },
        },
        {
          feature: "Appointment status lifecycle",
          convo: { status: "native", detail: "Start/complete/no-show" },
          mangomint: { status: "limited", detail: "Basic status tracking" },
          fresha: { status: "limited", detail: "Basic status tracking" },
        },
        {
          feature: "Internal notes linked to appointments",
          convo: { status: "native", detail: "Contextual notes" },
          mangomint: { status: "native", detail: "Appointment notes" },
          fresha: { status: "native", detail: "Appointment notes" },
        },
        {
          feature: "Time-off requests impacting availability",
          convo: { status: "native", detail: "Auto-adjusts booking" },
          mangomint: { status: "native", detail: "Schedule management" },
          fresha: { status: "native", detail: "Schedule management" },
        },
      ],
    },
    {
      name: "Analytics & Actions",
      icon: BarChart3,
      rows: [
        {
          feature: "Owner KPI dashboard",
          convo: { status: "native", detail: "Bookings, no-show, revenue" },
          mangomint: { status: "native", detail: "Comprehensive reporting" },
          fresha: { status: "native", detail: "Comprehensive reporting" },
        },
        {
          feature: "AI insights with recommendations",
          convo: { status: "native", detail: "Actionable next steps" },
          mangomint: { status: "not-core" },
          fresha: { status: "not-core" },
        },
        {
          feature: '"Review Action" CTA into Owner GPT',
          convo: { status: "native", detail: "Action bridge" },
          mangomint: { status: "not-core" },
          fresha: { status: "not-core" },
        },
      ],
    },
  ]

  const getStatusIcon = (status: CellStatus) => {
    const item = legend.find((l) => l.status === status)
    if (!item) return null
    const Icon = item.icon
    return <Icon className={`w-4 h-4 ${item.color}`} />
  }

  return (
    <section id="matrix" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">The Details</p>
        </AnimatedSection>
        <AnimatedSection className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Where Convo fits in your stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Convo handles conversations and operations. Your POS handles transactions. They work together.
          </p>
        </AnimatedSection>

        {/* Legend */}
        <AnimatedSection className="mb-10">
          <div className="flex flex-wrap gap-4">
            {legend.map((item) => (
              <div key={item.status} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Matrix Groups */}
        <div className="space-y-6">
          {matrixGroups.map((group, groupIndex) => (
            <AnimatedSection key={group.name} delay={groupIndex * 0.08}>
              <Card className="overflow-hidden">
                <CardHeader className="border-b border-border bg-secondary/30 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                      <group.icon className="w-4 h-4 text-primary" />
                    </div>
                    <CardTitle className="font-display text-base font-semibold">{group.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Desktop Table */}
                  <div className="hidden md:block">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 text-muted-foreground font-medium text-sm w-[40%]">Feature</th>
                          <th className="text-center p-4 text-primary font-semibold text-sm w-[20%]">Convo</th>
                          <th className="text-center p-4 text-muted-foreground font-medium text-sm w-[20%]">MangoMint</th>
                          <th className="text-center p-4 text-muted-foreground font-medium text-sm w-[20%]">Fresha</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors">
                            <td className="p-4 text-sm">{row.feature}</td>
                            <td className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                {getStatusIcon(row.convo.status)}
                                {row.convo.detail && (
                                  <span className="text-xs text-muted-foreground">{row.convo.detail}</span>
                                )}
                              </div>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                {getStatusIcon(row.mangomint.status)}
                                {row.mangomint.detail && (
                                  <span className="text-xs text-muted-foreground">{row.mangomint.detail}</span>
                                )}
                              </div>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                {getStatusIcon(row.fresha.status)}
                                {row.fresha.detail && (
                                  <span className="text-xs text-muted-foreground">{row.fresha.detail}</span>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden p-4 space-y-4">
                    {group.rows.map((row, rowIndex) => (
                      <div key={rowIndex} className="rounded-xl border border-border bg-secondary/20 p-4 space-y-3">
                        <p className="font-medium text-sm">{row.feature}</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="space-y-1">
                            <p className="text-xs text-primary font-medium">Convo</p>
                            <div className="flex flex-col items-center gap-0.5">
                              {getStatusIcon(row.convo.status)}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">MangoMint</p>
                            <div className="flex flex-col items-center gap-0.5">
                              {getStatusIcon(row.mangomint.status)}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Fresha</p>
                            <div className="flex flex-col items-center gap-0.5">
                              {getStatusIcon(row.fresha.status)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Real-Life Scenarios Section
function ScenariosSection() {
  const scenarios = [
    {
      title: "Customer calls after hours",
      typical: [
        "Goes to voicemail",
        "Customer may not leave a message",
        "Booking opportunity lost until next day",
      ],
      convo: [
        "AI voice agent answers the call",
        "Understands request conversationally",
        "Books the appointment on the spot",
      ],
      outcome: "Captured booking",
      outcomeVariant: "success" as const,
    },
    {
      title: 'Customer is vague: "tomorrow afternoon"',
      typical: [
        "Form requires exact time selection",
        "Customer abandons or picks wrong slot",
        "Staff calls back to clarify",
      ],
      convo: [
        "AI understands 'afternoon' intent",
        "Suggests 2-3 available slots",
        "Customer picks, booking confirmed",
      ],
      outcome: "Reduced friction",
      outcomeVariant: "secondary" as const,
    },
    {
      title: "Stylist running late",
      typical: [
        "Owner manually texts affected clients",
        "Some clients show up anyway",
        "Front desk handles complaints",
      ],
      convo: [
        "Staff marks delay in employee portal",
        "Affected clients auto-notified",
        "Offers reschedule options proactively",
      ],
      outcome: "Reduced interruption",
      outcomeVariant: "secondary" as const,
    },
    {
      title: "No-show spike this week",
      typical: [
        "Discovered in weekly reports",
        "No immediate action taken",
        "Pattern repeats",
      ],
      convo: [
        "AI flags trend in real-time",
        "Surfaces insight: 'No-shows up 20%'",
        "Recommends deposit policy adjustment",
      ],
      outcome: "Fewer no-shows",
      outcomeVariant: "success" as const,
    },
    {
      title: "Busy Saturday: last-minute cancellations",
      typical: [
        "Staff scrambles to fill slots",
        "Manual texting to waitlist",
        "Slots often go unfilled",
      ],
      convo: [
        "Cancellation triggers auto-outreach",
        "Waitlist clients notified instantly",
        "Slot filled without staff effort",
      ],
      outcome: "Maximized revenue",
      outcomeVariant: "success" as const,
    },
  ]

  return (
    <section id="scenarios" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">Real World</p>
        </AnimatedSection>
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            How Convo solves real problems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The messy scenarios where traditional tools fall short.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <StaggeredItem key={index}>
              <Card className="p-6 h-full group hover:border-primary/30 transition-colors duration-200">
                <h3 className="font-display font-semibold mb-4 text-base">{scenario.title}</h3>

                <div className="space-y-4 mb-5">
                  {/* Typical System */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <MinusCircle className="w-3 h-3" />
                      Typical system
                    </p>
                    <ul className="space-y-1.5">
                      {scenario.typical.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-muted-foreground/40 mt-0.5 shrink-0">–</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hairline divider */}
                  <div className="h-px bg-border" />

                  {/* Convo */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      Convo
                    </p>
                    <ul className="space-y-1.5">
                      {scenario.convo.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-0.5 shrink-0">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Badge variant={scenario.outcomeVariant}>
                  {scenario.outcome}
                </Badge>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* Mid-page CTA */}
        <AnimatedSection delay={0.4} className="mt-16">
          <Card className="p-8 text-center">
            <p className="font-display text-lg font-semibold mb-4">Ready to see Convo in action?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Switching Without Pain Section
function SwitchingSection() {
  const steps = [
    {
      number: 1,
      title: "Add Convo as your front desk",
      description: "Chat + voice channels go live. Your current calendar stays.",
      icon: MessageSquare,
    },
    {
      number: 2,
      title: "Build trust with your team",
      description: "Staff uses employee portal for live updates and acknowledgements.",
      icon: Users,
    },
    {
      number: 3,
      title: "Consolidate later (optional)",
      description: "When ready, simplify your stack. No pressure.",
      icon: Layers,
    },
  ]

  return (
    <section id="switching" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <AnimatedSection>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Easy Adoption</p>

            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Start without switching
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Convo works alongside your current tools. Start small, expand when ready.
            </p>

            {/* No rip-and-replace callout */}
            <Card className="p-5 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">No rip-and-replace</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep your current calendar/POS. Convo fills it. Switching is optional, not required.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* Right: Timeline */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-14 bottom-14 w-px bg-border" />

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Step icon */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl border border-border bg-card flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground font-mono">Step {step.number}</span>
                      </div>
                      <h3 className="font-display text-base font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// What You'll Measure Section
function MeasurementSection() {
  const metrics = [
    {
      icon: PhoneCall,
      label: "Captured calls",
      type: "Count",
      description: "Calls answered by AI",
    },
    {
      icon: CalendarCheck,
      label: "Bookings created",
      type: "Count",
      description: "Appointments booked via Convo",
    },
    {
      icon: TrendingDown,
      label: "No-show trend",
      type: "Direction",
      description: "Weekly change in no-shows",
    },
    {
      icon: UserCheck,
      label: "Staff acknowledgement rate",
      type: "Percentage",
      description: "Appointments confirmed by staff",
    },
    {
      icon: Timer,
      label: "Owner time saved",
      type: "Qualitative",
      description: "Less front desk management",
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">Your Metrics</p>
        </AnimatedSection>
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            What You'll Measure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real metrics from your actual usage — no vanity numbers.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <StaggeredItem key={index}>
              <Card className="p-5 text-center h-full group hover:border-primary/30 transition-colors duration-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-200">
                  <metric.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1.5">{metric.label}</h3>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {metric.type}
                </Badge>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection delay={0.3} className="mt-8">
          <p className="text-sm text-muted-foreground">
            Measured from your actual usage — no vanity metrics.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Do I need to replace MangoMint/Fresha?",
      answer: "No. Convo works as your front desk layer — it syncs with your existing calendar and POS. You keep what works, and add Convo for chat, voice, and ops coordination.",
    },
    {
      question: "Does Convo answer calls and texts?",
      answer: "Yes. Convo's AI voice agent handles inbound calls (including after-hours), and the chat widget manages text-based booking conversations on your website.",
    },
    {
      question: "What if Convo is unsure?",
      answer: "Convo is designed to escalate gracefully. If it can't confidently handle a request, it notifies your team or offers to schedule a callback — never guessing.",
    },
    {
      question: "Can my staff override bookings?",
      answer: "Absolutely. Staff have full control via the employee portal. They can acknowledge, reschedule, or modify any appointment Convo creates.",
    },
    {
      question: "How does Convo reduce no-shows?",
      answer: "Context-aware reminders, deposit policy enforcement, and easy rescheduling options. Plus, AI insights flag no-show trends before they become a pattern.",
    },
    {
      question: "How long does setup take?",
      answer: "About a week. We handle integration, customize your booking flows, and train your team on the employee portal.",
    },
    {
      question: "What does Convo integrate with?",
      answer: "Convo syncs with popular salon calendars, POS systems, and payment processors. During onboarding, we confirm compatibility with your specific stack.",
    },
  ]

  return (
    <section id="faq" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">Questions</p>
        </AnimatedSection>
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to common questions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="p-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:no-underline px-4 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Stop answering calls. Stop chasing staff updates.
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Let Convo handle your front desk while you run your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button size="lg" asChild>
                  <Link href="/demo">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Request Access
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Early access — available by request.
              </p>
            </Card>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function DifferentiatorsPage() {
  return (
    <main className="relative">
      <HeroSection />
      <NavAnchorBar />
      <DifferenceGlanceSection />
      <ComparisonMatrixSection />
      <ScenariosSection />
      <SwitchingSection />
      <MeasurementSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}
