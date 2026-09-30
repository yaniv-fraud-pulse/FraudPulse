import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How FraudPulse Works - Transaction Data to Chargeback-Reducing Rules",
  description: "FraudPulse connects to Shopify, Stripe, or Adyen, classifies chargebacks (including friendly vs real fraud), and ranks Radar, Flow, Blockify, or RevenueProtect changes. Prevention - not chargeback representment.",
  path: "/how-it-works/",
  keywords: "how FraudPulse works, fraud rule recommendations, reduce chargebacks, friendly fraud, Shopify Stripe Adyen, fraud pattern analysis, chargeback root cause",
});

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
