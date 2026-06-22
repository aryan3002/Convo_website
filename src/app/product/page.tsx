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
  Clock,
  Shield,
  Zap,
  Database,
  Cpu,
  Globe,
  FileText,
  Brain,
  Mic,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift } from "@/components/animations"

// Hero Section
function ProductHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 text-sm font-medium text-muted-foreground"
          >
            Product deep dive
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
          >
            Three modes.{" "}
            <span className="text-primary">Infinite possibilities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Discover how Convo transforms every touchpoint of the booking experience—for customers and salon owners alike.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// Chat Booking Deep Dive
function ChatBookingSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "No rigid forms. Customers type naturally, and our AI understands intent.",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Sub-second response times keep the conversation flowing smoothly.",
    },
    {
      icon: Calendar,
      title: "Smart Slot Suggestions",
      description: "AI suggests optimal appointment times based on preferences and availability.",
    },
    {
      icon: Shield,
      title: "Slot Holding",
      description: "Temporarily holds slots during booking to prevent double-bookings.",
    },
  ]

  const chatFlow = [
    { role: "customer", message: "Hey! I'd like to book a haircut" },
    { role: "agent", message: "Hi there! I'd love to help you book. What type of haircut are you looking for?" },
    { role: "customer", message: "Men's haircut with Alex if he's available" },
    { role: "agent", message: "Great choice! Alex has the following slots available this week:\n\n• Wed Jan 14 at 2:00 PM\n• Thu Jan 15 at 10:00 AM\n• Fri Jan 16 at 3:30 PM\n\nWhich works best for you?" },
    { role: "customer", message: "Thursday 10am works" },
    { role: "agent", message: "Perfect! I've booked you for a Men's Haircut with Alex on Thursday, January 15th at 10:00 AM. A confirmation has been sent to your email. Would you like to add this to your calendar?" },
  ]

  return (
    <section className="py-24" id="chat">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Feature 01</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Customer Chat Booking
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Embed our chat widget on your website and let customers book appointments
              through natural conversation. It&apos;s like texting your salon—available 24/7.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/demo#chat">
                See Chat Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium text-sm">Chat Booking Widget</span>
              </div>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {chatFlow.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 rounded-xl text-sm whitespace-pre-line ${
                      item.role === "customer"
                        ? "bg-secondary/50 mr-8"
                        : "bg-primary/10 border border-primary/20 ml-8"
                    }`}
                  >
                    {item.message}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Voice Agent Deep Dive
function VoiceAgentSection() {
  const features = [
    {
      icon: Mic,
      title: "Human-Like Voice",
      description: "Advanced speech synthesis that sounds natural and friendly.",
    },
    {
      icon: Clock,
      title: "Ultra-Low Latency",
      description: "Response times under 500ms for natural conversation flow.",
    },
    {
      icon: FileText,
      title: "Full Transcription",
      description: "Every call is transcribed and summarized automatically.",
    },
    {
      icon: Brain,
      title: "Context Awareness",
      description: "AI remembers context throughout the entire call.",
    },
  ]

  const transcript = [
    { speaker: "Agent", text: "Thank you for calling Luxe Hair Studio! How can I help you today?" },
    { speaker: "Caller", text: "Hi, I'd like to book a haircut for tomorrow if possible." },
    { speaker: "Agent", text: "Of course! I'd be happy to help. Do you have a preferred stylist, or would you like me to check general availability?" },
    { speaker: "Caller", text: "I usually see Maria. Is she available?" },
    { speaker: "Agent", text: "Let me check Maria's schedule for tomorrow... Maria has openings at 11 AM, 2 PM, and 4:30 PM. Which time works best for you?" },
    { speaker: "Caller", text: "2 PM sounds perfect." },
    { speaker: "Agent", text: "Excellent! I've booked you with Maria tomorrow at 2 PM. Can I get your phone number for the confirmation?" },
  ]

  return (
    <section className="py-24" id="voice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2} className="order-2 lg:order-1">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4 border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-sm">Voice Transcript</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">Latency: 320ms</span>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {transcript.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: item.speaker === "Caller" ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 text-xs font-semibold ${
                      item.speaker === "Agent"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {item.speaker === "Agent" ? <Phone className="h-4 w-4" /> : "C"}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{item.speaker}</p>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-secondary border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Call Summary</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Customer booked haircut with Maria for tomorrow at 2 PM. Confirmation sent.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Feature 02</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Voice Agent Booking
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              An AI receptionist that handles phone calls 24/7. Powered by Twilio
              for reliability and our custom LLM for human-like conversations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/demo#voice">
                See Voice Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Owner Dashboard Deep Dive
function OwnerDashboardSection() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Unified Dashboard",
      description: "See all bookings, calls, and chats in one place.",
    },
    {
      icon: Users,
      title: "Customer Lookup",
      description: "Search customers and view their complete history.",
    },
    {
      icon: Calendar,
      title: "Service Management",
      description: "Add, edit, and manage services and pricing.",
    },
    {
      icon: Clock,
      title: "Availability Control",
      description: "Set stylist schedules and block off-time easily.",
    },
  ]

  return (
    <section className="py-24" id="dashboard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Feature 03</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Owner GPT Console
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The command center for your salon. Manage services, view analytics,
              read call summaries, and control everything with natural language.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/demo#dashboard">
                See Dashboard Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="p-6">
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
                  <TabsTrigger value="calls" className="flex-1">Calls</TabsTrigger>
                  <TabsTrigger value="customers" className="flex-1">Customers</TabsTrigger>
                </TabsList>

                <TabsContent value="services">
                  <div className="space-y-3">
                    {[
                      { name: "Men's Haircut", price: "$35", bookings: 24 },
                      { name: "Women's Haircut", price: "$55", bookings: 18 },
                      { name: "Balayage", price: "$180", bookings: 8 },
                      { name: "Beard Trim", price: "$15", bookings: 12 },
                    ].map((service, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                        <div>
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.price}</p>
                        </div>
                        <Badge variant="secondary">{service.bookings} this week</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="calls">
                  <div className="space-y-3">
                    {[
                      { caller: "+1 (555) 123-4567", time: "10 min ago", status: "Booked" },
                      { caller: "+1 (555) 987-6543", time: "1 hour ago", status: "Booked" },
                      { caller: "+1 (555) 456-7890", time: "2 hours ago", status: "Inquiry" },
                    ].map((call, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium">{call.caller}</p>
                            <p className="text-sm text-muted-foreground">{call.time}</p>
                          </div>
                        </div>
                        <Badge variant={call.status === "Booked" ? "success" : "secondary"}>
                          {call.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="customers">
                  <div className="space-y-3">
                    {[
                      { name: "Sarah Johnson", visits: 12, lastVisit: "Last week" },
                      { name: "Mike Chen", visits: 8, lastVisit: "2 weeks ago" },
                      { name: "Emily Davis", visits: 5, lastVisit: "1 month ago" },
                    ].map((customer, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-muted-foreground">{customer.lastVisit}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{customer.visits} visits</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Coming Soon Features
function ComingSoonSection() {
  const features = [
    {
      icon: Brain,
      title: "Memory & Customer Profiles",
      description: "AI remembers customer preferences and history. 'Same as last time' becomes reality.",
      status: "In Development",
    },
    {
      icon: Bell,
      title: "SMS Notifications",
      description: "Automated SMS reminders and confirmations to reduce no-shows even further.",
      status: "Coming Q2 2026",
    },
    {
      icon: Globe,
      title: "Google Maps Integration",
      description: "'Book via Chat' link directly from your Google Business listing.",
      status: "Coming Q3 2026",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Roadmap</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            What&apos;s coming next
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We&apos;re constantly building. Here&apos;s a peek at what&apos;s on the horizon.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card className="h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="soon">{feature.status}</Badge>
                    </div>
                    <CardTitle className="font-display text-xl font-semibold">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </HoverLift>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// Architecture Diagram
function ArchitectureSection() {
  return (
    <section className="py-24" id="integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Architecture</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Built on enterprise-grade infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Reliable, scalable, and secure. Here&apos;s how the pieces fit together.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="p-8 md:p-12">
            {/* Architecture Diagram */}
            <div className="relative">
              {/* Customer Layer */}
              <div className="flex justify-center gap-4 md:gap-8 mb-8">
                <div className="text-center">
                  <div className="flex h-16 w-16 mx-auto mb-2 items-center justify-center rounded-xl bg-secondary">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Chat Widget</p>
                  <p className="text-xs text-muted-foreground">Web Embed</p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 mx-auto mb-2 items-center justify-center rounded-xl bg-secondary">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Voice Agent</p>
                  <p className="text-xs text-muted-foreground">Twilio</p>
                </div>
              </div>

              {/* Divider down */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-border" />
              </div>

              {/* AI Layer */}
              <div className="flex justify-center mb-8">
                <div className="rounded-xl border border-border bg-card p-6 text-center max-w-md">
                  <div className="flex h-16 w-16 mx-auto mb-3 items-center justify-center rounded-xl bg-primary/10">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-display font-semibold mb-1">Convo AI Engine</p>
                  <p className="text-sm text-muted-foreground">Natural language understanding, booking logic, slot management</p>
                </div>
              </div>

              {/* Divider down */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-border" />
              </div>

              {/* Data Layer */}
              <div className="flex justify-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="flex h-16 w-16 mx-auto mb-2 items-center justify-center rounded-xl bg-secondary">
                    <Database className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium">Neon DB</p>
                  <p className="text-xs text-muted-foreground">PostgreSQL</p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 mx-auto mb-2 items-center justify-center rounded-xl bg-secondary">
                    <LayoutDashboard className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Dashboard</p>
                  <p className="text-xs text-muted-foreground">Owner GPT</p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 mx-auto mb-2 items-center justify-center rounded-xl bg-secondary">
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium">Calendar</p>
                  <p className="text-xs text-muted-foreground">.ics Export</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card className="p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Check out our interactive demo or get in touch to discuss how
              Convo can transform your salon&apos;s booking experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" asChild>
                <Link href="/demo">
                  View Interactive Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ChatBookingSection />
      <VoiceAgentSection />
      <OwnerDashboardSection />
      <ComingSoonSection />
      <ArchitectureSection />
      <CTASection />
    </>
  )
}
