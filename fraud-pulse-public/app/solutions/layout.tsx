import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "FraudPulse Solutions — Connect Stripe & Shopify, Get Prioritized Fraud Rule Changes",
  description: "See how FraudPulse connects to Stripe and Shopify, analyzes your fraud patterns, and delivers ranked fraud rule changes — reduce chargebacks and increase approvals without replacing your stack.",
  keywords: "Stripe fraud rules, Shopify fraud settings, chargeback reduction, false decline reduction, fraud rule optimization, Stripe Radar settings, Shopify Protect rules, fraud intelligence",
  alternates: {
    canonical: "/solutions/",
  },
  openGraph: {
    title: "FraudPulse Solutions — Connect Stripe & Shopify, Get Prioritized Fraud Rule Changes",
    description: "Connect Stripe & Shopify, analyze fraud patterns, receive prioritized rule changes with impact estimates, and implement improvements — no rip and replace.",
    url: `${SITE_URL}/solutions/`,
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FraudPulse Solutions — Prioritized Fraud Rule Changes for Stripe & Shopify",
    description: "Connect Stripe & Shopify, analyze fraud patterns, receive ranked rule changes, and implement improvements without replacing your stack.",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
