import type { ReactNode } from "react";

/** Responsive container for marketing / auth pages (phone ↔ ultra-wide). */
export function PublicShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col bg-[var(--background)] px-4 sm:px-6 md:px-10 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
