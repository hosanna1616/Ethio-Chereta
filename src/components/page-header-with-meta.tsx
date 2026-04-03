"use client";

import type { ReactNode } from "react";
import { HamburgerButton } from "@/components/hamburger-button";

type Props = {
  title: string;
  description?: string;
  right?: ReactNode;
};

export function PageHeaderWithMeta({ title, description, right }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/85 sm:px-6">
      <div className="flex items-start gap-2">
        <div className="pt-0.5">
          <HamburgerButton />
        </div>
        <div className="min-w-0 flex-1 text-center lg:text-left">
          <h1 className="text-base font-bold text-[var(--navy)] sm:text-lg">{title}</h1>
          {description ? <p className="mt-1 text-sm text-gray-500">{description}</p> : null}
        </div>
        <div className="flex h-10 w-10 shrink-0 justify-end">{right ?? <span className="block w-10" aria-hidden />}</div>
      </div>
    </header>
  );
}
