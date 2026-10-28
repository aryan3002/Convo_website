"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  ArrowRight,
  Clock,
  TrendingDown,
  Zap,
  Users,
  Bot,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift } from "@/components/animations"

export default function AISalonAppointmentBookingPage() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Accept bookings at any hour. Customers book when it's convenient for them, not just during business hours.",
    },
    {
      icon: TrendingDown,
      title: "Fewer No-Shows",
      description: "Automated confirmations and reminders help reduce missed appointments.",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "No waiting on hold. Customers get confirmed appointments in under 60 seconds.",
    },
    {
      icon: Users,
      title: "Works With Your Staff",
      description: "AI handles bookings while your team focuses on delivering great service.",
    },
  ]

  const channels = [
    {
      icon: MessageSquare,
      title: "Website Chat",
      description: "Embed a booking chatbot on your website. Customers type naturally and get instant confirmations.",
    },
    {
      icon: Phone,
      title: "Voice Calls",
      description: "AI phone receptionist answers calls, understands requests, and books appointments automatically.",
    },
    {
      icon: Bot,
      title: "WhatsApp & SMS",
      description: "Customers can book via WhatsApp or text message. Same AI, familiar channels.",
    },
  ]

  const faqs = [
    {
      question: "What is AI salon appointment booking?",
      answer: "AI salon appointment booking is an automated system that uses artificial intelligence to schedule appointments for hair salons, beauty salons, and spas. Instead of a human receptionist, an AI assistant handles customer requests via chat, phone, or messaging apps like WhatsApp. The AI understands natural language, checks stylist availability, and confirms bookings instantly—available 24 hours a day, 7 days a week.",
    },
    {
      question: "How does Convo's AI booking work?",
      answer: "Convo works in three simple steps: (1) A customer reaches out via chat, phone call, or WhatsApp. (2) The AI understands their request, checks real-time availability, and suggests appointment slots. (3) Once the customer confirms, Convo creates the booking, sends confirmation emails/SMS, and adds calendar invites. The entire process takes under 60 seconds.",
    },
    {
      question: "Does AI booking work with existing salon software?",
      answer: "Yes. Convo is designed to work alongside your existing salon management software like Fresha, MangoMint, Square Appointments, or Vagaro. It acts as an AI front desk layer—handling customer conversations and feeding bookings into your current calendar system.",
    },
    {
      question: "How much does AI appointment booking cost?",
      answer: "Convo offers flexible pricing based on salon size and booking volume. Pricing isn't final during early access. Contact us for a custom quote based on your specific needs.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 text-sm font-medium text-muted-foreground"
            >
              AI Appointment Booking
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
            >
              AI Salon Appointment Booking{" "}
              <span className="text-primary">That Never Sleeps</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              <strong className="text-foreground">Convo is an AI-powered booking system for salons</strong> that automatically
              schedules appointments through chat, phone calls, and WhatsApp. Available 24/7.
              Works with your existing salon software.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-3 max-w-2xl text-base text-muted-foreground"
            >
              Stop losing bookings to voicemail. Stop playing phone tag. Let AI handle your
              front desk while you focus on making customers look amazing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get AI Booking for Your Salon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">See How It Works</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Section - LLM Friendly Definition */}
      <section className="py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-medium text-muted-foreground">Definition</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl mb-6">
                What is AI Salon Appointment Booking?
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">AI salon appointment booking</strong> is a technology that uses artificial intelligence
                  to automatically schedule appointments for hair salons, beauty salons, barbershops, and spas.
                  Instead of requiring a human receptionist to answer calls and manage the calendar, an AI
                  assistant handles the entire booking process.
                </p>
                <p className="text-lg text-muted-foreground">
                  The AI understands natural language—customers can say "I'd like a haircut tomorrow afternoon"
                  and the system interprets this, checks availability, suggests specific times, and confirms
                  the appointment. This works across multiple channels: website chat, phone calls, WhatsApp,
                  and SMS.
                </p>
                <p className="text-lg text-muted-foreground">
                  Key benefits include{" "}
                  <strong className="text-foreground">24/7 availability</strong>{" "}
                  (bookings happen even at 2 AM),{" "}
                  <strong className="text-foreground">reduced no-shows</strong>{" "}
                  through automated reminders, and{" "}
                  <strong className="text-foreground">lower operational costs</strong>{" "}
                  since the AI handles routine booking tasks that would otherwise require staff time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-muted-foreground">Why switch</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Why Salons Switch to AI Booking
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Measurable benefits that impact your bottom line.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <HoverLift>
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-muted-foreground">Channels</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Book Through Any Channel
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet customers where they already are.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {channels.map((channel, index) => (
              <StaggeredItem key={index}>
                <HoverLift>
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <channel.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{channel.title}</h3>
                      <p className="text-muted-foreground">{channel.description}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* FAQ Section - LLM Friendly */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <p className="mb-3 text-sm font-medium text-muted-foreground">FAQ</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Common questions about AI appointment booking for salons.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <motion.div
                  className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors duration-200"
                >
                  <h3 className="font-display text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="p-8 md:p-14 text-center">
              <p className="mb-3 text-sm font-medium text-muted-foreground">Get started</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl mb-4">
                Ready to Automate Your Salon Bookings?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Book appointments 24/7 without hiring extra staff.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" asChild>
                  <Link href="/contact">
                    Request Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/demo">Watch Demo</Link>
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
