"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, Settings, Shield } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { useAccount } from "@/context/account-context";

export function ProfileContent() {
  const { profile, signOut } = useAccount();

  return (
    <>
      <PageHeader title="Profile" />
      <main className="flex flex-1 flex-col gap-4 px-4 py-6 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-4 border-white shadow-md ring-2 ring-sky-100">
            <Image src="/ethiochereta.png" alt="" fill className="object-cover" sizes="96px" />
          </div>
          <h2 className="mt-4 text-center text-xl font-bold text-gray-900">{profile.fullName}</h2>
          <p className="text-center text-sm text-gray-500">
            {profile.jobTitle} · {profile.city}
          </p>
          <p className="mt-1 text-center text-xs text-gray-400">{profile.company}</p>
        </div>

        <Card className="grid grid-cols-3 divide-x divide-gray-100 !p-0 text-center">
          <div className="py-4">
            <p className="text-lg font-bold text-[var(--navy)]">14</p>
            <p className="text-xs text-gray-500">Tenders</p>
          </div>
          <div className="py-4">
            <p className="text-lg font-bold text-[var(--navy)]">8</p>
            <p className="text-xs text-gray-500">Active</p>
          </div>
          <div className="py-4">
            <p className="text-lg font-bold text-emerald-600">32%</p>
            <p className="text-xs text-gray-500">Win rate</p>
          </div>
        </Card>

        <div className="space-y-2">
          <Link
            href="/settings"
            className="flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3.5 text-left text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            <Settings className="h-5 w-5 text-gray-500" />
            Account settings
          </Link>
          <Link
            href="/security"
            className="flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3.5 text-left text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            <Shield className="h-5 w-5 text-gray-500" />
            Security & privacy
          </Link>
          <button
            type="button"
            onClick={() => signOut()}
            className="flex w-full items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            <LogOut className="h-5 w-5" />
            Sign out
          </button>
        </div>
      </main>
    </>
  );
}
