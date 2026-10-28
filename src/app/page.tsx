"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  LayoutDashboard,
  ArrowRight,
  CalendarCheck,
  Zap,
  Shield,
  Bell,
  Users,
  BarChart3,
  FileText,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Bot,
  Scissors,
  Car,
  HardHat,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift } from "@/components/animations"
import { VerticalCard } from "@/components/vertical-card"

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Text block */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 text-sm font-medium text-muted-foreground"
          >
            Conversation-to-action AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
          >
            Turn every message, call, and photo into a done deal.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Convo is the engine that captures unstructured conversations — texts, calls, voice notes, site
            photos — and turns them into booked appointments, dispatched rides, and trustworthy project
            records. One loop: capture, coordinate, commit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Request access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#verticals">See what it runs</Link>
            </Button>
          </motion.div>
        </div>

        {/* Engine log card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-16 md:mt-20"
        >
          <div className="max-w-2xl rounded-xl border border-border bg-card p-6">
            {/* card header */}
            <div className="mb-5 flex items-center gap-2.5 border-b border-border pb-4">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs font-medium text-muted-foreground uppercase tracking-widest">
                convo engine · example log
              </span>
            </div>

            {/* log lines */}
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-start gap-3">
                <span className="w-20 shrink-0 text-xs text-muted-foreground pt-0.5">capture</span>
                <span className="text-foreground">
                  Inbound WhatsApp:{" "}
                  <span className="text-primary">&ldquo;Book me a trim Saturday 11am&rdquo;</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-20 shrink-0 text-xs text-muted-foreground pt-0.5">coordinate</span>
                <span className="text-foreground">
                  Intent parsed · slot{" "}
                  <span className="text-primary">SAT 11:00</span> with Alex · available ✓
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-20 shrink-0 text-xs text-muted-foreground pt-0.5">commit</span>
                <span className="text-foreground">
                  Booking confirmed ·{" "}
                  <span className="text-primary">calendar invite sent</span> · record stored
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-20 shrink-0 text-xs text-muted-foreground pt-0.5">record</span>
                <span className="text-foreground">
                  Summary logged · customer notified · owner dashboard{" "}
                  <span className="text-primary">updated</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Verticals Section ────────────────────────────────────────────────────────
function VerticalsSection() {
  return (
    <section id="verticals" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">One engine, three verticals</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            The same loop, wherever conversations turn into commitments
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <VerticalCard
            icon={Scissors}
            title="Salons & barbershops"
            tagline="Bookings that feel like texting. Chat or voice, 24/7, no phone tag."
            beats={[
              "Every call, text and DM is logged",
              "Service, stylist and slot availability synced",
              "Confirmed booking + calendar invite",
            ]}
            status="demo"
            statusLabel="Demo"
            href="/product"
          />
          <VerticalCard
            icon={Car}
            title="Cabs & fleets"
            tagline="Ride booking and dispatch with dynamic pricing across every channel."
            beats={[
              "Inbound ride requests captured anywhere",
              "Driver availability and pricing coordinated",
              "Dispatched ride, confirmed to the rider",
            ]}
            status="soon"
            statusLabel="Piloted"
            href="/contact"
          />
          <VerticalCard
            icon={HardHat}
            title="Construction · Neev"
            tagline="Turn WhatsApp messages, site photos and voice notes into one evidence-anchored record."
            beats={[
              "Site chatter, photos and voice notes captured",
              "AI structures and cross-checks the evidence",
              "A human commits the decision of record",
            ]}
            status="demo"
            statusLabel="Try the demo"
            href="https://neev.convoaiservices.com"
            external
          />
        </div>
      </div>
    </section>
  )
}

