export type FaqItem = {
  q: string;
  a: string;
};

/** Buyer questions phrased the way merchants actually search and ask. */
export const homeFaqs: FaqItem[] = [
  {
    q: 'Does FraudPulse replace Stripe Radar or Shopify Protect?',
    a: 'No. FraudPulse does not replace Stripe Radar, Shopify Protect, or any payment processor fraud console. It sits on top of your existing stack, analyzes your transaction and chargeback data, and tells you exactly which fraud rules to change in Stripe and Shopify to reduce chargebacks and increase approvals.',
  },
  {
    q: 'How does FraudPulse reduce chargebacks?',
    a: 'FraudPulse analyzes your transactions, chargebacks, and customer patterns to identify the root causes of disputes and fraud that is getting through your current rules. You receive prioritized, implementable fraud rule recommendations — each with estimated chargeback and false-positive impact — so you can fix what is actually driving chargebacks instead of guessing.',
  },
  {
    q: 'How long does it take to get fraud rule recommendations?',
    a: 'Most merchants get actionable fraud insights in days, not months. After you connect Stripe or Shopify, FraudPulse analyzes your fraud and transaction patterns and delivers a prioritized list of rule changes you can apply directly in Shopify Protect and Stripe Radar.',
  },
  {
    q: 'Can I improve Stripe and Shopify fraud settings without replacing my stack?',
    a: 'Yes. FraudPulse is built for merchants who want to get more from the fraud tools they already use. There is no rip and replace, no migration risk, and no need to switch payment processors — you keep Stripe Radar and Shopify Protect and tune them using data-driven recommendations.',
  },
  {
    q: 'How do I reduce chargebacks on Shopify in 2026?',
    a: 'Start by understanding which fraud patterns and order signals are driving chargebacks in your Shopify store, then adjust Shopify Protect rules based on your own data — not generic defaults. FraudPulse connects to your Shopify data, surfaces the patterns behind chargebacks, and recommends specific rule changes to reduce disputes while limiting false declines.',
  },
  {
    q: 'What is the difference between FraudPulse and a fraud dashboard?',
    a: 'Most fraud dashboards show you what happened. FraudPulse tells you what to do next. Instead of charts you rarely act on, you get clear, ranked fraud rule changes with impact estimates — actionable recommendations you can implement in Stripe and Shopify, not another dashboard to monitor.',
  },
];
