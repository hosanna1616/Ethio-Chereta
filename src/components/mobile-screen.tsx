import type { ReactNode } from "react";

export function MobileScreen({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`mx-auto flex min-h-[100dvh] w-full max-w-md flex-col bg-[var(--background)] ${className}`}
    >
      {children}
    </div>
  );
}
