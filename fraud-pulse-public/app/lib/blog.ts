export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image?: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: 'fraudpulse-does-not-replace-stripe-radar-shopify-protect',
    title: "FraudPulse Doesn't Replace Stripe Radar or Shopify Protect. Here's What It Does Instead.",
    excerpt:
      "One of the biggest misconceptions we hear is that FraudPulse replaces fraud consoles such as Stripe Radar or Shopify Protect. It doesn't — and here's why that distinction matters.",
    category: 'Product',
    date: 'July 2, 2026',
    readTime: '4 min read',
    author: 'FraudPulse Team',
    authorRole: 'Product',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQH839gc-3EIww/feedshare-shrink_800/B4DZ8c4uGsI8Ac-/0/1782896059072?e=1784764800&v=beta&t=IidfUObfiWoPSIqZX2HyqsBIdB3OfZKQ-xYqOebbBkY',
    content: `
<p>One of the biggest misconceptions we hear is that FraudPulse replaces fraud consoles such as Stripe Radar or Shopify Protect.</p>

<p>It doesn't. In fact, we'd encourage merchants to actively use their payment processor's built-in risk tools — whether that's Stripe Radar, Shopify Protect, or another PSP's fraud console.</p>

<p><strong>They are excellent at what they were designed to do.</strong></p>

<p>Making real-time decisions at checkout — should this payment be approved? Should it be declined? Should additional verification be required? That's exactly the job of a fraud prevention engine.</p>

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

<p>Practical recommendations you can implement — each showing the expected fraud capture rate and the potential impact on false positives.</p>

<blockquote>This rule could capture another 18% of fraud with an estimated false positive rate of 0.2%. This fraud pattern has increased over the last 30 days. Here's what we recommend changing.</blockquote>

<p>That's why we see FraudPulse as the layer that helps merchants <em>understand</em> whether their fraud strategy is working. Our goal is to help you get more value from your existing systems.</p>

<p><strong>P.S.</strong> If you're running Shopify Protect or Stripe Radar and want to know what they're missing, <a href="/book-a-demo/">we'd love to show you</a>.</p>
    `.trim(),
  },
  {
    slug: 'visa-vamp-threshold-reduction-2026',
    title: 'Visa Reduced the Excessive Merchant Threshold from 2.2% to 1.5% Overnight',
    excerpt:
      "On April 1st, Visa reduced the VAMP excessive merchant threshold from 2.20% to 1.50% — a 32% reduction overnight. Here's what it means for how merchants need to think about risk management.",
    category: 'News',
    date: 'June 30, 2026',
    readTime: '4 min read',
    author: 'FraudPulse Team',
    authorRole: 'Risk',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHXFbMKNLSCsw/feedshare-shrink_800/B4DZ8UIWJwK0Ac-/0/1782749160306?e=1784764800&v=beta&t=Tk_q8RT1M-6CFizSD7YIlyxn5GXzA0NcZybZZiDA1aM',
    content: `
<p>One of the biggest fraud-related changes this year was a threshold. On April 1st, Visa reduced the VAMP excessive merchant threshold from 2.20% to 1.50%.</p>

<p>A 32% reduction overnight. At first glance, it sounds like a small regulatory update — but it significantly reduces the margin for error.</p>

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

<p>The threshold changed by 32% — and the margin for error changed with it.</p>

<p><strong>That may end up being the most important part of the entire update.</strong></p>
    `.trim(),
  },
  {
    slug: 'hidden-cost-of-false-positives-in-fraud-systems',
    title: 'The Hidden Cost of False Positives in Fraud Systems is Often Larger Than the Fraud Itself',
    excerpt:
      'Most fraud teams track fraud that gets through. Almost no one tracks legitimate customers who got blocked, declined, or abandoned checkout after unnecessary friction — and that cost is often bigger.',
    category: 'Education',
    date: 'May 30, 2026',
    readTime: '5 min read',
    author: 'FraudPulse Team',
    authorRole: 'Risk',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHXyJcO0P1qiw/feedshare-shrink_800/B4DZ5lr9b1KgAc-/0/1779822483433?e=1784764800&v=beta&t=l8SH47XWgRiARGhRh6jv1QEddQnIPYn66flFWVZetwU',
    content: `
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

<p>That revenue rarely appears as lost — so it gets ignored.</p>

<h2>How systems drift toward over-blocking</h2>

<p>Over time, this creates a very common pattern. A fraud incident happens and the system gets tightened. Gradually, the fraud system starts optimising for reducing fraud exposure.</p>

<p>The problem is that fraud systems don't operate in isolation. They sit directly inside the revenue flow of the business. Every decision affects conversion rates, approval rates, customer trust, operational workload, and long-term retention.</p>

<p>This is where many systems become inefficient. They successfully reduce fraud — but at the cost of declining too many legitimate customers.</p>

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

<p>That balance is the real challenge.</p>
    `.trim(),
  },
  {
    slug: 'overfitting-the-most-common-fraud-prevention-mistake',
    title: 'Overfitting: The Most Common Mistake in eCommerce Fraud Prevention',
    excerpt:
      'A fraud pattern appears, pressure builds, and teams react fast — but many of those reactions become too specific. Here\'s why overfitting is quietly undermining fraud systems everywhere.',
    category: 'Education',
    date: 'June 1, 2026',
    readTime: '5 min read',
    author: 'FraudPulse Team',
    authorRole: 'Risk',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQESt2xzYhmoEA/feedshare-shrink_800/B4DZ6CNmwcKEAc-/0/1780301065476?e=1784764800&v=beta&t=EdLyBh_BSW_jN8IzYAjW87-XNC_OkiqQqA4KuveI6lk',
    content: `
<p>One of the most common mistakes I see in eCommerce fraud prevention is overfitting.</p>

<p>A fraud pattern appears, losses increase, pressure builds internally, and the team reacts quickly to stop the attack. The problem is that many of these reactions become too specific.</p>

<h2>How overfitting happens</h2>

<p>Imagine a fraud pattern that includes stolen cards from a specific issuer, disposable email domains, a product priced at $110, and transactions coming from a certain geo. A common response is to build logic around the exact pattern itself.</p>

<p>So the rule becomes: <em>block transactions matching this exact pattern</em>.</p>

<p>At first, it works. But then the fraudster changes one thing — the product becomes $105 instead of $110 — and the entire pattern disappears from the system again.</p>

<p>This happens because many fraud decisions rely too heavily on signals that are easy to replace: specific products, checkout amounts, single email domains. These are weak anchors.</p>

<blockquote>Fraudsters adapt very quickly once they understand what's being blocked.</blockquote>

<h2>What to focus on instead</h2>

<p>The goal should be to understand the underlying <em>behaviour</em> behind the fraud pattern.</p>

<p>It's not about what happened once. It's about understanding what the fraudster is trying to achieve — and which parts of the pattern are difficult to change. The parts that are structural, repeatable, and harder to simply replace or adjust.</p>

<p><strong>That's usually where the stronger logic sits.</strong></p>

<h2>This applies to every system</h2>

<p>This challenge exists regardless of how decisions are being made. Whether you're using manual reviews, rules, machine learning models, or AI-based systems — if the logic becomes too dependent on highly specific signals, it becomes fragile.</p>

<p>Overfitting creates another problem: false confidence. The system looks effective because it successfully blocks the pattern it already knows, but it becomes blind to small variations around it.</p>

<h2>Building resilience</h2>

<p>More fraud systems should focus on signals and behaviour that are harder for fraudsters to manipulate quickly. That's what creates resilience.</p>

<p>Fraud prevention is not really about catching one attack. It's about building systems that continue working after the fraudster changes tactics.</p>
    `.trim(),
  },
  {
    slug: 'fraudpulse-features-walkthrough',
    title: 'Demonstrating FraudPulse: From Data to Actionable Fraud Insights in Minutes',
    excerpt:
      'The idea behind FraudPulse is to make fraud analysis usable from day one — no complex setup, no technical barriers. Here\'s exactly how it works.',
    category: 'Product',
    date: 'June 25, 2026',
    readTime: '3 min read',
    author: 'FraudPulse Team',
    authorRole: 'Product',
    image: 'https://media.licdn.com/dms/image/v2/D4D05AQFY_R5UqYd13Q/videocover-low/B4DZ761S2qJQBE-/0/1782324738572?e=1783623600&v=beta&t=tyw7jEF5TANSJdN0qbtzNpvg2yhz92h5Su0-PWbIgOM',
    content: `
<p>The idea behind FraudPulse is to make fraud analysis usable from day one.</p>

<h2>Step 1: Onboarding</h2>

<p>When someone logs in for the first time, we ask them a few general questions — what kind of business is this? What's the volume? What kind of customers are you dealing with?</p>

<p>Just enough context so the system understands what it's looking at.</p>

<h2>Step 2: Connecting your data</h2>

<p>From there, the next step is connecting data. We've kept this intentionally simple. You can integrate directly with any payment provider — or, if you don't want to deal with integrations, just upload a CSV. We'll take it from there.</p>

<h2>Step 3: Analysis happens in the background</h2>

<p>Once the data is in, everything else happens automatically. We monitor the transactions, assess the risk across them, and give you a clear view of where things stand.</p>

<p>What you get is a clear picture of:</p>
<ul>
  <li>What's happening across your transactions</li>
  <li>How much fraud you have and where you're exposed</li>
  <li>The exact actions you can implement immediately</li>
</ul>

<p>If it turns out you actually need an external solution, we'll suggest that too. Everything is structured so you can take it and share it internally — with your team or your manager.</p>

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
  },
  {
    slug: 'why-we-built-fraudpulse',
    title: 'After 12 Years in Fintech, Here\'s Why We Built FraudPulse',
    excerpt:
      'After 12 years across fraud, risk, and data — at Riskified, Melio, and Creednz — one thing became clear: the problem is rarely the system itself. It\'s how it\'s understood.',
    category: 'Product',
    date: 'June 2, 2026',
    readTime: '5 min read',
    author: 'FraudPulse Team',
    authorRole: 'Founders',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHkGzx-Y9sLmg/feedshare-shrink_800/B4DZ6Rv1lOGcAc-/0/1780561698045?e=1784764800&v=beta&t=a3UcOmDPb3Ur_fGn9KQXNZXWK5cXCxpvJPLMvTRTSlc',
    content: `
<p>After 12 years of working in fintech, across fraud, risk, and data, one thing has become very clear: the problem is rarely the system itself. It's how it's understood.</p>

<h2>Where it started</h2>

<p>I started my journey at Riskified. Back then, it was a small startup. Today, it's a global fraud solution for eCommerce. I spent close to six years there, working with merchants across the spectrum — from very small businesses to Fortune 500 companies.</p>

<p>Then I moved to Melio, which was a completely different environment. B2B payments, SMB-focused, mostly U.S.-based. I joined early on the risk side, and my role was to build the data and analytics function from scratch — which meant everything from onboarding (KYB), to transaction monitoring, to compliance, to automating decisions.</p>

<p>Later, I joined Creednz, where I met Yaniv Hayun (my now co-founder). He was leading R&D, I was leading analytics, and we worked on a product focused on outgoing payment risk — things like invoice fraud, impersonation, and internal payment controls.</p>

<h2>The same problem, everywhere</h2>

<p>During that time, we noticed the same problem kept repeating — across all environments.</p>

<p>Some companies try to manage fraud internally without enough expertise or resources. Others go in the opposite direction and invest in expensive, complex solutions that don't fully match their needs.</p>

<p>In many cases, neither approach works particularly well.</p>

<h2>What we're building</h2>

<p>So over the past few months, Yaniv and I started building something that sits in between.</p>

<p>The idea: instead of another fraud tool, we're building something that acts more like an internal advisor. It connects to your data — either through an API or directly — analyses it continuously, and translates that into very clear, actionable insights such as:</p>

<ul>
  <li>Where you're currently exposed</li>
  <li>What rules you should adjust or create</li>
  <li>What tools (if any) are actually needed</li>
  <li>What impact to expect from each change</li>
</ul>

<h2>Who it's for</h2>

<p>The goal is to support the person inside the organisation who is already responsible for this. This is for teams in eCommerce, fintech, and payments — where fraud isn't owned by a large dedicated team, but by someone already managing risk, payments, or product.</p>

<p>After working in this space for a while, you realise the problem is rarely a lack of data or tools. It's a lack of clear, usable direction.</p>

<p>If this is something you're dealing with, <a href="/book-a-demo/">we'd love to show you what FraudPulse can do on your data</a>.</p>
    `.trim(),
  },
  {
    slug: 'fraud-trends-2026-deepfakes-ai-automation',
    title: 'Fraud Trends 2026: Deepfakes, AI Agents, and the Sophistication Shift',
    excerpt:
      'Fraud losses are up 25%, deepfake attempts up 94%, and sophisticated fraud up 180%. Here are the five trends shaping how fraud is executed in 2026 — and what merchants need to watch.',
    category: 'Education',
    date: 'June 16, 2026',
    readTime: '5 min read',
    author: 'FraudPulse Team',
    authorRole: 'Risk',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHSxSR1E2JcQw/feedshare-shrink_800/B4DZ7P53aBKAAc-/0/1781604513745?e=1784764800&v=beta&t=MTauqmv98okadHmfBVejJSH9SxM1xjJxo_6ZQykRX7I',
    content: `
<p>Fraud losses are up 25%, deepfake attempts have increased by 94%, and sophisticated fraud has grown by 180%. 2026 is becoming about <em>better fraud</em>.</p>

<p>The patterns are getting clearer — there's a new shift in how fraud is executed. Here are five trends worth paying close attention to.</p>

<h2>1/ The sophistication shift</h2>

<p>Fraud is becoming more targeted, more convincing, and harder to detect. AI-generated identities, synthetic profiles, and layered deception are now part of standard fraud workflows — not edge cases.</p>

<p>The old detection playbooks were built for high-volume, low-sophistication attacks. They're increasingly mismatched to what merchants are actually facing.</p>

<h2>2/ Deepfakes becoming operational</h2>

<p>Deepfakes are no longer a theoretical risk. They're being actively used in onboarding flows, social engineering attempts, and impersonation scams — and they're often paired with real personal data to increase credibility.</p>

<p>AI-driven deepfakes now sit behind roughly <strong>11% of fraud worldwide</strong>. That share is growing.</p>

<h2>3/ Automation at scale (fraud-as-a-service)</h2>

<p>Tools that used to require technical expertise are now packaged as scripts, templates, and full workflows — available to anyone. Execution is faster, more consistent, and requires less skill per attempt.</p>

<p>The barrier to running a fraud operation has dropped significantly. Volume and consistency are up as a result.</p>

<h2>4/ AI agents and machine-driven fraud</h2>

<p>We're starting to see systems interacting with systems — bots attempting verification flows, automated behaviour adapting in real time to detection signals. The challenge isn't just spotting the fraud. It's understanding intent when the behaviour looks legitimate.</p>

<p>Rule-based detection struggles here. The patterns are fluid, not fixed.</p>

<h2>5/ Synthetic identities becoming harder to detect</h2>

<p>Fraud has moved well beyond stolen credentials. Synthetic identity fraud now involves constructing identities that combine real data with generated data, behave consistently over time, and pass initial verification checks.</p>

<p>By the time a pattern becomes detectable, the account may have established enough history to look legitimate.</p>

<h2>The main theme</h2>

<p>The combination of <strong>automation + AI</strong>, <strong>identity + behaviour</strong>, and <strong>scale + realism</strong> is what makes 2026 fraud harder to spot than what came before.</p>

<p>Static rules can't keep up with dynamic fraud. The merchants that manage it best will be the ones investing in continuous analysis — understanding which patterns are evolving in their specific transaction data, not just applying industry-wide defaults.</p>
    `.trim(),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
