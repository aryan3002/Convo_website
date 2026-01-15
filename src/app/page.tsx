"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  MessageSquare, 
  Phone, 
  LayoutDashboard, 
  Play,
  ArrowRight,
  Clock,
  CalendarCheck,
  TrendingDown,
  Zap,
  Shield,
  Bell,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Sparkles,
  CheckCircle2,
  Star,
  ChevronRight,
  Bot
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift } from "@/components/animations"

// Hero Section
function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="neon" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Coming Soon
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Bookings that feel like{" "}
            <span className="gradient-text neon-glow">texting</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            The AI-powered booking front desk for modern salons. Let your customers book through 
            chat or voice—anytime, anywhere. No more phone tag.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="neon" size="xl" asChild>
              <Link href="/demo">
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link href="/demo">
                <Play className="w-5 h-5 mr-2" />
                Watch Flow
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="glass rounded-2xl p-6 md:p-8 shadow-neon">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Chat preview */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-neon-mint" />
                    <span className="text-sm font-medium">Chat Booking</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 text-sm">
                      Hi! I&apos;d like to book a haircut
                    </div>
                    <div className="bg-primary/20 rounded-lg p-3 text-sm ml-8 border border-primary/30">
                      Sure! I can help with that. Which stylist would you prefer?
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-sm">
                      Alex, if available
                    </div>
                  </div>
                </div>

                {/* Voice preview */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse" />
                    <span className="text-sm font-medium">Voice Agent</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Phone className="w-4 h-4 text-neon-blue" />
                      <div className="flex-1">
                        <div className="h-1 bg-neon-blue/30 rounded-full">
                          <motion.div 
                            className="h-full bg-neon-blue rounded-full"
                            animate={{ width: ["0%", "100%", "60%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      &quot;I&apos;d like to book a men&apos;s haircut for tomorrow at 10am...&quot;
                    </p>
                    <Badge variant="success" className="text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Booking Confirmed
                    </Badge>
                  </div>
                </div>

                {/* Dashboard preview */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-neon-purple" />
                    <span className="text-sm font-medium">Owner Dashboard</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <span className="text-sm">Today&apos;s Bookings</span>
                      <span className="text-lg font-bold text-neon-mint">12</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <span className="text-sm">Voice Calls</span>
                      <span className="text-lg font-bold text-neon-blue">5</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <span className="text-sm">Chat Sessions</span>
                      <span className="text-lg font-bold text-neon-purple">7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-blue/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Social Proof Strip
function SocialProofStrip() {
  const proofs = [
    { icon: Users, text: "Built for Salons", highlight: true },
    { icon: TrendingDown, text: "Reduce No-Shows by 40%" },
    { icon: Clock, text: "24/7 Booking" },
    { icon: MessageSquare, text: "Voice + Chat" },
  ]

  return (
    <AnimatedSection>
      <section className="py-12 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {proofs.map((proof, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 py-4"
              >
                <proof.icon className={`w-5 h-5 ${proof.highlight ? 'text-neon-blue' : 'text-muted-foreground'}`} />
                <span className={`text-sm font-medium ${proof.highlight ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {proof.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

// Product Mode Cards
function ProductModeCards() {
  const modes = [
    {
      icon: MessageSquare,
      title: "Chat Booking",
      description: "Conversational booking through your website. No forms, just natural chat.",
      color: "neon-mint",
      features: ["Natural language", "Smart suggestions", "Instant confirmations"],
    },
    {
      icon: Phone,
      title: "Voice Agent",
      description: "AI phone receptionist that handles calls 24/7 with human-like conversation.",
      color: "neon-blue",
      features: ["Twilio integration", "Call transcripts", "Low latency"],
    },
    {
      icon: LayoutDashboard,
      title: "Owner GPT Dashboard",
      description: "Manage everything with AI-powered insights and natural language commands.",
      color: "neon-purple",
      features: ["Booking analytics", "Customer insights", "AI management"],
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Three Powerful Modes</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One platform, every booking channel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet your customers where they are—chat, voice, or both.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {modes.map((mode, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card glass className="h-full group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl bg-${mode.color}/10 flex items-center justify-center mb-4 group-hover:shadow-neon transition-shadow duration-300`}>
                      <mode.icon className={`w-7 h-7 text-${mode.color}`} />
                    </div>
                    <CardTitle className="text-xl">{mode.title}</CardTitle>
                    <CardDescription className="text-base">{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mode.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-neon-mint" />
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

// How It Works Timeline
function HowItWorksTimeline() {
  const steps = [
    {
      step: 1,
      title: "Customer Initiates",
      description: "Customer sends a message via chat or calls your AI phone number.",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "AI Booking Engine",
      description: "Our AI understands intent, checks availability, and suggests optimal slots.",
      icon: Bot,
    },
    {
      step: 3,
      title: "Instant Confirmation",
      description: "Customer receives confirmation with calendar invite (.ics) download.",
      icon: CalendarCheck,
    },
    {
      step: 4,
      title: "Owner Dashboard",
      description: "You see the booking instantly, with call/chat summary and customer details.",
      icon: LayoutDashboard,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Simple Flow</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first contact to confirmed booking in seconds.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink hidden lg:block" />
          
          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {steps.map((step, index) => (
              <StaggeredItem key={index}>
                <div className="relative text-center">
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl glass flex items-center justify-center shadow-neon"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}

// Feature Grid
function FeatureGrid() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Booking",
      description: "Customers type like they text—our AI understands and responds naturally.",
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
      description: "Build customer memory—preferences, history, and notes all in one place.",
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
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Feature-Rich</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to modernize bookings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built specifically for salons, with features that actually matter.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {features.map((feature, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card glass className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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

// Call Summaries Section
function CallSummariesSection() {
  const summaries = [
    {
      caller: "+1 (555) 123-4567",
      time: "2 min ago",
      duration: "1:42",
      summary: "Customer requested a women's haircut with Maria for Saturday 2pm. Confirmed and sent calendar invite.",
      status: "completed",
    },
    {
      caller: "+1 (555) 987-6543",
      time: "15 min ago",
      duration: "2:15",
      summary: "New customer inquired about balayage pricing. Booked consultation with Alex for Monday 10am.",
      status: "completed",
    },
    {
      caller: "+1 (555) 456-7890",
      time: "1 hour ago",
      duration: "0:58",
      summary: "Existing customer rescheduled from Friday to Thursday. Updated appointment confirmed.",
      status: "completed",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <Badge variant="secondary" className="mb-4">Voice Intelligence</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never miss a detail from calls
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every voice call is automatically transcribed and summarized. 
              See caller intent, booking details, and follow-up actions at a glance.
            </p>
            <ul className="space-y-3">
              {["AI-generated call summaries", "Full transcription available", "Action items extracted", "Caller sentiment analysis"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card glass className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Recent Call Summaries</h3>
                <Badge variant="neon">Live</Badge>
              </div>
              <div className="space-y-4">
                {summaries.map((summary, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-neon-blue" />
                        <span className="text-sm font-medium">{summary.caller}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{summary.duration}</span>
                        <span>•</span>
                        <span>{summary.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{summary.summary}</p>
                    <div className="mt-2">
                      <Badge variant="success" className="text-xs">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
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

// Calendar Invite Section
function CalendarInviteSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <Card glass className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-mint/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-neon-mint" />
                </div>
                <div>
                  <h4 className="font-semibold">Booking Confirmed!</h4>
                  <p className="text-sm text-muted-foreground">Men&apos;s Haircut with Alex</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="font-medium">January 12, 2026</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-sm text-muted-foreground">Time</span>
                  <span className="font-medium">10:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="font-medium">30 minutes</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-sm text-muted-foreground">Stylist</span>
                  <span className="font-medium">Alex Martinez</span>
                </div>
              </div>

              <Button variant="neon" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Add to Calendar (.ics)
              </Button>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4">Seamless Confirmations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calendar invites that just work
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every booking confirmation includes a downloadable .ics calendar invite. 
              Works with Google Calendar, Apple Calendar, Outlook, and more.
            </p>
            <ul className="space-y-3">
              {[
                "One-click calendar add",
                "Automatic reminders",
                "Works on all devices",
                "Includes salon address & details",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-mint" />
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

// Integrations Strip
function IntegrationsStrip() {
  const integrations = [
    { name: "Twilio", logo: "T", description: "Voice & SMS" },
    { name: "Vercel", logo: "▲", description: "Hosting" },
    { name: "Neon", logo: "N", description: "Database" },
    { name: "OpenAI", logo: "◉", description: "AI/LLM" },
  ]

  return (
    <section className="py-16 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Powered by
          </p>
          <h3 className="text-xl font-semibold">Enterprise-Grade Infrastructure</h3>
        </AnimatedSection>

        <StaggeredContainer className="flex flex-wrap justify-center gap-6 md:gap-12">
          {integrations.map((integration, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <div className="flex items-center gap-3 px-6 py-4 glass rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl font-bold">
                    {integration.logo}
                  </div>
                  <div>
                    <p className="font-medium">{integration.name}</p>
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

// Testimonials
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Convo has completely transformed how we handle appointments. Our no-show rate dropped by 35% in the first month.",
      author: "Sarah Mitchell",
      role: "Owner, Luxe Hair Studio",
      rating: 5,
    },
    {
      quote: "The voice agent is incredible. It sounds so natural that customers don't even realize they're talking to AI.",
      author: "Marcus Chen",
      role: "Manager, The Grooming Lounge",
      rating: 5,
    },
    {
      quote: "Finally, a booking system that understands how salons actually work. The call summaries alone save me hours each week.",
      author: "Jessica Rodriguez",
      role: "Owner, Bella Vita Salon & Spa",
      rating: 5,
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by salon owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what early adopters are saying about Convo.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card glass className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-neon-blue text-neon-blue" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-sm font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
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

// Pricing Teaser
function PricingTeaser() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Plans that scale with your salon. Start free, upgrade when you&apos;re ready.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="neon" size="lg" asChild>
              <Link href="/pricing">
                View Pricing
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card glass className="p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to modernize your salon?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Join the future of salon booking. Request early access and be among 
                the first to experience AI-powered appointments.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="neon" size="xl" asChild>
                  <Link href="/contact">
                    Request Early Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link href="/demo">See It In Action</Link>
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <ProductModeCards />
      <HowItWorksTimeline />
      <FeatureGrid />
      <CallSummariesSection />
      <CalendarInviteSection />
      <IntegrationsStrip />
      <TestimonialsSection />
      <PricingTeaser />
      <FinalCTA />
    </>
  )
}
