import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How FraudPulse Works — Exactly Which Fraud Rules to Change in Stripe & Shopify",
  description: "FraudPulse connects to Stripe and Shopify, analyzes your fraud and transaction patterns, and delivers prioritized rule changes with estimated chargeback and revenue impact. Implement in days, not months.",
  keywords: "how FraudPulse works, Stripe Radar rules, Shopify Protect rules, fraud rule recommendations, reduce chargebacks Stripe, reduce chargebacks Shopify, fraud pattern analysis, chargeback root cause",
  openGraph: {
    title: "How FraudPulse Works — Exactly Which Fraud Rules to Change in Stripe & Shopify",
    description: "Connect Stripe or Shopify → analyze fraud patterns → receive prioritized rule changes → implement and track improvements. No rip and replace.",
    url: "https://fraudpulse.io/how-it-works/",
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How FraudPulse Works — Fraud Rule Changes for Stripe & Shopify",
    description: "Connect Stripe or Shopify → analyze fraud patterns → receive prioritized rule changes → implement and track improvements.",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
