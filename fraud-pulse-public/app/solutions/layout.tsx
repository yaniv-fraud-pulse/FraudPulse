import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Fraud Analyst for Shopify, Stripe, and Adyen Merchants | FraudPulse",
  description:
    "FraudPulse is the AI fraud analyst for Shopify, Stripe, and Adyen merchants. Radar, Flow, Blockify, and RevenueProtect enforce or automate at checkout. Ranked Radar, Flow, Blockify, and RevenueProtect changes - not a replacement.",
  path: "/solutions/",
  keywords:
    "AI fraud analyst, Shopify fraud analyst, Stripe Radar rules, Shopify Flow, Blockify, Adyen RevenueProtect, FraudPulse, chargeback reduction",
});

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
