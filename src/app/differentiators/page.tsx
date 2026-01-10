"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Bell,
  Users,
  Sparkles,
  Clock,
  Shield,
  Zap,
  XCircle,
  AlertCircle,
  MinusCircle,
  Bot,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Lightbulb,
  Play,
  PhoneCall,
  CalendarCheck,
  UserCheck,
  ClipboardCheck,
  Timer,
  RefreshCw,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  MessageCircle,
  Workflow,
  Target,
  Activity,
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
          <div className="inline-flex items-center gap-2 p-1.5 glass rounded-full">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="neon" className="mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                Understanding the Difference
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              Stop running your{" "}
              <span className="gradient-text neon-glow">front desk.</span>
              <br />
              Let Convo run it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Convo answers every call and chat. Books appointments. Keeps your team in sync. 
              Spots patterns. Recommends what to do next.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Badge variant="secondary" className="text-sm py-1.5 px-4">
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                Conversation-first
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-4">
                <Activity className="w-3.5 h-3.5 mr-1.5" />
                Real-time ops
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-4">
                <Target className="w-3.5 h-3.5 mr-1.5" />
                Actionable insights
              </Badge>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="neon" size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Right: Stacked Device Mock */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 blur-3xl opacity-50" />
              
              <div className="relative space-y-4">
                {/* Chat booking bubble */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass rounded-2xl p-5 ml-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-mint/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-neon-mint" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Chat Booking</p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg p-2.5 text-sm">
                      "Can I get a cut tomorrow afternoon?"
                    </div>
                    <div className="bg-neon-mint/10 border border-neon-mint/20 rounded-lg p-2.5 text-sm ml-4">
                      "Sure! Alex has 2pm or 4pm open. Which works?"
                    </div>
                  </div>
                </motion.div>

                {/* Employee schedule card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="glass rounded-2xl p-5 mr-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-neon-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Staff Updates</p>
                      <p className="text-xs text-muted-foreground">Real-time sync</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="w-6 h-6 rounded-full bg-success/20 mx-auto mb-1 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-success" />
                      </div>
                      <p className="text-xs">Alex: Acknowledged</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="w-6 h-6 rounded-full bg-neon-blue/20 mx-auto mb-1 flex items-center justify-center">
                        <Clock className="w-3 h-3 text-neon-blue" />
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
                  className="glass rounded-2xl p-5 ml-12"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                      <LayoutDashboard className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Owner Insights</p>
                      <p className="text-xs text-muted-foreground">This week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-neon-mint">24</p>
                      <p className="text-xs text-muted-foreground">Bookings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-neon-blue">8</p>
                      <p className="text-xs text-muted-foreground">Calls</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-success">↓12%</p>
                      <p className="text-xs text-muted-foreground">No-shows</p>
                    </div>
                  </div>
                </motion.div>
              </div>
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
      color: "neon-mint",
    },
    {
      icon: Users,
      title: "Convo keeps everyone in sync.",
      description: "Staff sees updates in real-time. Acknowledges bookings. Marks when they're running late. Customers stay informed.",
      example: "Reduces interruptions and confusion",
      color: "neon-blue",
    },
    {
      icon: Lightbulb,
      title: "Convo recommends what to do.",
      description: "Spots no-show patterns. Suggests policy changes. Flags opportunities. More than analytics — actionable guidance.",
      example: "Turns data into decisions",
      color: "neon-purple",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Convo is different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most tools record what happened. Convo tells you what to do next.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <StaggeredItem key={index}>
              <Card glass className="p-6 h-full group hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-${card.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-6 h-6 text-${card.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-3">{card.description}</p>
                <p className="text-sm text-primary/80 italic">{card.example}</p>
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
    <section id="matrix" className="py-20 relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <Layers className="w-3 h-3 mr-1" />
            The Details
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where Convo fits in your stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Convo handles conversations and operations. Your POS handles transactions. They work together.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4">
            {legend.map((item) => (
              <div key={item.status} className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-sm">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Matrix Groups */}
        <div className="space-y-8">
          {matrixGroups.map((group, groupIndex) => (
            <AnimatedSection key={group.name} delay={groupIndex * 0.1}>
              <Card glass className="overflow-hidden">
                <CardHeader className="border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <group.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Desktop Table */}
                  <div className="hidden md:block">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 text-muted-foreground font-medium w-[40%]">Feature</th>
                          <th className="text-center p-4 font-semibold gradient-text w-[20%]">Convo</th>
                          <th className="text-center p-4 text-muted-foreground font-medium w-[20%]">MangoMint</th>
                          <th className="text-center p-4 text-muted-foreground font-medium w-[20%]">Fresha</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
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
                      <div key={rowIndex} className="glass rounded-xl p-4 space-y-3">
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
      outcomeColor: "success",
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
      outcomeColor: "neon-blue",
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
      outcomeColor: "neon-purple",
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
      outcomeColor: "neon-mint",
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
      outcomeColor: "success",
    },
  ]

  return (
    <section id="scenarios" className="py-20 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <Workflow className="w-3 h-3 mr-1" />
            Real World
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Convo solves real problems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The messy scenarios where traditional tools fall short.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <StaggeredItem key={index}>
              <Card glass className="p-6 h-full group hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold mb-4 text-lg">{scenario.title}</h3>
                
                <div className="space-y-4 mb-4">
                  {/* Typical System */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                      <MinusCircle className="w-3 h-3" />
                      Typical system
                    </p>
                    <ul className="space-y-1.5">
                      {scenario.typical.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-muted-foreground/50 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Convo */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Convo
                    </p>
                    <ul className="space-y-1.5">
                      {scenario.convo.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Badge 
                  variant="success" 
                  className={`text-${scenario.outcomeColor} border-${scenario.outcomeColor}/30 bg-${scenario.outcomeColor}/10`}
                >
                  {scenario.outcome}
                </Badge>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* Mid-page CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <Card glass className="inline-block px-8 py-6">
            <p className="text-lg font-medium mb-4">Ready to see Convo in action?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="neon" size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
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
    <section id="switching" className="py-20 relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <AnimatedSection>
            <Badge variant="neon" className="mb-6">
              <RefreshCw className="w-3 h-3 mr-1" />
              Easy Adoption
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start without switching
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Convo works alongside your current tools. Start small, expand when ready.
            </p>

            {/* No rip-and-replace callout */}
            <Card glass className="p-5 mb-6 border-neon-mint/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-mint/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-neon-mint" />
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
              <div className="absolute left-8 top-14 bottom-14 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-mint" />
              
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
                    {/* Step number with glow */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center shadow-neon">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground">Step {step.number}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
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
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <BarChart3 className="w-3 h-3 mr-1" />
            Your Metrics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll Measure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real metrics from your actual usage — no vanity numbers.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <StaggeredItem key={index}>
              <Card glass className="p-5 text-center h-full group hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{metric.label}</h3>
                <Badge variant="secondary" className="mb-2 text-xs">
                  {metric.type}
                </Badge>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
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
      answer: "Most salons are live within a week. We handle integration, customize your booking flows, and train your team on the employee portal.",
    },
    {
      question: "What does Convo integrate with?",
      answer: "Convo syncs with popular salon calendars, POS systems, and payment processors. During onboarding, we confirm compatibility with your specific stack.",
    },
  ]

  return (
    <section id="faq" className="py-20 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neon-blue/5 to-transparent" />
      
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to common questions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card glass className="p-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:no-underline px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 shadow-neon"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop answering calls. Stop chasing staff updates.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let Convo handle your front desk while you run your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button variant="neon" size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Private beta — we onboard a limited number of businesses at a time.
            </p>
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
