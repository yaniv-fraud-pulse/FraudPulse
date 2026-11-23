'use client';

import { TrackedLink } from '../../components/TrackedCta';
import { useClientValue } from '../../hooks/useClientValue';

const SAMPLE_REPORT_PATH = '/lp/sample-report/';

export function SampleReportLink({ className = 'mt-4 block' }: { className?: string }) {
  // Keep ad parameters so they still reach signup from the report page.
  const href = useClientValue(() => `${SAMPLE_REPORT_PATH}${window.location.search}`, SAMPLE_REPORT_PATH);

  return (
    <TrackedLink
      event="sample_report_cta_clicked"
      href={href}
      className={`${className} font-semibold text-[#4a96a3] underline underline-offset-4 hover:text-gray-900`}
    >
      See a sample report first
    </TrackedLink>
  );
}
