"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/nav-config";
import { useAppMenu } from "@/context/app-menu-context";

type Props = {
  items: NavItem[];
  onNavigate?: () => void;
};

export function AppNavLinks({ items, onNavigate }: Props) {
  const pathname = usePathname();
  const menu = useAppMenu();

  const close = () => {
    menu.setOpen(false);
    onNavigate?.();
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <ul className="space-y-1">
      {items.map(({ href, label, Icon }) => {
        const active = isActive(href);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={close}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                active
                  ? "bg-sky-100 text-[var(--navy)]"
                  : "text-gray-600 hover:bg-gray-100"
              } `}
            >
              <Icon className="h-5 w-5 shrink-0" strokeWidth={active ? 2.25 : 1.75} />
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
