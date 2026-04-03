"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/components/nav-config";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-around px-2 py-2 sm:px-6">
        {primaryNav.map(({ href, label, Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-4 py-1.5 text-[11px] font-medium transition ${
                active ? "text-[var(--navy)]" : "text-gray-400"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={active ? 2.25 : 1.75} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
