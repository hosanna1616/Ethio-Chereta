import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";

export default function SecurityPage() {
  return (
    <>
      <PageHeader title="Security & privacy" />
      <main className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6">
        <Link
          href="/profile"
          className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[var(--navy)]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to profile
        </Link>

        <Card className="!p-5 sm:!p-6">
          <h2 className="text-base font-bold text-[var(--navy)]">Data on this device</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            EthioChereta stores your profile and sign-in state in your browser (local storage) for this
            demo web app. Clear your browser data for this site to remove it. Do not use “Remember
            me” on shared computers unless you trust the device.
          </p>
        </Card>

        <Card className="!p-5 sm:!p-6">
          <h2 className="text-base font-bold text-[var(--navy)]">Passwords</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            When a backend is connected, password reset and two-factor authentication will be
            available here. For now, signing out clears your session only; update your display
            details under Account settings.
          </p>
        </Card>

        <Card className="!p-5 sm:!p-6">
          <h2 className="text-base font-bold text-[var(--navy)]">Contact</h2>
          <p className="mt-2 text-sm text-gray-600">
            Questions about procurement data handling: use your organization’s DPO or the support
            channel provided in your EthioChereta agreement.
          </p>
        </Card>
      </main>
    </>
  );
}
