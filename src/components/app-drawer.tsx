"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { AppNavLinks } from "@/components/app-nav-links";
import { primaryNav, secondaryNav } from "@/components/nav-config";
import { useAccount } from "@/context/account-context";
import { useAppMenu } from "@/context/app-menu-context";

export function AppDrawer() {
  const { open, setOpen } = useAppMenu();
  const { signOut } = useAccount();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" aria-modal role="dialog">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
      />
      <div className="absolute left-0 top-0 flex h-full w-[min(20rem,88vw)] flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-4">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <BrandLogo size={40} />
            <span className="font-bold text-[var(--navy)]">EthioChereta</span>
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
          <div>
            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Main
            </p>
            <AppNavLinks items={primaryNav} />
          </div>
          <div>
            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              More
            </p>
            <AppNavLinks items={secondaryNav} />
          </div>
        </nav>
        <div className="border-t border-[var(--border)] p-4">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              signOut();
            }}
            className="w-full rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-700"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
