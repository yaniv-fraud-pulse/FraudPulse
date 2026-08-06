export type FaqItem = {
  q: string;
  a: string;
};

/** Buyer questions phrased the way merchants actually search and ask. */
export const homeFaqs: FaqItem[] = [
  {
    q: 'What does FraudPulse do?',
    a: 'FraudPulse connects to your transaction data, analyzes chargebacks and friendly fraud patterns, and recommends specific rules and actions you can apply in your payment stack. The goal is fewer chargebacks and less friendly fraud — without guessing which settings to change.',
  },
  {
    q: 'Which platforms can FraudPulse connect to?',
    a: 'FraudPulse takes transaction data from Shopify, Stripe, PayPal, and Adyen — plus CSV uploads when you need a flexible import path. Recommendations are written so your team can implement rule changes in the tools you already use.',
  },
  {
    q: 'How does FraudPulse reduce chargebacks and friendly fraud?',
    a: 'FraudPulse analyzes your transactions, chargebacks, and customer patterns to find what is actually driving disputes — including friendly fraud. You receive prioritized, implementable rule recommendations with estimated chargeback and false-positive impact so you fix the real causes instead of tightening rules blindly.',
  },
  {
    q: 'How long does it take to get fraud rule recommendations?',
    a: 'Most merchants get actionable fraud insights in days, not months. After you connect transaction data from Shopify, Stripe, PayPal, or Adyen, FraudPulse analyzes your patterns and delivers a prioritized list of rule changes and actions your team can apply.',
  },
  {
    q: 'Do I need to replace my payment or fraud tools?',
    a: 'No. FraudPulse is not a fraud prevention tool that replaces checkout decisioning. It sits on top of your existing stack: connect the data you already have, get ranked rule recommendations, and keep processing payments where you already process them.',
  },
  {
    q: 'What is the difference between FraudPulse and analytics & reporting?',
    a: 'Analytics and reporting tools show you what happened. FraudPulse tells you what to do next. Instead of charts you rarely act on, you get clear, ranked rule changes and actions with impact estimates — recommendations you can implement, not another report to monitor.',
  },
];
