import type { BlogPost } from './blog';

export const seasonalGuides: BlogPost[] = [
  {
    slug: 'bfcm-fraud-checklist-stripe-radar-shopify-flow-blockify',
    title: 'BFCM Fraud Checklist: Prepping Stripe, Shopify & Adyen',
    excerpt:
      'BFCM fraud defense is tactical tuning in Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect about two weeks before the surge. Tighten card-testing rules, adjust velocity thresholds for peak traffic, and staff the review queue so testing gets caught without false declines. FraudPulse ranks those changes. It does not replace those tools.',
    category: 'Guide',
    date: 'November 17, 2026',
    readTime: '7 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">BFCM fraud defense is tactical tuning in Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect about two weeks before the surge. Tighten card-testing rules, adjust velocity thresholds for peak traffic, and staff the review queue so testing gets caught without false declines. FraudPulse ranks those changes. It does not replace those tools.</p>

<img src="/images/blog/bfcm-fraud-checklist-stripe-radar-shopify-flow-blockify.png" alt="BFCM fraud checklist for Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect" width="1200" height="630" />

<p>Black Friday and Cyber Monday (BFCM) bring a flood of orders. Fraudsters use that flood to hide card testing and stolen-card attempts inside legitimate holiday traffic. Waiting until the rush starts means you are tuning rules while checkout is already under load. The work belongs in the tools you already run, about two weeks out.</p>

<h2>Two weeks out: tune the tools you already have</h2>

<p>You do not need a new checkout vendor for BFCM. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect already decide which payments to allow, review, or block. The job is to change the rules that will misfire when volume jumps, and to leave room for good customers who buy more, faster, and from new devices.</p>

<p>Do this before the surge, not during it:</p>

<ul>
  <li>Tighten card-testing rules so rapid low-value attempts do not ride along with real holiday orders.</li>
  <li>Raise or reshape velocity thresholds so a genuine customer buying gifts for several people is not treated like a bot.</li>
  <li>Staff the manual review queue. A rule that sends every borderline order to review will bury the queue on Friday morning.</li>
</ul>

<h2>Stripe Radar</h2>

<p>Radar is the enforcement layer for Stripe checkouts. Before BFCM, review three settings.</p>

<p><strong>Card testing.</strong> Look for many small attempts, many cards, or many failures from the same email, IP, or device in a short window. Block or step up those patterns. A single failed payment from a returning customer is not the same pattern.</p>

<p><strong>Velocity.</strong> Holiday buyers place more orders, use phones on store wifi, and ship to addresses that are not their billing address. A velocity rule that was correct in October can decline good customers in late November. Adjust the threshold for peak traffic, and keep a tighter rule for the card-testing pattern.</p>

<p><strong>Review queue and allow-lists.</strong> If Radar sends an order to review, someone has to clear it before the customer gives up. Allow-list known good customers and your own test cards so they do not consume review time. Do not allow-list a whole country or a whole BIN range to “get through the weekend.”</p>

<h2>Shopify Flow and Blockify</h2>

<p>Shopify Flow and Blockify are the controls most Shopify stores already have. Use them for the same three jobs: card testing, velocity, and a review path that a person can actually clear.</p>

<p>Flow is where you hold or tag an order before it ships. Blockify is where you block known-bad signals at checkout. Put card-testing velocity in the block path. Put “new customer, high amount, mismatched address” in a hold that your team can release, not in a silent decline. A silent decline during BFCM is a lost order you will not see in the dispute report.</p>

<h2>Adyen RevenueProtect</h2>

<p>If you process on Adyen, RevenueProtect is the same kind of control. Review risk rules that fire on velocity, card testing, and mismatched shipping before the traffic spike. Do not add a new rule on Friday because a single order looked odd. Change the rule that has been declining good customers, or the rule that has been letting testing through, and leave the rest alone until you can measure it.</p>

<h2>Dispute evidence and false declines</h2>

<p>BFCM chargebacks arrive in December and January, after the campaign is over. While orders are flowing, save what you will need later: delivery confirmation, the billing descriptor the customer saw, and the policy they accepted. That evidence matters for friendly fraud. It does not fix a checkout rule that declined a good customer who never placed the order.</p>

<p>False declines are the other BFCM cost. A tighter card-testing rule is useful. A blanket velocity cut is not. If the review queue is already full, more “review” outcomes are declines in practice.</p>

<h2>What FraudPulse does in this stack</h2>

<p>FraudPulse does not replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect, and it does not take over checkout. It reads the transactions and disputes you already have and ranks which of those rules to change, with an estimate of fraud captured and good customers declined. For BFCM, that ranking is how you decide which threshold to move before the surge, instead of editing rules while the queue is on fire.</p>

<p>See <a href="/how-it-works/">how the ranked changes fit the tools you already run</a>, or <a href="/book-a-demo/">book a walkthrough</a> before your peak week.</p>
`.trim(),
    faqs: [
      {
        q: 'When should I change fraud rules for Black Friday?',
        a: 'About two weeks before the surge. Tighten card-testing rules, adjust velocity for peak traffic, and make sure the review queue can be cleared. Changing rules on Black Friday itself means you are tuning checkout while volume is already high.',
      },
      {
        q: 'Does FraudPulse replace Stripe Radar, Shopify Flow, or Blockify for BFCM?',
        a: 'No. Those tools still allow, review, or block payments. FraudPulse ranks which of their rules to change so you catch card testing without declining good holiday customers.',
      },
    ],
  },
  {
    slug: 'friendly-fraud-vs-real-fraud-shopify',
    title: 'Friendly Fraud vs. Stolen Cards on Shopify Chargebacks',
    excerpt:
      'Up to 70% of chargebacks coded as fraud are friendly fraud: buyer remorse, family sharing, or an unrecognized billing descriptor. Tuning checkout rules against them causes false declines, because the telemetry was legitimate at checkout. Real fraud needs velocity and AVS rules. Friendly fraud needs delivery proof and a clearer policy.',
    category: 'Guide',
    date: 'November 17, 2026',
    readTime: '6 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Up to 70% of chargebacks coded as fraud are friendly fraud: buyer remorse, family sharing, or an unrecognized billing descriptor. Tuning checkout rules against them causes false declines, because the telemetry was legitimate at checkout. Real fraud needs velocity and AVS rules. Friendly fraud needs delivery proof and a clearer policy.</p>

<img src="/images/blog/friendly-fraud-vs-real-fraud-shopify.png" alt="How friendly fraud differs from stolen-card fraud on Shopify chargebacks" width="1200" height="630" />

<p>A Shopify chargeback coded as “fraud” is often not a stolen card. Treating a real customer like a carding bot is a fast way to decline people who were going to keep the order. The reason code tells you what the cardholder told the bank. It does not tell you whether the checkout looked stolen.</p>

<h2>The reason code is not the diagnosis</h2>

<p>Visa 10.4 and Mastercard 4837 both mean the cardholder says they did not authorize the payment. That bucket includes stolen cards. It also includes buyer’s remorse, a family member who used the card, and a billing descriptor the customer did not recognize. Those last three are friendly fraud. The card, the device, and the address were legitimate when Shopify approved the order.</p>

<p>If you answer every 10.4 by tightening checkout, you add friction to the next good customer who looks like the last dispute. The telemetry at checkout was not the problem. The problem showed up after delivery, when someone decided to dispute.</p>

<h2>Signals that separate the two</h2>

<p>Look at the order, not only the code:</p>

<ul>
  <li><strong>Distance and history.</strong> A first-time card, a shipping address far from the billing address, and no prior orders point toward stolen-card fraud. A returning customer, a known address, and a normal device point toward friendly fraud.</li>
  <li><strong>Card testing.</strong> Many small attempts, many cards, or a spike of failures before one success is real fraud. One completed order from a normal session is not.</li>
  <li><strong>What happened after purchase.</strong> Delivered, opened, or used, then disputed, is friendly fraud. Never delivered, or shipped to an address the customer immediately said was wrong, is a different case. Save the tracking record either way.</li>
  <li><strong>The descriptor.</strong> If the name on the card statement is not the store name the customer remembers, you will get “fraud” disputes from people who did buy.</li>
</ul>

<h2>What to change for real fraud</h2>

<p>Stolen cards and card testing are checkout problems. Use velocity and AVS in Stripe Radar or Adyen RevenueProtect, and use Blockify to block the pattern before capture. A rule that stops ten cards tried in a minute does not belong on a loyal customer who reordered the same product.</p>

<p>Do not copy a screening tool’s decline into your own rules just because a chargeback later arrived with a fraud code. <a href="/alternatives/nofraud/">Wyllo (formerly NoFraud), FraudLabs Pro, and SEON</a> score or review orders. They are a different job from ranking which Radar, Flow, or Blockify rule to edit.</p>

<h2>What to change for friendly fraud</h2>

<p>Friendly fraud is mostly won or lost after the sale, and in how the order was described. In Shopify Flow, require a signature or a hold when the amount and the address justify it. Put serial abusers on a blocklist after you have confirmed the pattern. Those steps do not fix a stolen card that should never have been captured. They do give you a delivery record and a policy the customer saw.</p>

<p>Make the billing descriptor match the store name. State the refund window where the customer checks out. A dispute you can answer with delivery proof is not the same loss as a good customer you declined last Tuesday.</p>

<h2>Measure capture and false declines separately</h2>

<p>A fraud rule can cut chargebacks and still lose more in declined revenue than it saves. Track how many good customers the rule stops, not only how many disputes it would have caught. If a velocity or AVS change mostly hits orders that never become disputes, loosen that change and spend the effort on delivery proof and the descriptor instead.</p>

<p>FraudPulse does not replace Shopify Flow, Blockify, Stripe Radar, or Adyen RevenueProtect, and it does not submit chargeback responses. It classifies which disputes were friendly fraud versus stolen cards, then ranks the rule change that fits that mix. Start with <a href="/how-it-works/">how classification turns into a rule change</a>.</p>
`.trim(),
    faqs: [
      {
        q: 'How do I tell friendly fraud from real fraud on Shopify chargebacks?',
        a: 'Read the order, not only the reason code. Stolen cards and card testing show velocity, new cards, and mismatched addresses at checkout. Friendly fraud is a real customer — remorse, family use, or an unrecognized descriptor — whose checkout looked legitimate. Delivery proof and a clear policy answer the second case. Velocity and AVS rules answer the first.',
      },
      {
        q: 'Should I tighten checkout rules after a fraud-coded chargeback?',
        a: 'Only when the checkout telemetry was actually stolen-card or card-testing activity. Tightening rules against friendly fraud declines good customers, because their payment looked legitimate at the time.',
      },
    ],
  },
  {
    slug: 'stripe-radar-pricing-2027-visa-vamp-guide',
    title: 'Stripe Radar 2027 Pricing & Visa VAMP: What Small Merchants Must Change',
    excerpt:
      'Since 21 October 2026, Stripe Radar screens every payment method, not only cards. Discounted accounts move to standard pricing from 22 January 2027, at $0.05 or $0.07 per screened transaction. Visa VAMP’s 1.5% threshold counts fraud reports and disputes together. A refund after authorization does not erase a TC40.',
    category: 'News',
    date: 'November 17, 2026',
    readTime: '6 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Since 21 October 2026, Stripe Radar screens every payment method, not only cards. Discounted accounts move to standard pricing from 22 January 2027, at $0.05 or $0.07 per screened transaction. Visa VAMP’s 1.5% threshold counts fraud reports and disputes together. A refund after authorization does not erase a TC40.</p>

<p>Two public changes hit the same checkout. Stripe is widening what Radar screens and ending discounted Radar pricing on a published date. Visa’s Acquirer Monitoring Program (VAMP) already counts fraud reports and dispute claims in one ratio. A cancel or refund after the payment is authorized does not unwind that ratio.</p>

<h2>Stripe Radar pricing, and the 22 January 2027 date</h2>

<p>Since 21 October 2026, Radar screens all payment methods, not only cards. If a rule is still attached to a flow that never produces disputes, you pay to screen it anyway.</p>

<p>Existing accounts on a discounted Radar rate move to standard Radar pricing starting 22 January 2027. Stripe’s published screening rates are $0.05 and $0.07 per transaction screened, depending on the Radar plan. Confirm which rate applies to your account on <a href="https://stripe.com/radar/pricing">Stripe’s Radar pricing page</a> before you model the January bill.</p>

<p>The practical cut is zombie rules. A rule that has never matched a dispute still triggers screening on the payments it covers. Turn those rules off, or stop attaching Radar to zero-risk flows, so you are not paying to screen traffic that has not produced disputes. Keep the rules that actually catch card testing and stolen cards.</p>

<h2>Visa VAMP counts TC40 and TC15 together</h2>

<p>As of April 2026, the Excessive Merchant threshold in Visa’s Acquirer Monitoring Program is <strong>1.5% (150 basis points)</strong> in the United States, Canada, the EU, and AP. Visa’s own <a href="https://corporate.visa.com/content/dam/VCOM/corporate/visa-perspectives/security-and-trust/documents/visa-acquirer-monitoring-program-fact-sheet-2025.pdf">VAMP fact sheet</a> is the source for that threshold. The ratio is not “chargebacks only.” VAMP adds fraud reports (TC40) and dispute claims (TC15).</p>

<p>That is why a post-authorization cleanup fails. Refunding or cancelling a suspicious order after it has been authorized does <strong>not</strong> erase the TC40 fraud report, unless the transaction is handled through Visa Rapid Dispute Resolution (RDR) or Order Insight. The fraud report can already be in the numerator. The refund shows up in your books. It does not, by itself, take the report out of VAMP.</p>

<h2>What small merchants have to change</h2>

<p>You cannot rely on a person cancelling the order after Stripe, Shopify, or Adyen has authorized it. The block, the 3-D Secure step-up, or the hold has to happen up front:</p>

<ul>
  <li><strong>Stripe Radar.</strong> Block or send to 3DS before authorization for card testing and the velocity patterns that become TC40s. Remove rules that have never caught a dispute, so the January screening price is not spent on them.</li>
  <li><strong>Shopify Flow and Blockify.</strong> Block or hold the same patterns before capture. A Flow job that cancels the order an hour later is too late for the TC40.</li>
  <li><strong>Adyen RevenueProtect.</strong> If Adyen is the processor, the same rule applies: stop the payment in RevenueProtect before authorization, not in a manual queue after it.</li>
</ul>

<h2>Checklist</h2>

<ol>
  <li>Write down the date your discounted Radar rate ends. Standard pricing starts 22 January 2027 at $0.05 or $0.07 per screened transaction.</li>
  <li>List Radar rules that have never matched a dispute. Remove them, or take screening off the zero-risk flows they cover.</li>
  <li>Confirm Radar is screening the non-card methods you actually accept, not only cards. That scope has been in place since 21 October 2026.</li>
  <li>Move card-testing and high-risk velocity to a block or a 3DS challenge before authorization. Do this in Radar, and in Shopify Flow or Blockify if the order starts on Shopify.</li>
  <li>Stop treating “refund it after we look at it” as VAMP protection. A later refund does not erase a TC40 unless you use Visa RDR or Order Insight.</li>
  <li>Separate friendly fraud from stolen cards. Delivery proof and a clear billing descriptor answer remorse disputes. They do not answer a TC40 that should have been blocked at checkout. See <a href="/blog/friendly-fraud-vs-real-fraud-shopify/">friendly fraud versus stolen cards</a>.</li>
</ol>

<p>FraudPulse does not replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect, and it does not sit in the authorization path. It ranks which of those rules are worth keeping once screening is no longer cheap and once a late refund no longer fixes the Visa ratio. The fit is described on <a href="/stack/">the stack page</a>.</p>

<p>To check your own count-based VAMP ratio and how much room is left under 1.50%, use the free <a href="/tools/chargeback-ratio/">chargeback ratio and Visa VAMP calculator</a>. The math runs in your browser.</p>
`.trim(),
    faqs: [
      {
        q: 'When does Stripe Radar move discounted accounts to standard pricing?',
        a: 'Starting 22 January 2027. Since 21 October 2026, Radar screens all payment methods, not only cards. Standard screening rates are $0.05 or $0.07 per transaction screened, depending on the Radar plan. Confirm the rate on Stripe’s pricing page.',
      },
      {
        q: 'Does refunding an order remove it from Visa VAMP?',
        a: 'No. VAMP’s 1.5% threshold in the US, Canada, the EU, and AP counts fraud reports (TC40) and dispute claims (TC15). A refund after authorization does not erase a TC40 unless the case goes through Visa RDR or Order Insight. Block or 3DS-authenticate before authorization.',
      },
    ],
  },
];
