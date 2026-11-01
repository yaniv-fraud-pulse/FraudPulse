'use client';

import { useEffect, useState } from 'react';
import { TrackedLink } from '../../components/TrackedCta';

const SAMPLE_REPORT_PATH = '/lp/sample-report/';

export function SampleReportLink() {
  const [href, setHref] = useState(SAMPLE_REPORT_PATH);

  // Keep ad parameters so they still reach signup from the report page.
  useEffect(() => {
    setHref(`${SAMPLE_REPORT_PATH}${window.location.search}`);
  }, []);

  return (
    <TrackedLink
      event="sample_report_cta_clicked"
      href={href}
      className="mt-4 block font-semibold text-[#4a96a3] underline underline-offset-4 hover:text-gray-900"
    >
      See a sample report first
    </TrackedLink>
  );
}
