/** Shared feature comparison - FraudPulse vs common alternatives. */

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
    sub: 'NoFraud · ClearSale',
    highlight: false,
  },
  {
    key: 'platform',
    label: 'Payment Platform Tools',
    sub: 'Stripe Radar · Shopify Protect',
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
  'FraudPulse works alongside your stack - it does not replace Stripe Radar, Shopify Protect, or a full guarantee platform when that is the buy you need.';

/** One category table for AI/buyer queries - keep this on /solutions only to avoid duplicate content. */
export const STACK_CATEGORIES = [
  {
    category: 'Payment platform tools',
    examples: 'Shopify Protect, Stripe Radar',
    job: 'Score and block risk at checkout',
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
    tools: 'Shopify Protect, Stripe Radar, Signifyd, Riskified, NoFraud, Sift',
    fraudPulse: 'Core job: classify the mix and rank rule changes',
  },
  {
    need: 'Chargeback representment',
    does: 'Fight cases after they file',
    tools: 'Chargeflow, Chargebacks911, Midigator, Justt, Ethoca, Verifi',
    fraudPulse: 'Not in scope',
  },
] as const;

const VALUE_LABEL: Record<ComparisonValue, string> = {
  yes: 'Yes',
  no: 'No',
  partial: 'Partial',
};

/** HTML table for blog posts (mobile-scrollable wrapper expected in page CSS). */
export function toolComparisonTableHtml(): string {
  const head = `
<table>
  <thead>
    <tr>
      <th></th>
      <th>FraudPulse</th>
      <th>Manual<br/><span style="font-weight:400;font-size:0.85em">In-house team or founder</span></th>
      <th>SMB Fraud Prevention<br/><span style="font-weight:400;font-size:0.85em">NoFraud · ClearSale</span></th>
      <th>Payment Platform Tools<br/><span style="font-weight:400;font-size:0.85em">Stripe Radar · Shopify Protect</span></th>
    </tr>
  </thead>
  <tbody>
`.trim();

  const body = COMPARISON_FEATURES.map(
    (row) => `
    <tr>
      <td><strong>${row.feature}</strong></td>
      <td>${VALUE_LABEL[row.fraudPulse]}</td>
      <td>${VALUE_LABEL[row.manual]}</td>
      <td>${VALUE_LABEL[row.smb]}</td>
      <td>${VALUE_LABEL[row.platform]}</td>
    </tr>`
  ).join('');

  return `${head}${body}
  </tbody>
</table>
<p><em>${TOOL_COMPARISON_FOOTNOTE}</em></p>`;
}
