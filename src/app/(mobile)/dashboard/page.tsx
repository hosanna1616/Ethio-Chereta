import Image from "next/image";
import Link from "next/link";
import { Building2, Plus } from "lucide-react";
import { DashboardChartSection } from "@/components/dashboard-chart-section";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Total Tenders", value: "14", delta: "+2", up: true },
  { label: "Active Tenders", value: "8", delta: "+1", up: true },
  { label: "Pending", value: "4", delta: "-1", up: false },
  { label: "Due Days", value: "2", delta: "Soon", up: false },
] as const;

const recent = [
  {
    title: "Road Maintenance — SNNPR",
    status: "In Progress" as const,
    tone: "success" as const,
    value: "ETB 4.2M",
  },
  {
    title: "Medical Supplies — Federal",
    status: "Under Review" as const,
    tone: "info" as const,
    value: "ETB 12M",
  },
  {
    title: "IT Infrastructure — Addis",
    status: "Pending" as const,
    tone: "warning" as const,
    value: "ETB 890K",
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard Overview"
        right={
          <Link href="/profile" className="relative block h-10 w-10 overflow-hidden rounded-full ring-2 ring-sky-100">
            <Image src="/ethiochereta.png" alt="Profile" fill className="object-cover" sizes="40px" />
          </Link>
        }
      />

      <main className="flex flex-1 flex-col gap-4 px-4 pb-28 pt-4 sm:px-6 lg:pb-10">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {metrics.map(({ label, value, delta, up }) => (
            <Card key={label} className="!p-4">
              <p className="text-xs font-medium text-gray-500">{label}</p>
              <div className="mt-2 flex items-end justify-between gap-2">
                <span className="text-2xl font-bold text-[var(--navy)]">{value}</span>
                <span
                  className={`flex items-center text-xs font-semibold ${
                    up ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {up ? "↑" : "↓"} {delta}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="!p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-[var(--navy)]">Bidding history</h2>
            <div className="flex shrink-0 flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-xs text-gray-500">Last 6 months</span>
              <Link href="/analytics" className="text-xs font-semibold text-sky-600 hover:underline">
                Analytics →
              </Link>
            </div>
          </div>
          <DashboardChartSection />
        </Card>

        <div>
          <h2 className="mb-3 px-0.5 text-sm font-bold text-[var(--navy)]">Recent Tenders</h2>
          <div className="space-y-3 xl:grid xl:grid-cols-2 xl:gap-3 xl:space-y-0">
            {recent.map((row) => (
              <Card key={row.title} className="flex items-start gap-3 !p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[var(--navy)]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900">{row.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <StatusBadge label={row.status} tone={row.tone} />
                    <span className="text-sm font-semibold text-gray-700">{row.value}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Link
        href="/join-tender"
        className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--navy)] text-white shadow-lg transition hover:bg-[#1e3a6b] active:scale-95 sm:right-6 lg:bottom-8 lg:right-10"
        aria-label="Add tender"
      >
        <Plus className="h-7 w-7" strokeWidth={2.5} />
      </Link>
    </>
  );
}
