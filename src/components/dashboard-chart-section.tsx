"use client";

import dynamic from "next/dynamic";

const DashboardChart = dynamic(
  () => import("@/components/dashboard-chart").then((mod) => ({ default: mod.DashboardChart })),
  {
    ssr: false,
    loading: () => (
      <div className="h-48 min-h-[12rem] w-full animate-pulse rounded-xl bg-gray-100" />
    ),
  },
);

export function DashboardChartSection() {
  return <DashboardChart />;
}
