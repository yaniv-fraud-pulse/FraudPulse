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
