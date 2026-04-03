"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { HamburgerButton } from "@/components/hamburger-button";

type Props = {
  title: string;
  backHref: string;
};

export function SubpageHeaderWithBack({ title, backHref }: Props) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-1 border-b border-[var(--border)] bg-white/95 px-2 py-3 backdrop-blur sm:gap-2 sm:px-4">
      <HamburgerButton />
      <Link
        href={backHref}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--navy)] hover:bg-gray-50"
        aria-label="Back"
      >
        <ChevronLeft className="h-6 w-6" />
      </Link>
      <h1 className="min-w-0 flex-1 truncate text-center text-base font-bold text-[var(--navy)] lg:text-left">
        {title}
      </h1>
      <span className="inline-block w-10 shrink-0" aria-hidden />
    </header>
  );
}
