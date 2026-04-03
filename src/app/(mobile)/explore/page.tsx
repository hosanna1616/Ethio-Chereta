"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CalendarDays, MapPin, Search } from "lucide-react";
import { HamburgerButton } from "@/components/hamburger-button";
import { Card } from "@/components/ui/card";

const categories = ["All", "Construction", "IT", "Supply", "Services"] as const;

const tenders = [
  {
    id: "1",
    title: "Urban Housing Development",
    excerpt: "Design-build contract for mixed-use units in Bole. Pre-bid meeting required.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    location: "Addis Ababa",
    date: "Apr 18, 2026",
  },
  {
    id: "2",
    title: "Regional Power Grid Upgrade",
    excerpt: "Supply and installation of substation equipment across three zones.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    location: "Hawassa",
    date: "Apr 22, 2026",
  },
  {
    id: "3",
    title: "Digital Health Records Platform",
    excerpt: "Cloud-native EHR rollout for regional hospitals with training and SLAs.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    location: "Remote / Hybrid",
    date: "May 02, 2026",
  },
];

export default function ExplorePage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white px-4 pb-3 pt-4 sm:px-6">
        <div className="flex items-center gap-3">
          <HamburgerButton />
          <h1 className="text-lg font-bold text-[var(--navy)]">Discover Tenders</h1>
        </div>
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search tenders, agencies, keywords…"
            className="w-full rounded-xl border border-[var(--border)] bg-gray-100 py-3 pl-11 pr-4 text-[15px] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === c
                  ? "bg-[var(--navy)] text-white shadow-sm"
                  : "bg-white text-gray-600 ring-1 ring-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:pb-8">
        {tenders.map((t) => (
          <Card key={t.id} className="overflow-hidden !p-0 lg:flex lg:flex-col">
            <div className="relative aspect-[16/9] w-full bg-gray-200 lg:aspect-[21/9]">
              <Image src={t.image} alt="" fill className="object-cover" sizes="(max-width:448px) 100vw, 448px" />
            </div>
            <div className="p-4">
              <h2 className="text-base font-bold text-gray-900">{t.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">{t.excerpt}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {t.location}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {t.date}
                </span>
              </div>
              <div className="mt-4 flex justify-end">
                <Link
                  href={`/explore/${t.id}`}
                  className="inline-flex min-w-[8rem] items-center justify-center rounded-xl bg-[var(--navy)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e3a6b] active:scale-[0.99]"
                >
                  View Details
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </main>
    </>
  );
}
