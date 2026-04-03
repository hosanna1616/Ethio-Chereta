"use client";

import { Menu } from "lucide-react";
import { useAppMenu } from "@/context/app-menu-context";

export function HamburgerButton() {
  const { open, toggle } = useAppMenu();

  return (
    <button
      type="button"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--navy)] transition hover:bg-gray-100 lg:hidden"
      aria-label="Open menu"
      aria-expanded={open}
      onClick={toggle}
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}
