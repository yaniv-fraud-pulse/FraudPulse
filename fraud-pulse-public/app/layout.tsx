import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { SITE_URL } from "./lib/site";

const GA_MEASUREMENT_ID = "G-GL245KC3KN";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FraudPulse",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-light.svg`,
  description:
    "FraudPulse tells merchants exactly which fraud rules to change in Stripe and Shopify to reduce chargebacks and increase approvals.",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FraudPulse — Reduce Chargebacks & Increase Approvals in Stripe & Shopify",
  description: "FraudPulse tells you exactly which fraud rules to change in Stripe & Shopify to reduce chargebacks and increase approvals. Get actionable fraud insights in days — not dashboards you never use.",
  keywords: "reduce chargebacks, increase approval rate, Stripe Radar optimization, Shopify Protect optimization, fraud rule changes, chargeback reduction, false decline reduction, fraud intelligence platform",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FraudPulse — Reduce Chargebacks & Increase Approvals in Stripe & Shopify",
    description: "FraudPulse tells you exactly which fraud rules to change in Stripe & Shopify to reduce chargebacks and increase approvals. Get actionable fraud insights in days.",
    url: SITE_URL,
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FraudPulse — Reduce Chargebacks & Increase Approvals in Stripe & Shopify",
    description: "FraudPulse tells you exactly which fraud rules to change in Stripe & Shopify to reduce chargebacks and increase approvals.",
  },
  icons: {
    icon: "/logo-light.svg",
    shortcut: "/logo-light.svg",
    apple: "/logo-light.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white pt-[84px] overflow-x-clip">
        <JsonLd data={organizationSchema} />
        {children}
        <Script
          src="https://t.contentsquare.net/uxa/b7d43a35c59b2.js"
          strategy="afterInteractive"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
