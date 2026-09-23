import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FraudPulse Solutions - Connect Transaction Data, Get Ranked Fraud Rules",
  description: "See how FraudPulse connects to Shopify, Stripe, and Adyen, analyzes your fraud patterns, and delivers ranked rules - including how it compares to Shopify Protect, Signifyd, and Chargeflow without replacing them.",
  path: "/solutions/",
  keywords: "fraud rule recommendations, chargeback reduction, friendly fraud, Shopify Stripe Adyen, false decline reduction, fraud intelligence",
});

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
