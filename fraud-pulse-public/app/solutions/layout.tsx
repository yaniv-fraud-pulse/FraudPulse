import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Fraud Analyst for Shopify, Stripe, and Adyen Merchants | FraudPulse",
  description:
    "FraudPulse is the AI fraud analyst for Shopify, Stripe, and Adyen merchants. Radar and Protect enforce at checkout. Adyen is a data source. Ranked Radar, Protect, Flow, and Blockify changes - not a replacement.",
  path: "/solutions/",
  keywords:
    "AI fraud analyst, Shopify fraud analyst, Stripe Radar rules, Shopify Protect, Adyen fraud data, FraudPulse, chargeback reduction",
});

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
