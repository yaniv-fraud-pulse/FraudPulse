/** Shared feature comparison - FraudPulse vs common alternatives. */

/** Rule consoles FraudPulse configures alongside, not instead of. */
export const PLATFORM_RULE_TOOLS =
  'Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect';
export const PLATFORM_RULE_TOOLS_SHORT = 'Radar, Flow, Blockify, and RevenueProtect';
export const PLATFORM_RULE_TOOLS_TABLE =
  'Stripe Radar · Flow · Blockify · RevenueProtect';


export type ComparisonValue = 'yes' | 'no' | 'partial';

export type ComparisonFeature = {
  feature: string;
  fraudPulse: ComparisonValue;
  manual: ComparisonValue;
  smb: ComparisonValue;
  platform: ComparisonValue;
};

export const COMPARISON_COLUMNS = [
  { key: 'fraudPulse', label: 'FraudPulse', sub: null, highlight: true },
  { key: 'manual', label: 'Manual', sub: 'In-house team or founder', highlight: false },
  {
    key: 'smb',
    label: 'SMB Fraud Prevention',
    sub: 'NoFraud · FraudLabs Pro · ClearSale',
    highlight: false,
  },
  {
    key: 'platform',
    label: 'Payment Platform Tools',
    sub: PLATFORM_RULE_TOOLS_TABLE,
    highlight: false,
  },
] as const;

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    feature: 'Enrich data with multiple APIs',
    fraudPulse: 'yes',
    manual: 'no',
    smb: 'partial',
    platform: 'partial',
  },
  {
    feature: 'Compelling evidence generator',
    fraudPulse: 'yes',
    manual: 'no',
    smb: 'partial',
    platform: 'no',
  },
  {
    feature: 'You keep full control',
    fraudPulse: 'yes',
    manual: 'yes',
    smb: 'no',
    platform: 'partial',
  },
  {
    feature: 'ML & AI empowered action items',
    fraudPulse: 'yes',
    manual: 'no',
    smb: 'partial',
    platform: 'no',
  },
  {
    feature: 'Explains why fraud happened',
    fraudPulse: 'yes',
    manual: 'partial',
    smb: 'no',
    platform: 'no',
  },
  {
    feature: 'Scales with order volume',
    fraudPulse: 'yes',
    manual: 'no',
    smb: 'yes',
    platform: 'yes',
  },
  {
    feature: 'Works with any payment process',
    fraudPulse: 'yes',
    manual: 'yes',
    smb: 'yes',
    platform: 'no',
  },
];

export const TOOL_COMPARISON_FOOTNOTE =
  `FraudPulse works alongside your stack - it does not replace ${PLATFORM_RULE_TOOLS}. It also does not replace a full guarantee platform when that is the buy you need.`;

/** One category table for AI/buyer queries - keep this on /solutions only to avoid duplicate content. */
export const STACK_CATEGORIES = [
  {
    category: 'Payment platform tools',
    examples: PLATFORM_RULE_TOOLS,
    job: 'Score, block, or automate risk at checkout',
    fraudPulse: 'Ranks which settings to change for your mix',
  },
  {
    category: 'Full fraud platforms',
    examples: 'Signifyd, Riskified, Forter, NoFraud, ClearSale, Sift, Kount, SEON, FraudLabs Pro',
    job: 'Guarantee, full scoring, or managed review',
    fraudPulse: 'Complements the stack you already have - not a replacement',
  },
  {
    category: 'Chargeback recovery',
    examples: 'Chargeflow, Chargebacks911, Midigator, Justt, Ethoca, Verifi',
    job: 'Fight disputes after they file (representment)',
    fraudPulse: 'Prevention and rule advice - not representment',
  },
] as const;

export const PREVENTION_VS_REPRESENTMENT = [
  {
    need: 'Chargeback prevention',
    does: 'Stop disputes from being filed',
    tools: `${PLATFORM_RULE_TOOLS}, Signifyd, Riskified, NoFraud, Sift`,
    fraudPulse: 'Core job: classify the mix and rank rule changes',
  },
  {
    need: 'Chargeback representment',
    does: 'Fight cases after they file',
    tools: 'Chargeflow, Chargebacks911, Midigator, Justt, Ethoca, Verifi',
    fraudPulse: 'Not in scope',
  },
] as const;

const VALUE_HTML: Record<ComparisonValue, string> = {
  yes: '<span class="mark-yes" aria-label="Yes">✓</span>',
  no: '<span class="mark-no" aria-label="No">✕</span>',
  partial: '<span class="mark-partial" aria-label="Partial">~</span>',
};

/** HTML table for blog posts (styled via .blog-body .compare-table). */
export function toolComparisonTableHtml(): string {
  const head = `
<div class="compare-table-wrap">
<table class="compare-table">
  <thead>
    <tr>
      <th></th>
      <th class="col-fp">FraudPulse</th>
      <th>Manual<br/><span class="th-sub">In-house team or founder</span></th>
      <th>SMB Fraud Prevention<br/><span class="th-sub">NoFraud · ClearSale</span></th>
      <th>Payment Platform Tools<br/><span class="th-sub">${PLATFORM_RULE_TOOLS_TABLE}</span></th>
    </tr>
  </thead>
  <tbody>
`.trim();

  const body = COMPARISON_FEATURES.map(
    (row) => `
    <tr>
      <td>${row.feature}</td>
      <td class="col-fp">${VALUE_HTML[row.fraudPulse]}</td>
      <td>${VALUE_HTML[row.manual]}</td>
      <td>${VALUE_HTML[row.smb]}</td>
      <td>${VALUE_HTML[row.platform]}</td>
    </tr>`
  ).join('');

  return `${head}${body}
  </tbody>
</table>
</div>
<p class="compare-table-note">${TOOL_COMPARISON_FOOTNOTE}</p>`;
}
