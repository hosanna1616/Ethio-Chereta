import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { PublicShell } from "@/components/public-shell";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <PublicShell className="bg-white">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 pt-10 pb-8 sm:px-6">
        <Link href="/login" className="text-sm font-semibold text-[var(--sky)]">
          ← Back
        </Link>
        <div className="mt-6 flex flex-col items-center">
          <BrandLogo size={64} />
          <h1 className="mt-5 text-2xl font-bold text-[var(--navy)]">Create Profile</h1>
          <p className="mt-2 max-w-sm text-center text-sm text-gray-600">
            Join EthioChereta — set up your organization in minutes.
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[var(--navy)] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </PublicShell>
  );
}
