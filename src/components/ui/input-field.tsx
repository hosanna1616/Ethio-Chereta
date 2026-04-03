import type { InputHTMLAttributes, ReactNode } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
};

export function InputField({ label, icon, id, className = "", ...props }: InputFieldProps) {
  const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {icon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        ) : null}
        <input
          id={inputId}
          className={`w-full rounded-xl border border-[var(--border)] bg-gray-100 px-4 py-3.5 text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[var(--sky)] focus:ring-2 focus:ring-sky-200 ${
            icon ? "pl-11" : ""
          } ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
