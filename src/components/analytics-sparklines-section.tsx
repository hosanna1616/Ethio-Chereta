"use client";

import dynamic from "next/dynamic";

const AnalyticsSparklines = dynamic(
  () => import("@/components/analytics-sparklines").then((mod) => ({ default: mod.AnalyticsSparklines })),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-2 gap-3">
        <div className="h-24 animate-pulse rounded-xl bg-gray-100" />
        <div className="h-24 animate-pulse rounded-xl bg-gray-100" />
      </div>
    ),
  },
);

export function AnalyticsSparklinesSection() {
  return <AnalyticsSparklines />;
}
