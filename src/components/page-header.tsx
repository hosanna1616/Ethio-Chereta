"use client";

import type { ReactNode } from "react";
import { HamburgerButton } from "@/components/hamburger-button";

type Props = {
  title: string;
  right?: ReactNode;
};

export function PageHeader({ title, right }: Props) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-2 border-b border-[var(--border)] bg-white/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <HamburgerButton />
      <h1 className="min-w-0 flex-1 text-center text-base font-bold text-[var(--navy)] lg:text-left">
        {title}
      </h1>
      <div className="flex h-10 w-10 shrink-0 items-center justify-end">{right ?? <span className="block w-10" aria-hidden />}</div>
    </header>
  );
}
