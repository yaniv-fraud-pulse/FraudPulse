import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "FraudPulse Solutions — Connect Transaction Data, Get Ranked Fraud Rules",
  description: "See how FraudPulse connects to Shopify, Stripe, PayPal, and Adyen, analyzes your fraud patterns, and delivers ranked rules and actions — reduce chargebacks and friendly fraud without replacing your fraud prevention tools.",
  keywords: "fraud rule recommendations, chargeback reduction, friendly fraud, Shopify Stripe PayPal Adyen, false decline reduction, fraud intelligence",
  alternates: {
    canonical: "/solutions/",
  },
  openGraph: {
    title: "FraudPulse Solutions — Connect Transaction Data, Get Ranked Fraud Rules",
    description: "Connect Shopify, Stripe, PayPal, or Adyen, analyze fraud patterns, receive prioritized rules with impact estimates — without replacing your fraud prevention tools.",
    url: `${SITE_URL}/solutions/`,
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FraudPulse Solutions — Ranked Rules from Your Transaction Data",
    description: "Connect your payment data, receive ranked rule changes, and reduce chargebacks without replacing your fraud prevention tools.",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
