import type { SelectHTMLAttributes } from "react";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

export function SelectField({ label, id, className = "", children, ...props }: SelectFieldProps) {
  const selectId = id ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="space-y-2">
      <label htmlFor={selectId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={`w-full appearance-none rounded-xl border border-[var(--border)] bg-gray-100 px-4 py-3.5 text-[15px] text-gray-900 outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-sky-200 ${className}`}
          {...props}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
      </div>
    </div>
  );
}
