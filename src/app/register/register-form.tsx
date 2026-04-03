"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { useAccount } from "@/context/account-context";

export function RegisterForm() {
  const router = useRouter();
  const { replaceProfile, signIn } = useAccount();
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    replaceProfile({
      fullName: fullName || "New member",
      company: company || "Organization",
      jobTitle: jobTitle || "Member",
      email: email || "you@company.com",
      phone: phone || "",
      city: city || "Addis Ababa",
    });
    void password;
    signIn();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-1 flex-col gap-4">
      <InputField
        label="Full name"
        name="fullName"
        placeholder="Your name"
        autoComplete="name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputField
        label="Company name"
        name="company"
        placeholder="Registered business name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <InputField
        label="Job title"
        name="jobTitle"
        placeholder="e.g. Procurement lead"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Phone"
        name="phone"
        type="tel"
        placeholder="+251 ..."
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputField
        label="City"
        name="city"
        placeholder="Addis Ababa"
        autoComplete="address-level2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Create a password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="mt-4 !py-4">
        Save & Continue
      </Button>
    </form>
  );
}
