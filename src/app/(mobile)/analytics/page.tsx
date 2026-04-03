import { Briefcase, CheckCircle2 } from "lucide-react";
import { AnalyticsSparklinesSection } from "@/components/analytics-sparklines-section";
import { PageHeaderWithMeta } from "@/components/page-header-with-meta";
import { StatusBadge } from "@/components/status-badge";
import { Card } from "@/components/ui/card";

const progressRows = [
  { title: "Logistics tender — Modjo", pct: 72, status: "Under Review" as const, value: "ETB 25,000" },
  { title: "School supplies — Oromia", pct: 45, status: "Shortlisted" as const, value: "ETB 1.8M" },
  { title: "Water project — Dire Dawa", pct: 88, status: "Active" as const, value: "ETB 6.4M" },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHeaderWithMeta
        title="Analytics & Reports"
        description="Performance across your pipeline"
      />

      <main className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-6 lg:pb-8">
        <div className="grid grid-cols-2 gap-3 lg:max-w-4xl">
          <Card className="!border-sky-200 !bg-gradient-to-br from-sky-50 to-white !p-4">
            <div className="flex items-center justify-between">
              <Briefcase className="h-8 w-8 text-sky-600" />
              <span className="text-xs font-semibold text-sky-800">Active</span>
            </div>
            <p className="mt-3 text-3xl font-bold text-[var(--navy)]">3</p>
            <p className="text-xs text-gray-600">Bids in evaluation</p>
          </Card>
          <Card className="!border-emerald-200 !bg-gradient-to-br from-emerald-50 to-white !p-4">
            <div className="flex items-center justify-between">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-800">Finished</span>
            </div>
            <p className="mt-3 text-3xl font-bold text-[var(--navy)]">12</p>
            <p className="text-xs text-gray-600">Closed in 12 months</p>
          </Card>
        </div>

        <AnalyticsSparklinesSection />

        <div>
          <h2 className="mb-3 text-sm font-bold text-[var(--navy)]">Tender progress</h2>
          <div className="space-y-3 xl:grid xl:grid-cols-2 xl:gap-3 xl:space-y-0">
            {progressRows.map((row) => (
              <Card key={row.title} className="!p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900">{row.title}</p>
                    <div className="mt-2">
                      <StatusBadge
                        label={row.status}
                        tone={
                          row.status === "Active"
                            ? "success"
                            : row.status === "Shortlisted"
                              ? "warning"
                              : "info"
                        }
                      />
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-[var(--navy)]">{row.value}</span>
                </div>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-[var(--navy)]"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <p className="mt-1 text-right text-xs text-gray-500">{row.pct}% complete</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
