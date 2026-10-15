import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';
import { HeroBackdrop } from '../components/Brand';

export const metadata: Metadata = pageMetadata({
  title: 'Data Processing Agreement | FraudPulse',
  description:
    'FraudPulse Data Processing Agreement (DPA) for merchants who send transaction and dispute data under GDPR, UK GDPR, and CCPA.',
  path: '/dpa/',
});

export default function Dpa() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-4">
            <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.08] mb-3 text-[2.5rem] sm:text-[3.25rem]">
              Data Processing <span className="text-gradient-flow">Agreement</span>
            </h1>
            <p className="text-sm text-gray-500">Last updated: October 15, 2026</p>
          </div>
        </section>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-10 lg:px-8 pb-16">
          <div className="prose prose-lg text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                This Data Processing Agreement (&quot;DPA&quot;) is between you, the merchant customer
                (&quot;Customer&quot;), and <strong>Fraud Pulse Ltd</strong> (&quot;FraudPulse&quot;,
                &quot;Processor&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). It forms part of the{' '}
                <a href="/terms/" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </a>{' '}
                and applies when FraudPulse processes Personal Data on Customer&apos;s behalf in connection
                with the Service.
              </p>
              <p>
                By creating an account, connecting a data source, or otherwise using the Service, Customer
                agrees to this DPA. If Customer has a separately signed DPA with Fraud Pulse Ltd, that
                signed DPA controls to the extent of any conflict.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Roles</h2>
              <p>
                For Personal Data of Customer&apos;s personnel and account users, and for website visitors,
                FraudPulse acts as an independent controller as described in the{' '}
                <a href="/privacy/" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </a>
                .
              </p>
              <p>
                For Personal Data of Customer&apos;s end customers and other individuals that appears in
                transaction, order, dispute, or chargeback records Customer sends to FraudPulse
                (&quot;Customer Personal Data&quot;), Customer is the controller (or a processor for its own
                merchant customers) and FraudPulse is the processor (or sub-processor). Under the California
                Consumer Privacy Act, as amended by the CPRA (&quot;CCPA&quot;), FraudPulse is a service
                provider / contractor for that Customer Personal Data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Subject matter and purpose</h2>
              <p>
                FraudPulse processes Customer Personal Data solely to provide, maintain, secure, and
                improve the Service: connecting Shopify, Stripe, or Adyen (or CSV uploads), analysing
                transactions and disputes, and ranking recommended changes in Customer&apos;s existing
                tools (including Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect). FraudPulse
                does not replace those tools, does not take over checkout, and does not sell Customer
                Personal Data.
              </p>
              <p>
                Processing lasts for the term of Customer&apos;s subscription or usage, plus the export
                window described in the Terms, except where law requires longer retention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Categories of data</h2>
              <p>Customer Personal Data typically includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identifiers that payment or commerce platforms include with orders and disputes (for example email, IP address, order or customer IDs)</li>
                <li>Transaction and dispute records (amounts, timestamps, status, reason codes, and related metadata)</li>
                <li>Technical and device metadata if supplied by the connected platform</li>
              </ul>
              <p>
                Data subjects are primarily Customer&apos;s buyers and other individuals whose details
                appear in those records, and Customer&apos;s authorised users of the Service.
              </p>
              <p>
                FraudPulse does not process or store full payment card numbers (PAN). Card acceptance
                remains on Shopify, Stripe, Adyen, and Customer&apos;s own checkout and fraud tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Customer instructions</h2>
              <p>
                FraudPulse will process Customer Personal Data only on documented instructions from
                Customer, including this DPA, the Terms, product settings, and API or integration
                configuration, unless required to do otherwise by applicable law. Customer warrants that it
                has a lawful basis to send Customer Personal Data to FraudPulse and to instruct this
                processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Confidentiality and security</h2>
              <p>
                Personnel who process Customer Personal Data are bound by confidentiality. We implement
                industry-standard technical and organisational measures, including encryption in transit
                and at rest, access controls, and regular security reviews, as described in the Privacy
                Policy. Customer is responsible for the security of its own accounts, credentials, and
                connected platform permissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Sub-processors</h2>
              <p>
                Customer authorises FraudPulse to use sub-processors to host, operate, bill, and support
                the Service. Current sub-processors that may process Customer Personal Data or related
                account data include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Cloud / Firebase — application hosting and infrastructure (including Cloud Run in us-central1)</li>
                <li>Paddle — Merchant of Record and payment processing for FraudPulse subscriptions</li>
                <li>PostHog — product and website analytics</li>
              </ul>
              <p>
                We will keep this list updated on this page. For a material addition that will process
                Customer Personal Data, we will provide notice (including by email to the account contact
                where we have one). Customer may object on reasonable data-protection grounds; if we cannot
                accommodate the objection, Customer may terminate the affected Service as set out in the
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International transfers</h2>
              <p>
                Customer Personal Data may be processed in the United States and other countries where
                FraudPulse or its sub-processors operate. Where a transfer from the EEA, UK, or Switzerland
                requires a transfer mechanism, FraudPulse will use appropriate safeguards, including the
                European Commission Standard Contractual Clauses and the UK International Data Transfer
                Addendum, as applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Assistance, breaches, and deletion</h2>
              <p>
                Taking into account the nature of processing, FraudPulse will assist Customer with data
                subject requests, DPIAs, and consultations with supervisory authorities, at Customer&apos;s
                reasonable request. Extensive assistance beyond the self-serve product may be charged at
                a reasonable rate.
              </p>
              <p>
                FraudPulse will notify Customer without undue delay after becoming aware of a personal
                data breach affecting Customer Personal Data, and will provide information reasonably
                available to help Customer meet its own notification duties.
              </p>
              <p>
                On termination, Customer may export data during the window in the Terms (90 days). After
                that window, FraudPulse will delete or anonymise Customer Personal Data in its production
                systems, except copies retained as required by law or in encrypted backups until they
                cycle out.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Audits</h2>
              <p>
                Upon written request no more than once in any 12-month period (unless a competent
                authority or a confirmed personal data breach reasonably requires more), FraudPulse will
                make available information reasonably necessary to demonstrate compliance with this DPA,
                which may include security documentation. On-site audits, if required and not replaceable
                by that documentation, are at Customer&apos;s cost unless they reveal a material breach of
                this DPA by FraudPulse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. CCPA / CPRA</h2>
              <p>
                FraudPulse will not sell Customer Personal Data, share it for cross-context behavioural
                advertising, or retain, use, or disclose it except as needed to provide the Service, as
                permitted by the CCPA for service providers, or as otherwise permitted by this DPA and
                applicable law. FraudPulse will not combine Customer Personal Data with personal
                information from other sources except as permitted for a service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Liability</h2>
              <p>
                Liability arising under this DPA is subject to the limitations and exclusions in the
                Terms of Service, including the cap on liability, except where applicable law does not
                allow those limits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact</h2>
              <p>
                For questions about this DPA or to request a signed copy for Enterprise, contact{' '}
                <a href="mailto:support@fraud-pulse.com" className="text-blue-600 hover:text-blue-700">
                  support@fraud-pulse.com
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
