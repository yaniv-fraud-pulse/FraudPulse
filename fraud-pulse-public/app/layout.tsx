import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FraudPulse - AI-Powered Fraud Intelligence Platform",
  description: "FraudPulse analyzes your transaction data, identifies fraud patterns, and generates AI-powered action items to help reduce fraud and improve approval rates.",
  keywords: "fraud detection, AI fraud prevention, chargeback monitoring, transaction analytics, fraud intelligence",
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
      <body className="min-h-full flex flex-col bg-white pt-[84px]">{children}</body>
    </html>
  );
}
