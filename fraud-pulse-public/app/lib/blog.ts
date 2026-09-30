import { toolComparisonTableHtml } from './toolComparison';

export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** Visible "Last updated" date; defaults to `date` when omitted. */
  updatedAt?: string;
  readTime: string;
  author: string;
  authorRole: string;
  content: string;
  faqs?: BlogFaq[];
};

export const posts: BlogPost[] = [
  {
    slug: 'declining-more-transactions-loses-good-customers',
    title: 'Declining More Transactions Reduces Fraud - and Loses Good Customers',
    excerpt:
      'The easiest way to reduce fraud is to decline more. It is also one of the easiest ways to lose good customers. Why VPN, new customers, and other signals are context - not automatic decline reasons.',
    category: 'Education',
    date: 'September 20, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">One of the easiest ways to reduce fraud is to decline more transactions. It is also one of the easiest ways to lose good customers. Tight thresholds let more fraud through when they are too loose, and catch legitimate buyers when they are too aggressive. The second outcome is harder to see. Individual signals - VPN, a new high-value customer, mismatched addresses - are context, not a decision. Precision comes from what the signals mean together, plus your risk appetite and the commercial impact of each decline.</p>

<p>One of the easiest ways to reduce fraud is to decline more transactions. It's also one of the easiest ways to lose good customers.</p>

<p>This is the trade-off at the centre of almost every fraud system. Set your risk thresholds too loosely and more fraud gets through. Set them too aggressively and legitimate customers get caught alongside the fraudsters.</p>

<p>The problem is that the second outcome is much harder to see. According to Ravelin Technology, false positives cost online merchants an estimated $443 billion every year, while more than 40% of customers will abandon their cart if their payment method is declined. 25% of customers who experience a false decline will go to a competitor.</p>

<h2>A fraud signal is not a decision</h2>

<p>That's why merchants need to be very careful about what they interpret as a fraud signal. Take VPN usage. A transaction coming through a VPN might look suspicious because fraudsters use them to disguise their location. But legitimate customers use VPNs every day too. If VPN equals decline, you might reduce some fraud. You'll also inevitably block good customers.</p>

<p>The same applies to countless signals:</p>

<ul>
  <li>A new customer making a high-value purchase</li>
  <li>A different billing and delivery address</li>
  <li>Multiple cards being used by the same customer</li>
  <li>An unusual location or device</li>
  <li>A sudden change in purchasing behaviour</li>
</ul>

<p>None of these signals independently tells you that someone is a fraudster. They're context.</p>

<h2>Ask what the signals mean together</h2>

<p>This is where an overreliance on rigid acts becomes dangerous. The better question is: what do all the signals together tell me about this transaction?</p>

<p>A VPN combined with a long-standing account, familiar device, and normal purchasing behaviour tells a very different story from a VPN combined with multiple new accounts, several payment cards, and unusual transaction velocity.</p>

<p>Fraud prevention is ultimately a precision problem. You want to catch as much fraud as possible without creating so broad a definition of suspicious that good customers continually get caught inside it.</p>

<p>That requires understanding your risk appetite, regularly reassessing thresholds and, most importantly, understanding the commercial impact of the decisions your fraud system makes. A lower fraud rate isn't automatically evidence of a better fraud strategy. Sometimes you've simply become better at declining customers.</p>

<p>Related: <a href="/blog/biggest-mistake-in-fraud-analysis-trusting-individual-indicators/">trusting individual indicators</a>, <a href="/blog/how-to-reduce-false-declines-in-stripe/">how to reduce false declines in Stripe</a>, <a href="/how-it-works/">how it works</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want ranked rule changes from your full transaction context - not one signal - <a href="/book-a-demo/">book a demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7505860786943053825/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Why does declining more transactions lose good customers?',
        a: 'Aggressive thresholds catch fraudsters and legitimate buyers together. False positives are harder to see than chargebacks: Ravelin estimates they cost merchants about $443 billion a year, more than 40% of customers abandon after a declined payment, and 25% of those who hit a false decline go to a competitor. A lower fraud rate can just mean you got better at saying no.',
      },
      {
        q: 'Is VPN usage a reason to decline a payment?',
        a: 'Not on its own. Fraudsters use VPNs to hide location, but legitimate customers use them every day for work, travel, and privacy. VPN plus a long-standing account, familiar device, and normal buying behaviour is a different story from VPN plus new accounts, multiple cards, and unusual velocity. Treat it as context, not an automatic block.',
      },
      {
        q: 'What should merchants measure besides fraud rate?',
        a: 'Risk appetite, how often thresholds are reassessed, and the commercial impact of declines - including false positives, cart abandonment, and customers who switch after a decline. Precision means catching as much fraud as possible without defining "suspicious" so broadly that good customers keep getting caught inside it.',
      },
    ],
  },
  {
    slug: 'agentic-commerce-and-the-end-of-checkout-pages',
    title: 'If Checkout Pages Go Away, Fraud Systems Have to Change What They Ask',
    excerpt:
      "Stripe's president says even a less ambitious version of agentic commerce could end checkout pages as we know them. Legitimate machine behaviour may look like today's bots - and many checkout signals may disappear.",
    category: 'Education',
    date: 'September 19, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Stripe's president, William Gaybrick, has said that even a less ambitious version of agentic commerce could mean the end of checkout pages as we know them. If an AI agent completes the purchase, behaviour that once looked automated - and therefore suspicious - may be a legitimate order. Fraud systems will still need to know whether the payment method is legitimate, valid, and authorised by the cardholder. The harder question becomes whether the machine acting for the customer can be trusted, and which signals survive if the checkout page disappears.</p>

<p>Stripe's president says checkout pages will go away as AI commerce expands.</p>

<p>William Gaybrick said that even a less ambitious version of agentic commerce could mean the end of checkout pages as we know them. This might be one of the biggest changes coming to ecommerce.</p>

<p>Instead of a customer finding a product, moving through checkout, and manually entering their information, an AI agent could increasingly complete that process on their behalf.</p>

<h2>Legitimate purchases may look automated</h2>

<p>This creates a very interesting problem. For years, fraud systems have been built around determining whether a transaction looks like legitimate human behaviour. Typing patterns, mouse movements, session flows, IP addresses, and other behavioural signals can all contribute to understanding whether the person behind a transaction looks legitimate.</p>

<p>What happens when the legitimate customer isn't the one navigating the purchase? The behaviour that might historically have looked automated - and therefore suspicious - could represent a completely legitimate purchase. That means one of the questions fraud systems ask may need to be: is this legitimate machine behaviour?</p>

<h2>Checkout data may disappear with the checkout page</h2>

<p>There's another challenge here too. If the checkout page disappears, the data we currently collect during checkout could disappear with it. Signals that have historically been useful for risk evaluation may no longer exist in the same form.</p>

<p>Fraud systems will need to understand:</p>

<ul>
  <li>Which existing signals remain useful</li>
  <li>Which behavioural signals lose relevance</li>
  <li>What new signals can establish whether an agent is legitimate</li>
  <li>How to distinguish authorised agents from malicious automation</li>
  <li>How to compensate for data that disappears with the traditional checkout journey</li>
</ul>

<p>One fundamental question doesn't change. Whether a human completes the checkout or an AI agent does it for them, we still need to understand whether the payment method is legitimate, valid, and authorised by the cardholder.</p>

<p>The future of fraud detection may be less about asking whether there's a human behind the transaction, and more about whether the machine acting for them can be trusted.</p>

<p>Related: <a href="/blog/fraud-trends-2026-deepfakes-ai-automation/">fraud trends 2026</a>, <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want ranked rule changes from the transaction and chargeback data you already have - <a href="/book-a-demo/">book a demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7505136024554115072/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'What is agentic commerce and why would checkout pages go away?',
        a: 'Agentic commerce is when an AI agent finds a product and completes the purchase on the customer\'s behalf instead of a person walking through a checkout form. Stripe president William Gaybrick has said even a less ambitious version of that shift could end checkout pages as we know them - which also changes the data fraud systems collect today.',
      },
      {
        q: 'Why do agent purchases break today\'s fraud signals?',
        a: 'Most stacks assume a human at checkout: typing, mouse movement, session flow, and similar behaviour. A legitimate agent can look like the automation those systems were built to block. If the checkout page itself disappears, many of those signals disappear too, so teams need to ask which signals still work and how to tell an authorised agent from malicious bots.',
      },
      {
        q: 'What fraud question still matters if an AI agent pays?',
        a: 'Whether the payment method is legitimate, valid, and authorised by the cardholder. That does not change if a human or an agent completes checkout. What changes is trusting the machine that acts for the customer, and compensating for checkout data that may no longer exist in the same form.',
      },
    ],
  },
  {
    slug: 'every-decline-is-not-a-win',
    title: 'One of the Biggest Mistakes in Fraud Prevention Is Assuming Every Decline Is a Win',
    excerpt:
      'Fraud teams measure what they stop. Much less time is spent measuring legitimate revenue stopped alongside it. Aite-Novarica puts false declines at $443 billion versus about $48 billion in card fraud losses.',
    category: 'Education',
    date: 'September 13, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">One of the biggest mistakes in fraud prevention is treating every decline as a win. Teams measure fraud they stop. They spend much less time measuring legitimate revenue they stop with it. Aite-Novarica estimates false declines cost merchants $443 billion a year versus about $48 billion in actual card fraud losses, and some estimates say 60-65% of declined transactions may be legitimate customers. Fraud losses are visible. False declines are quiet - and they take the order, the acquisition cost, and often the customer.</p>

<p>One of the biggest mistakes in fraud prevention is assuming that every decline is a win.</p>

<p>Most fraud teams spend a lot of time measuring how much fraud they stop. Much less time is spent measuring how much legitimate revenue gets stopped alongside it.</p>

<p>Research by Aite-Novarica estimates that false declines cost merchants $443 billion globally every year, compared with around $48 billion in actual credit card fraud losses. Another estimate suggests 60-65% of declined transactions may come from legitimate customers.</p>

<h2>Fraud losses are visible. False declines are quiet.</h2>

<p>The reason this problem gets overlooked is fraud losses are visible. Chargebacks appear in reports, disputes are tracked, and fraud rates sit on dashboards. False declines are quieter.</p>

<p>You don't necessarily see the repeat customer whose $250 order was declined because they shipped it to their office. You don't see the first-time customer who placed an unusually large order and triggered an act. You don't see the customer whose first card failed, tried another, got flagged for velocity, and decided to shop somewhere else.</p>

<p>They just disappear, and the cost isn't limited to the transaction itself. You've potentially lost the revenue, wasted the customer acquisition cost, damaged the customer's lifetime value, and sent someone who was ready to buy directly to a competitor.</p>

<h2>Lower fraud can be the wrong incentive</h2>

<p>This is why optimising purely for lower fraud can create the wrong incentives. A fraud team can tighten thresholds, introduce more acts, and bring the fraud rate down. On paper, the system looks better. Commercially, it might be performing worse.</p>

<p>The difficult part is that improving authorization rates requires understanding:</p>

<ul>
  <li>Which declines are preventing fraud?</li>
  <li>Which signals are predictive versus simply correlated with risk?</li>
  <li>Which customers deserve additional verification rather than an automatic decline?</li>
  <li>Where can thresholds differ by customer, transaction, or segment?</li>
  <li>How much additional fraud could you accept in exchange for more legitimate revenue?</li>
</ul>

<p>Good fraud systems maximise legitimate approvals while keeping fraud within an acceptable level. Sometimes the transaction you decline is a good customer you just lost.</p>

<p>Related: <a href="/blog/hidden-cost-of-false-positives-in-fraud-systems/">the hidden cost of false positives</a>, <a href="/blog/how-to-reduce-false-declines-in-stripe/">how to reduce false declines in Stripe</a>, <a href="/how-it-works/">how it works</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want to see which rules may be blocking good customers in your Stripe or Shopify data - <a href="/book-a-demo/">book a demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7503686238386823168/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Why is treating every fraud decline as a win a mistake?',
        a: 'A decline only helps if it stopped fraud. Many declines stop legitimate customers instead. Aite-Novarica estimates false declines cost about $443 billion a year versus around $48 billion in card fraud losses, and some estimates say 60-65% of declined transactions may be good customers. Tightening for a lower fraud rate can look better on a dashboard and worse in revenue.',
      },
      {
        q: 'Why are false declines harder to see than fraud losses?',
        a: 'Chargebacks, disputes, and fraud rates show up in reports. False declines do not: the office-shipped order, the large first purchase, or the customer who tried a second card and got velocity-flagged. They disappear, taking the order, the acquisition cost, lifetime value, and often a customer who then buys from a competitor.',
      },
      {
        q: 'What should teams ask before tightening fraud thresholds?',
        a: 'Which declines actually prevent fraud, which signals predict risk versus merely correlate with it, who should get extra verification instead of an automatic decline, where thresholds should differ by customer or segment, and how much extra fraud you would accept for more legitimate approvals. Good systems maximise good approvals while keeping fraud acceptable.',
      },
    ],
  },
  {
    slug: 'right-amount-of-friction-in-fraud-prevention',
    title: 'Fraud Prevention Is About the Right Amount of Friction in the Right Place',
    excerpt:
      'The goal is not minimum friction or maximum security. It is matching checks to context. A first-time buyer and a 50th-order customer should not get the same treatment.',
    category: 'Education',
    date: 'September 12, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">The goal of fraud prevention is not minimum friction, and it is not maximum security. It is putting the right amount of friction in the right place. A first-time buyer and a loyal customer on their 50th order do not carry the same context. Adyen has reported that 50% of businesses are seeing more false declines, while static controls can block up to 10% of legitimate customers. Extra verification on a trusted, normal-looking order is often revenue walking out the door.</p>

<p>The goal of fraud prevention isn't minimum friction, and it isn't maximum security. It's putting the right amount of friction in the right place.</p>

<p>Most systems treat every transaction the same. A first-time buyer goes through the same checks as a loyal customer placing their 50th order. Those two transactions don't carry the same context.</p>

<p>The repeat customer has a history. You know how they normally pay, what they buy, where they shop from, and how their account typically behaves. Adding another verification step might reduce risk, but it also creates friction, and that cost adds up.</p>

<h2>Static controls block good customers</h2>

<p>Adyen's latest fraud report found that 50% of businesses are seeing an increase in false declines, while static controls can block up to 10% of legitimate customers. That's revenue walking out the door in an attempt to protect revenue.</p>

<p>The answer isn't removing controls but applying those controls with more precision. A transaction with multiple risk signals might justify extra verification. A trusted customer behaving exactly as they usually do probably doesn't need the same treatment.</p>

<h2>Trade-offs get cheaper with context</h2>

<p>Fraud prevention will always involve trade-offs between risk, friction, and growth. The better you understand the context around each transaction, the less often legitimate customers have to pay the price for that trade-off.</p>

<p>Related: <a href="/blog/balancing-fraud-prevention-with-customer-experience/">balancing fraud prevention with customer experience</a>, <a href="/blog/declining-more-transactions-loses-good-customers/">declining more transactions loses good customers</a>, <a href="/how-it-works/">how it works</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want ranked rule changes that use your transaction context - not the same check for every order - <a href="/book-a-demo/">book a demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7502599185007980545/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Should every checkout get the same fraud checks?',
        a: 'No. A first-time buyer and a loyal customer on their 50th order do not carry the same context. Repeat buyers have payment, product, and behaviour history. Adding the same extra verification to both can cut some risk, but it also adds friction where you already have reason to trust the customer.',
      },
      {
        q: 'What do static fraud controls cost merchants?',
        a: 'Adyen has reported that 50% of businesses are seeing more false declines, and static controls can block up to 10% of legitimate customers. That is revenue leaving in an attempt to protect revenue. The fix is not removing controls. It is applying them with more precision.',
      },
      {
        q: 'When is extra checkout friction justified?',
        a: 'When multiple risk signals show up on a transaction that lacks a trusted history. A known customer behaving exactly as they usually do probably does not need the same step. Fraud prevention will always trade risk, friction, and growth. Better context means good customers pay that price less often.',
      },
    ],
  },
  {
    slug: 'mastercard-72-hour-scam-merchant-monitoring',
    title: 'Mastercard\'s 72-Hour Scam Clock Changes How Fast Merchants Must Explain Unusual Patterns',
    excerpt:
      'Mastercard now expects suspected scam merchants to be investigated on a 72-hour clock. Visa tightened VAMP earlier. Together they shrink both the margin for error and the time you have to explain it.',
    category: 'News',
    date: 'August 25, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Mastercard introduced a 72-hour clock for investigating suspected scam merchants. If scam activity is confirmed, the merchant must be stopped from accepting Mastercard transactions in three days. The interesting implication is for legitimate businesses: a sharp drop in authorization rates, refund and chargeback spikes, or issuer scam reports can trigger scrutiny. Promotions, new channels, subscription issues, and confusing billing descriptors can look the same. Visa's VAMP changes reduced the margin for error. Mastercard's changes reduce the time available to understand it.</p>

<p>One of the biggest changes in fraud monitoring this year is how quickly payment providers will be expected to react.</p>

<p>Mastercard introduced a 72-hour clock for investigating suspected scam merchants. If scam activity is confirmed, the merchant must be stopped from accepting Mastercard transactions in three days.</p>

<p>At first glance, this looks like another compliance change aimed at obvious scam merchants. The more interesting implication is what it means for legitimate online businesses.</p>

<h2>Legitimate patterns can look like warning signals</h2>

<p>A sharp drop in authorization approval rates can trigger scrutiny. For newer merchants, more than 5% of purchases resulting in refunds and chargebacks combined over a rolling 30-day period can become a warning signal. Issuer reports of scams or manipulation can also trigger investigation.</p>

<p>The problem is that legitimate businesses can generate unusual patterns too. A successful promotion suddenly changes transaction volumes. A new acquisition channel brings a different customer profile. A subscription issue creates a spike in refunds. A confusing billing descriptor generates disputes. Approval rates suddenly fall.</p>

<p>None of these necessarily mean the merchant is fraudulent. But under a faster monitoring environment, merchants have much less time to understand what's happening and explain it.</p>

<h2>Networks are looking across signals together</h2>

<p>Historically, many businesses have treated these metrics separately. Fraud sits with the fraud team, refunds are a customer service problem, authorization rates are a payments metric, and customer complaints are handled by support. Increasingly, payment networks are looking across those signals together.</p>

<p>That's why the biggest takeaway from Mastercard's changes is visibility. Merchants need to understand:</p>

<ul>
  <li>What is causing sudden changes in authorization rates?</li>
  <li>Where refunds and chargebacks are originating?</li>
  <li>Whether customers recognise their billing descriptors?</li>
  <li>Which acquisition channels are creating higher-risk behaviour?</li>
  <li>Whether unusual patterns are fraud, operational issues, or normal changes in customer behaviour?</li>
  <li>What evidence they have available if their processor starts asking questions?</li>
</ul>

<p>Visa's VAMP changes earlier this year reduced the margin for error. Mastercard's latest changes reduce the time available to understand the error. Fraud management is moving away from reviewing what happened last month. The merchants best prepared are the ones who can understand what's happening right now and explain why.</p>

<p>Related: <a href="/blog/visa-vamp-threshold-reduction-2026/">Visa's VAMP threshold reduction</a>, <a href="/blog/stripe-dispute-rate-too-high/">what to do if Stripe warns your dispute rate is too high</a>, <a href="/how-it-works/">how it works</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want chargebacks classified by type so you can explain the mix - not only the rate - <a href="/book-a-demo/">book a demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7493339543472111616/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'What is Mastercard\'s 72-hour scam merchant rule?',
        a: 'Mastercard introduced a 72-hour clock for investigating suspected scam merchants. If scam activity is confirmed, the merchant must be stopped from accepting Mastercard transactions in three days. The rule is aimed at scam merchants, but legitimate businesses can also trigger faster scrutiny when authorization, refund, or chargeback patterns look unusual.',
      },
      {
        q: 'Can a legitimate promotion trigger payment-network scrutiny?',
        a: 'Yes. A successful promotion, a new acquisition channel, a subscription refund spike, or a confusing billing descriptor can change volumes, approval rates, and disputes without the merchant being a scam. Under a 72-hour investigation clock, you have less time to show that the pattern is operational or commercial - not fraud.',
      },
      {
        q: 'How do Mastercard\'s changes relate to Visa VAMP?',
        a: 'Visa\'s VAMP threshold cut reduced the margin for error. Mastercard\'s 72-hour clock reduces the time available to understand an unusual pattern. Together they push merchants to watch authorization, refunds, chargebacks, descriptors, and channels as one picture - and to have evidence ready if the processor asks questions this week, not last month.',
      },
    ],
  },
  {
    slug: 'device-fingerprinting-is-not-enough',
    title: 'A Common Mistake in Fraud Prevention: Relying Too Heavily on Device Fingerprinting',
    excerpt:
      'Device fingerprinting is one of the most valuable fraud signals - but when it becomes the decision instead of one input, false positives creep in. Why the strongest systems combine device intelligence with behaviour and context.',
    category: 'Education',
    date: 'August 31, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Device fingerprinting is one of the most valuable signals in fraud prevention - it helps spot returning devices, account takeovers, and multi-account abuse without adding friction. The mistake is treating it as the decision instead of one input. Devices change, fraudsters spoof them, and the same signal can mean a remote worker or an attacker. Strong systems combine device intelligence with behaviour, payment history, and transaction context.</p>

<p>A common mistake I see in fraud prevention is relying too heavily on device fingerprinting.</p>

<p>Device fingerprinting is one of the most valuable signals available. It helps identify returning devices, detect account takeovers, uncover multi-account abuse, and recognise suspicious behaviour without adding friction for legitimate customers.</p>

<p>The problem starts when it becomes the decision instead of one input into the decision.</p>

<h2>No single fraud signal is perfect</h2>

<p>We need to understand that no fraud signal is perfect. Devices change, people upgrade phones, install operating system updates, switch browsers, work from different locations, use corporate VPNs, travel, or replace their laptops.</p>

<p>At the same time, fraudsters have become much better at hiding their own devices through emulators, anti-fingerprinting tools, residential proxies, and device spoofing.</p>

<p>So the same device signal can sometimes mean two completely different things: a legitimate customer working remotely, or a fraudster trying to hide their identity. If device fingerprinting is carrying too much weight, both situations can end up producing the same outcome. That's where false positives begin to creep in.</p>

<h2>Combine device intelligence with context</h2>

<p>The strongest fraud systems combine device intelligence with behavioural data, payment history, transaction context, account activity, and hundreds of other indicators before making a decision. That's because fraud is about understanding risky behaviour, not picking a single signal and hoping it holds. The same lens is useful when you are <a href="https://www.fraud-pulse.com/blog/best-fraud-prevention-tools-for-shopify-2026/">evaluating fraud tools</a> for a Shopify store.</p>

<p>Device fingerprinting is incredibly powerful. If you're relying on it as the primary defence against fraud, it might be worth asking:</p>

<ul>
  <li>What happens when that signal is wrong?</li>
  <li>What other context is influencing the decision?</li>
  <li>Are we measuring how many good customers we're blocking because of it?</li>
</ul>

<p>The best fraud decisions rarely come from one signal. They come from connecting all of them.</p>

<p>If you want ranked rule changes from your full transaction context - not a single signal - <a href="/book-a-demo/">book a demo</a>. Also see <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7500062422821687296/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Why is relying only on device fingerprinting a mistake?',
        a: 'Fingerprinting is valuable, but devices change and fraudsters spoof them with emulators, proxies, and anti-fingerprinting tools. The same signal can mean a legitimate remote worker or an attacker. When fingerprinting carries too much weight, both cases can get the same outcome - and false positives climb.',
      },
      {
        q: 'What should fraud systems combine with device fingerprinting?',
        a: 'Behavioural data, payment history, transaction context, account activity, and other indicators before deciding. Fraud is about risky behaviour, not one device attribute. Connecting signals reduces the chance that a single noisy fingerprint blocks a good customer or misses a spoofed attack.',
      },
      {
        q: 'How do I know if device fingerprinting is overweighted in my stack?',
        a: 'Ask what happens when the signal is wrong, what other context influences the decision, and whether you measure how many good customers you block because of it. If declines track fingerprint mismatches more than chargeback patterns, the control is likely too dominant and needs balancing with broader context.',
      },
    ],
  },
  {
    slug: 'dont-confuse-the-fraud-pattern-with-the-problem',
    title: 'The Easiest Fraud Act to Build Is Often the Easiest One for Fraudsters to Bypass',
    excerpt:
      'Fraud teams often solve the pattern. Fraudsters solve the act. Why tying controls to today’s exact attack - product, vendor, amount - leaves you one small change away from being obsolete.',
    category: 'Education',
    date: 'August 28, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">One of the biggest mistakes in fraud prevention is confusing the pattern with the problem. Teams spot an attack, lock onto shared traits - product, vendor, amount - and build a narrow act. Fraudsters then change one detail and slip through. The pattern helps you understand the attack; the real question is the core behaviour that makes it fraudulent, and which signals stay useful after the details change.</p>

<p>The easiest fraud act to build is often the easiest one for fraudsters to bypass.</p>

<p>One of the biggest mistakes in fraud prevention is confusing the pattern with the problem. Fraud teams often solve the pattern. Fraudsters solve the act.</p>

<p>I've seen this repeatedly throughout my career, particularly in e-commerce, where fraud patterns can evolve incredibly quickly.</p>

<h2>How over-specific acts fail</h2>

<p>A fraud team identifies an attack. They analyse the transactions, find the common characteristics, and build an act to stop it. Maybe every fraudulent transaction involves the same product, maybe they're all coming through one vendor, or maybe the transaction values sit within a particular range.</p>

<p>So you block that product, vendor, or amount. Problem solved - except the fraudster learns too. Once they realise their transactions are being blocked, they don't necessarily abandon the merchant. They change the product, adjust the amount, switch the account, device, or payment method, and find another route through the system - or they move to another merchant that hasn't adapted yet.</p>

<p>This is why one of the biggest mistakes fraud teams can make is building controls that are too closely tied to the exact pattern they're seeing today.</p>

<h2>Ask about behaviour, not just fingerprints of the attack</h2>

<p>The specific pattern is useful for understanding an attack, but the more important question is: what is the core behaviour that makes this fraudulent?</p>

<ul>
  <li>Don't just ask how to block transactions buying Product X. Ask why fraudsters are targeting Product X in the first place.</li>
  <li>Don't just block a specific transaction amount. Understand what behaviour separates those fraudulent transactions from legitimate ones.</li>
  <li>Don't keep adding increasingly specific acts every time the attack changes. Look for signals that remain relevant even when fraudsters change the details.</li>
</ul>

<p>In simple terms, fraud prevention is an evolutionary race. You change one thing, and the fraudsters respond. You learn from their response, and the cycle starts again. The fraud teams that stay ahead are the ones that understand the underlying behaviour well enough that a small change from the fraudster doesn't make their entire defence obsolete.</p>

<p>Related reading: <a href="/blog/overfitting-the-most-common-fraud-prevention-mistake/">overfitting in fraud prevention</a>, <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p><strong>Want rules ranked from your chargeback behaviour - not yesterday's exact pattern?</strong> <a href="/book-a-demo/">Book a Demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7498975182645067776/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'What does it mean to confuse the fraud pattern with the problem?',
        a: 'It means building acts that match today’s exact attack fingerprint - a product, vendor, or amount band - instead of the underlying behaviour. Fraudsters then change one detail and bypass the control. The pattern is useful for diagnosis; lasting defence needs signals that still matter after those details change.',
      },
      {
        q: 'Why are the easiest fraud acts often the easiest to bypass?',
        a: 'They are usually narrow and obvious: block this SKU, this amount, this vendor. Fraudsters learn quickly, switch product or payment method, and continue. Acts that are cheap to write but tightly tied to surface traits become obsolete as soon as the attacker adapts.',
      },
      {
        q: 'What should fraud teams focus on instead of exact attack fingerprints?',
        a: 'Ask what core behaviour makes the activity fraudulent, and which signals stay relevant when fraudsters change details. Prefer structural, harder-to-swap indicators over one-off pattern locks, and keep updating controls as the evolutionary race continues.',
      },
    ],
  },
  {
    slug: 'fraud-prevention-is-not-a-one-time-setup',
    title: 'Fraud Prevention Is Not a One-Time Setup',
    excerpt:
      'Fraud changes constantly - patterns, attacks, customer behaviour, and tech. Shopify’s 2026 research shows rising AI-driven fraud and huge false-decline costs. Why merchants need multiple KPIs, not a single fraud rate.',
    category: 'Education',
    date: 'August 27, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Treating fraud prevention as a one-time setup is one of the biggest mistakes in ecommerce. Fraud patterns, attacks, and customer behaviour keep changing. Shopify’s 2026 guidance notes rising online and AI-driven fraud, while false declines can wipe out huge legitimate revenue. A lower fraud rate alone is not success - you need chargebacks, false declines, approvals, and friction moving together.</p>

<p>One of the biggest mistakes in ecommerce fraud management is treating fraud prevention as a one-time setup. The truth is that fraud changes constantly.</p>

<p>The patterns, the attack methods, the customer behaviour, and the technology change. If your fraud strategy doesn't keep up, performance starts to drift.</p>

<h2>What Shopify’s 2026 fraud research highlights</h2>

<p>Shopify's 2026 fraud guidance makes a point that <strong>74%</strong> of respondents said online fraud had increased over the previous year, while <strong>75%</strong> specifically reported more AI-driven fraud attacks. At the same time, <strong>85%</strong> said fraud was hurting revenue.</p>

<p>That matters because most merchants are trying to solve two problems at once: stop more fraud, and avoid blocking good customers. The balance between those two things is where fraud management becomes difficult.</p>

<p>Shopify research shows that <strong>47%</strong> of businesses estimate up to <strong>5%</strong> of legitimate orders are falsely declined, representing roughly <strong>$50 billion</strong> in legitimate revenue turned away every year.</p>

<p>So a lower fraud rate doesn't automatically mean the system is working better. You could tighten your thresholds, add more acts, and increase authentication across checkout. Fraud might fall - but approval rates could fall too.</p>

<h2>Stop managing fraud with a single KPI</h2>

<p>That's why merchants need to stop looking at fraud prevention as a single KPI. You need to understand:</p>

<ul>
  <li>Chargeback rate</li>
  <li>False decline rate</li>
  <li>Approval rate</li>
  <li>Manual review volume</li>
  <li>Chargeback representment performance</li>
  <li>Customer friction</li>
</ul>

<p>Most importantly, how those metrics move together.</p>

<p>Shopify says its machine-learning-based pre-authorization model helped increase payment success rates by <strong>26 basis points</strong>, equivalent to <strong>$471 million</strong> in recovered annual revenue, while also reducing fraud chargebacks by <strong>20%</strong>. That's the outcome fraud teams should be aiming for: improving approval rates while maintaining control over fraud.</p>

<p>Because zero fraud is easy if you're willing to decline everything suspicious. The real challenge is building a system that knows when to approve, when to review, and when to block. Good fraud management is about managing risk well enough that the business can keep growing.</p>

<p>Related: <a href="/blog/balancing-fraud-prevention-with-customer-experience/">balancing fraud prevention with CX</a>, <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p><strong>Want continuous rule recommendations as fraud shifts?</strong> <a href="/book-a-demo/">Book a Demo</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7497525694751756288/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Why is fraud prevention not a one-time setup?',
        a: 'Fraud patterns, attack methods, customer behaviour, and technology keep changing. A strategy that is not reviewed drifts: acts go stale, false positives rise, and new attacks slip through. Continuous measurement and rule updates matter more than a single launch configuration.',
      },
      {
        q: 'Why is a lower fraud rate not enough on its own?',
        a: 'You can cut fraud by tightening thresholds and adding friction, but approval rates and false declines may get worse. Shopify research cites large legitimate revenue lost to false declines. Track chargebacks, false declines, approvals, review volume, and friction together - not fraud rate in isolation.',
      },
      {
        q: 'What outcome should fraud teams aim for?',
        a: 'Improve approval rates while keeping fraud under control - knowing when to approve, review, or block. Shopify has reported models that raised payment success while reducing fraud chargebacks. Zero fraud by declining everything suspicious is easy; sustainable growth needs balanced risk decisions.',
      },
    ],
  },
  {
    slug: 'optimize-stripe-radar-rules',
    title: 'Best Tools to Optimize Stripe Radar Rules',
    excerpt:
      'The best Radar optimization tools output exact rule changes with estimated fraud-capture and false-positive impact - not another dashboard. How FraudPulse works alongside Stripe Radar.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 30, 2026',
    readTime: '6 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">The best way to optimize Stripe Radar rules is a tool that outputs <strong>exact rule changes</strong>, not another dashboard. FraudPulse classifies your chargebacks by type and ranks specific Radar settings with estimated fraud-capture and false-positive rates. It works alongside Radar so SMB and mid-market merchants can cut chargebacks and raise approvals without replacing the stack.</p>

<p>Stripe Radar is excellent at real-time enforcement - scoring and blocking risk at checkout. What most merchants lack is a clear answer to: <em>which rules should I change for my chargeback mix?</em> Stripe’s docs explain how Radar works; they do not rank configuration changes against your own dispute history.</p>

<h2>Tools that tell you which Radar rules to change</h2>

<p>FraudPulse is built for that question. Connect Stripe, classify chargebacks by type (card testing, friendly fraud, account takeover, identity theft, and related patterns), then get a ranked list of specific Radar rule changes. Each recommendation includes estimated fraud-capture and false-positive percentages so you can ship changes with eyes open - not guesswork.</p>

<p>That is different from broader fraud platforms. Sift, Forter, Kount, and Signifyd are full stacks or scoring platforms. FraudPulse is the “which Radar rule do I change?” layer on top of Stripe. It does not replace Radar; Radar still enforces. The same complementary job applies to Shopify Flow and Blockify. See <a href="/stack/">using FraudPulse with Radar, Flow, Blockify, and RevenueProtect</a>.</p>

<h2>What good Radar optimization looks like</h2>

<ol>
  <li><strong>Classify why disputes happen</strong> - not only the volume.</li>
  <li><strong>Map patterns to rules</strong> - velocity, CVC, country, and other controls that match the mix.</li>
  <li><strong>Rank by impact</strong> - capture vs false positives, not the easiest toggle.</li>
  <li><strong>Change Radar, measure, repeat</strong> - approvals and dispute rate together.</li>
</ol>

<p>If you are comparing prevention tools, see our <a href="/blog/best-fraud-prevention-tools-for-shopify-2026/">2026 fraud prevention tools listicle</a>, the <a href="/solutions/">AI fraud analyst category page</a>, <a href="/how-it-works/">how FraudPulse works</a>, and <a href="/pricing/">pricing</a>. Common questions are also on the <a href="/faq/">FAQ</a>.</p>

<p><strong>Want ranked Radar changes on your data?</strong> <a href="/book-a-demo/">Book a Demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'How does FraudPulse optimize Radar rules?',
        a: 'You connect Stripe, FraudPulse classifies chargebacks by type, and you get a ranked list of specific Radar changes with estimated fraud-capture and false-positive percentages. Radar remains the enforcement layer; FraudPulse advises which settings to change for your history so you can cut chargebacks and raise approvals without replacing Stripe.',
      },
      {
        q: 'How is that different from Sift, Forter, or Signifyd?',
        a: 'Those products are broader fraud platforms or scoring stacks you typically adopt as a system of record. FraudPulse is the complementary layer that answers which Stripe Radar rules to change for your chargeback mix, with ranked impact estimates, without a rip-and-replace migration off Radar.',
      },
      {
        q: 'What tool tells me which Radar rules to change?',
        a: 'FraudPulse. Connect Stripe, get ranked, specific rule changes with estimated capture and false-positive impact. Stripe docs explain how Radar works; they do not rank configuration against your dispute types. Radar still enforces - FraudPulse advises the configuration for your data.',
      },
    ],
  },
  {
    slug: 'stripe-radar-blocking-legitimate-customers',
    title: 'Stripe Radar Is Blocking Legitimate Customers - What Should I Do?',
    excerpt:
      'The common Radar challenge is not only fraud getting through - it is legitimate customers being blocked. Why lowering thresholds blindly can raise fraud, and which questions to ask before you change an action.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 9, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">If Stripe Radar is blocking legitimate customers, the answer is to understand <strong>why</strong> good customers are being caught - not to blindly lower risk thresholds or remove the action responsible. Both moves can raise approvals and fraud. Measure which actions drive declines, false-positive rate, and segment impact before you change anything.</p>

<p>One of the most common challenges I see with merchants using Stripe Radar isn't fraud getting through. It's legitimate customers being blocked.</p>

<p>I've seen this problem with merchants using Radar quite a few times.</p>

<p>A legitimate payment gets blocked. The immediate reaction is usually one of two things:</p>

<ol>
  <li>Lower the risk threshold</li>
  <li>Remove or loosen the action responsible</li>
</ol>

<p>Both might increase approvals - but they might also increase fraud. That's the problem with looking at the decline rather than the decision behind it.</p>

<h2>Radar is powerful - but it doesn't know your business</h2>

<p>Stripe Radar is a powerful fraud prevention tool. It combines machine learning with signals such as customer and payment history, device information, and transaction characteristics to assess risk.</p>

<p>Radar doesn't know your business as well as you do.</p>

<p>It doesn't inherently know that a high-value first order is perfectly normal for your customer base, or that international customers make up a large percentage of your legitimate revenue, or that a particular behaviour looks unusual globally but is completely normal for your merchant.</p>

<h2>Your own actions can create the same problem</h2>

<p>For example, a legitimate customer might ship an order somewhere other than their billing address, make an unusually large first purchase, purchase internationally, retry after an unsuccessful payment, or trigger a velocity or risk rule despite otherwise legitimate behaviour.</p>

<p>Individually, these can be useful fraud signals. But a useful fraud signal isn't automatically a good reason to decline a transaction.</p>

<h2>Questions to ask when Radar blocks too many good customers</h2>

<p>If Radar is blocking too many legitimate customers, I would start by asking:</p>

<ul>
  <li>Which actions are generating the most declines?</li>
  <li>What percentage of those declines are false positives?</li>
  <li>Which customer segments are disproportionately affected?</li>
  <li>What happens if we adjust that action or threshold?</li>
  <li>How much additional fraud would we expect to capture or allow as a result?</li>
</ul>

<p>Sometimes the right answer is changing an action. Sometimes it's moving borderline transactions from block to review or introducing additional verification. Sometimes it's combining several signals instead of making a decision based too heavily on one. Sometimes the existing rule is doing exactly what it should.</p>

<p>The important part is measuring the trade-off before changing it - because neither "Radar blocked it" nor "Radar scored it as risky" tells you whether that was the right decision for your business.</p>

<p>Your fraud tool provides the infrastructure. Your fraud strategy determines how effectively you use it.</p>

<p>If you want help measuring which Radar actions drive false positives on your data, see <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a> - or <a href="/book-a-demo/">book a demo</a>.</p>

<a class="link-preview" href="https://www.reddit.com/r/stripe/comments/1iqbp0y/is_blocking_legit_payments_for_stripe_a_normal/" target="_blank" rel="noopener noreferrer">
  <span class="link-preview-source">Reddit · r/stripe</span>
  <span class="link-preview-title">Is blocking legit payments for Stripe a normal thing nowadays?</span>
  <span class="link-preview-desc">I have been using Stripe for 2 months now and once I started running ads for my store this week I have received 8 high risk payments which got blocked from Stripe. I don't know why this is happening.</span>
</a>
    `.trim(),
    faqs: [
      {
        q: 'What should I do if Stripe Radar is blocking legitimate customers?',
        a: 'Start by understanding why good customers are caught - which actions drive declines, false-positive rate, and which segments are hurt - before lowering thresholds or removing rules. Blind loosening can raise approvals and fraud. Measure the trade-off so any change fits your business, not only Radar\'s global risk view.',
      },
      {
        q: 'Why can lowering Radar thresholds create more fraud?',
        a: 'Lowering the risk threshold or loosening the action that blocked a good payment may approve more orders, including higher-risk ones. You are changing the decision boundary without knowing the false-positive vs fraud trade-off. Treat the decline as a decision to evaluate, not only a problem to undo.',
      },
      {
        q: 'Does Stripe Radar know my business well enough to decide alone?',
        a: 'Radar combines strong ML and signals - history, device, transaction traits - but it does not inherently know what is normal for your mix, such as high-value first orders or international buyers. Your strategy must interpret those signals in context and measure whether a decline was right for your business.',
      },
    ],
  },
  {
    slug: 'how-to-reduce-false-declines-in-stripe',
    title: 'How to Reduce False Declines in Stripe',
    excerpt:
      'Reducing false declines in Stripe is not as simple as loosening fraud controls. Separate issuer from fraud declines, review Radar acts, measure the approval vs fraud trade-off, and optimise for legitimate approvals.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 9, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Reducing false declines in Stripe is not as simple as making fraud controls less strict. First understand <strong>why</strong> transactions are declined - separate issuer declines from fraud declines, review Radar acts, look beyond single signals, and measure every change. The goal is to maximise legitimate approvals while keeping fraud at an acceptable level.</p>

<p>One of the most overlooked numbers in a Stripe fraud operation is the false decline rate.</p>

<p>Reducing false declines in Stripe isn't as simple as making your fraud controls less strict.</p>

<p>Some level of payment decline is inevitable. Cards expire, customers enter incorrect information, banks reject transactions, and genuine purchases sometimes look unusual.</p>

<p>The problem is when legitimate customers are being declined unnecessarily. Those declines are expensive because they happen at the worst possible point in the customer journey.</p>

<p>The customer has found your product, decided to buy, and reached checkout - and then the payment fails. Some will try again, whereas others will simply buy somewhere else.</p>

<p>Stripe itself highlights that false declines can lead to lost revenue, abandoned baskets, and customers turning to competitors. So if your approval rate isn't where you'd like it to be, I wouldn't immediately start changing thresholds.</p>

<p>First, understand why transactions are being declined.</p>

<h2>Where to look</h2>

<p>There are several places I'd look:</p>

<ul>
  <li><strong>Separate issuer declines from fraud declines.</strong> They're different problems and need different fixes.</li>
  <li><strong>Look for patterns.</strong> Are certain countries, customer types, transaction values, or verification failures driving more declines?</li>
  <li><strong>Review your Stripe Radar acts.</strong> An act that made sense six months ago may now be creating more false positives than protection.</li>
  <li><strong>Look beyond individual signals.</strong> An address mismatch, unusual purchase value, or international transaction can indicate risk, but doesn't automatically mean fraud.</li>
  <li><strong>Use additional verification where appropriate.</strong> Sometimes authentication is better than immediately declining a borderline transaction.</li>
  <li><strong>Measure every change.</strong> If approvals increase, what happens to fraud? If fraud falls, what happens to legitimate approvals?</li>
</ul>

<p>This last point is probably the most important.</p>

<p>You shouldn't optimise your fraud system for the lowest possible decline rate, and you shouldn't optimise it for the lowest possible fraud rate either.</p>

<p>Both can produce terrible outcomes. The goal is to maximise legitimate approvals while keeping fraud within an acceptable level for the business.</p>

<p>That's a much harder optimisation problem than simply blocking more or less.</p>

<p>Related reading: <a href="/blog/stripe-radar-blocking-legitimate-customers/">when Radar blocks legitimate customers</a>, <a href="/blog/hidden-cost-of-false-positives-in-fraud-systems/">the hidden cost of false positives</a>, <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want help measuring which Radar acts drive false declines on your data, <a href="/book-a-demo/">book a demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'How do I reduce false declines in Stripe?',
        a: 'Start by understanding why payments fail before loosening thresholds. Separate issuer declines from fraud declines, look for patterns by country or customer type, review Radar acts that may create more false positives than protection, and measure how each change affects both approvals and fraud. Optimise for legitimate approvals at an acceptable fraud level.',
      },
      {
        q: 'Should I just lower Stripe Radar thresholds to raise approvals?',
        a: 'Not immediately. Stripe notes false declines can mean lost revenue and abandoned baskets, but blind threshold changes can also raise fraud. First separate decline causes, review which Radar acts still earn their place, and measure approval vs fraud impact after every change.',
      },
      {
        q: 'What is the right goal for Stripe fraud controls?',
        a: 'Not the lowest possible decline rate, and not the lowest possible fraud rate either - both can produce bad outcomes. The goal is to maximise legitimate approvals while keeping fraud within an acceptable level for the business, which means measuring the trade-off of every control change.',
      },
    ],
  },
  {
    slug: 'how-to-stop-card-testing-attacks-on-shopify',
    title: 'How to Stop Card Testing Attacks on Shopify',
    excerpt:
      'Card testing uses your Shopify checkout to check stolen cards at scale. Spot the pattern, use velocity and bot controls, and treat it as behaviour across many attempts - not one low-value decline.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 30, 2026',
    readTime: '6 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Card testing is when fraudsters use automated bots to run stolen or guessed cards through real Shopify checkouts to find which cards still work. Stop it with velocity controls, bot detection, pattern monitoring, and stronger verification where needed - without relying on a single fraud act or adding unnecessary friction for legitimate customers.</p>

<p>One of the easiest ways for fraudsters to test stolen cards is to use someone else's checkout.</p>

<p>For Shopify merchants, that can mean suddenly seeing hundreds of small payment attempts that have nothing to do with customers actually trying to buy your products.</p>

<p>This is card testing. Fraudsters have a list of stolen or guessed card details, but they don't necessarily know which cards still work.</p>

<p>So they use automated bots to run those cards through real Ecommerce checkouts. A successful authorization gives them the information they wanted - this card is live.</p>

<p>Your product was never really the target. Your checkout was the testing environment.</p>

<h2>What the pattern usually looks like</h2>

<p>The pattern is usually fairly recognisable: a sudden spike in payment attempts, lots of low-value transactions, an unusually high decline rate, multiple cards being attempted in a short period, and repeated or unusual checkout behaviour.</p>

<p>But what merchants sometimes misunderstand is that if all those transactions are being declined, the attack isn't necessarily harmless. A sustained attack can create large volumes of failed authorizations and distort your payment data.</p>

<p>It can also affect authorization performance and contribute to the enumeration activity card networks monitor.</p>

<h2>How to stop it</h2>

<p>So how do you stop it?</p>

<p>I wouldn't rely on one fraud act. Card testing is automated behaviour, so you need to make it difficult to test cards at scale while avoiding unnecessary friction for legitimate customers.</p>

<p>A few places I'd look:</p>

<ul>
  <li><strong>Velocity controls.</strong> Detect unusually high numbers of payment attempts over short periods.</li>
  <li><strong>Bot detection.</strong> Look for automated checkout behaviour.</li>
  <li><strong>Transaction patterns.</strong> Repeated low-value amounts, multiple cards, and rapid-fire attempts.</li>
  <li><strong>Additional verification.</strong> Use stronger authentication where the risk warrants it.</li>
  <li><strong>Your lowest-value products.</strong> Card testers often target cheap products.</li>
  <li><strong>Monitoring.</strong> A card-testing attack should be something you identify quickly.</li>
</ul>

<p>If you're actively being attacked, involve your payment provider early. The important point is that card testing isn't really an individual-transaction problem.</p>

<p>One $2 payment attempt might look completely unremarkable. Thousands of similar attempts over a short period tell a very different story.</p>

<p>Good fraud systems understand the behaviour - not just an individual transaction that looks unremarkable on its own.</p>

<p>See also <a href="/blog/how-to-reduce-chargebacks-on-shopify-2026/">how to reduce chargebacks on Shopify</a>, <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want help spotting testing patterns and ranking Radar, Flow, Blockify, or RevenueProtect changes on your data, <a href="/book-a-demo/">book a demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'What is card testing on Shopify?',
        a: 'Fraudsters use automated bots to run stolen or guessed cards through real Ecommerce checkouts to learn which cards still work. Your product is rarely the target - your checkout is the testing environment. Typical signs include spikes in small attempts, high declines, and many cards tried in a short window.',
      },
      {
        q: 'Are declined card-testing attempts harmless?',
        a: 'Not necessarily. Even when most attempts fail, a sustained attack can create large volumes of failed authorizations, distort payment data, affect authorization performance, and contribute to enumeration activity that card networks monitor. Treat volume and velocity as the signal, not only successful charges.',
      },
      {
        q: 'How do I stop card testing without blocking real customers?',
        a: 'Do not rely on one fraud act. Use velocity controls, bot detection, pattern checks on low-value rapid attempts, stronger verification where risk warrants it, and fast monitoring - especially on cheap products. Involve your payment provider early if you are actively under attack.',
      },
    ],
  },
  {
    slug: 'best-fraud-prevention-tools-for-shopify-2026',
    title: 'Best Fraud Prevention Tools for Shopify in 2026',
    excerpt:
      'An honest 2026 listicle: Shopify Flow and Blockify, Signifyd, Riskified, Chargeflow, NoFraud and SMB peers - and FraudPulse as the AI analyst that ranks which rules to change.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 30, 2026',
    readTime: '6 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">For Shopify, merchants mix Shopify Flow and Blockify (and Stripe Radar if checkout is on Stripe) with optional platforms (Signifyd, Riskified, NoFraud, FraudLabs Pro, ClearSale, SEON, Subuno, Sift) and recovery apps. FraudPulse is the <strong>AI analyst</strong>: it ranks which Radar, Flow, Blockify, or RevenueProtect rules to change for your chargeback mix, with estimated impact, on the stack you already run.</p>

<p>There is no single “best” tool for every store. Guarantee platforms, built-in Flow and Blockify, dispute recovery, and an AI analyst solve different jobs. Name the category first, then pick the product. The category hub is <a href="/solutions/">AI fraud analyst for Shopify, Stripe, and Adyen merchants</a>.</p>

<h2>FraudPulse vs the competition</h2>

${toolComparisonTableHtml()}

<p>Also named in many roundups: <strong>NoFraud</strong>, <strong>FraudLabs Pro</strong>, <strong>ClearSale</strong>, <strong>SEON</strong>, and <strong>Subuno</strong> - scoring, review, or guarantee options for SMB buyers. They are not the same category as a Flow/Blockify/Radar/RevenueProtect analyst. See <a href="/alternatives/nofraud/">FraudPulse vs NoFraud and SMB tools</a>. Signifyd and Riskified stay on a <a href="/alternatives/smb-fraud-tools/">separate comparison</a>.</p>

<p>Using FraudPulse with the tools you already run: <a href="/stack/">Radar, Flow, Blockify, and RevenueProtect</a>. Adyen RevenueProtect is a rule console in that stack, not a replacement for Radar, Flow, or Blockify.</p>

<h2>Signifyd alternatives for small merchants</h2>

<p>Small merchants often do not need to replace their stack with Signifyd. FraudPulse complements Stripe Radar, Shopify Flow, and Blockify: ranked, specific rule changes with estimated fraud capture and false positives, delivered without a rip-and-replace. Full platforms remain the right buy if you want a guarantee product. FraudPulse is not a Signifyd clone.</p>

<h2>Best fraud tools for small Stripe merchants 2026</h2>

<p>For small Stripe merchants in 2026, start with <strong>Radar</strong> (enforcement you already have), then add intelligence that says which rules to change. FraudPulse classifies chargebacks and ranks Radar changes with estimated fraud-capture and false-positive percentages. Full platforms (Sift, Kount, Signifyd, Riskified) are the buy when you want a new system of record, not a Radar advisor. See vendor pricing on their sites - we do not invent competitor prices.</p>

<p>FraudPulse is not for enterprise teams that already run Signifyd or Riskified as the system of record, or for stores with no history to analyze.</p>

<p>Dig deeper with <a href="/how-it-works/">how it works</a>, <a href="/stack/">the stack page</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p><strong>Want to see ranked Radar, Flow, Blockify, or RevenueProtect changes on your data?</strong> <a href="/book-a-demo/">Book a Demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'How does FraudPulse enhance Shopify Flow and Blockify?',
        a: 'It analyzes chargeback history and ranks Flow or Blockify changes with estimated capture and false-positive rates so you stop guessing. Shopify Flow and Blockify remain the enforcement layer; FraudPulse is the complementary advisor that maps your dispute mix to specific settings you can change in minutes without engineering.',
      },
      {
        q: 'Who is FraudPulse not for?',
        a: 'Enterprise teams that already run Signifyd or Riskified as the system of record, and stores with no transaction or chargeback history to analyze. FraudPulse is built for SMB-to-mid-market Shopify and Stripe merchants who need ranked rule changes on the stack they already have.',
      },
      {
        q: 'How does FraudPulse compare to Signifyd for a small shop?',
        a: 'Signifyd is a full fraud platform, often with a guarantee model and platform onboarding. FraudPulse analyzes your chargebacks and tells you which Radar, Flow, Blockify, or RevenueProtect rules to change - faster and complementary if you already have Stripe or Shopify. It is not a Signifyd clone and does not replace a guarantee platform.',
      },
    ],
  },
  {
    slug: 'stripe-dispute-rate-too-high',
    title: 'What Should I Do If Stripe Warns My Dispute Rate Is Too High?',
    excerpt:
      'Dispute rate and dispute activity measure different things. If Stripe warns your disputes are too high, understand upstream causes, trajectory, and prevention - winning disputes does not remove them from the count.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 9, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">If Stripe warns you about disputes, understand the difference between <strong>dispute rate</strong> (tied to when the payment happened) and <strong>dispute activity</strong> (when disputes arrive). Winning a dispute recovers revenue but does not remove it from these numbers. Focus on what creates disputes upstream and stop preventable ones.</p>

<p>One of the most important numbers to understand if Stripe warns you about your disputes is your dispute activity.</p>

<p>Dispute rate and dispute activity sound interchangeable, but they're measuring different things. Dispute rate attributes disputes back to when the original payment happened. Dispute activity looks at disputes based on when they arrive.</p>

<p>That difference can create two very different pictures of the same business.</p>

<p>Imagine you process 1,000 payments this month and receive 10 disputes. Only three of those disputes relate to payments made this month. The other seven come from older transactions.</p>

<p>Your dispute rate for this month's payments could be 0.3%. Your dispute activity could be 1%.</p>

<p>We are talking about the same business, period, but very different indications of risk. This matters because if you're trying to understand what's causing the problem, your dispute rate can help you trace disputes back to the transactions that generated them.</p>

<p>If you're trying to understand your current exposure, you need to pay attention to dispute activity - and there's another important distinction merchants sometimes miss.</p>

<p>Winning a dispute doesn't make it disappear from these numbers. Once the dispute has been filed, it's counted. Winning it can recover the revenue, but it doesn't undo the dispute itself.</p>

<h2>What to look at when Stripe warns you</h2>

<p>If Stripe warns you that your dispute activity is becoming too high, you need to understand what's creating the disputes upstream. I'd start by looking at:</p>

<ul>
  <li>Which products or services generate the most disputes</li>
  <li>Whether particular customer cohorts or geographies stand out</li>
  <li>How much is genuine fraud vs customer confusion</li>
  <li>Whether billing descriptors and subscription terms are clear</li>
  <li>Whether fulfilment or delivery issues are contributing</li>
  <li>Which fraudulent transactions are getting through your controls</li>
</ul>

<p>More importantly, I'd look at the trajectory. A business with relatively low dispute activity that's climbing quickly can have a very different risk profile from one that's been stable for months.</p>

<p>The biggest takeaway for me is prevention. If your dispute activity is becoming a problem, the objective is to stop as many preventable disputes as possible from happening in the first place.</p>

<p>For review-specific guidance, see <a href="/blog/stripe-account-review-after-chargebacks/">how to pass a Stripe account review after chargebacks</a>. Also read <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want help classifying what's driving disputes on your data, <a href="/book-a-demo/">book a demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'What is the difference between Stripe dispute rate and dispute activity?',
        a: 'Dispute rate attributes disputes to when the original payment happened. Dispute activity looks at disputes based on when they arrive. The same month can show a low dispute rate and higher dispute activity if most filings relate to older transactions - two different risk pictures of the same business.',
      },
      {
        q: 'Does winning a Stripe dispute remove it from dispute rate or activity?',
        a: 'No. Once a dispute is filed, it is counted. Winning can recover the revenue, but it does not undo the dispute itself. That is why a high warning is mainly a prevention problem: stop preventable disputes upstream, not only fight cases after they file.',
      },
      {
        q: 'What should I do if Stripe warns my dispute activity is too high?',
        a: 'Look at what creates disputes upstream - products, cohorts, geographies, fraud vs confusion, descriptors, fulfilment, and control gaps - and watch the trajectory, not only the level. The goal is to stop as many preventable disputes as possible from happening in the first place.',
      },
    ],
  },
  {
    slug: 'stripe-account-review-after-chargebacks',
    title: 'How to Pass a Stripe Account Review After Chargebacks',
    excerpt:
      'Winning chargebacks and addressing why your account is under review are different problems. What Stripe needs to see is cause, failed controls, what you changed, and how you monitor improvement.',
    category: 'Guide',
    date: 'August 28, 2026',
    updatedAt: 'September 28, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">Passing a Stripe account review after chargebacks is less about winning individual disputes and more about proving you understand the <strong>underlying problem</strong>: what caused the spike, where controls failed, what you changed, and how you monitor improvement. Representment protects revenue; prevention protects the account.</p>

<p>One of the biggest mistakes merchants make after a spike in chargebacks is focusing on the chargebacks themselves.</p>

<p>The most misunderstood part of a Stripe account review is what you need to prove.</p>

<p>Most merchants spend a lot of time thinking about the chargebacks that triggered the review, and less time thinking about what those chargebacks say about the underlying business.</p>

<p>The reason is that individual disputes feel like the immediate problem.</p>

<p>You can see the disputed transaction, investigate what happened, submit evidence, and potentially recover the revenue. So naturally, the focus becomes winning them.</p>

<p>But winning chargebacks and addressing the reason your account is being reviewed are two different things. Once a dispute happens, it contributes to the activity associated with your account regardless of whether you eventually win or lose it.</p>

<p>That means a merchant could successfully defend a large percentage of its disputes and still have a chargeback problem. This is where account reviews become much more about prevention than representment.</p>

<h2>What Stripe needs to understand</h2>

<p>Stripe needs to understand whether the activity that caused concern is likely to continue. A sudden increase in fraudulent transactions might point to weaknesses in your fraud controls. A spike in product-not-received disputes might point to fulfilment.</p>

<p>Subscription disputes could indicate problems with renewal or cancellation communication. Unrecognised transactions might be caused by something as simple as an unclear statement descriptor.</p>

<p>From the merchant's perspective, these are all chargebacks. From a risk perspective, they are very different problems.</p>

<h2>What a strong review response shows</h2>

<p>The difficult part is that passing an account review means demonstrating that you understand:</p>

<ul>
  <li>What caused the increase</li>
  <li>Which transactions or customers were affected</li>
  <li>Where the existing controls failed</li>
  <li>What you've changed since</li>
  <li>How you're monitoring whether those changes work</li>
</ul>

<p>The strongest response is being able to show: this caused the problem → we identified it → we fixed it → here's how we know it's improving.</p>

<p>Winning existing chargebacks protects your revenue. Preventing the conditions that created them is what protects your account.</p>

<p>For dispute-rate warnings specifically, see <a href="/blog/stripe-dispute-rate-too-high/">what to do if Stripe warns your dispute rate is too high</a>. If you want help classifying the mix and ranking prevention changes on your data, see <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a> - or <a href="/book-a-demo/">book a demo</a>.</p>

<p>P.S. Idan is hosting a free Stripe Radar webinar on 10 October covering action performance, false positives, fraud capture, and when to tighten, change, or remove an action. <a href="https://lnkd.in/dr7uuyFH" target="_blank" rel="noopener noreferrer">Register here</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7510209543017123840/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Is winning chargebacks enough to pass a Stripe account review?',
        a: 'Usually not. A dispute still counts toward account activity whether you win or lose it. Review risk is about whether the underlying problem continues. You need to show cause, failed controls, what you changed, and how you monitor improvement - prevention matters more than representment for protecting the account.',
      },
      {
        q: 'What does Stripe need to see in an account review after chargebacks?',
        a: 'That you understand whether the concerning activity is likely to continue: what caused the spike, which customers were affected, where controls failed, what you changed, and how you track improvement. Different dispute types point to different root causes - fraud controls, fulfilment, billing communication, or statement descriptors.',
      },
      {
        q: 'Does FraudPulse get Stripe accounts out of review?',
        a: 'No. Stripe decides account reviews. FraudPulse helps with prevention - classifying chargeback types and ranking rule or action changes so you can show a concrete fix-and-monitor plan while you follow Stripe Support. It does not replace Stripe’s process or legal advice.',
      },
    ],
  },
  {
    slug: 'false-positives-biggest-hidden-cost-in-risk-management',
    title: 'False Positives Are One of the Biggest Hidden Costs in Risk Management',
    excerpt:
      'Around 10% of eCommerce payments are rejected by fraud systems, but up to 70% of those declines are legitimate customers. The real cost isn’t just ops hours - false positives change how analysts work.',
    category: 'Education',
    date: 'August 21, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>False positives are one of the biggest hidden costs in risk management.</p>

<p>According to <a href="https://letskipp.com/blog/understanding-card-declines-due-to-suspected-fraud-navigating-challenges-and-solutions-for-card-issuers" target="_blank" rel="noopener noreferrer">Kipp</a>, around <strong>10% of all eCommerce payments</strong> are rejected by fraud detection systems, but up to <strong>70% of these declined orders</strong> are from legitimate customers. So nine out of ten investigations don't lead to any meaningful action.</p>

<p>The obvious cost is operational - thousands of analyst hours, growing compliance teams, and longer investigation queues.</p>

<p>I think the bigger cost is that false positives change how people work. When analysts spend most of their day reviewing alerts that turn out to be nothing, every new alert starts to look the same. The challenge shifts from detecting risk to managing alert volume. That's a dangerous place to be.</p>

<h2>More acts, more alerts - not necessarily more fraud found</h2>

<p>We see the same pattern across fraud prevention. Every fraud act is introduced for a good reason. But over time, systems accumulate more acts, more controls, and more alerts. Eventually, they become very good at generating work - not necessarily at finding fraud.</p>

<p>The objective was never to create more alerts. It was to make better decisions. That's an important distinction.</p>

<h2>Reducing false positives means better decisions</h2>

<p>Reducing false positives is about improving the quality of every decision the system makes. It means asking questions like:</p>

<ul>
  <li>Which alerts consistently turn out to be legitimate?</li>
  <li>Which signals actually predict risk?</li>
  <li>Which controls create protection?</li>
  <li>Which ones simply create noise?</li>
</ul>

<p>Good fraud and compliance systems are the ones that maximise precision while keeping risk at an acceptable level - because in the end the goal is to investigate the right things.</p>

<p>If you want a clearer view of which controls protect you and which mostly create noise, <a href="/book-a-demo/">book a walkthrough</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7496438457334988800/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'How common are false positives in eCommerce fraud declines?',
        a: 'Industry research cited by Kipp finds that around 10% of eCommerce payments are rejected by fraud detection systems, while up to 70% of those declined orders come from legitimate customers. That means a large share of declines and follow-up investigations do not confirm fraud, so teams spend significant time reviewing alerts that do not lead to meaningful risk action.',
      },
      {
        q: 'Why are false positives more than an operational cost?',
        a: 'Beyond analyst hours and longer queues, high false-positive volume changes how people work. When most alerts turn out to be nothing, every new alert starts to look the same and the job shifts from detecting risk to managing alert volume. That fatigue makes it harder to spot real threats and quietly degrades decision quality across the fraud and compliance process.',
      },
      {
        q: 'How should teams reduce false positives without raising fraud risk?',
        a: 'Focus on decision quality, not more alerts. Ask which alerts consistently prove legitimate, which signals actually predict risk, which controls create real protection, and which only create noise. Strong systems maximise precision while keeping residual risk acceptable - so analysts investigate the right cases instead of drowning in volume that never leads to action.',
      },
    ],
  },
  {
    slug: 'fraud-analysis-is-not-just-a-data-problem',
    title: 'Fraud Analysis Is Not Just a Data Problem',
    excerpt:
      'More data and a better model rarely fix fraud on their own. Effective analysis sits at the intersection of data skills and real fraud, payments, and operational expertise.',
    category: 'Education',
    date: 'August 17, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>One of the most underestimated problems in fraud analysis is treating it as purely a data problem.</p>

<p>Many teams assume that if you have enough data, computing power, and a good model, the right answers will follow. In my experience, they rarely do.</p>

<p>Over the last decade, I've learned that effective fraud analysis sits at the intersection of two very different skill sets.</p>

<ol>
  <li><strong>Data</strong> - understanding how to work with large datasets, identify patterns, build models, and test hypotheses.</li>
  <li><strong>Fraud</strong> - understanding payment flows, customer behaviour, fraud tactics, operational processes, and how decisions are actually made.</li>
</ol>

<p>Both matter.</p>

<p>I've worked with outstanding fraud analysts who could investigate almost any case manually but struggled to turn those insights into scalable, data-driven systems. I've also worked with exceptionally talented data scientists who built statistically impressive models that simply didn't work in production because they lacked the right context.</p>

<h2>Fraud is behavioural, operational, and commercial</h2>

<p>Fraud is a behavioural, an operational, and a business problem. The numbers tell you what is happening. Domain expertise helps you understand why it's happening, whether the pattern is meaningful, and whether it will still hold once fraudsters adapt.</p>

<p>The best fraud systems I've seen come from combining data expertise and fraud expertise.</p>

<p>If you want help turning transaction patterns into rules and actions that reflect how your business actually works, <a href="/book-a-demo/">book a walkthrough</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7494988899832786944/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Why isn’t fraud analysis only a data or modelling problem?',
        a: 'Enough data, compute, and a strong model rarely produce the right fraud answers on their own. Fraud is behavioural, operational, and commercial: numbers show what is happening, but domain expertise explains why it matters, whether the pattern is meaningful for your business, and whether it will still hold after fraudsters adapt their tactics.',
      },
      {
        q: 'What two skill sets make fraud analysis effective?',
        a: 'Effective fraud analysis combines data skills - working with large datasets, finding patterns, building models, and testing hypotheses - with fraud domain expertise: payment flows, customer behaviour, attacker tactics, operations, and how decisions get made in practice. Either side alone usually fails to produce systems that work at scale in production.',
      },
      {
        q: 'What goes wrong when teams lean only on data science or only on case work?',
        a: 'Strong investigators may catch cases manually but struggle to turn insights into scalable, data-driven controls. Strong data scientists may ship statistically impressive models that fail in production without payment and fraud context. The best systems combine both so models reflect real behaviour, operations, and how fraud decisions are actually made.',
      },
    ],
  },
  {
    slug: 'nacha-ach-fraud-responsibility-june-2026',
    title:
      'The Biggest Fraud-Related Change This Year Is a Change in Responsibility',
    excerpt:
      'From June 20th, every organisation that originates ACH payments must have documented, risk-based processes to identify potential fraudulent payments - covering 35.2 billion ACH payments worth $93 trillion in 2025.',
    category: 'News',
    date: 'August 14, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>The biggest fraud-related change this year is a change in responsibility.</p>

<p>From June 20th, every organisation that originates ACH payments must have documented, risk-based processes to identify potential fraudulent payments.</p>

<p>We are talking about <strong>35.2 billion ACH payments worth $93 trillion</strong> that were processed in 2025.</p>

<p>Historically, fraud prevention has often been viewed as the responsibility of banks and payment providers. The new <strong>Nacha Rules</strong> make it clear that businesses originating payments also have responsibility for preventing fraud before payments enter the network.</p>

<p>That's an important change in mindset.</p>

<h2>From response to prevention</h2>

<p>Good fraud prevention is no longer just about responding when something goes wrong. It's about demonstrating that you have processes to detect suspicious activity before money leaves the account.</p>

<p>The interesting part is that Nacha deliberately requires organisations to build controls appropriate to their own level of risk. That means understanding:</p>

<ul>
  <li>Where payment instructions originate</li>
  <li>How payment changes are verified</li>
  <li>Who can approve payments</li>
  <li>What unusual behaviour should trigger additional review</li>
  <li>How fraud incidents are investigated and improved upon</li>
</ul>

<h2>The biggest takeaway</h2>

<p>To me, that's the biggest takeaway. Compliance is becoming less about ticking boxes and more about demonstrating that fraud risk is actively managed.</p>

<p>If you're working through how to document and operationalise risk-based controls on your payment flows, <a href="/book-a-demo/">we're happy to walk through it</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7493901772894298113/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'What changed in Nacha ACH fraud rules in June 2026?',
        a: 'From June 20th, organisations that originate ACH payments must maintain documented, risk-based processes to identify potential fraudulent payments before those payments enter the network. That shifts more fraud-prevention responsibility onto originating businesses, not only banks and payment providers, and requires proof that suspicious activity can be detected before money leaves the account.',
      },
      {
        q: 'Why does ACH fraud responsibility matter now?',
        a: 'ACH volume is enormous - about 35.2 billion payments worth $93 trillion in 2025. When originating businesses must prove they manage fraud risk before money moves, reactive controls after an incident are no longer enough. Teams need documented processes that match their risk level and show fraud is actively managed, not only investigated after losses appear.',
      },
      {
        q: 'What should businesses document under the new Nacha expectations?',
        a: 'Controls should match your risk level and typically cover where payment instructions originate, how payment changes are verified, who can approve payments, what unusual behaviour should trigger additional review, and how fraud incidents are investigated and improved. The point is demonstrating that fraud risk is managed continuously, not only ticking a compliance checklist after something goes wrong.',
      },
    ],
  },
  {
    slug: 'ai-is-changing-the-speed-of-fraud-evolution',
    title: 'AI Is Changing the Speed at Which Fraud Evolves',
    excerpt:
      'Visa detected around $1 billion in scam transactions in H2 2025. AI-enabled scams drove nearly 20% higher losses year over year. The real shift isn’t just more fraud - it’s how fast fraud adapts.',
    category: 'Education',
    date: 'August 12, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>Visa detected around <strong>$1 billion in scam transactions</strong> in the second half of 2025 alone. Scams are now the largest category of consumer payment fraud.</p>

<p>Another report found that AI-enabled scams increased losses by almost <strong>20% year over year</strong>, reaching $14.3 billion globally.</p>

<p>The obvious conclusion is that AI is making fraud worse.</p>

<p>I think there's a more interesting conclusion.</p>

<h2>AI is changing the speed of fraud evolution</h2>

<p>Fraudsters have always adapted. The difference is that adaptation used to take time. A new fraud act gets implemented, fraudsters test it, they find a weakness, and adjust their behaviour.</p>

<p>Today, that entire cycle happens much faster. They can generate phishing campaigns at scale, create convincing fake identities, test hundreds of variations, learn from the results, and launch the next attack almost immediately.</p>

<p>The challenge for merchants is that fraud is becoming more adaptive. That changes how fraud systems need to operate.</p>

<ul>
  <li>A fraud strategy that gets reviewed every few months isn't enough</li>
  <li>Fraud acts can't be written once and forgotten</li>
  <li>Models can't be treated as permanent solutions</li>
</ul>

<p>The question becomes: <strong>can our fraud strategy evolve as quickly as the fraud itself?</strong></p>

<p>That means continuously reviewing fraud patterns. Understanding which behaviours have changed, removing outdated acts, and focusing on signals that are harder to manipulate than individual data points.</p>

<h2>The fundamentals still matter</h2>

<p>The fundamentals of good fraud management remain the same:</p>

<ol>
  <li>Understand the behaviour</li>
  <li>Ignore the noise</li>
  <li>Build systems that evolve as quickly as the threats they're designed to stop</li>
</ol>

<p>If you want to see how FraudPulse turns shifting transaction patterns into ranked rules and actions, <a href="/book-a-demo/">book a walkthrough</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7493177017924980736/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'How much scam fraud did Visa detect in late 2025?',
        a: 'Visa detected around $1 billion in scam transactions in the second half of 2025 alone, and scams are now the largest category of consumer payment fraud. Separately, AI-enabled scams increased losses by almost 20% year over year to about $14.3 billion globally, showing how quickly scam volume and impact are rising for merchants and networks.',
      },
      {
        q: 'How is AI changing payment fraud?',
        a: 'AI is not only increasing scam losses - it is speeding up the fraud cycle. Attackers can generate phishing campaigns, create convincing fake identities, test hundreds of variations, learn from the results, and launch the next attack almost immediately. Adaptation that once took weeks can now happen in days, which means static fraud reviews fall behind faster than before.',
      },
      {
        q: 'What should merchants change in their fraud strategy?',
        a: 'Review fraud patterns continuously instead of every few months, remove outdated acts, avoid treating models as permanent solutions, and focus on signals that are harder to manipulate than single data points. The core question is whether your strategy can evolve as quickly as the fraud itself, with behaviour-based controls that stay useful after attackers change tactics.',
      },
    ],
  },
  {
    slug: 'fraud-acts-must-evolve-or-become-ineffective',
    title: 'Fraud Acts Must Evolve - Or They Become Ineffective',
    excerpt:
      'Most fraud acts start with a real problem and work at first. Then fraudsters adapt and the act stays frozen - until systems fill with controls written for problems that no longer exist.',
    category: 'Education',
    date: 'August 10, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>One of the most common reasons fraud systems become ineffective over time is that their acts don't evolve.</p>

<p>Most fraud acts start with a problem - a fraud pattern appears, losses increase, and the team investigates what happened and implements a new act to stop it. Yes, that works. The fraud disappears, chargebacks fall, and everyone moves on.</p>

<p>The problem is that fraudsters move on too. They change the email domain, adjust the payment amount, switch devices, or route traffic differently. Sometimes a very small change is enough to bypass an act that was previously highly effective.</p>

<p>Meanwhile, the act stays exactly the same.</p>

<h2>A collection of answers to yesterday's problems</h2>

<p>Over time, this creates a very common pattern. The fraud system becomes a collection of acts that were written for problems that no longer exist. Some continue blocking legitimate customers, and others stop catching fraud altogether.</p>

<p>The challenge is that none of this is immediately visible. Fraud doesn't spike overnight because one act became outdated. Performance gradually deteriorates, approval rates slowly decline, and false positives increase. New fraud patterns begin slipping through, and without regular analysis, it's very difficult to know which acts are still protecting the business and which ones have become obsolete.</p>

<h2>Treat every act as a hypothesis</h2>

<p>This is why fraud prevention is about continuously evaluating the acts you already have. It requires asking questions like:</p>

<ul>
  <li>Which acts should be updated, removed, or replaced?</li>
  <li>Which acts are still preventing meaningful fraud?</li>
  <li>Which ones are creating unnecessary friction?</li>
  <li>Which fraud patterns have changed?</li>
</ul>

<p>A fraud act should be treated as a hypothesis that's continuously tested. Good fraud systems are built on acts that continue reflecting how fraud behaves today.</p>

<p>If you want help reviewing which of your current acts still earn their place, <a href="/book-a-demo/">book a walkthrough</a>.</p>

<p><em>Originally shared on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7492452191937417216/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em></p>
    `.trim(),
    faqs: [
      {
        q: 'Why do fraud acts become ineffective over time?',
        a: 'Most acts are written for a specific attack and work at first, then stay frozen while fraudsters change domains, amounts, devices, or routing. A small change can bypass a once-effective control. Over time the stack fills with acts for problems that no longer exist - some blocking good customers, others missing fraud - without an obvious overnight spike to force a review.',
      },
      {
        q: 'Why is outdated fraud logic hard to notice?',
        a: 'Performance usually drifts instead of failing suddenly: approval rates slowly decline, false positives rise, and new patterns slip through. Without regular analysis it is hard to tell which acts still protect the business and which are obsolete. That gradual deterioration is why teams often keep reactive controls long after the original fraud pattern has moved on.',
      },
      {
        q: 'How should teams keep fraud acts effective?',
        a: 'Continuously evaluate the acts you already have: which should be updated, removed, or replaced; which still stop meaningful fraud; which create unnecessary friction; and which fraud patterns have changed. Treat each act as a hypothesis under ongoing test so the system reflects how fraud behaves today, not only the attacks that prompted yesterday’s rules.',
      },
    ],
  },
  {
    slug: 'balancing-fraud-prevention-with-customer-experience',
    title:
      '85% of e-commerce professionals say balancing fraud prevention with customer experience is one of their biggest challenges.',
    excerpt:
      'The real problem isn’t only the balance - it’s that most merchants can’t tell whether they’re getting it right. Chargebacks and block rates are visible; which rules help vs hurt usually isn’t.',
    category: 'Education',
    date: 'July 29, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>85% of e-commerce professionals say balancing fraud prevention with customer experience is one of their biggest challenges.</p>

<p>I don’t think that’s the problem. The bigger problem is that most online merchants don’t know whether they’re getting that balance right in the first place.</p>

<p>They know how many chargebacks they received, how many orders were blocked, and they might even know their fraud rate. But ask questions like…</p>

<ul>
  <li>Which fraud acts are preventing fraud?</li>
  <li>Which ones are blocking legitimate customers?</li>
  <li>How much revenue are false positives costing us?</li>
  <li>Has fraud changed, or has our strategy stopped keeping up?</li>
</ul>

<p>Most businesses don’t have an answer.</p>

<p>So a fraud attack appears, a new act gets added, chargebacks increase, and another act gets added. A few months later, the fraud console is full of acts that nobody wants to touch because nobody knows what they’ll break. That’s just a collection of reactions.</p>

<p>The best fraud teams measure how well they’re balancing fraud, customer experience, and revenue. Stopping fraud is only half the job. The other half is making sure you’re not stopping your best customers.</p>

<p>If Stripe Radar is declining good buyers, start with rule tuning - see <a href="/blog/stripe-radar-blocking-legitimate-customers/">Stripe Radar is blocking legitimate customers - what should I do?</a></p>

<p>If you want a clearer view of how your rules are performing - and where false positives may be costing you - <a href="/book-a-demo/">Book a Demo</a> or <a href="/webinar/">join our free webinar</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'Why is balancing fraud prevention and customer experience so hard?',
        a: 'Most merchants can see chargebacks and block rates, but not which specific rules stop fraud versus which ones decline good customers. Without that visibility, teams cannot tell whether the balance is actually working, so they keep adding controls after incidents and slowly trade conversion and customer experience for a lower visible fraud number.',
      },
      {
        q: 'What happens when fraud rules only get added after incidents?',
        a: 'The console fills with reactive acts that nobody wants to change, because nobody knows what removing them will break. Over time you get a pile of reactions instead of a measurable strategy, false positives climb, and the team loses confidence to loosen or retire rules even when they are clearly hurting legitimate buyers.',
      },
      {
        q: 'What do the best fraud teams measure beyond fraud rate?',
        a: 'They measure how well the system balances fraud, customer experience, and revenue - including false-positive cost, approval-rate impact, and whether rules still match how fraud and customers behave today. Stopping fraud is only half the job; the other half is making sure controls are not stopping your best customers.',
      },
    ],
  },
  {
    slug: 'social-media-scams-2-1-billion-authorized-payments',
    title: 'Consumers lost $2.1 billion to scams that started on social media last year.',
    excerpt:
      'Meta Facebook accounted for more reported scam losses than any other social platform - but by the time payment hits a bank or PSP, the scam often already looks like a normal authorized transaction.',
    category: 'News',
    date: 'July 28, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>Consumers lost $2.1 billion to scams that started on social media last year.</p>

<p>Meta Facebook accounted for more reported scam losses than any other social media platform.</p>

<p>The interesting part is where the scam ends.</p>

<p>By the time the payment reaches a bank, PSP, or fraud system, the fraud has often already happened. The victim has spent days or even weeks building trust with the fraudster. They’ve been persuaded, manipulated, and convinced the payment is legitimate.</p>

<p>From the payment provider’s perspective, everything can look perfectly normal.</p>

<p>The customer initiates the payment, the device is recognised, authentication succeeds, and the credentials are valid. The transaction itself isn’t necessarily suspicious.</p>

<p>That’s why scam prevention is becoming fundamentally different from traditional fraud prevention.</p>

<p>Historically, fraud systems focused on identifying unauthorised activity. Today, one of the biggest challenges is identifying authorised payments that should never have happened.</p>

<p><strong>That’s a much harder problem.</strong></p>

<p>Social media platforms, banks, payment providers, and fraud vendors each see a different part of the customer journey. The challenge is connecting those signals before the money leaves the account.</p>

<p>As scams become more sophisticated and fraudsters operate at greater scale, reacting after the payment is no longer enough. The focus has to move upstream.</p>

<p>From simply analysing the transaction to understanding the behaviour that led to it.</p>

<p>If you want to understand how fraud and dispute patterns show up in your own payment data - not only after the chargeback - <a href="/book-a-demo/">book a FraudPulse walkthrough</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'Why are social media scams hard for payment fraud systems to catch?',
        a: 'By the time money moves, the victim often believes the payment is legitimate after days or weeks of social engineering. Device, credentials, and authentication can all look normal, so the transaction looks authorized rather than stolen-card fraud. Traditional fraud engines built for unauthorized activity therefore miss much of the scam risk at the payment step.',
      },
      {
        q: 'How is scam prevention different from traditional fraud prevention?',
        a: 'Traditional systems focus on unauthorized activity such as stolen cards or account takeover. Scam prevention increasingly means spotting authorized payments that should never have happened - a harder problem that needs upstream journey context across social platforms, banks, and PSPs, not only the final transaction risk score at checkout.',
      },
      {
        q: 'What does “moving upstream” mean for scam defense?',
        a: 'It means connecting signals across social platforms, banks, PSPs, and fraud tools before funds leave the account, and understanding the behaviour that led to the payment. Reacting only after the charge clears is too late for many social-media scams, because the victim has already been convinced the transfer is legitimate.',
      },
    ],
  },
  {
    slug: 'biggest-mistake-in-fraud-analysis-trusting-individual-indicators',
    title: 'The biggest mistake in fraud analysis is trusting individual indicators',
    excerpt:
      'High amount, disposable email, new device, VPN - none of those signals mean much alone. Good fraud analysis asks whether the red flags tell a coherent fraud story.',
    category: 'Education',
    date: 'July 22, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>When people first start working in fraud, they often treat every indicator the same.</p>

<ul>
  <li>High transaction amount? Bad.</li>
  <li>Disposable email? Bad.</li>
  <li>New device? Bad.</li>
  <li>VPN? Bad.</li>
</ul>

<p>It’s much more nuanced. Every one of those signals can belong to a perfectly legitimate customer, and every fraudulent transaction can sometimes look completely normal.</p>

<p>A disposable email address might be suspicious, or it might belong to a privacy-conscious customer. A VPN could be someone hiding their identity, or an employee working remotely.</p>

<p>A customer making five payment attempts could be testing stolen cards, or they could be struggling with their bank.</p>

<p><strong>The indicator itself tells you very little.</strong></p>

<p>That’s why experienced fraud analysts don’t just ask, which risk signals do we have?</p>

<p>But more importantly, what’s the fraud story? Can I explain how this fraud happened? What was the fraudster trying to achieve? How did they get there? Do these signals make sense together? Or are they simply a collection of unrelated bad indicators?</p>

<p>I’ve seen plenty of transactions with several suspicious signals that turned out to be completely legitimate. I’ve also seen fraudulent transactions with almost no obvious indicators at all. The difference was the ability to understand the behaviour behind it.</p>

<p>Good fraud analysis is about asking whether those red flags tell a coherent story. If you can’t explain the fraud itself, there’s a good chance you’re looking at noise instead of risk.</p>

<p>That’s also why fraud looks different across every industry.</p>

<p>The same behaviour can be perfectly normal for one business and highly suspicious for another. Without understanding the context, it’s very easy to optimise for the wrong signals.</p>

<p>Over time, I’ve found that the best fraud analysts develop a sense for fraud. The goal isn’t to find suspicious transactions. It’s to understand fraudulent behaviour.</p>

<p>That’s where the decisions become much clearer.</p>

<p>If you want a clearer view of how your system is behaving, <a href="/book-a-demo/">feel free to reach out</a>. Happy to take a look.</p>
    `.trim(),
    faqs: [
      {
        q: 'Are individual fraud signals enough to decline a transaction?',
        a: 'Usually not. Signals like disposable email, VPN, new device, or high ticket size can belong to perfectly legitimate customers. Strong decisions come from whether the signals together tell a coherent fraud story for that business - what the fraudster was trying to achieve - rather than treating every red flag as an automatic decline reason.',
      },
      {
        q: 'What should fraud analysts ask beyond risk scores?',
        a: 'Ask what the fraudster was trying to achieve, how they got there, and whether the signals make sense together - or whether you are looking at unrelated noise. Experienced analysts look for a coherent fraud story, because many suspicious-looking transactions are legitimate and some fraudulent ones show almost no obvious individual indicators.',
      },
      {
        q: 'Why does industry context matter for fraud signals?',
        a: 'The same behaviour can be normal in one business and suspicious in another. Without understanding the business behind the transactions, teams often optimise for the wrong signals, block good customers, and miss fraud patterns that only make sense in that vertical’s incentives, pricing, and typical buyer behaviour.',
      },
    ],
  },
  {
    slug: 'same-behaviour-fraudulent-in-one-business-legitimate-in-another',
    title:
      'In fraud the same behaviour can be fraudulent in one business and completely legitimate in another',
    excerpt:
      'A sneaker-drop “bot attack” that looked like fraud was actually top customers. Context - not raw anomalies - decides what a fraud rule should do.',
    category: 'Education',
    date: 'July 20, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>Early in my career, I worked with one of the world’s largest sneaker brands. They were launching a limited-edition release.</p>

<p>Within minutes, the website was flooded with what looked like a textbook fraud attack - bots, disposable email addresses, suspicious IPs, customers trying to create multiple accounts, and dozens of purchase attempts happening simultaneously.</p>

<p>We did what any fraud team would do. We started blocking them. About an hour later, I got a call asking, what exactly did you do?</p>

<p>It turned out those weren’t fraudsters. They were some of the brand’s best customers - professional sneaker resellers.</p>

<p>In that market, limited releases create enormous demand. People prepare bots, multiple accounts, and automated purchasing tools because products sell out within minutes and can often be resold for two, three, or even five times the original price.</p>

<p>So what looked like suspicious behaviour was simply how that market operated.</p>

<p>The challenge was understanding which unusual behaviour was legitimate. That experience changed how I think about fraud.</p>

<p>Every industry has its own customer behaviour, incentives, and normal. A fraud act that works perfectly for a SaaS business might perform terribly for sneaker drops. A model trained on eCommerce transactions may fail completely in travel or gaming.</p>

<p><strong>The data alone won’t tell you that. Context will.</strong></p>

<p>That’s why I’ve always believed fraud analysis is about much more than finding statistical anomalies. It’s about understanding the business behind the transactions.</p>

<p>If you’re seeing similar patterns, or just want a clearer view of how your system is behaving, <a href="/book-a-demo/">feel free to reach out</a>. Happy to take a look.</p>
    `.trim(),
    faqs: [
      {
        q: 'Can the same checkout behaviour be fraud in one business and fine in another?',
        a: 'Yes. Bots, multiple accounts, and burst purchasing can be attacks in one vertical and normal customer behaviour in another - for example limited sneaker releases where resellers use automation because stock sells out in minutes. Rules need business context and market incentives, not just anomaly detection against a generic ecommerce baseline.',
      },
      {
        q: 'Why do generic fraud models fail across industries?',
        a: 'Each industry has different incentives and definitions of “normal” behaviour. A rule that works for SaaS can hurt sneaker drops; a model trained on general ecommerce may fail in travel or gaming. Without vertical context, systems over-block legitimate demand or under-detect fraud that looks ordinary for that market.',
      },
      {
        q: 'What should you do before blocking “bot-like” behaviour?',
        a: 'Confirm whether the behaviour matches how your best customers actually buy. In high-demand markets, automation and multiple accounts can be legitimate demand rather than an attack. Blocking without that context can remove top customers and revenue while creating a false sense that the fraud system is performing well.',
      },
    ],
  },
  {
    slug: 'billion-dollar-companies-with-two-person-fraud-teams',
    title: 'I’ve worked with companies doing $1B+ in revenue with a 2-person fraud team',
    excerpt:
      'Fraud often stays reactive until volume and complexity break the setup. Team size matters less than clear logic, measurable signals, and structured systems.',
    category: 'Education',
    date: 'July 14, 2026',
    readTime: '3 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>In many businesses, fraud isn’t a priority until it becomes one.</p>

<p>Things run smoothly, losses are low, and the system works well enough. So the team stays small, the setup stays basic, and fraud gets handled reactively.</p>

<p>The pattern tends to change when volume increases, new markets are added, payment flows become more complex - and suddenly, the existing setup starts to break.</p>

<p>What makes it challenging is that the problem shows up as more false positives, slower decisions, and less clarity on what’s actually happening. At that point, adding more people doesn’t solve it.</p>

<p>The issue usually is unclear logic, fragmented data, and systems that grew without structure.</p>

<p>I’ve seen small teams operate very effectively and large teams struggle with the same problems. The difference is usually not the size of the team. It’s whether the system they’re working with is clear, measurable, and built around the right signals.</p>

<p><strong>Fraud doesn’t scale in a straight line - and neither should the way you manage it.</strong></p>
    `.trim(),
    faqs: [
      {
        q: 'Do high-revenue companies need large fraud teams?',
        a: 'Not necessarily. Small teams can perform well if their fraud system is clear, measurable, and built around the right signals. Unclear logic and fragmented data hurt large teams too. Headcount only helps when the underlying decision framework, data quality, and feedback loops are already structured enough to scale.',
      },
      {
        q: 'When does a basic fraud setup usually break?',
        a: 'When volume grows, new markets are added, or payment flows get more complex - often showing up as more false positives, slower decisions, and less clarity rather than a sudden need for more headcount. At that point the issue is usually unclear logic and systems that grew without structure, not simply too few people.',
      },
      {
        q: 'What matters more than fraud team size?',
        a: 'Whether the system is clear, measurable, and built around the right signals. Unclear logic and fragmented data limit both small and large teams; adding people alone rarely fixes that. Fraud does not scale in a straight line, and neither should the operating model if the underlying decision quality is weak.',
      },
    ],
  },
  {
    slug: 'how-to-reduce-chargebacks-on-shopify-2026',
    title: 'How to Reduce Chargebacks on Shopify (2026 Guide)',
    excerpt:
      'A practical 2026 guide for Shopify merchants: understand why chargebacks happen, tune Shopify Flow and Blockify using your own data, and reduce disputes without increasing false declines.',
    category: 'Guide',
    date: 'July 13, 2026',
    updatedAt: 'September 30, 2026',
    readTime: '8 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">To reduce chargebacks on Shopify, classify <em>why</em> they happen, then change the Flow, Blockify, or fraud settings that match those types. FraudPulse analyzes transaction and chargeback history, classifies types, and ranks specific Shopify Flow or Blockify changes with estimated fraud-capture and false-positive percentages - so you cut friendly fraud and card testing without blocking real customers.</p>

<p>Chargebacks are one of the most expensive problems Shopify merchants face in 2026. Every dispute costs more than the refunded order - you lose the product, shipping, payment fees, and often pay a chargeback fee on top.</p>

<p>Most merchants try to solve this by tightening fraud rules across the board. That can reduce chargebacks short term, but it also increases false declines - legitimate customers blocked at checkout who would have converted.</p>

<p>The better approach: understand <em>why</em> chargebacks are happening in your store, then change the specific Shopify Flow or Blockify controls driving the problem.</p>

<h2>Step 1: Know your chargeback rate and reason codes</h2>

<p>Before changing any rules, establish a baseline:</p>

<ul>
  <li>What is your monthly chargeback rate? (chargebacks ÷ total transactions)</li>
  <li>Which reason codes appear most often? (fraud, product not received, not as described)</li>
  <li>Are chargebacks concentrated in certain countries, card brands, or order values?</li>
  <li>Are disputes arriving within days of purchase or weeks later?</li>
</ul>

<p>In 2026, Visa's VAMP threshold dropped to 1.5% for excessive merchants - down from 2.2%. That means less room for error, and chargeback management is no longer optional for growing Shopify stores.</p>

<h2>Step 2: Separate fraud chargebacks from service disputes</h2>

<p>Not all chargebacks are fraud. Many come from:</p>

<ul>
  <li>Shipping delays or delivery failures</li>
  <li>Unclear product descriptions or subscription billing</li>
  <li>Customers who don't recognize the charge on their statement</li>
</ul>

<p>Fraud rules won't fix a fulfillment problem. If your top reason codes are "product not received" or "not as described," start with operations and customer communication - not Shopify Flow or Blockify settings.</p>

<p>If fraud-related reason codes dominate, focus on the patterns getting through your current rules.</p>

<h2>Step 3: Audit what Shopify Flow and Blockify are actually blocking</h2>

<p>Shopify Flow and Blockify hold, tag, or block orders from the signals you configure - velocity, location, customer history, and more. Default workflows and blocks are built for the average merchant, not your specific business.</p>

<p>Common gaps we see in Shopify stores:</p>

<ul>
  <li>High-risk countries blocked too loosely - fraud from regions with elevated chargeback rates still getting through</li>
  <li>Velocity rules that don't account for legitimate repeat buyers or B2B customers</li>
  <li>Rules that block low-value fraud but miss high-ticket orders with mismatched billing/shipping signals</li>
  <li>Overly aggressive rules that decline good customers - hurting conversion to prevent a small fraud volume</li>
</ul>

<p>The goal is not to block more transactions. It is to block the <em>right</em> transactions.</p>

<h2>Step 4: Identify fraud patterns in your transaction data</h2>

<p>Look at the orders that became chargebacks and compare them to orders that didn't. Patterns often emerge:</p>

<ul>
  <li>Same billing country with shipping to a high-risk region</li>
  <li>Multiple orders from the same email domain in a short window</li>
  <li>Card BINs or issuers with disproportionately high dispute rates</li>
  <li>Orders placed at unusual hours relative to the customer's location</li>
  <li>First-time buyers with high basket values and expedited shipping</li>
</ul>

<p>These patterns are unique to your store. Generic fraud rule templates won't capture them - your own data will.</p>

<h2>Step 5: Change Shopify Flow and Blockify based on data, not guesswork</h2>

<p>Once you know which patterns drive chargebacks, make targeted rule changes:</p>

<ol>
  <li><strong>Tighten rules for confirmed fraud patterns</strong> - e.g., block or review orders matching a signal combination that appears in 80% of your fraud chargebacks</li>
  <li><strong>Loosen rules causing false declines</strong> - if a rule blocks many legitimate orders for minimal fraud capture, adjust or remove it</li>
  <li><strong>Prioritize by impact</strong> - start with rule changes that address the highest chargeback volume, not the easiest to implement</li>
  <li><strong>Track results</strong> - measure chargeback rate and approval rate weekly after each change</li>
</ol>

<p>Each rule change should have an expected outcome: fewer chargebacks, maintained or improved approval rate, or both.</p>

<h2>Step 6: Reduce friendly fraud and customer confusion</h2>

<p>Some "fraud" chargebacks are actually customers who forgot they ordered, don't recognize your billing descriptor, or dispute before contacting support.</p>

<ul>
  <li>Use a clear billing descriptor that matches your store name</li>
  <li>Send order confirmation and shipping emails promptly</li>
  <li>Make refund and support contact easy to find</li>
  <li>Respond to disputes with delivery proof when applicable</li>
</ul>

<p>These steps won't eliminate fraud chargebacks, but they reduce preventable disputes that no fraud rule can fix.</p>

<h2>Step 7: Monitor continuously - fraud patterns change</h2>

<p>Fraud in 2026 is more automated and adaptive than before. A rule that worked three months ago may be less effective today as fraudsters adapt.</p>

<p>Review your chargeback data monthly at minimum. Look for new patterns, rising reason codes, and rules that are no longer performing. Continuous analysis beats a one-time rule overhaul.</p>

<h2>How FraudPulse helps Shopify merchants</h2>

<p>FraudPulse connects to your Shopify transaction and chargeback data, analyzes fraud patterns automatically, and delivers prioritized rule changes you can apply in Shopify Flow or Blockify - with estimated chargeback and false-positive impact for each recommendation.</p>

<p>It does not replace Shopify Flow or Blockify. It tells you exactly which rules to change so your existing fraud stack works harder for you.</p>

<p><strong>Want to see what rule changes FraudPulse would recommend for your Shopify store?</strong> <a href="/book-a-demo/">Book a demo</a> and we'll walk through it on your own data.</p>
    `.trim(),
    faqs: [
      {
        q: "Don't Shopify Flow and Blockify already do this?",
        a: 'Flow and Blockify enforce workflows and blocks. They do not tell you the optimal configuration for your chargeback mix. FraudPulse works alongside Flow and Blockify and recommends exact changes with estimated fraud-capture and false-positive rates, so you cut friendly fraud and card testing without guessing which toggle to flip - and without replacing Shopify Flow or Blockify.',
      },
      {
        q: 'Is this a Shopify chargeback-fighting app?',
        a: 'No. FraudPulse is prevention and rule advice, not representment. It classifies why chargebacks happen and ranks specific Shopify Flow or Blockify changes with estimated impact. Recovery apps fight cases after they file; FraudPulse helps you change the settings that stop patterns from repeating.',
      },
      {
        q: 'How do I reduce chargebacks on Shopify without increasing false declines?',
        a: 'Classify why disputes happen, then change the Flow or Blockify settings that match those types - tighten where fraud leaks through and loosen where good customers are blocked. FraudPulse ranks those changes with estimated capture and false-positive percentages so you improve the rate without blindly declining more orders.',
      },
    ],
  },
  {
    slug: 'how-to-audit-your-fraud-acts-in-30-minutes',
    title: "How to audit your fraud acts in ~30 minutes. Here's how I usually approach it.",
    excerpt:
      'A practical 7-step framework to audit your fraud rules in about 30 minutes - map what you have, check impact, find overlap, review false positives, and identify what to remove, adjust, or rebuild.',
    category: 'Guide',
    date: 'July 8, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>Most fraud teams inherit a stack that grew over time - rules added after incidents, thresholds tweaked in spreadsheets, exceptions nobody remembers approving. A quick audit brings clarity. Here is how I usually approach it in about 30 minutes.</p>

<h2>1. List your active acts</h2>

<p>Don't analyse yet - just map them. Include thresholds, exceptions, and segments.</p>

<p><strong>The goal here is visibility.</strong></p>

<h2>2. For each act, ask one question: what problem is this solving?</h2>

<ul>
  <li>If the answer isn't clear, flag it.</li>
  <li>If it's solving a problem that no longer exists, flag it.</li>
</ul>

<p>You'll usually find a few acts that stayed for historical reasons.</p>

<h2>3. Check impact (even roughly)</h2>

<ul>
  <li>How often does this act trigger?</li>
  <li>What % of transactions does it affect?</li>
  <li>What % of those are actually fraud?</li>
</ul>

<p>You're looking for signals.</p>

<h2>4. Look for overlap</h2>

<ul>
  <li>Multiple acts, features, or models triggering on the same behaviour</li>
  <li>Elements that contradict each other</li>
  <li>Models that create unnecessary complexity</li>
</ul>

<p>This is quite common in systems that evolved over time.</p>

<h2>5. Review false positives</h2>

<ul>
  <li>Which parts of the decision engine block legitimate users most often?</li>
  <li>Are there segments where the act is too strict?</li>
</ul>

<p>In many cases, this is where the biggest opportunity sits.</p>

<h2>6. Check if the act is still needed</h2>

<ul>
  <li>Would removing it increase risk materially?</li>
  <li>Or just reduce friction?</li>
</ul>

<h2>7. Look at what's missing</h2>

<ul>
  <li>Are there obvious gaps in coverage?</li>
  <li>Signals you're not using?</li>
  <li>Flows that aren't monitored?</li>
</ul>

<p>This step is often overlooked.</p>

<h2>What you should have at the end</h2>

<p>At the end of this, you should have:</p>

<ul>
  <li>A clearer understanding of what each act does</li>
  <li>A shortlist of acts to remove, adjust, or rebuild</li>
  <li>A better sense of where your system is over- or under-performing</li>
</ul>

<p>Want help running this audit on your Stripe or Shopify data? <a href="/book-a-demo/">Book a demo</a> and we'll walk through it together.</p>
    `.trim(),
    faqs: [
      {
        q: 'How long does a fraud rule audit take?',
        a: 'A practical first-pass audit of your active fraud acts can take about 30 minutes: list what you have, ask what problem each act solves, check rough impact, look for overlap and false positives, then decide what to remove, adjust, or rebuild. The goal is visibility and a shortlist, not a perfect multi-week rewrite on day one.',
      },
      {
        q: 'What should I look for when auditing fraud acts?',
        a: 'Flag acts that no longer solve a clear problem, rules that overlap or contradict each other, segments with high false positives, and coverage gaps where important flows or signals are not monitored. Those patterns usually reveal where the stack grew reactively and where the biggest risk or conversion opportunity sits.',
      },
      {
        q: 'What should I have after a fraud act audit?',
        a: 'A clearer understanding of what each act does, a shortlist of acts to remove, adjust, or rebuild, and a better sense of where the system is over-blocking good customers or under-covering real risk. That output should guide the next changes instead of adding another reactive rule after the next incident.',
      },
    ],
  },
  {
    slug: 'build-vs-buy-fraud-system',
    title: 'Should you build your own fraud system or buy a solution?',
    excerpt:
      'When chargebacks rise and approval rates drop, the default reaction is to find a tool. But the right answer depends on what you should control versus what you can delegate - and most teams land somewhere in between.',
    category: 'Insights',
    date: 'July 9, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>Most teams start with a problem - chargebacks increase, approval rates drop - and the immediate reaction is usually: let's find a tool.</p>

<p>That might be the right move sometimes (not always).</p>

<h2>When buying makes sense</h2>

<p>Buying a solution makes sense when your problem is well-defined, you need speed over control, your team doesn't have the bandwidth to build systems, and the tool fits your business model. In those cases, a good vendor can solve a large part of the problem quickly.</p>

<h2>When building makes sense</h2>

<p>Building tends to make more sense when your flows are unique or complex, off-the-shelf rules don't map well to your risk, you need full control over decision logic, or you've outgrown what existing tools can offer.</p>

<p>But building comes with a cost - ongoing maintenance, data quality, monitoring, and iteration.</p>

<h2>Most teams land in between</h2>

<p>What I've seen in practice is that most teams end up somewhere in between: a combination of a core vendor for coverage and internal logic to handle what the vendor can't.</p>

<p>The decision is more about what should you control and what can you delegate.</p>

<h2>Know your gaps before you commit</h2>

<p>In many cases, teams commit to tools or long implementations before having a clear view of where they're exposed or what's driving the issue.</p>

<p>That's part of the thinking behind what we're building with <a href="/">FraudPulse</a> - understand your data, your gaps, and what's worth solving internally vs externally, before committing to either path.</p>

<p>The right decision is rarely about the tool. It's about knowing what you're solving for.</p>
    `.trim(),
    faqs: [
      {
        q: 'When should a merchant buy a fraud solution?',
        a: 'Buying makes sense when the problem is well-defined, you need speed over deep control, your team lacks bandwidth to build systems, and a vendor tool fits your business model well enough to cover a large part of the risk quickly. In those cases a good vendor can remove a lot of operational burden without a long build project.',
      },
      {
        q: 'When does building an internal fraud system make sense?',
        a: 'Building tends to fit when your flows are unique or complex, off-the-shelf rules do not map to your risk, you need full control over decision logic, or you have outgrown what existing tools can offer. Remember that building also creates ongoing costs for maintenance, data quality, monitoring, and iteration after launch.',
      },
      {
        q: 'What do most fraud teams actually do: build or buy?',
        a: 'Most teams land in between - a core vendor for coverage plus internal logic for what the vendor cannot handle. The real decision is what you should control versus what you can safely delegate, after you understand your gaps and what is actually driving chargebacks, false positives, or operational overload.',
      },
    ],
  },
  {
    slug: 'why-30-90-percent-of-fraud-is-friendly-fraud',
    title: 'Why is up to 30-90% of fraud often classified as friendly fraud?',
    excerpt:
      'As strange as the name sounds, friendly fraud is when a legitimate cardholder disputes a transaction they actually made. Depending on the industry, it can account for 30% to 90% of all fraud cases - and it requires a very different response.',
    category: 'Insights',
    date: 'June 7, 2026',
    updatedAt: 'September 30, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>As strange as the name sounds, there's nothing particularly friendly about it.</p>

<p>It usually refers to cases where a legitimate cardholder later disputes a transaction, claiming it was unauthorised or unrecognised.</p>

<p>Depending on the industry, this can be anywhere between 30% to 90% of all fraud cases.</p>

<p>Which makes it a very different kind of problem, because now you're not trying to detect fraud before it happens, you're trying to prove what already happened.</p>

<h2>The dispute process</h2>

<p>That's where the dispute process comes in - compiling evidence, pulling transaction data, device signals, behavioural patterns, delivery confirmation. All to demonstrate that the transaction was legitimate.</p>

<p>The challenge is how fragmented and manual the process is. Even for teams that understand it well, it can take time, attention, and consistency to do it properly.</p>

<h2>Why we built FraudPulse</h2>

<p>This is one of the areas that led Yaniv Hayun and me to build FraudPulse.</p>

<p>Instead of just flagging a chargeback, the idea is to go one step further.</p>

<p>If something looks like friendly fraud, the system can pull the relevant data, structure it, and generate the full compelling evidence document automatically.</p>

<p>Beyond that, it also tells you what to do next and answers:</p>

<ul>
  <li>What's happening?</li>
  <li>Why it's happening?</li>
  <li>How to reduce it going forward?</li>
</ul>

<p>The idea is to make fraud easier to deal with. If you're working with chargebacks like this and it's taking up too much time, <a href="/book-a-demo/">Book a Demo</a>.</p>

<h2>How do I tell friendly fraud from real fraud on Shopify chargebacks?</h2>

<p class="ai-answer">Friendly fraud is a real customer disputing a legitimate charge; true fraud is stolen cards, testing, or takeover. Shopify reason codes and order context help, but mixed queues need classification. FraudPulse classifies chargebacks by type (including friendly fraud vs other types) and ranks Shopify Flow, Blockify, or Radar rule changes with estimated impact - prevention, not representment.</p>

<p>Look at reason codes, delivery, and whether the customer is known - then classify the pattern. FraudPulse classifies chargeback types from your history so rules match the mix, not a single anecdote. We do not win friendly-fraud cases like Chargeflow or Justt; we help you change rules so fewer of those chargebacks keep happening.</p>

<h2>How to fight friendly fraud on Shopify</h2>

<p class="ai-answer">“Fight” friendly fraud on Shopify means <strong>prevent repeats</strong> (clearer descriptors, delivery evidence, and rules) and optionally <strong>represent</strong> individual cases. FraudPulse focuses on prevention: classify friendly-fraud chargebacks and rank Flow, Blockify, or Radar changes with estimated capture and false-positive rates. Recovery apps fight the case after it files - we do not submit representment packets.</p>

<p>Tighten the rules and ops that let it repeat; use Shopify and network evidence for cases you fight. FraudPulse ranks prevention rule changes from your classified chargebacks and does not submit representment packets. See <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'How do I tell friendly fraud from real fraud on Shopify?',
        a: 'Look at reason codes, delivery, and whether the customer is known - then classify the pattern across your queue. Friendly fraud is a real customer disputing a legitimate charge; true fraud is stolen cards, testing, or takeover. FraudPulse classifies chargeback types from your history so Flow, Blockify, and Radar rules match the mix, not a single anecdote.',
      },
      {
        q: 'How do I fight friendly fraud on Shopify?',
        a: 'Tighten the rules and ops that let it repeat - clearer descriptors, delivery evidence, and Radar, Flow, Blockify, or RevenueProtect changes matched to friendly-fraud patterns - and optionally represent individual cases. FraudPulse ranks prevention rule changes from your classified chargebacks with estimated capture and false-positive rates; it does not submit representment packets.',
      },
      {
        q: 'Do you win friendly-fraud cases like Chargeflow or Justt?',
        a: 'No. FraudPulse is prevention and rule advice, not representment. We classify friendly fraud versus other chargeback types and recommend ranked Shopify Flow, Blockify, and Stripe Radar changes so fewer of those disputes keep happening, while recovery apps focus on fighting cases after they file.',
      },
    ],
  },
  {
    slug: 'fraudpulse-does-not-replace-stripe-radar-shopify-protect',
    title: "FraudPulse Doesn't Replace Stripe Radar, Shopify Flow, Blockify, or RevenueProtect. Here's What It Does Instead.",
    excerpt:
      "One of the biggest misconceptions we hear is that FraudPulse replaces fraud consoles such as Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect. It doesn't - and here's why that distinction matters.",
    category: 'Product',
    date: 'July 2, 2026',
    updatedAt: 'September 30, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>One of the biggest misconceptions we hear is that FraudPulse replaces fraud consoles such as Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect.</p>

<p>It doesn't. In fact, we'd encourage merchants to actively use their payment processor's built-in risk tools - whether that's Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect, or another PSP's fraud console.</p>

<p><strong>They are excellent at what they were designed to do.</strong></p>

<p>Making real-time decisions at checkout - should this payment be approved? Should it be declined? Should additional verification be required? That's exactly the job of a fraud prevention engine.</p>

<h2>But that's only one part of managing fraud</h2>

<p>Once those decisions have been made, most merchants are left with a completely different set of questions:</p>

<ul>
  <li>Why did chargebacks increase last month?</li>
  <li>Which fraud patterns are getting through?</li>
  <li>Which rules are working?</li>
  <li>Which ones are creating unnecessary false positives?</li>
  <li>What should we change next?</li>
</ul>

<p><strong>That's where FraudPulse comes in. We sit on top of your fraud stack.</strong></p>

<h2>How FraudPulse works with your existing tools</h2>

<p>FraudPulse connects to the data your payment processor and fraud tools already generate, analyzes what's happening across your transactions and chargebacks, and turns that into AI-generated action items.</p>

<p>Practical recommendations you can implement - each showing the expected fraud capture rate and the potential impact on false positives.</p>

<blockquote>This rule could capture another 18% of fraud with an estimated false positive rate of 0.2%. This fraud pattern has increased over the last 30 days. Here's what we recommend changing.</blockquote>

<p>That's why we see FraudPulse as the layer that helps merchants <em>understand</em> whether their fraud strategy is working. Our goal is to help you get more value from your existing systems.</p>

<h2>Are Shopify Flow and Blockify enough for fraud prevention?</h2>

<p class="ai-answer">Shopify Flow and Blockify are a strong enforcement layer, but they are not a “which rule should I change for <em>my</em> chargeback mix?” advisor. Many brands add a full platform (Signifyd, Riskified, etc.). FraudPulse sits alongside Flow and Blockify: classify chargebacks, rank Flow or Blockify settings with estimated fraud-capture and false-positive percentages, no replacement required.</p>

<p>Flow and Blockify are enough for enforcement if your default settings already match your risk. They are not enough if you keep taking chargebacks or false declines and do not know which control to change. FraudPulse does not replace Flow or Blockify - it works alongside them.</p>

<h2>Fraud intelligence that works alongside Flow, Blockify, Radar, and RevenueProtect</h2>

<p class="ai-answer">FraudPulse is fraud intelligence designed to <strong>work alongside Shopify Flow and Blockify</strong>: it classifies chargebacks and ranks Flow or Blockify changes with estimated fraud-capture and false-positive percentages. It is not a Flow or Blockify replacement and not a full Riskified/Signifyd platform - complementary ranked advice for your chargeback mix.</p>

<p>Full platforms appear in many listicles because they are a different category. Complementary intelligence - ranked Radar, Flow, Blockify, or RevenueProtect recommendations from <em>your</em> chargeback types - is what this layer is for. See <a href="/stack/">the stack page</a>, <a href="/solutions/">AI fraud analyst for Shopify, Stripe, and Adyen merchants</a>, <a href="/how-it-works/">how it works</a>, <a href="/pricing/">pricing</a>, and the <a href="/faq/">FAQ</a>.</p>

<p><strong>P.S.</strong> If you're running Shopify Flow, Blockify, Stripe Radar, or RevenueProtect and want to know what they're missing, <a href="/book-a-demo/">we'd love to show you</a> - or <a href="/book-a-demo/">Book a Demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'Does FraudPulse replace Stripe Radar, Shopify Flow, Blockify, or RevenueProtect?',
        a: 'No. FraudPulse sits on top of your existing fraud stack. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect still make real-time checkout decisions; FraudPulse analyzes outcomes afterward and recommends which rules to change next, with estimated fraud capture and false-positive impact, so you improve the tools you already use instead of replacing them.',
      },
      {
        q: 'Are Shopify Flow and Blockify enough?',
        a: 'They are enough for enforcement if your default settings already match your risk. They are not enough if you keep taking chargebacks or false declines and do not know which control to change. FraudPulse works alongside Flow and Blockify and ranks setting changes with estimated fraud-capture and false-positive percentages for your history.',
      },
      {
        q: 'What fraud intelligence works alongside Shopify Flow and Blockify?',
        a: 'FraudPulse - ranked Flow or Blockify recommendations from your chargeback types, without replacing Flow or Blockify. Full platforms such as Signifyd or Riskified are a different category. Complementary intelligence tells you which Flow or Blockify settings to change for your mix, with estimated capture and false-positive impact.',
      },
    ],
  },
  {
    slug: 'visa-vamp-threshold-reduction-2026',
    title: 'Visa Reduced the Excessive Merchant Threshold from 2.2% to 1.5% Overnight',
    excerpt:
      "On April 1st, Visa reduced the VAMP excessive merchant threshold from 2.20% to 1.50% - a 32% reduction overnight. Here's what it means for how merchants need to think about risk management.",
    category: 'News',
    date: 'June 30, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>One of the biggest fraud-related changes this year was a threshold. On April 1st, Visa reduced the VAMP excessive merchant threshold from 2.20% to 1.50%.</p>

<p>A 32% reduction overnight. At first glance, it sounds like a small regulatory update - but it significantly reduces the margin for error.</p>

<p>A merchant that was operating comfortably below the previous threshold may now find itself much closer to risk territory. And that's where things get interesting.</p>

<h2>The threshold changed. The fraud didn't.</h2>

<p>Fraud or chargebacks didn't suddenly increase by 32%. The tolerance for them decreased. That changes how merchants need to think about risk management.</p>

<p>Historically, many businesses have operated reactively. A fraud spike happens, chargebacks increase, a new pattern appears. Then controls get added.</p>

<p><strong>Under tighter thresholds, that approach becomes much riskier.</strong></p>

<p>There's less room for:</p>
<ul>
  <li>Unexpected fraud spikes</li>
  <li>Operational mistakes</li>
  <li>Fulfillment issues</li>
  <li>Dispute increases</li>
  <li>Delayed responses</li>
</ul>

<h2>The buffer disappears faster than you think</h2>

<p>A merchant sitting at 1.2% today may feel perfectly comfortable. Until a new attack appears, or a subscription issue creates a wave of disputes, or a seasonal promotion attracts a different customer profile. Suddenly the buffer disappears.</p>

<h2>The biggest takeaway: proactiveness</h2>

<p>To me, the biggest takeaway from the VAMP changes is proactiveness. The merchants that perform best will likely be the ones that invest more time understanding:</p>

<ul>
  <li>Where disputes originate</li>
  <li>Which fraud patterns are evolving</li>
  <li>Where false positives are hurting revenue</li>
  <li>Which operational issues create unnecessary chargebacks</li>
  <li>Where small issues can become large spikes</li>
</ul>

<p>The threshold changed by 32% - and the margin for error changed with it.</p>

<p><strong>That may end up being the most important part of the entire update.</strong></p>
    `.trim(),
    faqs: [
      {
        q: 'What is the Visa VAMP excessive merchant threshold in 2026?',
        a: 'On April 1st, Visa reduced the VAMP excessive merchant threshold from 2.20% to 1.50% - a 32% reduction overnight. That shrinks how much room merchants have before elevated dispute and fraud rates become a serious program risk, even if their absolute fraud volume did not suddenly jump by the same percentage.',
      },
      {
        q: 'Did fraud itself increase when Visa lowered the VAMP threshold?',
        a: 'No. Fraud and chargebacks did not suddenly jump by 32%. The tolerance for them decreased, so merchants who felt safe under the old threshold may now sit much closer to risk territory without any change in attack volume. The margin for operational mistakes, dispute spikes, and delayed responses is simply thinner.',
      },
      {
        q: 'How should merchants respond to a tighter VAMP threshold?',
        a: 'Move from reactive rule-adding after spikes to proactive monitoring: where disputes originate, which patterns are evolving, where false positives hurt revenue, and which operational issues create unnecessary chargebacks before the buffer disappears. Under a tighter threshold, waiting until after an incident to tighten controls becomes much riskier.',
      },
    ],
  },
  {
    slug: 'hidden-cost-of-false-positives-in-fraud-systems',
    title: 'The Hidden Cost of False Positives in Fraud Systems is Often Larger Than the Fraud Itself',
    excerpt:
      'Most fraud teams track fraud that gets through. Almost no one tracks legitimate customers who got blocked, declined, or abandoned checkout after unnecessary friction - and that cost is often bigger.',
    category: 'Education',
    date: 'May 30, 2026',
    updatedAt: 'September 28, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p class="ai-answer">The hidden cost of false positives is often larger than the fraud itself. Fraud losses show up as chargebacks. False positives do not: declined buyers shop elsewhere, abandon checkout after extra friction, and rarely appear as lost revenue. Teams keep tightening rules until conversion damage exceeds the fraud they prevent. Good systems maximise good approvals while keeping fraud acceptable, which often means removing friction that no longer helps.</p>

<p>One of the most underestimated problems in fraud prevention is false positives.</p>

<p>Most fraud teams spend a lot of time thinking about fraud that gets through the system. Much less time is spent thinking about legitimate customers that get blocked by it.</p>

<h2>Why false positives stay invisible</h2>

<p>The reason is that fraud losses are visible. Chargebacks show up in reports, disputes get tracked, and losses are measurable.</p>

<p>False positives are quieter. You don't see the customer who:</p>
<ul>
  <li>Failed verification once and left</li>
  <li>Got declined and bought somewhere else</li>
  <li>Abandoned checkout after extra friction</li>
  <li>Never came back after a bad payment experience</li>
</ul>

<p>That revenue rarely appears as lost - so it gets ignored.</p>

<h2>How systems drift toward over-blocking</h2>

<p>Over time, this creates a very common pattern. A fraud incident happens and the system gets tightened. Gradually, the fraud system starts optimising for reducing fraud exposure.</p>

<p>The problem is that fraud systems don't operate in isolation. They sit directly inside the revenue flow of the business. Every decision affects conversion rates, approval rates, customer trust, operational workload, and long-term retention.</p>

<p>This is where many systems become inefficient. They successfully reduce fraud - but at the cost of declining too many legitimate customers.</p>

<blockquote>In some industries, that hidden cost becomes larger than the fraud itself.</blockquote>

<p>From a fraud perspective, these decisions look reasonable. From a business perspective, they often create unnecessary friction and lost revenue.</p>

<h2>Why reducing false positives is hard</h2>

<p>The difficult part is that reducing false positives is much harder than simply blocking more aggressively. It requires understanding:</p>

<ul>
  <li>Which signals actually matter?</li>
  <li>Where does the predictive value exist?</li>
  <li>Which rules create noise instead of protection?</li>
  <li>Where does friction add security vs. where does it only hurt conversion?</li>
</ul>

<h2>What good fraud systems actually optimise for</h2>

<p>Good fraud systems are not the systems that block the most fraud. They're the systems that <strong>maximise good approvals while keeping fraud at an acceptable level</strong>.</p>

<p>The irony is that the fraud system is often succeeding. It is blocking exactly the transactions it was configured to block. The question is whether those are the right decisions for the business. The biggest improvements usually come from finding segments where controls are too aggressive or no longer needed, then removing or adjusting them.</p>

<p>That balance is the real challenge.</p>

<p>Related: <a href="/blog/how-to-reduce-false-declines-in-stripe/">how to reduce false declines in Stripe</a>, <a href="/blog/every-decline-is-not-a-win/">why every decline is not a win</a>, <a href="/webinar/">Stripe Radar webinar</a>, and the <a href="/faq/">FAQ</a>.</p>

<p>If you want to see which rules may be blocking good customers in your Stripe or Shopify data, <a href="/book-a-demo/">book a demo</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'What is a false positive in a fraud system?',
        a: 'A false positive is a legitimate customer blocked, declined, or slowed by extra friction when the transaction was not fraud. The loss shows up as abandoned checkouts, lost lifetime value, and support load - not as a single fraud line item - which is why many teams under-invest in measuring and reducing it.',
      },
      {
        q: 'Why are false positives often more expensive than fraud?',
        a: 'Fraud losses are visible in chargebacks and reports. False-positive losses are quiet: declined buyers shop elsewhere and rarely appear as “lost revenue,” so teams keep tightening rules until the hidden conversion cost exceeds the fraud they prevent. In some industries that invisible cost becomes larger than the fraud itself.',
      },
      {
        q: 'What should good fraud systems optimise for?',
        a: 'Not maximum blocks. Good systems maximise good approvals while keeping fraud at an acceptable level - knowing which signals matter, which rules create noise, and where friction adds security versus only hurting conversion. The commercial goal is protecting revenue, not producing the lowest possible fraud rate at any cost.',
      },
    ],
  },
  {
    slug: 'overfitting-the-most-common-fraud-prevention-mistake',
    title: 'Overfitting: The Most Common Mistake in eCommerce Fraud Prevention',
    excerpt:
      'A fraud pattern appears, pressure builds, and teams react fast - but many of those reactions become too specific. Here\'s why overfitting is quietly undermining fraud systems everywhere.',
    category: 'Education',
    date: 'June 1, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>One of the most common mistakes I see in eCommerce fraud prevention is overfitting.</p>

<p>A fraud pattern appears, losses increase, pressure builds internally, and the team reacts quickly to stop the attack. The problem is that many of these reactions become too specific.</p>

<h2>How overfitting happens</h2>

<p>Imagine a fraud pattern that includes stolen cards from a specific issuer, disposable email domains, a product priced at $110, and transactions coming from a certain geo. A common response is to build logic around the exact pattern itself.</p>

<p>So the rule becomes: <em>block transactions matching this exact pattern</em>.</p>

<p>At first, it works. But then the fraudster changes one thing - the product becomes $105 instead of $110 - and the entire pattern disappears from the system again.</p>

<p>This happens because many fraud decisions rely too heavily on signals that are easy to replace: specific products, checkout amounts, single email domains. These are weak anchors.</p>

<blockquote>Fraudsters adapt very quickly once they understand what's being blocked.</blockquote>

<h2>What to focus on instead</h2>

<p>The goal should be to understand the underlying <em>behaviour</em> behind the fraud pattern.</p>

<p>It's not about what happened once. It's about understanding what the fraudster is trying to achieve - and which parts of the pattern are difficult to change. The parts that are structural, repeatable, and harder to simply replace or adjust.</p>

<p><strong>That's usually where the stronger logic sits.</strong></p>

<h2>This applies to every system</h2>

<p>This challenge exists regardless of how decisions are being made. Whether you're using manual reviews, rules, machine learning models, or AI-based systems - if the logic becomes too dependent on highly specific signals, it becomes fragile.</p>

<p>Overfitting creates another problem: false confidence. The system looks effective because it successfully blocks the pattern it already knows, but it becomes blind to small variations around it.</p>

<h2>Building resilience</h2>

<p>More fraud systems should focus on signals and behaviour that are harder for fraudsters to manipulate quickly. That's what creates resilience.</p>

<p>Fraud prevention is not really about catching one attack. It's about building systems that continue working after the fraudster changes tactics.</p>
    `.trim(),
    faqs: [
      {
        q: 'What is overfitting in fraud prevention?',
        a: 'Overfitting is building rules or models that are too tightly tied to one exact attack pattern - specific amounts, products, issuers, or domains - so the control works once, then fails when the fraudster changes a small detail. The system looks effective against the known pattern while becoming blind to nearby variations.',
      },
      {
        q: 'Why do overly specific fraud rules fail quickly?',
        a: 'Signals like a single price point or email domain are easy for fraudsters to replace. When the attack shifts slightly, the exact pattern disappears from detection while the underlying behaviour continues. That creates false confidence: the rule blocks what it already knows and misses the adapted version of the same attack.',
      },
      {
        q: 'What should fraud teams focus on instead of exact attack fingerprints?',
        a: 'Focus on underlying behaviour and structural signals that are harder to manipulate quickly - the parts of the pattern that are repeatable and hard to swap - so controls stay effective after tactics change. Fraud prevention is less about catching one attack and more about remaining resilient when fraudsters adapt.',
      },
    ],
  },
  {
    slug: 'fraudpulse-features-walkthrough',
    title: 'Demonstrating FraudPulse: From Data to Actionable Fraud Insights in Minutes',
    excerpt:
      'The idea behind FraudPulse is to make fraud analysis usable from day one - no complex setup, no technical barriers. Here\'s exactly how it works.',
    category: 'Product',
    date: 'June 25, 2026',
    readTime: '3 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>The idea behind FraudPulse is to make fraud analysis usable from day one.</p>

<h2>Step 1: Onboarding</h2>

<p>When someone logs in for the first time, we ask them a few general questions - what kind of business is this? What's the volume? What kind of customers are you dealing with?</p>

<p>Just enough context so the system understands what it's looking at.</p>

<h2>Step 2: Connecting your data</h2>

<p>From there, the next step is connecting data. We've kept this intentionally simple. You can integrate directly with any payment provider - or, if you don't want to deal with integrations, just upload a CSV. We'll take it from there.</p>

<h2>Step 3: Analysis happens in the background</h2>

<p>Once the data is in, everything else happens automatically. We monitor the transactions, assess the risk across them, and give you a clear view of where things stand.</p>

<p>What you get is a clear picture of:</p>
<ul>
  <li>What's happening across your transactions</li>
  <li>How much fraud you have and where you're exposed</li>
  <li>The exact actions you can implement immediately</li>
</ul>

<p>If it turns out you actually need an external solution, we'll suggest that too. Everything is structured so you can take it and share it internally - with your team or your manager.</p>

<h2>Watch the walkthrough</h2>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:16px;margin:2rem 0;box-shadow:0 8px 40px rgba(0,0,0,0.10);">
  <iframe
    src="https://embed.app.guidde.com/playbooks/nCQR61BXRRS2S45ZaZbXMi?mode=videoOnly&autoplay=false"
    title="FraudPulse Feature Walkthrough"
    allow="fullscreen"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
  ></iframe>
</div>

<h2>The goal</h2>

<p>The goal with FraudPulse is what we kept coming back to while building it: how do you take something that's usually complex, technical, and time-consuming and make it simple enough that anyone can use it?</p>

<p><strong>That's really what this is about.</strong></p>

<p>If you want to see how it looks on your own data, <a href="/book-a-demo/">feel free to reach out</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'How do you get started with FraudPulse?',
        a: 'Onboarding asks a few business-context questions so the system understands your volume and customer mix, then you connect payment data via integration or CSV upload. Analysis runs automatically so you can see exposure and recommended actions without a complex technical setup or waiting weeks for a custom implementation project.',
      },
      {
        q: 'What do you see after connecting transaction data?',
        a: 'A clear view of what is happening across transactions, how much fraud and exposure you have, and exact actions you can implement immediately. Findings are structured so you can share them with your team or manager, and if an external solution is actually needed, FraudPulse can surface that recommendation too.',
      },
      {
        q: 'Do I need engineering work to try FraudPulse?',
        a: 'Not necessarily. You can integrate with a payment provider or upload a CSV if you want to avoid integration work. The goal is usable fraud analysis from day one without heavy technical barriers, so risk and payments operators can get recommendations without a full engineering sprint first.',
      },
    ],
  },
  {
    slug: 'why-we-built-fraudpulse',
    title: 'After 12 Years in Fintech, Here\'s Why We Built FraudPulse',
    excerpt:
      'After 12 years across fraud, risk, and data - at Riskified, Melio, and Creednz - one thing became clear: the problem is rarely the system itself. It\'s how it\'s understood.',
    category: 'Product',
    date: 'June 2, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>After 12 years of working in fintech, across fraud, risk, and data, one thing has become very clear: the problem is rarely the system itself. It's how it's understood.</p>

<h2>Where it started</h2>

<p>I started my journey at Riskified. Back then, it was a small startup. Today, it's a global fraud solution for eCommerce. I spent close to six years there, working with merchants across the spectrum - from very small businesses to Fortune 500 companies.</p>

<p>Then I moved to Melio, which was a completely different environment. B2B payments, SMB-focused, mostly U.S.-based. I joined early on the risk side, and my role was to build the data and analytics function from scratch - which meant everything from onboarding (KYB), to transaction monitoring, to compliance, to automating decisions.</p>

<p>Later, I joined Creednz, where I met Yaniv Hayun (my now co-founder). He was leading R&D, I was leading analytics, and we worked on a product focused on outgoing payment risk - things like invoice fraud, impersonation, and internal payment controls.</p>

<h2>The same problem, everywhere</h2>

<p>During that time, we noticed the same problem kept repeating - across all environments.</p>

<p>Some companies try to manage fraud internally without enough expertise or resources. Others go in the opposite direction and invest in expensive, complex solutions that don't fully match their needs.</p>

<p>In many cases, neither approach works particularly well.</p>

<h2>What we're building</h2>

<p>So over the past few months, Yaniv and I started building something that sits in between.</p>

<p>The idea: instead of another fraud tool, we're building something that acts more like an internal advisor. It connects to your data - either through an API or directly - analyses it continuously, and translates that into very clear, actionable insights such as:</p>

<ul>
  <li>Where you're currently exposed</li>
  <li>What rules you should adjust or create</li>
  <li>What tools (if any) are actually needed</li>
  <li>What impact to expect from each change</li>
</ul>

<h2>Who it's for</h2>

<p>The goal is to support the person inside the organisation who is already responsible for this. This is for teams in eCommerce, fintech, and payments - where fraud isn't owned by a large dedicated team, but by someone already managing risk, payments, or product.</p>

<p>After working in this space for a while, you realise the problem is rarely a lack of data or tools. It's a lack of clear, usable direction.</p>

<p>If this is something you're dealing with, <a href="/book-a-demo/">we'd love to show you what FraudPulse can do on your data</a>.</p>
    `.trim(),
    faqs: [
      {
        q: 'Why was FraudPulse built?',
        a: 'After years across fraud, risk, and data at companies like Riskified, Melio, and Creednz, the founders saw the same gap: merchants either lacked expertise to manage fraud well in-house or bought complex tools that did not match their needs. In both cases, teams still lacked clear, usable direction from their own data.',
      },
      {
        q: 'What problem does FraudPulse solve that tools alone do not?',
        a: 'The problem is rarely a lack of data or tools. It is a lack of clear, usable direction - where you are exposed, which rules to adjust, whether you need another vendor, and what impact to expect from each change. FraudPulse is designed as an advisor layer that turns analysis into concrete next steps.',
      },
      {
        q: 'Who is FraudPulse for?',
        a: 'Teams in ecommerce, fintech, and payments where fraud is owned by someone already managing risk, payments, or product - not necessarily a large dedicated fraud department. Those operators need actionable recommendations from their own transaction data without enterprise complexity or another dashboard that only charts what already happened.',
      },
    ],
  },
  {
    slug: 'fraud-trends-2026-deepfakes-ai-automation',
    title: 'Fraud Trends 2026: Deepfakes, AI Agents, and the Sophistication Shift',
    excerpt:
      'Fraud losses are up 25%, deepfake attempts up 94%, and sophisticated fraud up 180%. Here are the five trends shaping how fraud is executed in 2026 - and what merchants need to watch.',
    category: 'Education',
    date: 'June 16, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    content: `
<p>Fraud losses are up 25%, deepfake attempts have increased by 94%, and sophisticated fraud has grown by 180%. 2026 is becoming about <em>better fraud</em>.</p>

<p>The patterns are getting clearer - there's a new shift in how fraud is executed. Here are five trends worth paying close attention to.</p>

<h2>1/ The sophistication shift</h2>

<p>Fraud is becoming more targeted, more convincing, and harder to detect. AI-generated identities, synthetic profiles, and layered deception are now part of standard fraud workflows - not edge cases.</p>

<p>The old detection playbooks were built for high-volume, low-sophistication attacks. They're increasingly mismatched to what merchants are actually facing.</p>

<h2>2/ Deepfakes becoming operational</h2>

<p>Deepfakes are no longer a theoretical risk. They're being actively used in onboarding flows, social engineering attempts, and impersonation scams - and they're often paired with real personal data to increase credibility.</p>

<p>AI-driven deepfakes now sit behind roughly <strong>11% of fraud worldwide</strong>. That share is growing.</p>

<h2>3/ Automation at scale (fraud-as-a-service)</h2>

<p>Tools that used to require technical expertise are now packaged as scripts, templates, and full workflows - available to anyone. Execution is faster, more consistent, and requires less skill per attempt.</p>

<p>The barrier to running a fraud operation has dropped significantly. Volume and consistency are up as a result.</p>

<h2>4/ AI agents and machine-driven fraud</h2>

<p>We're starting to see systems interacting with systems - bots attempting verification flows, automated behaviour adapting in real time to detection signals. The challenge isn't just spotting the fraud. It's understanding intent when the behaviour looks legitimate.</p>

<p>Rule-based detection struggles here. The patterns are fluid, not fixed.</p>

<h2>5/ Synthetic identities becoming harder to detect</h2>

<p>Fraud has moved well beyond stolen credentials. Synthetic identity fraud now involves constructing identities that combine real data with generated data, behave consistently over time, and pass initial verification checks.</p>

<p>By the time a pattern becomes detectable, the account may have established enough history to look legitimate.</p>

<h2>The main theme</h2>

<p>The combination of <strong>automation + AI</strong>, <strong>identity + behaviour</strong>, and <strong>scale + realism</strong> is what makes 2026 fraud harder to spot than what came before.</p>

<p>Static rules can't keep up with dynamic fraud. The merchants that manage it best will be the ones investing in continuous analysis - understanding which patterns are evolving in their specific transaction data, not just applying industry-wide defaults.</p>
    `.trim(),
    faqs: [
      {
        q: 'What fraud trends matter most in 2026?',
        a: 'Higher sophistication, operational deepfakes, fraud-as-a-service automation, machine-driven AI agents, and synthetic identities that behave consistently enough to pass early checks. Together those trends make fraud harder to spot with static playbooks, because attacks are more targeted, more convincing, and faster to adapt than older high-volume low-skill patterns.',
      },
      {
        q: 'How big is the deepfake fraud problem?',
        a: 'Deepfake attempts have risen sharply, and AI-driven deepfakes now sit behind roughly 11% of fraud worldwide. They are used in onboarding, social engineering, and impersonation - often paired with real personal data for credibility - so older detection playbooks built for simpler identity theft are increasingly mismatched to what merchants face.',
      },
      {
        q: 'How should merchants respond to more adaptive 2026 fraud?',
        a: 'Invest in continuous analysis of your own transaction patterns rather than only industry-wide defaults. Static rules struggle when attacks adapt in real time; merchants that keep reviewing evolving behaviours, retire outdated acts, and focus on harder-to-manipulate signals stay ahead longer than teams that only react after each new spike.',
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
