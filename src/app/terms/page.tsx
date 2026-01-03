import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Convo - AI Booking Front Desk for Salons",
}

export default function TermsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card glass className="p-8 md:p-12">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-3xl md:text-4xl">Terms of Service</CardTitle>
            <p className="text-muted-foreground mt-2">Last updated: January 2026</p>
          </CardHeader>
          <CardContent className="p-0 prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Welcome to Convo. By accessing or using our services, you agree to be bound by these 
              Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Use of Service</h2>
            <p className="text-muted-foreground">
              You may use our services only as permitted by these terms and any applicable laws. 
              You must not misuse our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Account Terms</h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the security of your account and password. 
              Convo cannot and will not be liable for any loss or damage from your failure to 
              comply with this security obligation.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@convo.ai" className="text-primary hover:underline">
                legal@convo.ai
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
