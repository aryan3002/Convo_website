"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Check,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Phone,
  Users,
  Shield,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift } from "@/components/animations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// ─── Pricing Hero ─────────────────────────────────────────────────────────────
function PricingHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 flex items-center gap-1.5 text-sm font-medium text-muted-foreground"
          >
            <Sparkles className="inline w-3.5 h-3.5 text-primary" />
            Early Access
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
          >
            Plans that scale with you
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Early Access Pricing — Convo isn&apos;t generally available, so plans and pricing aren&apos;t final.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-5"
          >
            <Badge variant="secondary">
              Founding customers receive preferential rates
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing Cards ─────────────────────────────────────────────────────────────
function PricingCards() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small salons getting started",
      priceText: "Early Access",
      priceSubtext: null,
      popular: false,
      foundingBadge: false,
      features: [
        { name: "Chat booking widget", included: true },
        { name: "Scales with your business", included: true },
        { name: "Basic dashboard", included: true },
        { name: "Email confirmations", included: true },
        { name: "Calendar invite (.ics)", included: true },
        { name: "Voice agent", included: false },
        { name: "SMS notifications", included: false },
        { name: "Priority support", included: false },
        { name: "Custom branding", included: false },
      ],
      cta: "Request Early Access",
      ctaVariant: "outline" as const,
    },
    {
      name: "Pro",
      description: "Special pricing for early adopters",
      priceText: "Founding Customer",
      priceSubtext: null,
      popular: true,
      foundingBadge: true,
      features: [
        { name: "Everything in Starter", included: true },
        { name: "Scales with your business", included: true },
        { name: "High-volume voice usage", included: true },
        { name: "Call transcripts & summaries", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Customer profiles", included: true },
        { name: "SMS notifications", included: true },
        { name: "Priority support", included: true },
        { name: "Custom branding", included: false },
      ],
      cta: "Request Early Access",
      ctaVariant: "default" as const,
    },
    {
      name: "Enterprise",
      description: "For multi-location salons with custom needs",
      priceText: "Custom",
      priceSubtext: null,
      popular: false,
      foundingBadge: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Unlimited locations", included: true },
        { name: "High-volume voice usage", included: true },
        { name: "Custom AI training", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom integrations", included: true },
        { name: "SLA guarantee", included: true },
        { name: "On-premise option", included: true },
        { name: "Custom branding", included: true },
      ],
      cta: "Talk to Us",
      ctaVariant: "outline" as const,
    },
  ]

  return (
    <section className="py-8 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="mb-10">
          <p className="text-sm text-muted-foreground">
            Early Access Pricing — Convo isn&apos;t generally available, so plans and pricing aren&apos;t final.
          </p>
        </div>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {plans.map((plan, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card
                  className={`h-full flex flex-col relative ${
                    plan.popular
                      ? "border-2 border-primary/50 bg-card"
                      : "border border-border bg-card"
                  }`}
                >
                  {/* Popular accent line — top border highlight */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-primary/60" />
                  )}

                  <CardHeader className="pb-4">
                    {plan.foundingBadge && (
                      <Badge variant="secondary" className="w-fit mb-3 border border-primary/20 text-primary bg-primary/10">Founding Plan</Badge>
                    )}
                    {plan.popular && !plan.foundingBadge && (
                      <Badge variant="secondary" className="w-fit mb-3">Most Popular</Badge>
                    )}
                    <CardTitle className="font-display text-xl font-semibold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 pt-0">
                    <div className="mb-7 pb-6 border-b border-border">
                      <div className="font-display text-3xl font-semibold text-primary">
                        {plan.priceText}
                      </div>
                      {plan.priceSubtext && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {plan.priceSubtext}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-primary shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button
                      variant={plan.ctaVariant}
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <Link href="/contact">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverLift>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// ─── Add-ons Section ──────────────────────────────────────────────────────────
function AddOnsSection() {
  const addons = [
    {
      icon: Phone,
      name: "Additional Voice Capacity",
      description: "Need more voice agent capacity? Scale with your business.",
      price: "Available",
    },
    {
      icon: MessageSquare,
      name: "SMS Reminders",
      description: "Reduce no-shows with automated SMS appointment reminders.",
      price: "Available",
    },
    {
      icon: Users,
      name: "Additional Locations",
      description: "Add more salon locations to your Starter or Pro plan.",
      price: "Available",
    },
    {
      icon: Shield,
      name: "Priority Support",
      description: "Get dedicated support with faster response times.",
      price: "Available",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Extend your plan</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Optional Add-ons</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Customize your plan with additional features as needed.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
          {addons.map((addon, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5">
                      <addon.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-base font-semibold mb-2">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                    <Badge variant="secondary">{addon.price}</Badge>
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

// ─── Feature Comparison ───────────────────────────────────────────────────────
function FeatureComparison() {
  const features = [
    { feature: "Chat booking widget", starter: true, pro: true, enterprise: true },
    { feature: "Booking capacity", starter: "Scales", pro: "Scales", enterprise: "Scales" },
    { feature: "Dashboard access", starter: "Basic", pro: "Full", enterprise: "Full + Custom" },
    { feature: "Voice agent", starter: false, pro: "High-volume", enterprise: "High-volume" },
    { feature: "Call transcripts", starter: false, pro: true, enterprise: true },
    { feature: "Email confirmations", starter: true, pro: true, enterprise: true },
    { feature: "SMS notifications", starter: false, pro: true, enterprise: true },
    { feature: "Calendar invites", starter: true, pro: true, enterprise: true },
    { feature: "Customer profiles", starter: false, pro: true, enterprise: true },
    { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
    { feature: "Integrations", starter: false, pro: "Standard", enterprise: "Custom" },
    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
    { feature: "Custom branding", starter: false, pro: false, enterprise: true },
    { feature: "SLA guarantee", starter: false, pro: false, enterprise: true },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Side by side</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Compare Plans</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            See exactly what&apos;s included in each plan.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Feature</th>
                    <th className="text-center p-4 text-sm font-semibold">Starter</th>
                    <th className="text-center p-4 text-sm font-semibold text-primary">Pro</th>
                    <th className="text-center p-4 text-sm font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="w-4 h-4 text-primary mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-4 h-4 text-primary mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium">{row.pro}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <Check className="w-4 h-4 text-primary mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{row.enterprise}</span>
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
  )
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection() {
  const faqs = [
    {
      question: "How does Early Access pricing work?",
      answer:
        "Pricing isn't final yet. Early Access customers will get preferential rates and be locked into founding customer pricing even after we set final prices.",
    },
    {
      question: "What are founding customer benefits?",
      answer:
        "Founding customers receive special pricing, priority support, direct input into product development, and long-term rate protection. You'll be grandfathered into your initial pricing structure.",
    },
    {
      question: "When will final pricing be announced?",
      answer:
        "There's no date yet. Final pricing will be announced after early access. Early customers may receive long-term discounts.",
    },
    {
      question: "How do I request early access?",
      answer:
        "Click 'Request Early Access' on any plan to start a conversation with our team. We'll discuss your salon's needs and get you set up quickly.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! During early access, we're flexible with plan changes as we learn what works best for different salon sizes. Your founding customer benefits will carry over.",
    },
    {
      question: "What happens after early access ends?",
      answer:
        "Early access customers will be notified before any pricing changes. You'll have the option to lock in founding customer rates or adjust your plan as needed.",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">FAQ</span>
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
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

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card className="p-8 md:p-14 text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Ready to modernize your bookings?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Founding customers get preferential rates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Request Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Questions?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Talk to our team
              </Link>
            </p>

            <p className="text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
              Pricing will be finalized after early access. Early customers may receive long-term discounts.
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <AddOnsSection />
      <FeatureComparison />
      <FAQSection />
      <CTASection />
    </>
  )
}
