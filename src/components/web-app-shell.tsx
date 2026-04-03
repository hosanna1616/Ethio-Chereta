"use client";

import type { ReactNode } from "react";
import { AppDrawer } from "@/components/app-drawer";
import { AppSidebar } from "@/components/app-sidebar";
import { BottomNav } from "@/components/bottom-nav";
import { AppMenuProvider } from "@/context/app-menu-context";
import { RequireAuth } from "@/context/account-context";

export function WebAppShell({ children }: { children: ReactNode }) {
  return (
    <AppMenuProvider>
      <RequireAuth>
        <div className="relative flex min-h-[100dvh] w-full flex-col bg-[var(--background)] lg:flex-row">
          <AppSidebar />
          <AppDrawer />
          <div className="relative flex min-h-[100dvh] min-w-0 flex-1 flex-col lg:pl-64">
            <div className="mx-auto w-full max-w-7xl flex-1 pb-24 lg:pb-8">{children}</div>
          </div>
        </div>
        <BottomNav />
      </RequireAuth>
    </AppMenuProvider>
  );
}
