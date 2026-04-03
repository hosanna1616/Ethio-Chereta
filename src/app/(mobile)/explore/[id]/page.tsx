import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SubpageHeaderWithBack } from "@/components/subpage-header-with-back";

const detail: Record<
  string,
  { title: string; body: string; image: string; location: string; date: string }
> = {
  "1": {
    title: "Urban Housing Development",
    body: "Full design-build scope including geotechnical studies, structural design, and phased construction for 240 units. Mandatory site visit Apr 10. Bonds and tax clearance required at submission.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    location: "Addis Ababa",
    date: "Apr 18, 2026",
  },
  "2": {
    title: "Regional Power Grid Upgrade",
    body: "Turnkey delivery of transformers, switchgear, and SCADA integration. International bidders welcome with local partnership requirements per RFP section 4.2.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    location: "Hawassa",
    date: "Apr 22, 2026",
  },
  "3": {
    title: "Digital Health Records Platform",
    body: "SaaS EHR with offline-first clinics module, Amharic/English UI, and HL7 FHIR export. Includes 90-day hypercare and clinician training.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    location: "Remote / Hybrid",
    date: "May 02, 2026",
  },
};

export default async function TenderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const d = detail[id] ?? detail["1"];

  return (
    <>
      <SubpageHeaderWithBack title={d.title} backHref="/explore" />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col pb-6">
        <div className="relative aspect-[16/10] w-full bg-gray-200 lg:aspect-[21/9]">
          <Image src={d.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" priority />
        </div>
        <div className="px-4 pt-4 sm:px-6">
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {d.location}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              {d.date}
            </span>
          </div>
          <Card className="mt-4 !p-4">
            <h2 className="text-sm font-bold text-[var(--navy)]">Overview</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{d.body}</p>
          </Card>
          <ButtonLink href="/join-tender" className="mt-6 !py-4">
            Apply to tender
          </ButtonLink>
        </div>
      </main>
    </>
  );
}
