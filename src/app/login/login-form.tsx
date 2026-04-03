"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { useAccount } from "@/context/account-context";

export function LoginForm() {
  const router = useRouter();
  const { signIn, updateProfile } = useAccount();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) updateProfile({ email: email.trim() });
    void password;
    signIn();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-1 flex-col gap-5">
      <InputField
        label="Email Address"
        type="email"
        name="email"
        placeholder="you@company.com"
        autoComplete="email"
        icon={<Mail className="h-5 w-5" />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          autoComplete="current-password"
          icon={<Lock className="h-5 w-5" />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-gray-600">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[var(--navy)]" />
            Remember me
          </label>
          <Link href="/login" className="font-semibold text-[var(--sky)] hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>

      <Button type="submit" className="mt-2 !py-4">
        Sign In
      </Button>
    </form>
  );
}
