"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Check,
  X,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Phone,
  LayoutDashboard,
  Users,
  Zap,
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

// Pricing Hero
function PricingHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="neon" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Simple Pricing
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Plans that{" "}
            <span className="gradient-text">scale with you</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Start free, upgrade when you&apos;re ready. No hidden fees, no long-term contracts.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// Pricing Toggle
function PricingToggle({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (value: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
        Monthly
      </span>
      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className="relative w-14 h-7 rounded-full bg-white/10 border border-white/20 transition-colors"
      >
        <motion.div
          className="absolute top-1 w-5 h-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
          animate={{ left: isAnnual ? '32px' : '4px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
      <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
        Annual
        <Badge variant="success" className="ml-2">Save 20%</Badge>
      </span>
    </div>
  )
}

// Pricing Cards
function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small salons just getting started",
      price: isAnnual ? 49 : 59,
      perLocation: true,
      popular: false,
      features: [
        { name: "Chat booking widget", included: true },
        { name: "Up to 100 bookings/month", included: true },
        { name: "Basic dashboard", included: true },
        { name: "Email confirmations", included: true },
        { name: "Calendar invite (.ics)", included: true },
        { name: "Voice agent", included: false },
        { name: "SMS notifications", included: false },
        { name: "Priority support", included: false },
        { name: "Custom branding", included: false },
      ],
      cta: "Start Free Trial",
      ctaVariant: "glass" as const,
    },
    {
      name: "Pro",
      description: "For growing salons that want the full experience",
      price: isAnnual ? 149 : 179,
      perLocation: true,
      popular: true,
      features: [
        { name: "Everything in Starter", included: true },
        { name: "Unlimited bookings", included: true },
        { name: "Voice agent (100 min/mo)", included: true },
        { name: "Call transcripts & summaries", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Customer profiles", included: true },
        { name: "SMS notifications", included: true },
        { name: "Priority support", included: true },
        { name: "Custom branding", included: false },
      ],
      cta: "Start Free Trial",
      ctaVariant: "neon" as const,
    },
    {
      name: "Enterprise",
      description: "For multi-location salons with custom needs",
      price: null,
      perLocation: false,
      popular: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Unlimited locations", included: true },
        { name: "Unlimited voice minutes", included: true },
        { name: "Custom AI training", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom integrations", included: true },
        { name: "SLA guarantee", included: true },
        { name: "On-premise option", included: true },
        { name: "Custom branding", included: true },
      ],
      cta: "Contact Sales",
      ctaVariant: "glass" as const,
    },
  ]

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card 
                  glass 
                  className={`h-full flex flex-col relative overflow-hidden ${
                    plan.popular ? 'border-primary/50 shadow-neon' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
                  )}
                  
                  <CardHeader>
                    {plan.popular && (
                      <Badge variant="neon" className="w-fit mb-2">Most Popular</Badge>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="mb-6">
                      {plan.price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">
                            /month{plan.perLocation && ' per location'}
                          </span>
                        </div>
                      ) : (
                        <div className="text-4xl font-bold">Custom</div>
                      )}
                      {isAnnual && plan.price && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Billed annually (${plan.price * 12}/year)
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-neon-mint shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 shrink-0" />
                          )}
                          <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
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

// Add-ons Section
function AddOnsSection() {
  const addons = [
    {
      icon: Phone,
      name: "Additional Voice Minutes",
      description: "Need more voice agent capacity? Add minutes to any plan.",
      price: "$0.10/minute",
    },
    {
      icon: MessageSquare,
      name: "SMS Reminders",
      description: "Reduce no-shows with automated SMS appointment reminders.",
      price: "$0.02/SMS",
    },
    {
      icon: Users,
      name: "Additional Locations",
      description: "Add more salon locations to your Starter or Pro plan.",
      price: "50% of base plan",
    },
    {
      icon: Shield,
      name: "Priority Support",
      description: "Get dedicated support with faster response times.",
      price: "$49/month",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Optional Add-ons</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your plan with additional features as needed.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {addons.map((addon, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card glass className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <addon.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{addon.name}</h3>
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

// Feature Comparison
function FeatureComparison() {
  const features = [
    { feature: "Chat booking widget", starter: true, pro: true, enterprise: true },
    { feature: "Monthly bookings", starter: "100", pro: "Unlimited", enterprise: "Unlimited" },
    { feature: "Dashboard access", starter: "Basic", pro: "Full", enterprise: "Full + Custom" },
    { feature: "Voice agent minutes", starter: false, pro: "100/mo", enterprise: "Unlimited" },
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly what&apos;s included in each plan.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card glass className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">
                      <span className="gradient-text">Pro</span>
                    </th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-neon-mint mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-neon-mint mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm">{row.pro}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-neon-mint mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm">{row.enterprise}</span>
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

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. You'll have full access to all features in your chosen plan during the trial period.",
    },
    {
      question: "What happens if I exceed my booking limit?",
      answer: "On the Starter plan, if you exceed 100 bookings in a month, we'll notify you and suggest upgrading to Pro. Your existing bookings won't be affected, but new bookings will be paused until the next billing cycle or you upgrade.",
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle.",
    },
    {
      question: "How does per-location pricing work?",
      answer: "Each salon location requires its own subscription. If you have multiple locations, you can either subscribe to individual Starter/Pro plans for each, or contact us about our Enterprise plan which includes unlimited locations.",
    },
    {
      question: "What's included in Voice Agent minutes?",
      answer: "Voice Agent minutes are the total duration of AI-handled phone calls. The Pro plan includes 100 minutes per month. Additional minutes can be purchased at $0.10/minute. Enterprise plans include unlimited minutes.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied with Convo, contact us within 30 days of your first payment for a full refund.",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card glass className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
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

// CTA Section
function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card glass className="p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to modernize your bookings?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Start your 14-day free trial today. No credit card required.
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

              <p className="text-sm text-muted-foreground mt-6">
                Questions? <Link href="/contact" className="text-primary hover:underline">Talk to our team</Link>
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
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
