import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';
import { HeroBackdrop } from '../components/Brand';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service | FraudPulse',
  description: 'FraudPulse terms of service and usage agreement.',
  path: '/terms/',
});

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-4">
            <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.08] mb-3 text-[2.5rem] sm:text-[3.25rem]">
              Terms of <span className="text-gradient-flow">Service</span>
            </h1>
            <p className="text-sm text-gray-500">Last updated: October 15, 2026</p>
          </div>
        </section>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-10 lg:px-8 pb-16">
          <div className="prose prose-lg text-gray-600 space-y-6">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) are entered into by you and{' '}
                <strong>Fraud Pulse Ltd</strong> (&quot;Fraud Pulse&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                By accessing or using FraudPulse&apos;s services, you agree to be bound by these Terms.
                If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Description</h2>
              <p>
                FraudPulse provides AI-powered fraud detection and prevention software. Our platform analyzes 
                transactions in real-time to identify and prevent fraudulent activities. Certain plans may
                also include optional advisory support, such as scheduled calls with a fraud advisor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not attempt to circumvent or interfere with our security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Level Agreement</h2>
              <p>
                Pay as you go and Professional plans are provided on a commercially reasonable,
                best-effort basis. Those self-serve plans do not include a numerically committed uptime
                target or service credits for downtime. If you are not satisfied, the{' '}
                <a href="/refund/" className="text-blue-600 hover:text-blue-700">
                  Refund Policy
                </a>{' '}
                (including the 30-day money-back guarantee) still applies.
              </p>
              <p>
                A 99.9% monthly uptime commitment, and any service credits for downtime, apply only to
                Enterprise plans and only if they are set out in a signed Service Agreement. Credits, if
                any, are the sole remedy for downtime on that plan. Planned maintenance, force majeure,
                and outages of Shopify, Stripe, Adyen, or other third-party platforms you connect are
                excluded from uptime measurement unless the Service Agreement says otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Customer data</h2>
              <p>
                You retain ownership of data you submit to the Service. Processing of personal data of
                your end customers is described in the{' '}
                <a href="/privacy/" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </a>{' '}
                and the{' '}
                <a href="/dpa/" className="text-blue-600 hover:text-blue-700">
                  Data Processing Agreement
                </a>
                . You are responsible for having a lawful basis to send that data to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h2>
              <p>
                Payment is due according to your selected billing plan. Purchases are processed by
                Paddle, who acts as the Merchant of Record. Failure to pay may result in service suspension.
                Refunds are governed by our{' '}
                <a href="/refund/" className="text-blue-600 hover:text-blue-700">
                  Refund Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p>
                FraudPulse provides fraud analysis and recommended rule changes. It does not replace
                Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect, and it does not take over
                checkout. We cannot guarantee 100% fraud prevention and are not liable for fraudulent
                transactions that occur, or for decisions those third-party tools make, despite our
                recommendations.
              </p>
              <p>
                To the maximum extent permitted by law, Fraud Pulse Ltd is not liable for any indirect,
                incidental, special, consequential, or punitive damages, or for lost profits, lost
                revenue, lost data, or business interruption, even if we have been advised of the
                possibility of those damages.
              </p>
              <p>
                Except for liability that cannot be limited under applicable law, Fraud Pulse Ltd&apos;s
                total liability arising out of or relating to the Service, these Terms, or the{' '}
                <a href="/dpa/" className="text-blue-600 hover:text-blue-700">
                  Data Processing Agreement
                </a>
                , whether in contract, tort, or otherwise, is limited to the amount you paid to Fraud
                Pulse Ltd for the Service in the 12 months immediately before the claim. Unpaid amounts
                you owe us are not subject to this cap.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Termination</h2>
              <p>
                Either party may terminate the service agreement with 30 days' notice. Upon termination, 
                you will retain access to your data for 90 days for export purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
              <p>
                We may update these terms from time to time. We will notify you of significant changes 
                via email or through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at{' '}
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
