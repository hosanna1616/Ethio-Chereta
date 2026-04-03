"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type AppMenuValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const AppMenuContext = createContext<AppMenuValue | null>(null);

export function AppMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  const value = useMemo(() => ({ open, setOpen, toggle }), [open, toggle]);

  return <AppMenuContext.Provider value={value}>{children}</AppMenuContext.Provider>;
}

export function useAppMenu() {
  const ctx = useContext(AppMenuContext);
  if (!ctx) throw new Error("useAppMenu must be used within AppMenuProvider");
  return ctx;
}
