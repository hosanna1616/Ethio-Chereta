import { Bell, FileText, Gavel, Send } from "lucide-react";
import { PageHeaderWithMeta } from "@/components/page-header-with-meta";
import { StatusBadge } from "@/components/status-badge";
import { Card } from "@/components/ui/card";

const items = [
  {
    title: "New bid submitted",
    time: "2h ago",
    desc: "Federal ICT framework — your documents were received.",
    icon: Send,
    tone: "success" as const,
    label: "In Progress",
  },
  {
    title: "Deadline reminder",
    time: "Yesterday",
    desc: "Construction tender closes in 48 hours.",
    icon: Bell,
    tone: "warning" as const,
    label: "Pending",
  },
  {
    title: "Clarification posted",
    time: "Mon",
    desc: "Buyer answered Q&A on water project scope.",
    icon: FileText,
    tone: "info" as const,
    label: "Update",
  },
  {
    title: "Award notice",
    time: "Mar 28",
    desc: "Regional logistics lot 3 — outcome published.",
    icon: Gavel,
    tone: "neutral" as const,
    label: "Closed",
  },
];

export default function NotificationsPage() {
  return (
    <>
      <PageHeaderWithMeta
        title="Notifications"
        description="Stay on top of every tender event"
      />

      <main className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-6 lg:pb-8">
        <div className="space-y-3 xl:grid xl:grid-cols-2 xl:gap-3 xl:space-y-0">
          {items.map((n) => (
            <Card key={n.title} className="flex gap-3 !p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[var(--navy)]">
                <n.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-gray-900">{n.title}</p>
                  <StatusBadge label={n.label} tone={n.tone} />
                </div>
                <p className="mt-1 text-sm text-gray-600">{n.desc}</p>
                <p className="mt-2 text-xs text-gray-400">{n.time}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
