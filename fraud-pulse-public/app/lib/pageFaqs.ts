import type { FaqItem } from './homeFaq';

export const howItWorksFaqs: FaqItem[] = [
  {
    q: 'How does FraudPulse use my transaction data?',
    a: 'FraudPulse connects to transaction data from Shopify, Stripe, PayPal, or Adyen, then analyzes chargebacks, friendly fraud, and false declines. You get ranked rule changes and actions to apply in your existing payment stack — not a replacement for the tools that approve or decline at checkout.',
  },
  {
    q: 'How long until I get fraud rule recommendations?',
    a: 'Most merchants receive prioritized fraud rule recommendations within days of connecting transaction data. FraudPulse reviews your chargeback and friendly-fraud patterns, then returns ranked changes with estimated chargeback and false-positive impact so your team can act quickly.',
  },
  {
    q: 'Do I need engineers to implement FraudPulse?',
    a: 'No. You can connect via API, CSV upload, or native integrations without a migration project. Recommendations are written for operators to turn into rules and actions in the systems they already run, so risk and payments teams can usually implement changes without a full engineering sprint.',
  },
  {
    q: 'What data does FraudPulse analyze?',
    a: 'FraudPulse analyzes transaction history, chargebacks, dispute reason codes, and approval-loss patterns from your payment stack. The goal is to find which rules and signals reduce chargebacks and friendly fraud, which create false positives, and what to change next.',
  },
];

export const solutionsFaqs: FaqItem[] = [
  {
    q: 'Is FraudPulse analytics & reporting or a decision tool?',
    a: 'FraudPulse is a decision tool, not an analytics and reporting product. Instead of only charting what happened, it delivers ranked fraud rule changes and actions with estimated chargeback and false-positive impact so merchants know exactly what to change next to reduce chargebacks and friendly fraud.',
  },
  {
    q: 'Can FraudPulse reduce chargebacks and friendly fraud at the same time?',
    a: 'Yes. FraudPulse separates patterns that drive real fraud and friendly fraud from rules that over-block legitimate buyers. Recommendations prioritize changes that reduce disputes while protecting approval rates, so you are not forced to trade conversion for risk blindly.',
  },
  {
    q: 'What payment stacks does FraudPulse support?',
    a: 'FraudPulse connects to transaction data from Shopify, Stripe, PayPal, and Adyen. Merchants on other platforms can upload CSV exports. Custom integrations are available when your stack needs a dedicated connector.',
  },
  {
    q: 'How is FraudPulse different from hiring more fraud analysts?',
    a: 'Adding headcount does not fix unclear rules or fragmented data. FraudPulse structures your existing transaction signals into measurable recommendations — which rules prevent chargebacks and friendly fraud, which create false positives, and what to change — so small teams can operate with clarity instead of reactive rule piles.',
  },
];

export const blogIndexFaqs: FaqItem[] = [
  {
    q: 'What topics does the FraudPulse blog cover?',
    a: 'The FraudPulse blog covers chargeback reduction, friendly fraud, false positives, Visa VAMP thresholds, fraud rule design, and practical fraud-ops frameworks for online merchants who want clearer decisions from their transaction data.',
  },
  {
    q: 'Who writes the FraudPulse fraud guides?',
    a: 'Guides are written by Idan Hayon, Co-Founder & CEO of FraudPulse, drawing on more than a decade in payments fraud analytics at companies such as Riskified and Melio. Posts focus on practical operator advice, not generic theory.',
  },
  {
    q: 'Are FraudPulse blog posts only for Stripe and Shopify merchants?',
    a: 'No. Many examples use Shopify or Stripe because those stacks are common, but the core ideas — connecting transaction data, measuring false positives, auditing rules, and reducing chargebacks and friendly fraud — apply across ecommerce payment stacks including PayPal and Adyen.',
  },
  {
    q: 'How often is the FraudPulse blog updated?',
    a: 'New posts are published regularly with product insights, industry threshold changes, and operator playbooks. Check the date on each article for freshness; the blog index lists the latest guides first so you can find current chargeback and fraud-ops advice quickly.',
  },
];
