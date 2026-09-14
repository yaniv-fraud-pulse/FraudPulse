import type { FaqItem } from './homeFaq';

export type AlternativeRow = {
  label: string;
  competitor: string;
  fraudPulse: string;
};

export type AlternativePage = {
  slug: string;
  kicker: string;
  title: string;
  titleAccent: string;
  excerpt: string;
  answer: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  competitorLabel: string;
  tableCaption: string;
  rows: AlternativeRow[];
  points: { title: string; body: string }[];
  diagram?: { from: string; to: string; note: string }[];
  faqs: FaqItem[];
  relatedHref: string;
  relatedLabel: string;
};

export const alternativePages: AlternativePage[] = [
  {
    slug: 'manual-fraud-analyst',
    kicker: 'Compare',
    title: "Don't hire a fraud analyst.",
    titleAccent: 'Automate your fraud intelligence.',
    excerpt:
      'A full-time fraud analyst often costs $80k+ per year, works business hours, and still guesses which rules to change. FraudPulse analyzes your chargebacks and ranks the Radar or Protect changes to make - without a new hire.',
    answer:
      'Hiring a full-time fraud analyst typically costs $80k+ per year plus benefits, and coverage is limited to human hours. FraudPulse is a subscription intelligence layer: connect Shopify, Stripe, or Adyen, get ranked rule changes with estimated impact, and keep your existing stack. It does not replace every ops task, but it removes the need to hire just to know which rules to change.',
    seoTitle: 'FraudPulse vs In-House Fraud Analyst',
    seoDescription:
      'Compare FraudPulse to hiring a fraud analyst. $80k+ salary vs a subscription that ranks Stripe Radar and Shopify Protect rule changes from your chargeback data.',
    keywords:
      'FraudPulse vs fraud analyst, in-house fraud team, hire fraud analyst, automated fraud intelligence, SMB fraud ops',
    competitorLabel: 'In-house fraud analyst',
    tableCaption: 'Cost, coverage, and output',
    rows: [
      {
        label: 'Typical cost',
        competitor: '$80k+ salary plus benefits and recruiting',
        fraudPulse: 'From $0.01 per transaction, or $199/mo Professional ($159/mo billed annually)',
      },
      {
        label: 'Coverage',
        competitor: 'Business hours, limited by headcount',
        fraudPulse: 'Analysis of your transaction and chargeback history whenever you connect data',
      },
      {
        label: 'Output',
        competitor: 'Manual reviews and ad-hoc rule edits',
        fraudPulse: 'Ranked Radar or Protect changes with estimated fraud-capture and false-positive impact',
      },
      {
        label: 'Setup',
        competitor: 'Hire, train, and retain',
        fraudPulse: 'Connect in minutes - no engineering required',
      },
    ],
    points: [
      {
        title: 'Salary vs subscription',
        body: 'A US fraud analyst role commonly starts around $80k plus benefits. FraudPulse Professional is $199 per month ($159 billed annually), with a 14-day free trial. Pay-as-you-go is $0.01 per transaction up to 20K per month. See pricing for current plans.',
      },
      {
        title: 'Business hours vs always-on data',
        body: 'Manual review queues move at human speed. FraudPulse classifies your chargeback mix and returns prioritized rule changes your payments or risk owner can apply in Stripe or Shopify - including when you do not have a dedicated analyst on staff.',
      },
      {
        title: 'Guessing vs measured trade-offs',
        body: 'Analysts often change a threshold, then wait to see what happens. Each FraudPulse recommendation includes estimated fraud-capture and false-positive impact so you measure the trade-off before you ship the rule.',
      },
    ],
    faqs: [
      {
        q: 'Do I still need an in-house fraud analyst if I use FraudPulse?',
        a: 'Not just to know which Radar or Protect rules to change. FraudPulse classifies chargebacks and ranks specific settings with estimated impact. Large teams may still want people for investigations and ops. Many SMB and mid-market stores cannot justify an $80k+ hire for configuration work that an intelligence layer can do.',
      },
      {
        q: 'How much does a fraud analyst cost vs FraudPulse?',
        a: 'A full-time analyst is often $80k+ per year plus benefits. FraudPulse Professional is $199 per month, or $159 per month billed annually, with pay-as-you-go at $0.01 per transaction. Every plan includes a 14-day trial. FraudPulse does not replace payroll for a full ops team; it replaces guessing which rules to change.',
      },
      {
        q: 'Can FraudPulse replace a full fraud operations team?',
        a: 'No. It does not review every alert or fight chargebacks after they file. It analyzes transaction and dispute data and recommends ranked rule changes in the stack you already run. That is the job most growing merchants hire an analyst to do first - and the job that is slowest to scale by headcount.',
      },
    ],
    relatedHref: '/blog/billion-dollar-companies-with-two-person-fraud-teams/',
    relatedLabel: 'Why small fraud teams can still work',
  },
  {
    slug: 'smb-fraud-tools',
    kicker: 'Compare',
    title: 'Fraud intelligence without the',
    titleAccent: 'black box or revenue tax.',
    excerpt:
      'Signifyd, NoFraud, and Riskified are full platforms - often a percentage of sales and a new decision path at checkout. FraudPulse sits on the stack you already have and tells you which Stripe or Shopify rules to change.',
    answer:
      'Traditional SMB and mid-market fraud tools such as Signifyd, NoFraud, and Riskified often operate as full platforms or guarantee products: they can sit in checkout and charge a share of volume. FraudPulse is an intelligence layer. It does not take over checkout or replace those products. It classifies your chargebacks and ranks Protect or Radar changes so you keep control and a published subscription or per-transaction fee.',
    seoTitle: 'FraudPulse vs Signifyd, NoFraud, and Riskified',
    seoDescription:
      'FraudPulse vs SMB fraud platforms. Signifyd, NoFraud, and Riskified are often full-stack or % of sales. FraudPulse ranks Stripe and Shopify rules without taking over checkout.',
    keywords:
      'FraudPulse vs Signifyd, Signifyd alternative, NoFraud alternative, Riskified alternative, SMB fraud tools, Shopify fraud',
    competitorLabel: 'Signifyd, NoFraud, Riskified',
    tableCaption: 'Pricing, checkout, and role',
    rows: [
      {
        label: 'Pricing model',
        competitor: 'Often a percentage of sales or a guarantee contract (vendor pricing on their sites)',
        fraudPulse: 'Published plans: $0.01/transaction or $199/mo Professional - not a cut of order value',
      },
      {
        label: 'Checkout impact',
        competitor: 'Can become the decision path at checkout',
        fraudPulse: 'Does not take over checkout - you keep Radar, Protect, or your current processor',
      },
      {
        label: 'Role',
        competitor: 'Full platform, scoring, and sometimes a chargeback guarantee',
        fraudPulse: 'Intelligence layer: ranked rule changes from your chargeback mix',
      },
      {
        label: 'Setup time',
        competitor: 'Platform onboarding and integration',
        fraudPulse: 'Connect Shopify, Stripe, or Adyen in minutes - no engineering',
      },
      {
        label: 'Control',
        competitor: 'Often a black box - the vendor decides',
        fraudPulse: 'You keep full control of which rules to apply',
      },
    ],
    points: [
      {
        title: 'Not a rip-and-replace',
        body: 'Full platforms can be the right buy when you want a guarantee or a new system of record. If you already run Stripe Radar or Shopify Protect, start by changing the rules that match your disputes. FraudPulse is built for that complementary job.',
      },
      {
        title: 'No revenue share on our plans',
        body: 'We do not invent competitor prices. Signifyd, NoFraud, and Riskified commonly price as a share of GMV or a managed/guarantee fee. FraudPulse publishes a per-transaction rate and a Professional subscription so cost is not a tax on every sale.',
      },
      {
        title: 'When a full platform is still the better buy',
        body: 'Choose Signifyd, Riskified, or similar if you want a guarantee product or a new decision engine. FraudPulse is not a Signifyd clone. It is for merchants who want ranked Protect or Radar changes on the tools they already run.',
      },
    ],
    faqs: [
      {
        q: 'Is FraudPulse cheaper than Signifyd?',
        a: 'Often, for merchants who already have Radar or Protect and do not need a guarantee platform. Signifyd typically prices as a full-stack or percentage-of-sales model (confirm on their site). FraudPulse Professional is $199 per month, or $0.01 per transaction on pay-as-you-go, with a 14-day trial and no checkout takeover.',
      },
      {
        q: 'Does FraudPulse replace Signifyd, NoFraud, or Riskified?',
        a: 'No. Those are full fraud platforms. FraudPulse works alongside Shopify Protect and Stripe Radar: classify chargebacks, rank specific rule changes, keep your current checkout. If you need a guarantee or a new system of record, a platform is still the right category.',
      },
      {
        q: 'Will FraudPulse take over my checkout?',
        a: 'No. It does not sit in the approval path or charge a cut of sales. You connect transaction data, receive ranked Protect or Radar recommendations, and apply the changes yourself. Checkout stays on Shopify, Stripe, or Adyen.',
      },
    ],
    relatedHref: '/blog/best-fraud-prevention-tools-for-shopify-2026/',
    relatedLabel: 'Best fraud prevention tools for Shopify',
  },
  {
    slug: 'payment-platform-tools',
    kicker: 'Compare',
    title: 'Make Stripe Radar and Shopify Protect',
    titleAccent: 'smarter.',
    excerpt:
      'Radar and Protect are strong enforcement layers, but they are generic. They do not tell you which rules to change for your chargeback mix. FraudPulse is the brain: it analyzes your disputes and ranks store-specific settings.',
    answer:
      'Stripe Radar and Shopify Protect score and block risk at checkout. They are the engine. They are not automatically tuned to your store as fraud shifts. FraudPulse classifies your chargebacks and outputs ranked Radar or Protect changes with estimated fraud-capture and false-positive rates. Keep Radar and Protect on. Use FraudPulse to configure them for your data.',
    seoTitle: 'FraudPulse vs Stripe Radar and Shopify Protect',
    seoDescription:
      'Stripe Radar and Shopify Protect enforce at checkout. FraudPulse ranks which rules to change for your store so you cut chargebacks and false declines without replacing them.',
    keywords:
      'FraudPulse vs Stripe Radar, Shopify Protect alternative, optimize Radar rules, Shopify Protect not enough, Radar configuration',
    competitorLabel: 'Stripe Radar / Shopify Protect',
    tableCaption: 'Built-in enforcement vs store-specific optimization',
    rows: [
      {
        label: 'Role',
        competitor: 'Enforce decisions at checkout',
        fraudPulse: 'Advise which rules and actions to change next',
      },
      {
        label: 'Optimization',
        competitor: 'Generic models plus rules you configure',
        fraudPulse: 'Store-specific ranking from your chargeback and transaction history',
      },
      {
        label: 'False declines',
        competitor: 'You guess thresholds and wait',
        fraudPulse: 'Estimated false-positive impact on each recommended change',
      },
      {
        label: 'Replacement',
        competitor: 'Keep these on - they are the enforcement layer',
        fraudPulse: 'Works alongside Radar and Protect - not a replacement',
      },
    ],
    points: [
      {
        title: 'Radar is the engine. FraudPulse is navigation.',
        body: 'The engine moves the car. Navigation tells you where to turn. Stripe Radar and Shopify Protect stay in the checkout path. FraudPulse reads your chargebacks, names the patterns, and tells you which settings to change so the engine is pointed at your actual risk.',
      },
      {
        title: 'Generic rules miss your mix',
        body: 'Protect and Radar do not inherently know that high-value first orders or international buyers are normal for you. Blind threshold changes can raise approvals and fraud. FraudPulse measures the trade-off against your history before you loosen or tighten an act.',
      },
      {
        title: 'Same stack, better configuration',
        body: 'You do not migrate processors or rip out Radar. Connect data, get a ranked list, apply changes where you already manage risk. That is why FraudPulse is complementary intelligence - not another fraud console.',
      },
    ],
    diagram: [
      { from: 'Stripe Radar / Shopify Protect', to: 'Enforcement at checkout', note: 'Engine' },
      { from: 'Your chargebacks & orders', to: 'FraudPulse analysis', note: 'Brain' },
      { from: 'Ranked rule changes', to: 'You apply in Radar or Protect', note: 'Navigation' },
    ],
    faqs: [
      {
        q: 'Does FraudPulse replace Stripe Radar or Shopify Protect?',
        a: 'No. Radar and Protect remain the enforcement layer that scores and blocks at checkout. FraudPulse analyzes chargeback history and ranks specific rule changes with estimated fraud-capture and false-positive percentages so you improve the tools you already run.',
      },
      {
        q: 'Why is Shopify Protect or Radar not enough on its own?',
        a: 'They are enough for enforcement if default settings already match your risk. They are not enough if chargebacks or false declines keep rising and you do not know which control to change. FraudPulse sits alongside them and ranks settings for your mix.',
      },
      {
        q: 'How does FraudPulse make Radar and Protect smarter?',
        a: 'It classifies why disputes happen on your account, then outputs a ranked list of Radar or Protect changes with estimated impact. You keep the engine; you stop guessing the configuration. Connect Shopify, Stripe, or Adyen in minutes with no engineering.',
      },
    ],
    relatedHref: '/blog/fraudpulse-does-not-replace-stripe-radar-shopify-protect/',
    relatedLabel: 'Why FraudPulse does not replace Radar or Protect',
  },
];

export function getAlternative(slug: string): AlternativePage | undefined {
  return alternativePages.find((p) => p.slug === slug);
}
