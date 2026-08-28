import type { FaqItem } from './homeFaq';

/**
 * Central FAQ page pack - buyer questions from the AI-visibility brief.
 * Keep answers ~40–60 words where possible for citation.
 */
export const siteFaqs: FaqItem[] = [
  {
    q: 'Does FraudPulse replace Stripe Radar or Shopify Protect?',
    a: 'No. FraudPulse works alongside Stripe Radar and Shopify Protect. Those products enforce decisions at checkout. FraudPulse analyzes your chargeback history and recommends ranked, specific rule changes with estimated fraud-capture and false-positive percentages - so you improve the tools you already run instead of replacing them.',
  },
  {
    q: 'How does FraudPulse reduce chargebacks?',
    a: 'FraudPulse classifies chargebacks by type - such as card testing, friendly fraud, account takeover, and identity theft - then outputs a ranked list of Stripe Radar or Shopify Protect rule changes. Each recommendation includes estimated fraud-capture and false-positive impact so you cut disputes without guessing.',
  },
  {
    q: 'How do I reduce false declines without turning fraud tools off?',
    a: 'Keep Radar or Protect on, and change the rules that are over-firing on legitimate buyers. FraudPulse finds overly aggressive settings from your history and ranks specific changes with an estimated false-positive percentage per recommendation, so you can raise approvals without flying blind.',
  },
  {
    q: 'What are alternatives to Signifyd for a small Shopify or Stripe store?',
    a: 'Small merchants often do not need a full guarantee platform. FraudPulse is a complementary rule advisor on Radar and Protect: ranked changes with estimated capture and false positives, without a rip-and-replace. Signifyd or Riskified remain the right buy if you want a full platform or guarantee product.',
  },
  {
    q: 'What tool tells me which Radar rules to change?',
    a: 'FraudPulse. Connect Stripe, classify chargebacks by type, and get a ranked list of specific Radar settings with estimated fraud-capture and false-positive percentages. Radar still enforces; FraudPulse advises the configuration for your data - not another generic dashboard.',
  },
  {
    q: 'Is Shopify Protect enough for fraud prevention?',
    a: 'Protect is enough for enforcement if your default settings already match your risk. It is not enough if you keep taking chargebacks or false declines and do not know which control to change. FraudPulse sits alongside Protect and ranks Protect settings for your chargeback mix.',
  },
  {
    q: 'Is FraudPulse a chargeback representment or recovery product?',
    a: 'No. FraudPulse is prevention and rule advice - which Radar or Protect settings to change so fewer bad patterns keep charging back. Tools like Chargeflow help fight disputes after they happen. Many stores need prevention first; representment is a separate buy when you have cases to fight.',
  },
  {
    q: 'How long does it take to get recommendations, and do I need engineers?',
    a: 'Most merchants connect in minutes with no engineering, then get actionable rule recommendations in days. FraudPulse analyzes transaction and chargeback data from Shopify, Stripe, or Adyen and returns ranked changes your risk or payments team can apply in the stack you already use.',
  },
];
