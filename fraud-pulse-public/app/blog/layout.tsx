import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FraudPulse Blog — Fraud Prevention Insights for Stripe & Shopify Merchants",
  description: "Expert articles on reducing chargebacks, optimizing Stripe Radar and Shopify Protect fraud rules, false decline prevention, and fraud pattern analysis for online merchants.",
  keywords: "fraud prevention blog, Stripe Radar tips, Shopify Protect tips, chargeback reduction, false decline prevention, fraud rules optimization, ecommerce fraud",
  openGraph: {
    title: "FraudPulse Blog — Fraud Prevention Insights for Stripe & Shopify Merchants",
    description: "Expert articles on reducing chargebacks, optimizing Stripe Radar and Shopify Protect fraud rules, and preventing false declines.",
    url: "https://fraudpulse.io/blog/",
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FraudPulse Blog — Fraud Prevention Insights for Stripe & Shopify",
    description: "Expert articles on reducing chargebacks, optimizing fraud rules, and preventing false declines.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
