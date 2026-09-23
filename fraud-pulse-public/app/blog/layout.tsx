import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FraudPulse Blog - Chargebacks, Friendly Fraud & Fraud Rule Insights",
  description: "Expert articles on reducing chargebacks and friendly fraud, designing better fraud rules, false decline prevention, and fraud pattern analysis for online merchants.",
  path: "/blog/",
  keywords: "fraud prevention blog, chargeback reduction, friendly fraud, false decline prevention, fraud rules optimization, ecommerce fraud",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
