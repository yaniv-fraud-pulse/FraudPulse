import type { FaqItem } from './homeFaq';

export const howItWorksFaqs: FaqItem[] = [
  {
    q: 'How does FraudPulse use my transaction data?',
    a: 'FraudPulse connects to transaction data from Shopify, Stripe, or Adyen, then analyzes chargebacks, friendly fraud, and false declines. You get ranked rule changes and actions to apply in your existing payment stack - not a replacement for the tools that approve or decline at checkout.',
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

export const blogIndexFaqs: FaqItem[] = [
  {
    q: 'What topics does the FraudPulse blog cover?',
    a: 'The FraudPulse blog covers how to tune Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect from your own chargeback mix: chargeback reduction, friendly fraud, false declines, card testing, Visa VAMP thresholds, and fraud rule audits. It is about prevention and rule decisions, not order screening or chargeback representment.',
  },
  {
    q: 'Does FraudPulse replace the fraud tools covered on the blog?',
    a: 'No. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect stay the enforcement layer at checkout. FraudPulse is the AI analyst: it classifies chargebacks and ranks which of their rules to change, each with an estimated fraud-capture rate and false-positive percentage.',
  },
  {
    q: 'Who writes the FraudPulse fraud guides?',
    a: 'Guides are written by Idan Hayon, Co-Founder & CEO of FraudPulse, drawing on more than a decade in payments fraud analytics at companies such as Riskified and Melio. Posts focus on practical operator advice, not generic theory.',
  },
  {
    q: 'Are FraudPulse blog posts only for Stripe and Shopify merchants?',
    a: 'No. Many examples use Shopify or Stripe because those stacks are common, but the core ideas - connecting transaction data, measuring false positives, auditing rules, and reducing chargebacks and friendly fraud - apply across ecommerce payment stacks including Adyen.',
  },
  {
    q: 'How often is the FraudPulse blog updated?',
    a: 'New posts are published regularly with product insights, industry threshold changes, and operator playbooks. Check the date on each article for freshness; the blog index lists the latest guides first so you can find current chargeback and fraud-ops advice quickly.',
  },
];
