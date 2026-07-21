import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FraudPulse',
  description: 'FraudPulse terms of service and usage agreement.',
};

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: July 21, 2026</p>
            
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
                We strive to maintain 99.9% uptime for our services. Details about our SLA, including credits 
                for downtime, are available in your service agreement.
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
                FraudPulse provides fraud detection services but cannot guarantee 100% fraud prevention. 
                We are not liable for fraudulent transactions that occur despite our best efforts.
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
