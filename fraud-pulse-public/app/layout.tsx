import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import PostHogProvider from "./components/PostHogProvider";
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
    "FraudPulse connects to your transaction data and recommends rules and actions that reduce chargebacks and friendly fraud.",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FraudPulse — Reduce Chargebacks & Friendly Fraud with Smarter Rules",
  description: "FraudPulse connects to your transaction data from Shopify, Stripe, PayPal, and Adyen — then recommends rules and actions that reduce chargebacks and friendly fraud. Actionable insights in days, not analytics reports you never act on.",
  keywords: "reduce chargebacks, friendly fraud, fraud rule recommendations, Shopify fraud, Stripe fraud, PayPal fraud, Adyen fraud, false decline reduction, fraud intelligence platform",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FraudPulse — Reduce Chargebacks & Friendly Fraud with Smarter Rules",
    description: "Connect transaction data from Shopify, Stripe, PayPal, or Adyen. Get ranked rules and actions that reduce chargebacks and friendly fraud.",
    url: SITE_URL,
    siteName: "FraudPulse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FraudPulse — Reduce Chargebacks & Friendly Fraud with Smarter Rules",
    description: "We analyze your transaction data and deliver concrete actions and rules to reduce chargebacks and friendly fraud.",
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
        <PostHogProvider>
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
        </PostHogProvider>
      </body>
    </html>
  );
}
