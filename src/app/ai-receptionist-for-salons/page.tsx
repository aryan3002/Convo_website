"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  Zap,
  Users,
  Bot,
  Sparkles,
  PhoneOff,
  CalendarCheck,
  Building2,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animations"

export default function AIReceptionistForSalonsPage() {
  const painPoints = [
    {
      icon: PhoneOff,
      title: "Missed Calls = Missed Revenue",
      problem: "Every unanswered call is a potential customer going to a competitor.",
      solution: "Convo answers every call, 24/7—even at 2 AM, during rushes, or on holidays.",
    },
    {
      icon: DollarSign,
      title: "Receptionists Are Expensive",
      problem: "A full-time receptionist costs $30,000-$45,000/year plus benefits.",
      solution: "Convo costs a fraction of that, never calls in sick, and scales instantly.",
    },
    {
      icon: Clock,
      title: "Limited Hours",
      problem: "Human receptionists work 8 hours. Customers want to book at 11 PM.",
      solution: "AI receptionist works 24/7/365, handling bookings whenever customers reach out.",
    },
  ]

  const comparisonRows = [
    { feature: "Available 24/7", ai: true, human: false },
    { feature: "Never calls in sick", ai: true, human: false },
    { feature: "Handles multiple calls at once", ai: true, human: false },
    { feature: "Consistent quality every time", ai: true, human: false },
    { feature: "Costs under $500/month", ai: true, human: false },
    { feature: "Speaks multiple languages", ai: true, human: false },
    { feature: "Scales instantly during busy periods", ai: true, human: false },
    { feature: "Remembers every customer preference", ai: true, human: false },
  ]

  const capabilities = [
    {
      icon: Phone,
      title: "Answer Phone Calls",
      description: "AI understands natural speech, handles booking requests, answers FAQs, and transfers to staff when needed.",
    },
    {
      icon: MessageSquare,
      title: "Manage Chat & WhatsApp",
      description: "Respond to messages instantly across website chat, WhatsApp, and SMS. Same AI, all channels.",
    },
    {
      icon: CalendarCheck,
      title: "Book Appointments",
      description: "Check real-time availability, suggest slots, confirm bookings, and add calendar invites—all automatically.",
    },
    {
      icon: Users,
      title: "Handle Customer Inquiries",
      description: "Answer questions about services, pricing, location, and policies. Trained on your salon's information.",
    },
  ]

  const faqs = [
    {
      question: "What is an AI receptionist for salons?",
      answer: "An AI receptionist for salons is a virtual assistant powered by artificial intelligence that handles front desk duties. It answers phone calls, responds to chat messages, books appointments, and answers customer questions—just like a human receptionist, but available 24 hours a day, 7 days a week. The AI uses natural language processing to understand customer requests and voice synthesis to speak naturally during phone calls.",
    },
    {
      question: "How is an AI receptionist different from a human receptionist?",
      answer: "An AI receptionist differs from a human in several key ways: (1) Availability—AI works 24/7 without breaks or sick days. (2) Scalability—AI can handle multiple simultaneous calls/chats. (3) Consistency—Every customer interaction follows the same high standard. (4) Cost—AI typically costs 80-90% less than a full-time employee. (5) Memory—AI remembers every customer preference and never forgets details. Human receptionists excel at complex emotional situations and building personal rapport, which is why many salons use AI to handle routine tasks while staff focus on in-person service.",
    },
    {
      question: "Can customers tell they're talking to an AI?",
      answer: "Modern AI voice technology is highly realistic. Many customers complete booking calls without realizing they spoke to an AI. Convo uses advanced voice synthesis and natural language understanding to create conversations that feel human. That said, we believe in transparency—if a customer asks, the AI will identify itself. Most customers care more about getting their appointment booked quickly than whether the receptionist is human or AI.",
    },
    {
      question: "Does the AI receptionist replace my staff?",
      answer: "No—it augments your staff. The AI handles routine tasks like answering calls, booking appointments, and answering FAQs. This frees your team to focus on delivering great in-person service, building client relationships, and handling complex situations that need a human touch. Many salons find their staff are happier and more productive when not interrupted by constant phone calls.",
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
                <Phone className="w-3 h-3 mr-1" />
                AI Receptionist
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                AI Receptionist for Salons:{" "}
                <span className="gradient-text neon-glow">Never Miss Another Call</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                <strong>Convo is an AI-powered virtual receptionist for salons</strong> that answers 
                phone calls, books appointments, and handles customer inquiries 24/7. Costs less than 
                a part-time employee. Works while you sleep.
              </p>

              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every missed call is a missed booking. Let AI answer every call so your team can 
                focus on making customers look amazing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="neon" size="xl" asChild>
                  <Link href="/contact">
                    Get AI Receptionist for Your Salon
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    Hear the AI in Action
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
                What is an AI Receptionist for Salons?
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  An <strong>AI receptionist for salons</strong> is a virtual assistant that performs front 
                  desk duties using artificial intelligence. It answers phone calls with natural-sounding 
                  speech, responds to chat messages, books appointments by checking real-time availability, 
                  and handles common customer questions—all without human intervention.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Unlike basic answering services or voicemail, an AI receptionist <em>understands</em> what 
                  customers are asking. A customer can say "I need a cut and color with Sarah next Friday 
                  afternoon" and the AI will find matching availability, confirm the booking, and send 
                  calendar invites—all in one conversation.
                </p>
                <p className="text-lg text-muted-foreground">
                  The biggest advantage is availability: the AI receptionist works 24 hours a day, 7 days 
                  a week, including holidays and weekends. This means customers can book at 11 PM after 
                  seeing an Instagram post, or first thing in the morning when your salon isn't open yet.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Salon Reception Challenges—Solved
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common problems that cost salons money, and how AI solves them.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="space-y-8">
            {painPoints.map((point, index) => (
              <StaggeredItem key={index}>
                <Card glass className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                        <point.icon className="w-7 h-7 text-red-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                          <p className="text-sm font-medium text-red-400 mb-1">The Problem</p>
                          <p className="text-muted-foreground">{point.problem}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                          <p className="text-sm font-medium text-green-400 mb-1">The Solution</p>
                          <p className="text-muted-foreground">{point.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Receptionist vs Human Receptionist
            </h2>
            <p className="text-lg text-muted-foreground">
              Side-by-side comparison.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Card glass className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4">Feature</th>
                      <th className="text-center p-4">AI Receptionist</th>
                      <th className="text-center p-4">Human Receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={index} className="border-b border-border/30">
                        <td className="p-4 text-muted-foreground">{row.feature}</td>
                        <td className="p-4 text-center">
                          {row.ai ? (
                            <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-red-400">✗</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.human ? (
                            <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-red-400">✗</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Convo AI Receptionist Can Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full front desk capabilities, automated.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <StaggeredItem key={index}>
                <Card glass className="h-full p-6 group hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
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
              Common questions about AI receptionists for salons.
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
                  Ready for Your AI Receptionist?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  Stop losing bookings. Get an AI receptionist that works 24/7.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="neon" size="xl" asChild>
                    <Link href="/contact">
                      Get Started Free
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
