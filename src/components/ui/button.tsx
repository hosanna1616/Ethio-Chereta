import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outlineWhite";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--navy)] text-white hover:bg-[#1e3a6b] active:scale-[0.99] shadow-sm",
  secondary:
    "bg-white text-[var(--navy)] border border-[var(--border)] hover:bg-gray-50",
  ghost:
    "bg-transparent text-white border-2 border-white/90 hover:bg-white/10",
  outlineWhite:
    "bg-transparent text-white border-2 border-white/80 hover:bg-white/10",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex w-full items-center justify-center rounded-xl px-4 py-3.5 text-[15px] font-semibold transition";

export function Button({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", className = "", children }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
