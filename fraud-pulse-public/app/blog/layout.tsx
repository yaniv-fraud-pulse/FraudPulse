import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "FraudPulse Blog — Chargebacks, Friendly Fraud & Fraud Rule Insights",
  description: "Expert articles on reducing chargebacks and friendly fraud, designing better fraud rules, false decline prevention, and fraud pattern analysis for online merchants.",
  keywords: "fraud prevention blog, chargeback reduction, friendly fraud, false decline prevention, fraud rules optimization, ecommerce fraud",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "FraudPulse Blog — Chargebacks, Friendly Fraud & Fraud Rule Insights",
    description: "Expert articles on reducing chargebacks and friendly fraud, optimizing fraud rules, and preventing false declines.",
    url: `${SITE_URL}/blog/`,
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FraudPulse Blog — Chargebacks, Friendly Fraud & Fraud Rules",
    description: "Expert articles on reducing chargebacks, optimizing fraud rules, and preventing false declines.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
