import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  FilePlus2,
  Home,
  Search,
  Settings,
  Shield,
  User,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
};

/** Primary routes shown in bottom nav + sidebar */
export const primaryNav: NavItem[] = [
  { href: "/dashboard", label: "Home", Icon: Home },
  { href: "/explore", label: "Explore", Icon: Search },
  { href: "/notifications", label: "Alerts", Icon: Bell },
  { href: "/profile", label: "Profile", Icon: User },
];

export const secondaryNav: NavItem[] = [
  { href: "/analytics", label: "Analytics", Icon: BarChart3 },
  { href: "/join-tender", label: "Join tender", Icon: FilePlus2 },
  { href: "/settings", label: "Account settings", Icon: Settings },
  { href: "/security", label: "Security & privacy", Icon: Shield },
];
