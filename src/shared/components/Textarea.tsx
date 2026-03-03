import { forwardRef } from "react";
import type { TextareaHTMLAttributes, ReactNode } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  /** Small text next to the label (e.g. "Optional") */
  labelHint?: string;
  error?: string;
  /** Helper text shown below the textarea */
  helperText?: string;
  /** Icon rendered inside the textarea on the left */
  leftIcon?: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      labelHint,
      error,
      helperText,
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
          <div className="mb-1.5 flex items-baseline gap-2">
            <label
              htmlFor={inputId}
              className="text-text block text-sm font-semibold break-words"
            >
              {label}
            </label>
            {labelHint && (
              <span className="text-primary text-xs font-medium">
                {labelHint}
              </span>
            )}
          </div>
        )}
        <div
          className={`focus-within:border-primary relative flex rounded-lg border bg-transparent transition-colors ${
            error ? "border-error" : "border-border"
          }`}
        >
          {leftIcon && (
            <span className="text-text-muted pointer-events-none absolute top-3 left-3 flex items-center">
              {leftIcon}
            </span>
          )}
          <textarea
            ref={ref}
            id={inputId}
            className={`text-text placeholder:text-text-muted min-h-[88px] w-full resize-y bg-transparent py-3 text-sm outline-none ${
              leftIcon ? "pl-10" : "pl-3"
            } pr-3 ${className}`}
            {...props}
          />
        </div>
        {helperText && !error && (
          <p className="text-text-muted text-xs break-words">{helperText}</p>
        )}
        {error && <p className="text-error mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
