import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-text block text-sm font-medium"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`bg-surface text-text placeholder:text-text-muted block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 focus:outline-none ${
            error
              ? "border-error focus:border-error focus:ring-error"
              : "border-border focus:border-primary focus:ring-primary"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-error text-xs">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