// ─── How It Works Timeline ────────────────────────────────────────────────────
function HowItWorksTimeline() {
  const steps = [
    {
      step: 1,
      title: "Capture",
      description: "Every message, call, voice note, or photo lands in one place.",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "Coordinate",
      description:
        "The AI reads intent, checks availability or evidence, and proposes the next action.",
      icon: Bot,
    },
    {
      step: 3,
      title: "Commit",
      description: "A human confirms — a booking, a dispatch, a logged decision — in one tap.",
      icon: CalendarCheck,
    },
    {
      step: 4,
      title: "Record",
      description: "Everything is summarized and stored, ready to inform the next decision.",
      icon: LayoutDashboard,
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">The engine loop</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From first contact to confirmed action in seconds.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <StaggeredItem key={index}>
              <div className="relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{String(step.step).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// ─── Salon Proof Lead-In ──────────────────────────────────────────────────────
function SalonProofLeadIn() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-2">
      <p className="text-sm font-medium text-muted-foreground">See the engine at work</p>
      <h2 className="font-display text-3xl font-semibold md:text-4xl">The salon front desk, in depth</h2>
    </div>
  )
}

// ─── Product Mode Cards ────────────────────────────────────────────────────────
function ProductModeCards() {
  const modes = [
    {
      icon: MessageSquare,
      title: "Chat Booking",
      description: "Conversational booking through your website. No forms, just natural chat.",
      features: ["Natural language", "Smart suggestions", "Instant confirmations"],
    },
    {
      icon: Phone,
      title: "Voice Agent",
      description: "AI phone receptionist that handles calls 24/7 with human-like conversation.",
      features: ["Twilio integration", "Call transcripts", "Low latency"],
    },
    {
      icon: LayoutDashboard,
      title: "Owner Dashboard",
      description: "Manage everything with AI-powered insights and natural language commands.",
      features: ["Booking analytics", "Customer insights", "AI management"],
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Three powerful modes</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            One platform, every booking channel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet your customers where they are — chat, voice, or both.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {modes.map((mode, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                      <mode.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl font-semibold">{mode.title}</CardTitle>
                    <CardDescription className="text-base">{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mode.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </HoverLift>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// ─── Feature Grid ──────────────────────────────────────────────────────────────
function FeatureGrid() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Booking",
      description: "Customers type like they text — our AI understands and responds naturally.",
    },
    {
      icon: Phone,
      title: "Voice AI Agent",
      description: "Ultra-low latency voice conversations powered by Twilio and advanced LLMs.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI suggests optimal slots based on stylist availability and customer history.",
    },
    {
      icon: Shield,
      title: "Slot Hold & Confirm",
      description: "Temporarily hold slots during booking to prevent double-bookings.",
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Email and SMS confirmations sent automatically to customers.",
    },
    {
      icon: FileText,
      title: "Call Summaries",
      description: "Every voice call is transcribed and summarized in your dashboard.",
    },
    {
      icon: BarChart3,
      title: "Booking Analytics",
      description: "Track trends, peak hours, popular services, and no-show rates.",
    },
    {
      icon: Users,
      title: "Customer Profiles",
      description: "Build customer memory — preferences, history, and notes all in one place.",
    },
    {
      icon: Zap,
      title: "Zero Integration Hassle",
      description: "Works standalone or integrates with your existing calendar systems.",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Feature-rich</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Everything you need to modernize bookings
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built specifically for salons, with features that actually matter.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
          {features.map((feature, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-base font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </HoverLift>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// ─── Call Summaries Section ────────────────────────────────────────────────────
function CallSummariesSection() {
  const summaries = [
    {
      caller: "+1 (555) 123-4567",
      time: "2 min ago",
      duration: "1:42",
      summary:
        "Customer requested a women's haircut with Maria for Saturday 2pm. Confirmed and sent calendar invite.",
    },
    {
      caller: "+1 (555) 987-6543",
      time: "15 min ago",
      duration: "2:15",
      summary:
        "New customer inquired about balayage pricing. Booked consultation with Alex for Monday 10am.",
    },
    {
      caller: "+1 (555) 456-7890",
      time: "1 hour ago",
      duration: "0:58",
      summary:
        "Existing customer rescheduled from Friday to Thursday. Updated appointment confirmed.",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Voice intelligence</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Never miss a detail from calls
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every voice call is automatically transcribed and summarized. See caller intent, booking
              details, and follow-up actions at a glance.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "AI-generated call summaries",
                "Full transcription available",
                "Action items extracted",
                "Caller sentiment analysis",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display font-semibold">Recent Call Summaries</h3>
                <Badge variant="demo">Example</Badge>
              </div>
              <div className="space-y-4">
                {summaries.map((summary, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-border bg-secondary/40 p-4 hover:border-primary/30 transition-colors"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{summary.caller}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{summary.duration}</span>
                        <span>·</span>
                        <span>{summary.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{summary.summary}</p>
                    <div className="mt-2">
                      <Badge variant="live" className="text-xs">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Booking Confirmed
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─── Calendar Invite Section ───────────────────────────────────────────────────
function CalendarInviteSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <Card className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Booking Confirmed!</h4>
                  <p className="text-sm text-muted-foreground">Men&apos;s Haircut with Alex</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  ["Date", "January 12, 2026"],
                  ["Time", "10:00 AM"],
                  ["Duration", "30 minutes"],
                  ["Stylist", "Alex Martinez"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2.5"
                  >
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full" asChild>
                <span>
                  <Calendar className="mr-2 h-4 w-4" />
                  Add to Calendar (.ics)
                </span>
              </Button>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-medium text-muted-foreground">Seamless confirmations</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Calendar invites that just work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every booking confirmation includes a downloadable .ics calendar invite. Works with Google
              Calendar, Apple Calendar, Outlook, and more.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "One-click calendar add",
                "Automatic reminders",
                "Works on all devices",
                "Includes salon address & details",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─── Integrations Strip ────────────────────────────────────────────────────────
function IntegrationsStrip() {
  const integrations = [
    { name: "Twilio", logo: "T", description: "Voice & SMS" },
    { name: "Vercel", logo: "▲", description: "Hosting" },
    { name: "Neon", logo: "N", description: "Database" },
    { name: "OpenAI", logo: "◉", description: "AI/LLM" },
  ]

  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Powered by
          </p>
          <h3 className="font-display text-xl font-semibold">Built on</h3>
        </AnimatedSection>

        <StaggeredContainer className="flex flex-wrap justify-center gap-5 md:gap-8">
          {integrations.map((integration, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-base font-bold">
                    {integration.logo}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
              </HoverLift>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// ─── Pricing Teaser ────────────────────────────────────────────────────────────
function PricingTeaser() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Pricing</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plans that scale with your business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/pricing">
                View Pricing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card className="p-8 md:p-14 text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Ready to put the engine to work?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Request early access and be among the first to run Convo across your business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Request Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/demo">See It In Action</Link>
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalsSection />
      <HowItWorksTimeline />
      <SalonProofLeadIn />
      <ProductModeCards />
      <FeatureGrid />
      <CallSummariesSection />
      <CalendarInviteSection />
      <IntegrationsStrip />
      <PricingTeaser />
      <FinalCTA />
    </>
  )
}
