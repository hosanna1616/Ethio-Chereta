import { WebAppShell } from "@/components/web-app-shell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <WebAppShell>{children}</WebAppShell>;
}
