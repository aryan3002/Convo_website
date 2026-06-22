"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  Users,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animations"

// Contact Hero
function ContactHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-5 text-sm font-medium text-muted-foreground">Get in Touch</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
          >
            Let&apos;s{" "}
            <span className="text-primary">start a conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Ready to transform your salon&apos;s booking experience?{" "}
            Reach out and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// Contact Form
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'demo'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    // For now, use mailto fallback
    const subject = encodeURIComponent(`Convo Inquiry: ${formData.interest === 'demo' ? 'Demo Request' : formData.interest}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:triaryan3002@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection>
            <Card className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl font-semibold mb-2">Request a Demo</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will reach out to schedule a personalized walkthrough.
                    </p>
                  </div>

                  {/* Interest Selection */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'demo', label: 'Request Demo', icon: Calendar },
                      { id: 'pricing', label: 'Pricing Info', icon: Building },
                      { id: 'partnership', label: 'Partnership', icon: Users },
                      { id: 'support', label: 'Support', icon: MessageSquare },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: option.id })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                          formData.interest === option.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground'
                        }`}
                      >
                        <option.icon className="w-4 h-4" />
                        {option.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@salon.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary border-border focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Salon Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Luxe Hair Studio"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-secondary border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary border-border focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your salon and what you're looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border focus-visible:ring-primary min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              )}
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <StaggeredContainer className="space-y-6" staggerDelay={0.1}>
            <StaggeredItem>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">For general inquiries</p>
                    <a
                      href="mailto:triaryan3002@gmail.com"
                      className="text-primary hover:underline"
                    >
                      triaryan3002@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sales Inquiries</h3>
                    <p className="text-muted-foreground mb-2">For enterprise and custom plans</p>
                    <a
                      href="mailto:triaryan3002@gmail.com"
                      className="text-primary hover:underline"
                    >
                      triaryan3002@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground mb-2">We typically respond within</p>
                    <p className="font-medium">24 hours or less</p>
                  </div>
                </div>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Why Choose Convo?</h3>
                <ul className="space-y-3">
                  {[
                    "Built specifically for salon businesses",
                    "Voice + Chat booking in one platform",
                    "No long-term contracts required",
                    "14-day free trial, no credit card needed",
                    "Dedicated onboarding support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}

// FAQ CTA
function FAQCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card className="p-8 md:p-12 text-center">
            <Badge variant="outline" className="mb-6">
              More resources
            </Badge>

            <h2 className="font-display text-3xl font-semibold md:text-4xl mb-4">
              Have more questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Check out our FAQ or pricing page for detailed information.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing#faq">View FAQ</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FAQCTA />
    </>
  )
}
