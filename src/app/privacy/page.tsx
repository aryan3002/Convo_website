import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Convo - AI Booking Front Desk for Salons",
}

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card glass className="p-8 md:p-12">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-3xl md:text-4xl">Privacy Policy</CardTitle>
            <p className="text-muted-foreground mt-2">Last updated: January 2026</p>
          </CardHeader>
          <CardContent className="p-0 prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              This Privacy Policy describes how Convo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares 
              information about you when you use our website and services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, 
              make a booking, or contact us for support.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and protect our users.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@convo.ai" className="text-primary hover:underline">
                privacy@convo.ai
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
