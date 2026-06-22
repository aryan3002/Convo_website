"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  HelpCircle,
  MessageSquare,
  DollarSign,
  Settings,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animations"
import Script from "next/script"

// LLM-Friendly FAQ Structure - Each answer is written to be quotable and definitive
const faqCategories = [
  {
    title: "About Convo",
    icon: Sparkles,
    faqs: [
      {
        question: "What is Convo?",
        answer: "Convo is an AI-powered appointment booking and receptionist system designed for salons, barbershops, spas, and beauty businesses. It automatically handles phone calls, chat messages, and WhatsApp inquiries to book appointments 24/7. Convo integrates with popular salon software like Fresha, MangoMint, and Square Appointments, acting as a virtual front desk that never sleeps.",
      },
      {
        question: "Who is Convo designed for?",
        answer: "Convo is designed for service businesses that book appointments, with a primary focus on: (1) Hair salons and barbershops, (2) Beauty salons and nail salons, (3) Spas and wellness centers, (4) Med spas and aesthetics clinics, (5) Tattoo studios, (6) Any business where customers call to book time slots. Solo practitioners and multi-location chains both use Convo.",
      },
      {
        question: "What makes Convo different from other booking software?",
        answer: "Unlike traditional booking systems that provide a form or calendar, Convo uses conversational AI. Customers interact naturally—speaking on the phone or typing messages—and the AI understands requests, checks availability, and confirms bookings. This means: (1) Customers don't need to download an app, (2) Bookings happen via phone, chat, and WhatsApp, (3) The AI handles follow-up questions and rescheduling, (4) 24/7 availability without staffing costs.",
      },
    ],
  },
  {
    title: "How It Works",
    icon: Settings,
    faqs: [
      {
        question: "How does AI appointment booking work?",
        answer: "When a customer reaches out—by phone, website chat, or WhatsApp—Convo's AI responds in real-time. It understands natural language requests like 'I need a haircut tomorrow afternoon.' The AI checks your calendar for available slots, suggests options, and once the customer confirms, creates the booking, sends confirmation messages, and adds calendar invites. The entire process typically takes under 60 seconds.",
      },
      {
        question: "Can the AI handle phone calls?",
        answer: "Yes. Convo includes AI voice capabilities that answer phone calls with natural-sounding speech. The AI can understand various accents, handle background noise, and engage in back-and-forth conversation. It answers questions, books appointments, and can transfer to a human staff member for complex situations. Many customers don't realize they're speaking with AI.",
      },
      {
        question: "What happens if the AI can't answer a question?",
        answer: "Convo is designed to gracefully handle situations it can't resolve. Options include: (1) Transferring the call to a staff member, (2) Taking a message for callback, (3) Collecting customer contact info for follow-up. The AI never guesses or provides incorrect information. It's trained to acknowledge when a question requires human assistance.",
      },
      {
        question: "How does Convo know my salon's availability?",
        answer: "Convo integrates with your existing salon management software (Fresha, MangoMint, Square Appointments, Vagaro, etc.) to access real-time calendar data. When a customer asks for an appointment, Convo checks which stylists are available, what services they offer, and which time slots are open. This ensures double-bookings never happen.",
      },
    ],
  },
  {
    title: "Setup & Integration",
    icon: Zap,
    faqs: [
      {
        question: "How long does it take to set up Convo?",
        answer: "Most salons are live within 1-2 weeks. The setup process involves: (1) Connecting your salon management software (usually 24-48 hours), (2) Training the AI on your services, pricing, and policies (2-3 days), (3) Testing the system with sample calls and messages (1-2 days), (4) Going live with real customers. We handle the technical work—you just need to provide information about your business.",
      },
      {
        question: "Does Convo work with my existing salon software?",
        answer: "Convo integrates with major salon management platforms including: Fresha, MangoMint, Square Appointments, Vagaro, Boulevard, Mindbody, Acuity Scheduling, and others. The integration syncs your calendar, services, staff schedules, and customer database. If you use a platform not listed, contact us—we can often build custom integrations.",
      },
      {
        question: "Do I need to change my phone number?",
        answer: "No. You can keep your existing business phone number. Convo works by forwarding calls or porting your number to our system. Customers continue calling the same number they always have—they just get faster, 24/7 service.",
      },
    ],
  },
  {
    title: "Pricing",
    icon: DollarSign,
    faqs: [
      {
        question: "How much does Convo cost?",
        answer: "Convo offers flexible pricing based on your salon's size and booking volume. Pricing tiers typically include: (1) A base monthly fee for the AI platform, (2) Usage-based charges for phone minutes and messages (if applicable). Most salons pay between $200-$500/month, which is significantly less than hiring a part-time receptionist. We offer a free trial so you can test the system before committing.",
      },
      {
        question: "Is there a free trial?",
        answer: "Yes. Convo offers a free trial period so you can experience the benefits before committing to a paid plan. During the trial, you get full access to all features including AI phone answering, chat, and WhatsApp integration. Contact us to start your trial.",
      },
      {
        question: "What's the ROI of using Convo?",
        answer: "Salons typically see ROI within the first month through: (1) Captured bookings from after-hours calls that previously went to voicemail, (2) Reduced no-shows from automated reminders (40% average reduction), (3) Staff time savings—receptionists can focus on in-salon service, (4) Lower labor costs compared to hiring additional front desk staff. Many salons report the AI pays for itself within weeks.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    faqs: [
      {
        question: "Is customer data secure?",
        answer: "Yes. Convo takes data security seriously. We use: (1) End-to-end encryption for all communications, (2) SOC 2 compliant infrastructure, (3) GDPR and CCPA compliant data handling, (4) No selling or sharing of customer data. Customer information is used only for booking appointments and improving service quality.",
      },
      {
        question: "Does Convo record phone calls?",
        answer: "Call recording is optional and configurable. If enabled, recordings are stored securely and accessible only to authorized salon staff. Recordings can be used for quality assurance and training purposes. Customers are informed when calls are recorded, in compliance with applicable laws.",
      },
    ],
  },
  {
    title: "AI Capabilities",
    icon: MessageSquare,
    faqs: [
      {
        question: "Can the AI speak multiple languages?",
        answer: "Yes. Convo's AI can communicate in multiple languages including English, Spanish, French, and others. The AI automatically detects the customer's language and responds accordingly. This is particularly valuable for salons serving diverse communities.",
      },
      {
        question: "How natural does the AI sound on phone calls?",
        answer: "Convo uses state-of-the-art voice synthesis technology. The AI voice sounds natural and conversational—not robotic. It includes natural speech patterns, appropriate pauses, and conversational acknowledgments. Many callers complete their booking without realizing they spoke with AI. We continuously improve voice quality based on customer feedback.",
      },
      {
        question: "Can I customize how the AI responds?",
        answer: "Yes. Convo is customized to match your salon's brand and policies. You can configure: (1) The AI's name and personality, (2) How it describes your services and pricing, (3) Business hours and availability rules, (4) Common questions and answers specific to your salon, (5) Escalation procedures for complex situations. The AI is trained on your specific business information.",
      },
    ],
  },
]

// Generate FAQPage schema for structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-5 flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <HelpCircle className="w-4 h-4 text-primary" />
                Help Center
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
              >
                Frequently asked{" "}
                <span className="text-primary">questions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-6 max-w-2xl text-lg text-muted-foreground"
              >
                Everything you need to know about Convo, AI appointment booking for salons,
                and how to get started. Can&apos;t find what you&apos;re looking for?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>
                .
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <section
            key={categoryIndex}
            className={`py-16 ${categoryIndex % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold">{category.title}</h2>
              </AnimatedSection>

              <StaggeredContainer className="space-y-4" staggerDelay={0.08}>
                {category.faqs.map((faq, faqIndex) => (
                  <StaggeredItem key={faqIndex}>
                    <Card className="p-6 hover:border-primary/30 transition-colors duration-200">
                      <h3 className="font-display text-base font-semibold mb-3">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{faq.answer}</p>
                    </Card>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card className="p-8 md:p-12 text-center">
                <p className="mb-3 text-sm font-medium text-muted-foreground">Still have questions?</p>
                <h2 className="font-display text-3xl font-semibold md:text-4xl mb-4">
                  Our team is here to help
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  Get in touch and we&apos;ll respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="xl" asChild>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="w-5 h-5 ml-2" />
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
    </>
  )
}
