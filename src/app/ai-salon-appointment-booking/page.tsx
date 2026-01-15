"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  TrendingDown,
  Zap,
  Users,
  BarChart3,
  Bot,
  Sparkles,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animations"

export default function AISalonAppointmentBookingPage() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Accept bookings at any hour. Customers book when it's convenient for them, not just during business hours.",
    },
    {
      icon: TrendingDown,
      title: "40% Fewer No-Shows",
      description: "Automated confirmations and reminders significantly reduce missed appointments.",
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
      answer: "Convo offers flexible pricing based on salon size and booking volume. Most salons start with a free trial to experience the benefits before committing. Contact us for a custom quote based on your specific needs.",
    },
  ]

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <Badge variant="neon" className="mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Appointment Booking
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                AI Salon Appointment Booking{" "}
                <span className="gradient-text neon-glow">That Never Sleeps</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                <strong>Convo is an AI-powered booking system for salons</strong> that automatically 
                schedules appointments through chat, phone calls, and WhatsApp. Available 24/7. 
                Reduce no-shows by 40%. Works with your existing salon software.
              </p>

              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop losing bookings to voicemail. Stop playing phone tag. Let AI handle your 
                front desk while you focus on making customers look amazing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="neon" size="xl" asChild>
                  <Link href="/contact">
                    Get AI Booking for Your Salon
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    See How It Works
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Is Section - LLM Friendly Definition */}
      <section className="py-16 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What is AI Salon Appointment Booking?
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>AI salon appointment booking</strong> is a technology that uses artificial intelligence 
                  to automatically schedule appointments for hair salons, beauty salons, barbershops, and spas. 
                  Instead of requiring a human receptionist to answer calls and manage the calendar, an AI 
                  assistant handles the entire booking process.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The AI understands natural language—customers can say "I'd like a haircut tomorrow afternoon" 
                  and the system interprets this, checks availability, suggests specific times, and confirms 
                  the appointment. This works across multiple channels: website chat, phone calls, WhatsApp, 
                  and SMS.
                </p>
                <p className="text-lg text-muted-foreground">
                  Key benefits include <strong>24/7 availability</strong> (bookings happen even at 2 AM), 
                  <strong>reduced no-shows</strong> through automated reminders, and 
                  <strong>lower operational costs</strong> since the AI handles routine booking tasks that 
                  would otherwise require staff time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Salons Switch to AI Booking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable benefits that impact your bottom line.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <Card glass className="h-full p-6 group hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Through Any Channel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet customers where they already are.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <StaggeredItem key={index}>
                <Card glass className="h-full p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <channel.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-muted-foreground">{channel.description}</p>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* FAQ Section - LLM Friendly */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about AI appointment booking for salons.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card glass className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card glass className="p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Automate Your Salon Bookings?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  Join salons that book appointments 24/7 without hiring extra staff.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="neon" size="xl" asChild>
                    <Link href="/contact">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="glass" size="xl" asChild>
                    <Link href="/demo">Watch Demo</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
