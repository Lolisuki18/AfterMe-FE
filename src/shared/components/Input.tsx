import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  /** Icon rendered inside the input on the left */
  leftIcon?: ReactNode;
  /** Icon or interactive element rendered inside the input on the right */
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, leftIcon, rightIcon, className = "", id, ...props },
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
          <input
            ref={ref}
            id={inputId}
            className={`text-text placeholder:text-text-muted min-h-[44px] w-full bg-transparent py-3 text-sm outline-none ${
              leftIcon ? "pl-10" : "pl-3"
            } ${rightIcon ? "pr-10" : "pr-3"} ${className}`}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 flex items-center">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="text-error mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
