/** Shared honest comparison for homepage, solutions, and listicle guides. */
export type ComparisonRow = {
  tool: string;
  bestFor: string;
  worksWith: string;
  whatItDoes: string;
  setup: string;
  highlight?: boolean;
};

export const TOOL_COMPARISON_ROWS: ComparisonRow[] = [
  {
    tool: 'FraudPulse',
    bestFor: 'SMB–mid-market Stripe/Shopify merchants who need which rules to change',
    worksWith: 'Stripe Radar, Shopify Protect (complements, does not replace)',
    whatItDoes:
      'Classifies chargebacks by type; ranked Radar / Protect rule changes with estimated fraud-capture % and false-positive %',
    setup: 'Connects in minutes, no engineering',
    highlight: true,
  },
  {
    tool: 'Stripe Radar',
    bestFor: 'Merchants already on Stripe who need enforcement',
    worksWith: 'Stripe',
    whatItDoes: 'Scores and blocks risk using Stripe’s rules and Radar',
    setup: 'Built into Stripe',
  },
  {
    tool: 'Shopify Protect',
    bestFor: 'Shopify merchants who want Shopify’s protection product',
    worksWith: 'Shopify',
    whatItDoes:
      'Shopify’s protection / fraud controls (enforces; does not output a ranked “change this rule” list for your history)',
    setup: 'Built into Shopify (eligibility as Shopify documents)',
  },
  {
    tool: 'Signifyd',
    bestFor: 'Brands that want a full guarantee / chargeback platform',
    worksWith: 'Replaces or sits as a full fraud stack',
    whatItDoes: 'End-to-end fraud platform (guarantee model)',
    setup: 'Typically a platform onboarding',
  },
  {
    tool: 'Riskified',
    bestFor: 'Similar to Signifyd: full-platform buyers',
    worksWith: 'Full stack',
    whatItDoes: 'Chargeback guarantee / decisioning platform',
    setup: 'Platform onboarding',
  },
  {
    tool: 'Chargeflow',
    bestFor: 'Merchants focused on dispute recovery / representment',
    worksWith: 'Shopify/Stripe disputes',
    whatItDoes: 'Helps fight chargebacks after they happen',
    setup: 'App / recovery workflow',
  },
];

export const TOOL_COMPARISON_FOOTNOTE =
  'FraudPulse is the rule-advisor layer on top of Radar and Protect. Signifyd/Riskified are platforms. Chargeflow is recovery. Radar/Protect are enforcement.';

/** HTML table for blog posts (mobile-scrollable wrapper expected in page CSS). */
export function toolComparisonTableHtml(): string {
  const head = `
<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Best for</th>
      <th>Works with</th>
      <th>What it does</th>
      <th>Setup</th>
    </tr>
  </thead>
  <tbody>
`.trim();

  const body = TOOL_COMPARISON_ROWS.map(
    (row) => `
    <tr>
      <td><strong>${row.tool}</strong></td>
      <td>${row.bestFor}</td>
      <td>${row.worksWith}</td>
      <td>${row.whatItDoes}</td>
      <td>${row.setup}</td>
    </tr>`
  ).join('');

  return `${head}${body}
  </tbody>
</table>
<p><em>${TOOL_COMPARISON_FOOTNOTE}</em></p>`;
}
