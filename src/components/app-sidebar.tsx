"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { AppNavLinks } from "@/components/app-nav-links";
import { primaryNav, secondaryNav } from "@/components/nav-config";
import { useAccount } from "@/context/account-context";

export function AppSidebar() {
  const { signOut } = useAccount();

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-[100dvh] w-64 flex-col border-r border-[var(--border)] bg-white lg:flex">
      <Link href="/dashboard" className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-5">
        <BrandLogo size={40} />
        <span className="text-lg font-bold tracking-tight text-[var(--navy)]">EthioChereta</span>
      </Link>
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
          onClick={() => signOut()}
          className="w-full rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}
