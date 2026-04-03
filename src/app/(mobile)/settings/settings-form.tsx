"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, LogOut } from "lucide-react";
import type { UserProfile } from "@/lib/account";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { PageHeader } from "@/components/page-header";
import { useAccount } from "@/context/account-context";

function SettingsFields({
  profile,
  updateProfile,
  signOut,
}: {
  profile: UserProfile;
  updateProfile: (patch: Partial<UserProfile>) => void;
  signOut: () => void;
}) {
  const [fullName, setFullName] = useState(profile.fullName);
  const [company, setCompany] = useState(profile.company);
  const [jobTitle, setJobTitle] = useState(profile.jobTitle);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [city, setCity] = useState(profile.city);
  const [toast, setToast] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateProfile({
      fullName,
      company,
      jobTitle,
      email,
      phone,
      city,
    });
    setToast("Your profile has been updated.");
    window.setTimeout(() => setToast(null), 3200);
  };

  return (
    <>
      <PageHeader title="Account settings" />
      <main className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6">
        <Link
          href="/profile"
          className="hidden items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[var(--navy)] lg:inline-flex"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to profile
        </Link>

        {toast ? (
          <div
            role="status"
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900"
          >
            {toast}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-4">
          <InputField label="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <InputField label="Company name" value={company} onChange={(e) => setCompany(e.target.value)} required />
          <InputField label="Job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <InputField label="City" value={city} onChange={(e) => setCity(e.target.value)} />

          <Button type="submit" className="!py-4">
            Save changes
          </Button>
        </form>

        <div className="mx-auto w-full max-w-xl border-t border-[var(--border)] pt-8">
          <p className="text-sm font-semibold text-gray-700">Session</p>
          <p className="mt-1 text-sm text-gray-500">
            Sign out on this device. Your saved profile stays on this browser until you clear site
            data.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-4 border-red-100 !bg-red-50 !text-red-700 hover:!bg-red-100"
            onClick={() => signOut()}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <LogOut className="h-5 w-5" />
              Log out
            </span>
          </Button>
        </div>
      </main>
    </>
  );
}

export function SettingsForm() {
  const { profile, updateProfile, signOut, ready } = useAccount();

  if (!ready) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--navy)] border-t-transparent" />
      </div>
    );
  }

  return (
    <SettingsFields
      key={`${profile.email}|${profile.fullName}|${profile.company}`}
      profile={profile}
      updateProfile={updateProfile}
      signOut={signOut}
    />
  );
}
