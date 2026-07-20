import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | FraudPulse',
  description: 'FraudPulse refund and cancellation policy for subscriptions and billing.',
};

export default function Refund() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: July 20, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overview</h2>
              <p>
                This Refund Policy explains how refunds and cancellations work for FraudPulse
                subscriptions and paid plans. Payments are processed by our payment partner,
                Paddle, who acts as the Merchant of Record for FraudPulse purchases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Free Trial</h2>
              <p>
                Eligible plans include a 14-day free trial. You will not be charged during the
                trial period. If you cancel before the trial ends, you will not be billed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Subscription Cancellation</h2>
              <p>
                You may cancel your subscription at any time from your account settings or by
                contacting support. Cancellation stops future renewals. Access continues through
                the end of the current billing period that has already been paid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Eligibility</h2>
              <p>We offer refunds under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Monthly plans:</strong> A full refund is available within 14 days of
                  the initial paid charge if you are not satisfied with the service.
                </li>
                <li>
                  <strong>Annual plans:</strong> A full refund is available within 14 days of
                  the initial annual charge. After 14 days, annual plans are non-refundable for
                  the remainder of the term, except where required by law.
                </li>
                <li>
                  <strong>Usage-based billing:</strong> Charges for transactions already
                  processed are generally non-refundable once services have been delivered.
                </li>
                <li>
                  <strong>Duplicate or erroneous charges:</strong> Contact us and we will
                  investigate and refund confirmed billing errors.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Request a Refund</h2>
              <p>
                To request a refund, email{' '}
                <a href="mailto:support@fraud-pulse.com" className="text-blue-600 hover:text-blue-700">
                  support@fraud-pulse.com
                </a>{' '}
                with your account email, the invoice or transaction ID, and a brief reason for
                the request. We aim to respond within 2 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Processing</h2>
              <p>
                Approved refunds are processed through Paddle back to the original payment
                method. Depending on your bank or card issuer, it may take 5–10 business days
                for the refund to appear on your statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Chargebacks</h2>
              <p>
                If you have a billing concern, please contact us before filing a chargeback so
                we can resolve it quickly. Unresolved disputes may result in suspension of
                account access while the chargeback is investigated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Refund Policy from time to time. The latest version will
                always be available on this page, with the last updated date shown above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p>
                For refund or billing questions, contact us at{' '}
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
