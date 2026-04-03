import Link from "next/link";
import { Brain, Bell, FileStack, ShieldCheck, Zap } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublicShell } from "@/components/public-shell";

const features = [
  {
    title: "AI Analysis",
    desc: "Smart summaries and compliance checks on every tender document.",
    icon: Brain,
    className: "bg-emerald-500",
  },
  {
    title: "Instant Alerts",
    desc: "Never miss a deadline with push and email notifications.",
    icon: Bell,
    className: "bg-amber-400",
  },
  {
    title: "Document Management",
    desc: "Secure storage, versioning, and sharing for bid packages.",
    icon: FileStack,
    className: "bg-sky-500",
  },
];

const highlights = [
  {
    title: "Ethiopia-first workflows",
    desc: "Built for local procurement rules, languages, and stakeholders.",
    icon: ShieldCheck,
  },
  {
    title: "Faster bid preparation",
    desc: "Templates and AI assist cut repetitive paperwork dramatically.",
    icon: Zap,
  },
  {
    title: "Transparent tracking",
    desc: "See status from discovery through award in one place.",
    icon: FileStack,
  },
];

const steps = [
  { n: "1", title: "Discover", body: "Search and filter tenders matched to your business." },
  { n: "2", title: "Prepare", body: "Upload documents and let AI flag gaps before you submit." },
  { n: "3", title: "Win", body: "Track outcomes and refine your next bids with analytics." },
];

export default function LandingPage() {
  return (
    <PublicShell>
      <header className="flex items-center justify-between pt-6 sm:pt-10">
        <div className="flex items-center gap-3">
          <BrandLogo size={48} priority />
          <span className="text-lg font-bold tracking-tight text-[var(--navy)] sm:text-xl">
            EthioChereta
          </span>
        </div>
        <Link
          href="/login"
          className="text-sm font-semibold text-[var(--navy)] underline-offset-4 hover:underline"
        >
          Sign in
        </Link>
      </header>

      <section className="mt-6">
        <div className="overflow-hidden rounded-2xl bg-[var(--navy)] px-6 py-10 text-white shadow-lg md:px-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/90">
            Tender OS
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Transparent AI-Powered Tender Management for Ethiopia.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/90 md:max-w-2xl md:text-base">
            Plan, submit, and monitor public and private tenders with clarity—backed by AI you can
            trust.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/login"
              variant="secondary"
              className="flex-1 !bg-white !text-[var(--navy)] !shadow-md"
            >
              Get Started
            </ButtonLink>
            <ButtonLink href="/explore" variant="ghost" className="flex-1 !border-white/70">
              Explore Tenders
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-12">
        <h2 className="text-lg font-bold text-[var(--navy)] md:text-xl">Key Features</h2>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          Everything your team needs to compete with confidence.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3 md:gap-4">
          {features.map(({ title, desc, icon: Icon, className }) => (
            <div
              key={title}
              className={`flex gap-4 rounded-2xl p-4 text-white shadow-md ${className}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-white/90">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <h2 className="text-lg font-bold text-[var(--navy)] md:text-xl">Why teams choose EthioChereta</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="flex gap-3 !p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[var(--navy)]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 pb-12 md:mt-14 md:pb-16">
        <h2 className="text-lg font-bold text-[var(--navy)] md:text-xl">How it works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-white">
                {n}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <Card className="mt-8 border-sky-200 bg-sky-50/80 !p-5">
          <p className="text-sm font-medium text-[var(--navy)]">
            “We cut our tender prep time in half. The dashboard and alerts keep our whole team
            aligned.”
          </p>
          <p className="mt-3 text-xs font-semibold text-sky-800">— Procurement lead, Addis Ababa</p>
        </Card>
        <ButtonLink href="/register" className="mt-8">
          Create your account
        </ButtonLink>
      </section>
    </PublicShell>
  );
}
