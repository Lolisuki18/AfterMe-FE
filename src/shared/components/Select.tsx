import { forwardRef } from "react";
import type { SelectHTMLAttributes, ReactNode } from "react";
import { SelectChevronIcon } from "@/shared/icon";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  /** Icon rendered inside the select on the left */
  leftIcon?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      placeholder,
      leftIcon,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-text mb-1.5 block text-sm font-semibold break-words"
          >
            {label}
          </label>
        )}
        <div
          className={`focus-within:border-primary relative flex items-center rounded-lg border bg-transparent transition-colors ${
            error ? "border-error" : "border-border"
          }`}
        >
          {leftIcon && (
            <span className="text-text-muted pointer-events-none absolute left-3 flex items-center">
              {leftIcon}
            </span>
          )}
          <select
            ref={ref}
            id={inputId}
            className={`text-text min-h-[44px] w-full appearance-none bg-transparent py-3 pr-10 text-sm outline-none ${
              leftIcon ? "pl-10" : "pl-3"
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="text-text-muted">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Chevron down */}
          <span className="text-text-muted pointer-events-none absolute right-3">
            <SelectChevronIcon className="h-4 w-4" />
          </span>
        </div>
        {error && <p className="text-error mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";
