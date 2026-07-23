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
  image?: string;
  content: string;
  faqs?: BlogFaq[];
};

export const posts: BlogPost[] = [
  {
    slug: 'biggest-mistake-in-fraud-analysis-trusting-individual-indicators',
    title: 'The biggest mistake in fraud analysis is trusting individual indicators',
    excerpt:
      'High amount, disposable email, new device, VPN — none of those signals mean much alone. Good fraud analysis asks whether the red flags tell a coherent fraud story.',
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
        a: 'Usually not. Signals like disposable email, VPN, or high ticket size can be legitimate. Strong decisions come from whether the signals together tell a coherent fraud story for that business.',
      },
      {
        q: 'What should fraud analysts ask beyond risk scores?',
        a: 'Ask what the fraudster was trying to achieve, how they got there, and whether the signals make sense together — or whether you are looking at unrelated noise.',
      },
    ],
  },
  {
    slug: 'same-behaviour-fraudulent-in-one-business-legitimate-in-another',
    title:
      'In fraud the same behaviour can be fraudulent in one business and completely legitimate in another',
    excerpt:
      'A sneaker-drop “bot attack” that looked like fraud was actually top customers. Context — not raw anomalies — decides what a fraud rule should do.',
    category: 'Education',
    date: 'July 20, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQGpAnhG60UvTQ/feedshare-shrink_1280/B4DZ9.gjMVKsAM-/0/1784533890084?e=1786579200&v=beta&t=CPdhQfLIDbJRvdpb03nN9aTtouQTdUimRwHdHCLNX2w',
    content: `
<p>Early in my career, I worked with one of the world’s largest sneaker brands. They were launching a limited-edition release.</p>

<p>Within minutes, the website was flooded with what looked like a textbook fraud attack — bots, disposable email addresses, suspicious IPs, customers trying to create multiple accounts, and dozens of purchase attempts happening simultaneously.</p>

<p>We did what any fraud team would do. We started blocking them. About an hour later, I got a call asking, what exactly did you do?</p>

<p>It turned out those weren’t fraudsters. They were some of the brand’s best customers — professional sneaker resellers.</p>

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
        a: 'Yes. Bots, multiple accounts, and burst purchasing can be attacks in one vertical and normal customer behaviour in another — for example limited sneaker releases. Rules need business context, not just anomaly detection.',
      },
      {
        q: 'Why do generic fraud models fail across industries?',
        a: 'Each industry has different incentives and “normal” behaviour. A rule that works for SaaS can hurt sneaker drops; a model trained on eCommerce may fail in travel or gaming.',
      },
    ],
  },
  {
    slug: 'fraud-system-might-be-your-biggest-revenue-leak',
    title:
      'One thing that often gets overlooked in fraud prevention is your fraud system might be your biggest revenue leak',
    excerpt:
      'Fraud losses are visible. Revenue lost to false positives usually is not. The biggest gains often come from removing friction that no longer helps.',
    category: 'Education',
    date: 'July 16, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQHAy-MXn8l_fg/feedshare-shrink_1280/B4DZ9p2_.ZJ4AM-/0/1784187453843?e=1786579200&v=beta&t=M6e3QOBJzzRjoiwrzkBTzEavGnxEakxQWzjgaKab5nk',
    content: `
<p>Over time, most systems get tightened. A new verification step gets added after an incident, then another one just to be safe, then stricter acts to reduce exposure.</p>

<p>Before long, the system is technically safer — but the customer experience starts to suffer. The pattern is quite consistent. We focus on preventing bad transactions and only later realise we’re also blocking good ones.</p>

<p>Every extra verification step comes with a cost:</p>

<ul>
  <li>more friction at checkout</li>
  <li>more abandoned transactions</li>
  <li>more legitimate users getting declined</li>
</ul>

<p>The issue is that fraud losses are visible, but the revenue lost from false positives usually isn’t. It shows up as lower approval rates, quieter drop-offs, and missed conversions.</p>

<p>The biggest improvements I’ve seen come from understanding where those controls actually help and where they start working against you.</p>

<p>We see this consistently when looking at transaction data more closely. In many cases, there are segments where the acts are too aggressive, or controls that are no longer needed. Once you identify them, removing or adjusting them can have an immediate impact.</p>

<p>That’s part of the thinking behind what we’re building with FraudPulse.</p>

<p>The goal is to understand what’s already in place, what’s working, and where friction is unnecessary. A good fraud system protects revenue — and that often means knowing when to remove friction, not add it.</p>

<p>If you’re seeing similar patterns, or just want a clearer view of how your system is behaving, <a href="/book-a-demo/">feel free to reach out</a>. Happy to take a look.</p>
    `.trim(),
    faqs: [
      {
        q: 'How can a fraud system leak revenue?',
        a: 'By adding verification and rules after every incident until false declines and checkout friction quietly cost more than the fraud they prevent. Fraud losses are visible; false-positive revenue loss often is not.',
      },
      {
        q: 'What usually improves approval rates fastest?',
        a: 'Finding segments where controls are too aggressive or no longer needed, then removing or adjusting them — not adding another blanket rule.',
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
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQHfySUb5SOZog/feedshare-shrink_1280/B4DZ9fjuMWIYAM-/0/1784014628081?e=1786579200&v=beta&t=05QBhs5hkNMhizSohvR8uYqJp9ajnISg-Qgnbp8XT68',
    content: `
<p>In many businesses, fraud isn’t a priority until it becomes one.</p>

<p>Things run smoothly, losses are low, and the system works well enough. So the team stays small, the setup stays basic, and fraud gets handled reactively.</p>

<p>The pattern tends to change when volume increases, new markets are added, payment flows become more complex — and suddenly, the existing setup starts to break.</p>

<p>What makes it challenging is that the problem shows up as more false positives, slower decisions, and less clarity on what’s actually happening. At that point, adding more people doesn’t solve it.</p>

<p>The issue usually is unclear logic, fragmented data, and systems that grew without structure.</p>

<p>I’ve seen small teams operate very effectively and large teams struggle with the same problems. The difference is usually not the size of the team. It’s whether the system they’re working with is clear, measurable, and built around the right signals.</p>

<p><strong>Fraud doesn’t scale in a straight line — and neither should the way you manage it.</strong></p>
    `.trim(),
    faqs: [
      {
        q: 'Do high-revenue companies need large fraud teams?',
        a: 'Not necessarily. Small teams can perform well if their fraud system is clear, measurable, and built around the right signals. Unclear logic and fragmented data hurt large teams too.',
      },
      {
        q: 'When does a basic fraud setup usually break?',
        a: 'When volume grows, new markets are added, or payment flows get more complex — often showing up as more false positives, slower decisions, and less clarity rather than a sudden need for more headcount.',
      },
    ],
  },
  {
    slug: 'how-to-reduce-chargebacks-on-shopify-2026',
    title: 'How to Reduce Chargebacks on Shopify (2026 Guide)',
    excerpt:
      'A practical 2026 guide for Shopify merchants: understand why chargebacks happen, tune Shopify Protect rules using your own data, and reduce disputes without increasing false declines.',
    category: 'Guide',
    date: 'July 13, 2026',
    readTime: '8 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: '/blog/reduce-chargebacks-shopify.png',
    content: `
<p>Chargebacks are one of the most expensive problems Shopify merchants face in 2026. Every dispute costs more than the refunded order — you lose the product, shipping, payment fees, and often pay a chargeback fee on top.</p>

<p>Most merchants try to solve this by tightening fraud rules across the board. That can reduce chargebacks short term, but it also increases false declines — legitimate customers blocked at checkout who would have converted.</p>

<p>The better approach: understand <em>why</em> chargebacks are happening in your store, then change the specific Shopify Protect rules driving the problem.</p>

<h2>Step 1: Know your chargeback rate and reason codes</h2>

<p>Before changing any rules, establish a baseline:</p>

<ul>
  <li>What is your monthly chargeback rate? (chargebacks ÷ total transactions)</li>
  <li>Which reason codes appear most often? (fraud, product not received, not as described)</li>
  <li>Are chargebacks concentrated in certain countries, card brands, or order values?</li>
  <li>Are disputes arriving within days of purchase or weeks later?</li>
</ul>

<p>In 2026, Visa's VAMP threshold dropped to 1.5% for excessive merchants — down from 2.2%. That means less room for error, and chargeback management is no longer optional for growing Shopify stores.</p>

<h2>Step 2: Separate fraud chargebacks from service disputes</h2>

<p>Not all chargebacks are fraud. Many come from:</p>

<ul>
  <li>Shipping delays or delivery failures</li>
  <li>Unclear product descriptions or subscription billing</li>
  <li>Customers who don't recognize the charge on their statement</li>
</ul>

<p>Fraud rules won't fix a fulfillment problem. If your top reason codes are "product not received" or "not as described," start with operations and customer communication — not Shopify Protect settings.</p>

<p>If fraud-related reason codes dominate, focus on the patterns getting through your current rules.</p>

<h2>Step 3: Audit what Shopify Protect is actually blocking</h2>

<p>Shopify Protect blocks transactions at checkout based on risk signals — IP location, velocity, device fingerprint, order history, and more. But default settings are built for the average merchant, not your specific business.</p>

<p>Common gaps we see in Shopify stores:</p>

<ul>
  <li>High-risk countries blocked too loosely — fraud from regions with elevated chargeback rates still getting through</li>
  <li>Velocity rules that don't account for legitimate repeat buyers or B2B customers</li>
  <li>Rules that block low-value fraud but miss high-ticket orders with mismatched billing/shipping signals</li>
  <li>Overly aggressive rules that decline good customers — hurting conversion to prevent a small fraud volume</li>
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

<p>These patterns are unique to your store. Generic fraud rule templates won't capture them — your own data will.</p>

<h2>Step 5: Change Shopify Protect rules based on data, not guesswork</h2>

<p>Once you know which patterns drive chargebacks, make targeted rule changes:</p>

<ol>
  <li><strong>Tighten rules for confirmed fraud patterns</strong> — e.g., block or review orders matching a signal combination that appears in 80% of your fraud chargebacks</li>
  <li><strong>Loosen rules causing false declines</strong> — if a rule blocks many legitimate orders for minimal fraud capture, adjust or remove it</li>
  <li><strong>Prioritize by impact</strong> — start with rule changes that address the highest chargeback volume, not the easiest to implement</li>
  <li><strong>Track results</strong> — measure chargeback rate and approval rate weekly after each change</li>
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

<h2>Step 7: Monitor continuously — fraud patterns change</h2>

<p>Fraud in 2026 is more automated and adaptive than before. A rule that worked three months ago may be less effective today as fraudsters adapt.</p>

<p>Review your chargeback data monthly at minimum. Look for new patterns, rising reason codes, and rules that are no longer performing. Continuous analysis beats a one-time rule overhaul.</p>

<h2>How FraudPulse helps Shopify merchants</h2>

<p>FraudPulse connects to your Shopify transaction and chargeback data, analyzes fraud patterns automatically, and delivers prioritized rule changes you can apply in Shopify Protect — with estimated chargeback and false-positive impact for each recommendation.</p>

<p>It does not replace Shopify Protect. It tells you exactly which rules to change so your existing fraud stack works harder for you.</p>

<p><strong>Want to see what rule changes FraudPulse would recommend for your Shopify store?</strong> <a href="/book-a-demo/">Book a demo</a> and we'll walk through it on your own data.</p>
    `.trim(),
    faqs: [
      {
        q: 'How do I reduce chargebacks on Shopify without increasing false declines?',
        a: 'Identify which patterns drive your fraud chargebacks, then make targeted Shopify Protect rule changes — tighten rules that catch real fraud and loosen rules that block good customers. Measure chargeback rate and approval rate after each change.',
      },
      {
        q: 'Does FraudPulse replace Shopify Protect?',
        a: 'No. FraudPulse analyzes your Shopify transaction and chargeback data and recommends which Protect rules to change. You keep Shopify Protect and tune it with your own data.',
      },
      {
        q: 'What should I check before changing fraud rules?',
        a: 'Establish your chargeback rate and top reason codes, separate fraud disputes from service issues, and audit what Shopify Protect is already blocking so you do not fix the wrong problem.',
      },
    ],
  },
  {
    slug: 'how-to-audit-your-fraud-acts-in-30-minutes',
    title: "How to audit your fraud acts in ~30 minutes. Here's how I usually approach it.",
    excerpt:
      'A practical 7-step framework to audit your fraud rules in about 30 minutes — map what you have, check impact, find overlap, review false positives, and identify what to remove, adjust, or rebuild.',
    category: 'Guide',
    date: 'July 8, 2026',
    readTime: '5 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQE18G5QZA9qfA/feedshare-shrink_800/B4DZ892gdWK0Ac-/0/1783449127005?e=1785369600&v=beta&t=SGggyum7tzbTx6vUDBohI6MQ8XbiDT0V4kjO_-P8SaE',
    content: `
<p>Most fraud teams inherit a stack that grew over time — rules added after incidents, thresholds tweaked in spreadsheets, exceptions nobody remembers approving. A quick audit brings clarity. Here is how I usually approach it in about 30 minutes.</p>

<h2>1. List your active acts</h2>

<p>Don't analyse yet — just map them. Include thresholds, exceptions, and segments.</p>

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
  },
  {
    slug: 'build-vs-buy-fraud-system',
    title: 'Should you build your own fraud system or buy a solution?',
    excerpt:
      'When chargebacks rise and approval rates drop, the default reaction is to find a tool. But the right answer depends on what you should control versus what you can delegate — and most teams land somewhere in between.',
    category: 'Insights',
    date: 'July 9, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGJlIoVpxHFSw/feedshare-image-high-res/B4DZ9C2FRzJwAU-/0/1783532901762?e=1785369600&v=beta&t=nYo_qVvTfNShgeIDjXGkG0IJnCBUNqsW8d_s9qVX7tw',
    content: `
<p>Most teams start with a problem — chargebacks increase, approval rates drop — and the immediate reaction is usually: let's find a tool.</p>

<p>That might be the right move sometimes (not always).</p>

<h2>When buying makes sense</h2>

<p>Buying a solution makes sense when your problem is well-defined, you need speed over control, your team doesn't have the bandwidth to build systems, and the tool fits your business model. In those cases, a good vendor can solve a large part of the problem quickly.</p>

<h2>When building makes sense</h2>

<p>Building tends to make more sense when your flows are unique or complex, off-the-shelf rules don't map well to your risk, you need full control over decision logic, or you've outgrown what existing tools can offer.</p>

<p>But building comes with a cost — ongoing maintenance, data quality, monitoring, and iteration.</p>

<h2>Most teams land in between</h2>

<p>What I've seen in practice is that most teams end up somewhere in between: a combination of a core vendor for coverage and internal logic to handle what the vendor can't.</p>

<p>The decision is more about what should you control and what can you delegate.</p>

<h2>Know your gaps before you commit</h2>

<p>In many cases, teams commit to tools or long implementations before having a clear view of where they're exposed or what's driving the issue.</p>

<p>That's part of the thinking behind what we're building with <a href="/">FraudPulse</a> — understand your data, your gaps, and what's worth solving internally vs externally, before committing to either path.</p>

<p>The right decision is rarely about the tool. It's about knowing what you're solving for.</p>
    `.trim(),
  },
  {
    slug: 'why-30-90-percent-of-fraud-is-friendly-fraud',
    title: 'Why is up to 30-90% of fraud often classified as friendly fraud?',
    excerpt:
      'As strange as the name sounds, friendly fraud is when a legitimate cardholder disputes a transaction they actually made. Depending on the industry, it can account for 30% to 90% of all fraud cases — and it requires a very different response.',
    category: 'Insights',
    date: 'June 7, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: '/blog/friendly-fraud-classifier.png',
    content: `
<p>As strange as the name sounds, there's nothing particularly friendly about it.</p>

<p>It usually refers to cases where a legitimate cardholder later disputes a transaction, claiming it was unauthorised or unrecognised.</p>

<p>Depending on the industry, this can be anywhere between 30% to 90% of all fraud cases.</p>

<p>Which makes it a very different kind of problem, because now you're not trying to detect fraud before it happens, you're trying to prove what already happened.</p>

<h2>The dispute process</h2>

<p>That's where the dispute process comes in — compiling evidence, pulling transaction data, device signals, behavioural patterns, delivery confirmation. All to demonstrate that the transaction was legitimate.</p>

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

<p>The idea is to make fraud easier to deal with. If you're working with chargebacks like this and it's taking up too much time, <a href="/book-a-demo/">happy to share early access</a>.</p>
    `.trim(),
  },
  {
    slug: 'fraudpulse-does-not-replace-stripe-radar-shopify-protect',
    title: "FraudPulse Doesn't Replace Stripe Radar or Shopify Protect. Here's What It Does Instead.",
    excerpt:
      "One of the biggest misconceptions we hear is that FraudPulse replaces fraud consoles such as Stripe Radar or Shopify Protect. It doesn't — and here's why that distinction matters.",
    category: 'Product',
    date: 'July 2, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQH839gc-3EIww/feedshare-shrink_800/B4DZ8c4uGsI8Ac-/0/1782896059072?e=1786579200&v=beta&t=fFZMkeHDNA13gTO-tRfDYyo6LMsCSMxzlAvIhTsa_eE',
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
    faqs: [
      {
        q: 'Does FraudPulse replace Stripe Radar or Shopify Protect?',
        a: 'No. FraudPulse sits on top of your existing fraud stack. Stripe Radar and Shopify Protect still make real-time checkout decisions; FraudPulse analyzes outcomes and recommends which rules to change next.',
      },
      {
        q: 'What does FraudPulse do that Radar and Protect do not?',
        a: 'After checkout decisions are made, merchants still need to know why chargebacks rose, which patterns are getting through, and which rules create false positives. FraudPulse turns that data into prioritized, implementable rule recommendations with impact estimates.',
      },
      {
        q: 'Do I need to migrate off my payment processor fraud tools?',
        a: 'No. Keep Stripe Radar, Shopify Protect, or your PSP fraud console. FraudPulse helps you get more value from the tools you already use.',
      },
    ],
  },
  {
    slug: 'visa-vamp-threshold-reduction-2026',
    title: 'Visa Reduced the Excessive Merchant Threshold from 2.2% to 1.5% Overnight',
    excerpt:
      "On April 1st, Visa reduced the VAMP excessive merchant threshold from 2.20% to 1.50% — a 32% reduction overnight. Here's what it means for how merchants need to think about risk management.",
    category: 'News',
    date: 'June 30, 2026',
    readTime: '4 min read',
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHXFbMKNLSCsw/feedshare-image-high-res/B4DZ8UIWJwK0AU-/0/1782749160306?e=1786579200&v=beta&t=TQ5f2mdqPrL4y-MLxwapo8q5fOu8N67lBvHmAnNipko',
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
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHXyJcO0P1qiw/feedshare-shrink_800/B4DZ5lr9b1KgAc-/0/1779822483433?e=1786579200&v=beta&t=3b-Vj74fX9vaSMmnSkmEFlqCJt5DpFDBbIUb7L6A7Fw',
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
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQESt2xzYhmoEA/feedshare-image-high-res/B4DZ6CNmwcKEAU-/0/1780301065476?e=1786579200&v=beta&t=2R3Q1wpQyJBxLhnsHue3U6mRQGpd0jAc4LySHDlKElI',
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
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: '/blog/dashboard.png',
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
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHkGzx-Y9sLmg/feedshare-image-high-res/B4DZ6Rv1lOGcAU-/0/1780561698045?e=1786579200&v=beta&t=3KlNbcM_MXOA7UDjavPAKfbyz5xrbYWekcM9c9R9yZc',
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
    author: 'Idan Hayon',
    authorRole: 'Co-Founder & CEO',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHSxSR1E2JcQw/feedshare-image-high-res/B4DZ7P53aBKAAU-/0/1781604513745?e=1786579200&v=beta&t=Kra_W0r1o0XGPW4dbD0XUX5SQMtoX0dYsZtYRDfe6DQ',
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
