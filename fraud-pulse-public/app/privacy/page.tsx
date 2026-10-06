import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';
import { HeroBackdrop } from '../components/Brand';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | FraudPulse',
  description: 'FraudPulse privacy policy and data protection information.',
  path: '/privacy/',
});

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-4">
            <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.08] mb-3 text-[2.5rem] sm:text-[3.25rem]">
              Privacy <span className="text-gradient-flow">Policy</span>
            </h1>
            <p className="text-sm text-gray-500">Last updated: May 31, 2026</p>
          </div>
        </section>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-10 lg:px-8 pb-16">
          <div className="prose prose-lg text-gray-600 space-y-6">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p>
                At FraudPulse, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our fraud detection services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, company details)</li>
                <li>Transaction data for fraud analysis</li>
                <li>Usage data and analytics</li>
                <li>Communications with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our fraud detection services</li>
                <li>Improve and optimize our platform</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data, including encryption, 
                access controls, and regular security audits. All transaction data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
              <p>
                We retain your information only for as long as necessary to provide our services and comply with 
                legal obligations. You can request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@fraud-pulse.com" className="text-blue-600 hover:text-blue-700">
                  support@fraud-pulse.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
