import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | FraudPulse',
  description: 'FraudPulse refund policy — 30-day money-back guarantee.',
};

export default function Refund() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: July 21, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">30-Day Money-Back Guarantee</h2>
              <p>
                Fraud Pulse offers a 30-day money-back guarantee on all purchases. If you are not
                satisfied with FraudPulse for any reason, contact us within 30 days of your purchase
                (or subscription renewal charge) for a full refund. No questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Request a Refund</h2>
              <p>
                Email{' '}
                <a href="mailto:support@fraud-pulse.com" className="text-blue-600 hover:text-blue-700">
                  support@fraud-pulse.com
                </a>{' '}
                with the email address used for your purchase and your order or invoice ID. You can
                also request a refund through Paddle using the link in your purchase receipt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Processing</h2>
              <p>
                Payments are processed by Paddle, who acts as the Merchant of Record. Approved
                refunds are returned to your original payment method. It may take several business
                days for the refund to appear on your statement, depending on your bank or card issuer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Subscription Cancellation</h2>
              <p>
                You may cancel your subscription at any time to stop future renewals. Cancellation
                does not affect your right to request a refund within the 30-day guarantee period
                described above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
              <p>
                For refund or billing questions, contact us at{' '}
                <a href="mailto:support@fraud-pulse.com" className="text-blue-600 hover:text-blue-700">
                  support@fraud-pulse.com
                </a>
                . Buyer support is also available via{' '}
                <a
                  href="https://paddle.net"
                  className="text-blue-600 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  paddle.net
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
