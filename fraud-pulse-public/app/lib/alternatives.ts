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
  /** Heading above the 3-step diagram; defaults to "Engine, brain, navigation". */
  diagramTitle?: string;
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
      'A full-time fraud analyst often costs $80k+ per year, works business hours, and still guesses which rules to change. FraudPulse analyzes your chargebacks and ranks the Radar, Flow, Blockify, or RevenueProtect changes to make - without a new hire.',
    answer:
      'Hiring a full-time fraud analyst typically costs $80k+ per year plus benefits, and coverage is limited to human hours. FraudPulse is a subscription intelligence layer: connect Shopify, Stripe, or Adyen, get ranked rule changes with estimated impact, and keep your existing stack. It does not replace every ops task, but it removes the need to hire just to know which rules to change.',
    seoTitle: 'FraudPulse vs In-House Fraud Analyst',
    seoDescription:
      'Compare FraudPulse to hiring a fraud analyst. $80k+ salary vs a subscription that ranks Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect rule changes from your chargeback data.',
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
        fraudPulse: 'Ranked Radar, Flow, Blockify, or RevenueProtect changes with estimated fraud-capture and false-positive impact',
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
        a: 'Not just to know which Radar, Flow, Blockify, or RevenueProtect rules to change. FraudPulse classifies chargebacks and ranks specific settings with estimated impact. Large teams may still want people for investigations and ops. Many SMB and mid-market stores cannot justify an $80k+ hire for configuration work that an intelligence layer can do.',
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
    title: 'ClearSale alternatives and',
    titleAccent: 'SMB fraud tools.',
    excerpt:
      'Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, and Subuno score, review, or guarantee orders. FraudPulse sits on the stack you already have and tells you which Flow, Blockify, Radar, or RevenueProtect rules to change.',
    answer:
      'ClearSale, Wyllo (formerly NoFraud), FraudLabs Pro, SEON, and Subuno score, review, or guarantee orders. FraudPulse is a different job: an AI analyst that ranks Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect rule changes from your chargebacks. It does not replace those screening tools or take over checkout.',
    seoTitle: 'ClearSale Alternatives and SMB Fraud Tools',
    seoDescription:
      'ClearSale, Wyllo (formerly NoFraud), FraudLabs Pro, SEON, and Subuno score or review orders. FraudPulse ranks Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect rule changes. It does not replace them.',
    keywords:
      'ClearSale alternatives, Wyllo alternative, NoFraud alternative, FraudLabs Pro, SEON, Subuno, SMB fraud tools, Shopify fraud prevention alternatives',
    competitorLabel: 'Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, Subuno',
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
        fraudPulse: 'Does not take over checkout - you keep Radar, Flow, Blockify, RevenueProtect, or your current processor',
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
        body: 'Full platforms can be the right buy when you want a guarantee or a new system of record. If you already run Stripe Radar, Shopify Flow, Blockify, or RevenueProtect, start by changing the rules that match your disputes. FraudPulse is built for that complementary job.',
      },
      {
        title: 'No revenue share on our plans',
        body: 'We do not invent competitor prices. Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, and Subuno commonly price as a per-order, review, or guarantee fee (confirm on their sites). FraudPulse publishes a per-transaction rate and a Professional subscription so cost is not a tax on every sale.',
      },
      {
        title: 'When a screening tool is still the better buy',
        body: 'Choose Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, or Subuno if you want scoring, a review queue, or a guarantee product. FraudPulse is for merchants who already run Radar, Flow, Blockify, or RevenueProtect and need ranked rule changes on those tools.',
      },
    ],
    faqs: [
      {
        q: 'What services specialize in preventing payment fraud for small businesses?',
        a: 'Small stores usually keep Shopify Flow and Blockify (and Stripe Radar or Adyen RevenueProtect if they use those). Screening peers include Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, and Subuno. FraudPulse is the AI analyst on that stack: it ranks which rules to change. It does not replace those tools.',
      },
      {
        q: 'Does FraudPulse replace Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, or Subuno?',
        a: 'No. Those tools score, review, or guarantee orders. FraudPulse works alongside Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect: classify chargebacks, rank specific rule changes, keep your current checkout. If you need a review queue or guarantee, a screening tool is still the right category.',
      },
      {
        q: 'Will FraudPulse take over my checkout?',
        a: 'No. It does not sit in the approval path or charge a cut of sales. You connect transaction data, receive ranked Radar, Flow, Blockify, or RevenueProtect recommendations, and apply the changes yourself. Checkout stays on Shopify, Stripe, or Adyen.',
      },
    ],
    relatedHref: '/blog/best-fraud-prevention-tools-for-shopify-2026/',
    relatedLabel: 'Best fraud prevention tools for Shopify',
  },
  {
    slug: 'nofraud',
    kicker: 'Compare',
    title: 'FraudPulse vs Wyllo',
    titleAccent: '(formerly NoFraud)',
    excerpt:
      'Wyllo (formerly NoFraud), KeepSafe, Beacon, MaxMind, FraudLabs Pro, ClearSale, SEON, and Subuno score or review orders. For small Shopify stores that already run Flow or Blockify, FraudPulse ranks which Flow, Blockify, Radar, or RevenueProtect rules to change. It does not replace those tools or take over checkout.',
    answer: '',
    seoTitle: 'FraudPulse vs Wyllo (formerly NoFraud)',
    seoDescription:
      'Stripe Radar enforces at checkout. Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, and Subuno score or review orders. FraudPulse ranks Radar, Flow, Blockify, and RevenueProtect rule changes. It does not replace them.',
    keywords:
      'FraudPulse vs Wyllo, Wyllo alternative, NoFraud alternative, KeepSafe alternative, Beacon fraud prevention, MaxMind minFraud, FraudLabs Pro alternative, ClearSale alternative, SEON alternative, Subuno alternative, SMB fraud tools, AI fraud analyst',
    competitorLabel: 'Wyllo (formerly NoFraud), KeepSafe, Beacon, MaxMind, FraudLabs Pro, ClearSale, SEON, Subuno',
    tableCaption: 'SMB fraud tools vs the AI analyst',
    rows: [
      {
        label: 'Role',
        competitor: 'Score, review, or guarantee orders at checkout',
        fraudPulse: 'AI analyst: classify chargebacks and rank the next rule changes',
      },
      {
        label: 'Checkout',
        competitor: 'Often sits in the approval or review path',
        fraudPulse: 'Does not take over checkout - you keep Radar, Flow, Blockify, or RevenueProtect',
      },
      {
        label: 'Output',
        competitor: 'Approve, review, or decline decisions',
        fraudPulse: 'Ranked, specific rule or workflow changes with estimated capture and false-positive impact',
      },
      {
        label: 'Pricing model',
        competitor: 'Often per-order, review, or guarantee fees (confirm on each vendor site)',
        fraudPulse: 'Published plans: $0.01/transaction or $199/mo Professional - not a cut of order value',
      },
      {
        label: 'When to buy',
        competitor: 'You want a review queue, extra scoring, or a guarantee product',
        fraudPulse: 'You already have enforcement and need to know which settings to change',
      },
    ],
    points: [
      {
        title: 'FraudPulse is not a Wyllo (formerly NoFraud) clone',
        body: 'Wyllo (formerly NoFraud), KeepSafe, Beacon, MaxMind minFraud, FraudLabs Pro, ClearSale, SEON, and Subuno are built to score or review orders. That can be the right buy. FraudPulse does a different job: it reads your chargeback mix and tells you which Radar, Flow, Blockify, or RevenueProtect rules to change. You keep control of checkout.',
      },
      {
        title: 'Different jobs, not one winner',
        body: 'Stripe Radar is enforcement. Wyllo (formerly NoFraud), FraudLabs Pro, ClearSale, SEON, and Subuno score or review orders. FraudPulse is the analyst that ranks which Radar, Flow, Blockify, or RevenueProtect rules to change. Pick the job first. There is no single better product across those jobs.',
      },
      {
        title: 'No invented competitor prices',
        body: 'We do not invent Wyllo (formerly NoFraud), KeepSafe, Beacon, MaxMind, FraudLabs Pro, ClearSale, SEON, or Subuno fees. Their sites list per-order, review, score-API, or guarantee pricing. FraudPulse publishes a per-transaction rate and a Professional subscription so cost is not a tax on every sale. Confirm peer pricing on their sites.',
      },
    ],
    faqs: [
      {
        q: 'Does FraudPulse replace Wyllo (formerly NoFraud), KeepSafe, Beacon, or MaxMind?',
        a: 'No. Wyllo (formerly NoFraud), KeepSafe, Beacon, and MaxMind minFraud score or review orders. FraudPulse is the AI analyst alongside your stack: classify chargebacks, rank specific Radar, Flow, Blockify, or RevenueProtect changes, keep checkout. If you need a review queue, score API, or guarantee, those tools can still be the right product.',
      },
      {
        q: 'How is FraudPulse different from FraudLabs Pro, ClearSale, SEON, or Subuno?',
        a: 'Those tools — and KeepSafe, Beacon, and MaxMind — typically add screening, device or identity signals, or managed review. FraudPulse does not become your decision engine. It tells you which rules to change in tools you already run, with estimated fraud-capture and false-positive impact, after you connect Shopify, Stripe, or Adyen data.',
      },
      {
        q: 'Should I pick Wyllo (formerly NoFraud) or FraudPulse?',
        a: 'Pick Wyllo (formerly NoFraud), KeepSafe, Beacon, MaxMind, or a peer if you want another scoring or review layer at checkout. Pick FraudPulse if Radar, Flow, Blockify, or RevenueProtect already enforces and you need ranked, store-specific rule changes. Many merchants keep the enforcement tool and add FraudPulse as the analyst. It is not representment.',
      },
    ],
    relatedHref: '/stack/',
    relatedLabel: 'Using FraudPulse with Radar, Flow, Blockify, and RevenueProtect',
  },
  {
    slug: 'payment-platform-tools',
    kicker: 'Compare',
    title: 'Adyen RevenueProtect',
    titleAccent: 'and the rest of your stack.',
    excerpt:
      'Adyen RevenueProtect enforces risk at checkout, like Stripe Radar, Shopify Flow, and Blockify. FraudPulse ranks which of those rules to change for your chargeback mix.',
    answer:
      'Adyen RevenueProtect enforces risk at checkout, like Stripe Radar, Shopify Flow, and Blockify. It does not tell you which rule to change for your chargeback mix. FraudPulse ranks specific RevenueProtect, Radar, Flow, or Blockify changes with estimated impact. It does not replace RevenueProtect.',
    seoTitle: 'Adyen RevenueProtect',
    seoDescription:
      'Adyen RevenueProtect enforces at checkout. FraudPulse ranks which RevenueProtect, Stripe Radar, Shopify Flow, or Blockify rules to change for your chargebacks. It does not replace those tools.',
    keywords:
      'FraudPulse vs Stripe Radar, Shopify Flow alternative, Shopify Flow fraud, Blockify rules, optimize Radar rules, Shopify Flow not enough, Radar configuration',
    competitorLabel: 'Radar / Flow / Blockify / RevenueProtect',
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
        fraudPulse: 'Works alongside Radar, Flow, Blockify, and RevenueProtect - not a replacement',
      },
      {
        label: 'Added cost',
        competitor: 'Already in the stack you run',
        fraudPulse: 'From $0.01 per transaction, or $199/mo Professional ($159/mo billed annually); 14-day free trial',
      },
    ],
    points: [
      {
        title: 'Radar is the engine. FraudPulse is navigation.',
        body: 'The engine moves the car. Navigation tells you where to turn. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect stay in the checkout path. FraudPulse reads your chargebacks, names the patterns, and tells you which settings or workflows to change so the engine is pointed at your actual risk.',
      },
      {
        title: 'Generic rules miss your mix',
        body: 'Radar, Flow, Blockify, and RevenueProtect do not inherently know that high-value first orders or international buyers are normal for you. Blind threshold changes can raise approvals and fraud. FraudPulse measures the trade-off against your history before you loosen or tighten an act.',
      },
      {
        title: 'Same stack, better configuration',
        body: 'You do not migrate processors or rip out Radar, Flow, Blockify, or RevenueProtect. Connect data, get a ranked list, apply changes where you already manage risk. That is why FraudPulse is complementary intelligence - not another fraud console.',
      },
    ],
    diagram: [
      { from: 'Radar / Flow / Blockify / RevenueProtect', to: 'Enforcement at checkout', note: 'Engine' },
      { from: 'Your chargebacks & orders', to: 'FraudPulse analysis', note: 'Brain' },
      { from: 'Ranked rule changes', to: 'You apply in Radar, Flow, Blockify, or RevenueProtect', note: 'Navigation' },
    ],
    faqs: [
      {
        q: 'Does FraudPulse replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect?',
        a: 'No. Radar, Flow, Blockify, and RevenueProtect remain the enforcement layer that scores, blocks, or automates at checkout. FraudPulse analyzes chargeback history and ranks specific rule changes with estimated fraud-capture and false-positive percentages so you improve the tools you already run.',
      },
      {
        q: 'Why are Radar, Flow, Blockify, or RevenueProtect not enough on their own?',
        a: 'They are enough for enforcement if default settings already match your risk. They are not enough if chargebacks or false declines keep rising and you do not know which control to change. FraudPulse sits alongside them and ranks settings or workflows for your mix.',
      },
      {
        q: 'How does FraudPulse make Radar, Flow, Blockify, and RevenueProtect smarter?',
        a: 'It classifies why disputes happen on your account, then outputs a ranked list of Radar, Flow, Blockify, or RevenueProtect changes with estimated impact. You keep the engine; you stop guessing the configuration. Connect Shopify, Stripe, or Adyen in minutes with no engineering.',
      },
      {
        q: 'How does Adyen compare with other payment monitoring tools for reducing chargebacks?',
        a: 'Adyen RevenueProtect, Stripe Radar, Shopify Flow, and Blockify all enforce or automate at checkout. They reduce chargebacks only if the rules match your mix. FraudPulse ranks which of those rules to change. It does not replace Adyen or the other tools.',
      },
    ],
    relatedHref: '/stack/',
    relatedLabel: 'Using FraudPulse with Radar, Flow, Blockify, and RevenueProtect',
  },
  {
    slug: 'shopify-fraud-control',
    kicker: 'Compare',
    title: 'Shopify Fraud Control blocks what you list.',
    titleAccent: 'FraudPulse builds the list from your chargebacks.',
    excerpt:
      'Shopify Fraud Control is a free Shopify app that blocks checkout when an order matches a value on your list. FraudPulse reads your store’s chargebacks and turns the billing emails, billing streets, shipping streets, and IP addresses behind them into a blocklist you add to Fraud Control.',
    answer:
      'Shopify Fraud Control blocks an order at checkout when it matches an email, street, or IP address you have listed, while FraudPulse decides what belongs on that list by reading your own chargebacks and counting the good customers each block would also decline. You still add the Block rules in Fraud Control yourself.',
    seoTitle: 'FraudPulse vs Shopify Fraud Control',
    seoDescription:
      'Shopify Fraud Control blocks checkout from a list of emails, streets, and IPs. FraudPulse builds that list from your chargebacks and counts declined good customers first. You apply the rules in Fraud Control.',
    keywords:
      'Shopify Fraud Control, Shopify Fraud Control blocklist, block email at Shopify checkout, block IP address Shopify, Shopify blocklist from chargebacks, FraudPulse vs Shopify Fraud Control',
    competitorLabel: 'Shopify Fraud Control',
    tableCaption: 'The blocklist: who writes it, who enforces it',
    rows: [
      {
        label: 'Job',
        competitor: 'Blocks checkout when an order matches a value on your list',
        fraudPulse: 'Decides which values belong on that list',
      },
      {
        label: 'Where the list comes from',
        competitor: 'Values you type in yourself',
        fraudPulse: 'Billing email, billing street, shipping street, and IP linked to your own chargebacks',
      },
      {
        label: 'Good customers',
        competitor: 'Blocks every match, whoever else shares the value',
        fraudPulse: 'Counts the declined good customers a block would hit before you add it',
      },
      {
        label: 'Who applies the block',
        competitor: 'Fraud Control enforces it at checkout',
        fraudPulse: 'You add it in Fraud Control. FraudPulse does not touch checkout',
      },
    ],
    points: [
      {
        title: 'Use Fraud Control alone when you already know the value',
        body: 'If a chargeback came from one email or one street and you know which, add it to Fraud Control and you are done. The app is free and blocks at checkout. You do not need an analyst to type in one address.',
      },
      {
        title: 'Use FraudPulse when the list should come from your chargebacks',
        body: 'When disputes are spread across many orders, the pattern is hard to see by hand. FraudPulse links each chargeback to its billing email, billing street, shipping street, and IP, then ranks which values to block. It also counts the good customers who share each value, so a shared office street or a busy IP does not turn into lost orders.',
      },
      {
        title: 'Fraud Control still does the blocking',
        body: 'FraudPulse does not replace Fraud Control and does not sit in checkout. It hands you Block rules, and you add them in Fraud Control. Shopify Flow and Blockify are the other Shopify tools FraudPulse ranks changes for.',
      },
    ],
    diagramTitle: 'Chargebacks in, blocklist out',
    diagram: [
      { from: 'Your Shopify chargebacks', to: 'Linked to billing email, billing street, shipping street, and IP', note: 'Read' },
      { from: 'A ranked blocklist', to: 'Each value with the good customers a block would also decline', note: 'Rank' },
      { from: 'Shopify Fraud Control', to: 'You add the Block rules and the app enforces them at checkout', note: 'Block' },
    ],
    faqs: [
      {
        q: 'Is Shopify Fraud Control enough on its own?',
        a: 'Yes, when you already know which email, street, or IP address to block. Fraud Control is free and blocks those values at checkout. It does not tell you which values your chargebacks point to, or how many good customers share them.',
      },
      {
        q: 'Does FraudPulse add rules to Shopify Fraud Control for me?',
        a: 'No. FraudPulse gives you the list: billing emails, billing streets, shipping streets, and IP addresses linked to your chargebacks, ranked, with the good customers each block would decline. You add the Block rules in Fraud Control yourself.',
      },
      {
        q: 'Why count declined good customers before blocking a value?',
        a: 'A value can be shared. An office street, a forwarding address, or a busy IP can belong to good buyers as well as to the person behind a chargeback. Counting them first shows what a block would cost before it goes live.',
      },
    ],
    relatedHref: '/stack/',
    relatedLabel: 'Where FraudPulse sits in your fraud stack',
  },
  {
    slug: 'stripe-radar-assistant',
    kicker: 'Compare',
    title: 'Stripe Radar Assistant writes the rule.',
    titleAccent: 'FraudPulse tells you which rule to write.',
    excerpt:
      'Radar Assistant turns a plain-English request into a Stripe Radar rule. It writes what you ask for. FraudPulse reads your chargebacks and the good customers Radar declined, then tells you which Radar rule is worth asking for, with estimated fraud capture and false-positive impact.',
    answer:
      'Stripe Radar Assistant converts a rule you describe in plain English into a Radar rule, but it does not read your chargeback mix to decide which rule you need. FraudPulse does that part and hands you the rule to describe.',
    seoTitle: 'FraudPulse vs Stripe Radar Assistant',
    seoDescription:
      'Stripe Radar Assistant writes a Radar rule from plain English. FraudPulse reads your chargebacks and declined good customers to say which rule to write, with estimated fraud capture and false-positive impact.',
    keywords:
      'Stripe Radar Assistant, Radar Assistant rules, which Stripe Radar rule to write, Stripe Radar custom rules, Radar rules from chargebacks, FraudPulse vs Stripe Radar Assistant',
    competitorLabel: 'Stripe Radar Assistant',
    tableCaption: 'Writing a Radar rule vs choosing one',
    rows: [
      {
        label: 'Starts from',
        competitor: 'Your description of the rule you want',
        fraudPulse: 'Your chargebacks and the good customers Radar declined',
      },
      {
        label: 'Answers',
        competitor: 'How do I write this rule in Radar?',
        fraudPulse: 'Which Radar rule should I write next?',
      },
      {
        label: 'Impact before launch',
        competitor: 'Not part of writing the rule',
        fraudPulse: 'Estimated fraud capture and false-positive impact for each ranked rule',
      },
      {
        label: 'Who turns it on',
        competitor: 'You, in Radar',
        fraudPulse: 'You, in Radar. FraudPulse does not change Radar or sit in checkout',
      },
    ],
    points: [
      {
        title: 'Already know the rule? Use Radar Assistant.',
        body: 'If you already know you want to block a card country, review a high-value first order, or limit attempts per card, describe it to Radar Assistant and it writes the rule. That is the fastest path, and FraudPulse adds nothing to it.',
      },
      {
        title: 'Not sure which rule? Start with the chargebacks.',
        body: 'Most Stripe merchants do not lack rule syntax. They lack a clear answer on which pattern is costing them. FraudPulse classifies your Stripe chargebacks, checks which good customers Radar already declined, and ranks the Radar rules worth adding, tightening, or removing.',
      },
      {
        title: 'Then give the wording to Radar Assistant',
        body: 'Each FraudPulse recommendation comes as a plain description of the rule. You can hand that wording to Radar Assistant to get the Radar rule, then decide whether it blocks or sends to review. Radar stays the enforcement layer.',
      },
    ],
    diagramTitle: 'Choose the rule, then write it',
    diagram: [
      { from: 'Your Stripe chargebacks', to: 'Plus the good customers Radar declined', note: 'Diagnose' },
      { from: 'FraudPulse ranking', to: 'Which Radar rule to write, with estimated fraud capture and false positives', note: 'Choose' },
      { from: 'Stripe Radar Assistant', to: 'Writes that rule from your words, and you turn it on', note: 'Write' },
    ],
    faqs: [
      {
        q: 'What does Stripe Radar Assistant do?',
        a: 'It writes a Stripe Radar rule from a plain-English description. It does not look at your dispute history to tell you which rule you should describe.',
      },
      {
        q: 'Can I use FraudPulse with Radar Assistant?',
        a: 'Yes. FraudPulse names the rule and its estimated impact. Radar Assistant writes it as a Radar rule. You decide whether it blocks or sends the payment to review.',
      },
      {
        q: 'Does FraudPulse change my Radar rules?',
        a: 'No. FraudPulse reads your data and recommends. You add, edit, or remove rules in Radar. FraudPulse is not in the payment path.',
      },
    ],
    relatedHref: '/alternatives/shopify-fraud-control/',
    relatedLabel: 'FraudPulse vs Shopify Fraud Control',
  },
  {
    slug: 'chargeflow',
    kicker: 'Compare',
    title: 'Chargeflow fights the dispute.',
    titleAccent: 'FraudPulse works on the next one.',
    excerpt:
      'Chargeflow is a representment vendor: once a customer files a dispute, it builds and submits the response. FraudPulse works earlier. It classifies each dispute, ranks the rule changes for the fraud types behind them, and for Friendly Fraud gives you an evidence file to submit yourself.',
    answer:
      'Chargeflow fights a dispute after the customer has filed it, while FraudPulse classifies the dispute, ranks the fraud-rule changes aimed at fewer disputes next month, and offers a compelling-evidence file only when the dispute is Friendly Fraud.',
    seoTitle: 'FraudPulse vs Chargeflow',
    seoDescription:
      'Chargeflow fights disputes after they are filed. FraudPulse classifies disputes, ranks rule changes so fewer are filed, and gives a Friendly Fraud evidence file you submit yourself. It does not file representment.',
    keywords:
      'Chargeflow alternative, FraudPulse vs Chargeflow, chargeback representment vs prevention, friendly fraud evidence file, compelling evidence chargeback, prevent chargebacks before they are filed',
    competitorLabel: 'Chargeflow',
    tableCaption: 'After the dispute vs before the next one',
    rows: [
      {
        label: 'When it works',
        competitor: 'After the customer files the dispute',
        fraudPulse: 'Before the next dispute, through ranked rule changes, plus a Friendly Fraud evidence file for one already filed',
      },
      {
        label: 'Representment',
        competitor: 'Builds and submits the response for you',
        fraudPulse: 'Does not file representment. You download the Friendly Fraud file and submit it yourself',
      },
      {
        label: 'By dispute type',
        competitor: 'Fights the disputes you send it',
        fraudPulse: 'Friendly Fraud: evidence file. BIN Attack: recommends against representment. ATO, Geo-Mismatch, Identity Fraud: no evidence file. Non Fraud: a consumer dispute, not a fraud-rule problem',
      },
      {
        label: 'Pricing',
        competitor: 'Confirm the fee on Chargeflow’s site',
        fraudPulse: 'Listed on the FraudPulse pricing page',
      },
    ],
    points: [
      {
        title: 'Chargeflow is the buy when the dispute is already filed',
        body: 'If disputes are open and you want a vendor to build and submit the responses, that is Chargeflow’s job. FraudPulse does not file representment and does not win disputes for you. Confirm Chargeflow’s fee on its own site.',
      },
      {
        title: 'FraudPulse sorts the dispute before anyone fights it',
        body: 'Not every dispute is worth fighting. FraudPulse classifies each one first. A BIN Attack comes from card testing, and the product recommends against representment. ATO, Geo-Mismatch, and Identity Fraud get no evidence file, because the fix is a rule change. Non Fraud is a consumer dispute about the order, not a fraud-rule problem.',
      },
      {
        title: 'A Friendly Fraud file you submit yourself',
        body: 'When the dispute is Friendly Fraud, FraudPulse can produce a compelling-evidence file as a PDF or Word document. It can include up to 5 earlier good payments from the same buyer. You download it and submit it yourself. FraudPulse does not send it to the issuer.',
      },
    ],
    diagramTitle: 'Classify, then decide',
    diagram: [
      { from: 'Each dispute', to: 'Friendly Fraud, BIN Attack, ATO, Geo-Mismatch, Identity Fraud, or Non Fraud', note: 'Classify' },
      { from: 'Ranked rule changes', to: 'For the fraud types behind your disputes, applied in your own tools', note: 'Prevent' },
      { from: 'Friendly Fraud evidence file', to: 'PDF or Word, with up to 5 earlier good payments; you submit it', note: 'Evidence' },
    ],
    faqs: [
      {
        q: 'Does FraudPulse replace Chargeflow?',
        a: 'No. Chargeflow fights disputes that are already filed. FraudPulse works on why disputes happen and ranks rule changes so fewer get filed. If you want a vendor to submit responses for you, that is Chargeflow.',
      },
      {
        q: 'Does FraudPulse submit evidence to the issuer?',
        a: 'No. For Friendly Fraud disputes, FraudPulse gives you a PDF or Word evidence file that can include up to 5 earlier good payments from the same buyer. You download it and submit it yourself.',
      },
      {
        q: 'Why does FraudPulse advise against fighting some disputes?',
        a: 'A BIN Attack dispute comes from card testing, so the product recommends against representment. ATO, Geo-Mismatch, and Identity Fraud disputes get no evidence file. The useful step there is a rule change that stops the next one.',
      },
    ],
    relatedHref: '/blog/friendly-fraud-vs-real-fraud-shopify/',
    relatedLabel: 'Friendly fraud vs stolen cards',
  },
];

export function getAlternative(slug: string): AlternativePage | undefined {
  return alternativePages.find((p) => p.slug === slug);
}
