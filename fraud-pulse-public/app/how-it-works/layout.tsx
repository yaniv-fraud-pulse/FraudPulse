import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tools to Tune Fraud Rules Without Rejecting Legitimate Buyers",
  description: "Tune Shopify Flow, Blockify, Stripe Radar, or Adyen RevenueProtect so you stop rejecting legitimate buyers. FraudPulse ranks those rule changes from your chargebacks. It does not replace the tools.",
  path: "/how-it-works/",
  keywords: "tune fraud rules, stop rejecting legitimate buyers, Shopify Flow, Blockify, Stripe Radar, Adyen RevenueProtect, chargeback prevention vs representment",
});

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
