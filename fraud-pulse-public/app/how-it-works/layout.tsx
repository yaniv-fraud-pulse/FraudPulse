import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "How FraudPulse Works — Transaction Data to Chargeback-Reducing Rules",
  description: "FraudPulse connects to Shopify, Stripe, PayPal, or Adyen, analyzes your chargebacks and friendly fraud patterns, and delivers prioritized rules and actions with estimated impact. Implement in days, not months.",
  keywords: "how FraudPulse works, fraud rule recommendations, reduce chargebacks, friendly fraud, Shopify Stripe PayPal Adyen, fraud pattern analysis, chargeback root cause",
  alternates: {
    canonical: "/how-it-works/",
  },
  openGraph: {
    title: "How FraudPulse Works — Transaction Data to Chargeback-Reducing Rules",
    description: "Connect transaction data → analyze fraud patterns → receive prioritized rules and actions → implement and track improvements — without replacing your fraud prevention tools.",
    url: `${SITE_URL}/how-it-works/`,
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How FraudPulse Works — Rules That Reduce Chargebacks",
    description: "Connect Shopify, Stripe, PayPal, or Adyen → analyze fraud patterns → receive prioritized rules and actions.",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
