"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  Sparkles,
  Clock,
  Shield,
  Play,
  LayoutDashboard,
  Zap,
  Settings,
  HelpCircle,
  ChevronRight,
  Lock,
  Eye,
  FileText,
  Building,
  MapPin,
  Globe,
  DollarSign,
  Briefcase,
  UserCheck,
  Bell,
  CreditCard,
  Layers,
  BarChart3,
  TrendingUp,
  Activity,
  Radio,
  Workflow,
  ToggleLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animations"

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
              className="flex flex-wrap gap-2 mb-6"
            >
              <Badge variant="neon">
                <Sparkles className="w-3 h-3 mr-1" />
                Private beta
              </Badge>
              <Badge variant="secondary">
                Guided setup
              </Badge>
              <Badge variant="secondary">
                Start alongside your current tools
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              Getting started with Convo is{" "}
              <span className="gradient-text neon-glow">simple.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              We'll help you get Convo running alongside your current system — no rip-and-replace required.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="neon" size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Right: Abstract Onboarding Flow Visual */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-mint/20 blur-3xl opacity-50" />
              
              <div className="relative glass rounded-2xl p-8">
                {/* Flow visualization */}
                <div className="flex flex-col gap-4">
                  {[
                    { icon: MessageSquare, label: "Chat", color: "neon-mint", desc: "Customer reaches out" },
                    { icon: Calendar, label: "Calendar", color: "neon-blue", desc: "Booking confirmed" },
                    { icon: Users, label: "Team", color: "neon-purple", desc: "Staff notified" },
                    { icon: BarChart3, label: "Insights", color: "neon-pink", desc: "Actions surfaced" },
                  ].map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-${step.color}/10 flex items-center justify-center shrink-0`}>
                        <step.icon className={`w-6 h-6 text-${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <p className="font-medium">{step.label}</p>
                          {index < 3 && (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Connection line */}
                <div className="absolute left-14 top-[4.5rem] bottom-[4.5rem] w-0.5 bg-gradient-to-b from-neon-mint via-neon-blue via-neon-purple to-neon-pink opacity-30" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// How Onboarding Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Request access",
      description: "Tell us a bit about your business. We'll confirm fit and schedule a short kickoff.",
      icon: MessageSquare,
      bullets: [
        "Quick form, no commitment",
        "We'll reach out within 48 hours",
      ],
    },
    {
      number: 2,
      title: "Add your basics",
      description: "Services, prices, staff, and hours. If you already have this elsewhere, it's quick.",
      icon: Settings,
      bullets: [
        "Import from existing system if available",
        "We help with setup if needed",
      ],
    },
    {
      number: 3,
      title: "Turn on channels",
      description: "Start with chat only, or add calls and SMS when ready.",
      icon: Radio,
      bullets: [
        "Enable features at your pace",
        "No pressure to use everything",
      ],
    },
    {
      number: 4,
      title: "Go live gradually",
      description: "Run Convo internally first, then make it public when you're comfortable.",
      icon: Zap,
      bullets: [
        "Test with your team first",
        "Full control over visibility",
      ],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="neon" className="mb-4">
            <Workflow className="w-3 h-3 mr-1" />
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How onboarding works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four straightforward steps. You're in control the whole way.
          </p>
        </AnimatedSection>

        {/* Desktop: Horizontal Stepper */}
        <div className="hidden md:block">
          <StaggeredContainer className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StaggeredItem key={step.number}>
                <div className="relative h-full">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent hidden lg:block" />
                  )}
                  
                  <Card glass className="p-6 h-full group hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>

        {/* Mobile: Vertical Stepper */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.1}>
              <div className="relative flex gap-4">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
                
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 z-10">
                  {step.number}
                </div>
                
                {/* Content */}
                <Card glass className="flex-1 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <ul className="space-y-1.5">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// What We Need From You Section
function ChecklistSection() {
  const categories = [
    {
      title: "Business basics",
      icon: Building,
      items: ["Name", "Location", "Time zone", "Phone number"],
      required: true,
    },
    {
      title: "Services",
      icon: Briefcase,
      items: ["Service name", "Duration", "Price"],
      required: true,
    },
    {
      title: "Team",
      icon: Users,
      items: ["Staff names", "Working hours", "Optional specialties"],
      required: true,
    },
    {
      title: "Policies",
      icon: FileText,
      items: ["Cancellation window", "Deposits (if any)", "Reminder preferences"],
      required: false,
    },
    {
      title: "Existing system",
      icon: Layers,
      items: ["If you use Fresha, MangoMint, or something else — Convo can layer on top."],
      required: false,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Quick Setup
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What we need from you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A short checklist to get you started. Nothing complicated.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {categories.map((category, index) => (
            <StaggeredItem key={index}>
              <Card glass className="p-5 h-full group hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    {!category.required && (
                      <span className="text-xs text-muted-foreground">Optional</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection delay={0.3} className="text-center">
          <p className="text-muted-foreground">
            Most owners already have this info. No migration required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

// What You Get On Day One Section
function DayOneSection() {
  const features = [
    {
      title: "Owner Console",
      icon: LayoutDashboard,
      description: "Your command center",
      bullets: [
        "Manage services and pricing",
        "View team schedules",
        "Access insights and trends",
      ],
      color: "neon-purple",
    },
    {
      title: "Employee Portal",
      icon: UserCheck,
      description: "Keep your team in sync",
      bullets: [
        "View upcoming appointments",
        "Acknowledge bookings",
        "Update status in real-time",
      ],
      color: "neon-blue",
    },
    {
      title: "Customer Booking",
      icon: MessageSquare,
      description: "Natural, conversational",
      bullets: [
        "Chat widget for your website",
        "Voice when you're ready",
        "24/7 availability",
      ],
      color: "neon-mint",
    },
    {
      title: "Insights & Actions",
      icon: TrendingUp,
      description: "Guidance, not just data",
      bullets: [
        "No-show trends",
        "Booking patterns",
        "Recommended next steps",
      ],
      color: "neon-pink",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Day One
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What you get on day one
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start running your front desk with Convo.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <StaggeredItem key={index}>
              <Card glass className="p-6 h-full group hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// Go-Live Without Risk Section
function GoLiveSection() {
  const phases = [
    {
      stage: "Internal",
      description: "Test with your team. See how Convo handles requests before going public.",
      icon: Lock,
      active: true,
    },
    {
      stage: "Partial",
      description: "Enable for select customers or channels. Build confidence gradually.",
      icon: ToggleLeft,
      active: false,
    },
    {
      stage: "Full",
      description: "All channels live. Convo handles your front desk completely.",
      icon: Zap,
      active: false,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <AnimatedSection>
            <Badge variant="neon" className="mb-6">
              <Shield className="w-3 h-3 mr-1" />
              Low Risk
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Go live without risk
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              You don't have to flip a switch and hope for the best. Roll out Convo at your own pace.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Start internal only</p>
                  <p className="text-sm text-muted-foreground">Your team tests before customers see it.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Keep your current booking tool</p>
                  <p className="text-sm text-muted-foreground">Convo layers on top — no replacement needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Enable features gradually</p>
                  <p className="text-sm text-muted-foreground">Chat first, then voice, then SMS. Your choice.</p>
                </div>
              </div>
            </div>

            <Card glass className="p-4 border-neon-mint/20 inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neon-mint/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-neon-mint" />
              </div>
              <p className="text-sm font-medium">You're always in control.</p>
            </Card>
          </AnimatedSection>

          {/* Right: Timeline */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-neon-mint via-neon-blue to-neon-purple opacity-50" />
              
              <div className="space-y-6">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.stage}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative flex gap-5"
                  >
                    <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 z-10 ${index === 0 ? 'shadow-neon' : ''}`}>
                      <phase.icon className={`w-6 h-6 ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    
                    <Card glass className={`flex-1 p-5 ${index === 0 ? 'border-primary/30' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{phase.stage}</h3>
                        {index === 0 && (
                          <Badge variant="success" className="text-xs">Start here</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </Card>
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

// Security & Control Section
function SecuritySection() {
  const points = [
    {
      icon: Users,
      title: "Owner vs employee permissions",
      description: "Control what each team member can see and do.",
    },
    {
      icon: Phone,
      title: "Human escalation when AI is unsure",
      description: "Convo hands off gracefully, never guesses.",
    },
    {
      icon: Eye,
      title: "Audit trail for changes",
      description: "See who made changes and when.",
    },
    {
      icon: Shield,
      title: "Minimal data required",
      description: "We only collect what's needed to operate.",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Security & control
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built with trust in mind.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point, index) => (
            <StaggeredItem key={index}>
              <div className="flex items-start gap-3 p-4 glass rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <point.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">{point.title}</p>
                  <p className="text-xs text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Do I need to replace Fresha/MangoMint?",
      answer: "No. Convo works as a front desk layer that syncs with your existing calendar and POS. Most owners start by adding Convo alongside what they already use.",
    },
    {
      question: "Can I start with chat only?",
      answer: "Yes. Many owners start with just the chat widget on their website. You can enable voice and SMS whenever you're ready — no pressure.",
    },
    {
      question: "What if Convo makes a mistake?",
      answer: "Your team has full control via the employee portal. Any booking can be reviewed, adjusted, or cancelled. Convo also escalates to humans when it's unsure.",
    },
    {
      question: "Can my staff override bookings?",
      answer: "Absolutely. Staff can acknowledge, reschedule, or modify any appointment through the employee portal. Convo keeps everyone in sync.",
    },
    {
      question: "How long does onboarding usually take?",
      answer: "Most teams are live within a week. The time depends on your setup complexity, but we guide you through every step.",
    },
    {
      question: "Is there a contract?",
      answer: "During private beta, we're flexible. No long-term commitments required to get started.",
    },
    {
      question: "What happens after I request access?",
      answer: "We'll review your submission and reach out within 48 hours to schedule a short kickoff call. From there, we handle the technical setup together.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neon-blue/5 to-transparent" />
      
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="neon" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onboarding FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about getting started.
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
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-mint/10" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 shadow-neon"
          >
            <Badge variant="neon" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Private beta
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We onboard a limited number of businesses at a time to ensure everyone gets the attention they deserve.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="neon" size="lg" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function OnboardingPage() {
  return (
    <main className="relative">
      <HeroSection />
      <HowItWorksSection />
      <ChecklistSection />
      <DayOneSection />
      <GoLiveSection />
      <SecuritySection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}
