import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  isLoading?: boolean;
  /** Stretch to 100% width */
  fullWidth?: boolean;
  /** Use fully-rounded pill shape instead of rounded-lg */
  rounded?: boolean;
  /** Icon rendered before children */
  leftIcon?: ReactNode;
  /** Icon rendered after children */
  rightIcon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary",
  secondary: "bg-surface-alt text-text hover:bg-border focus:ring-border",
  danger: "bg-error text-white hover:bg-error/90 focus:ring-error",
  ghost:
    "bg-transparent text-text-muted hover:bg-surface-alt focus:ring-border",
  outline:
    "bg-transparent border border-border text-text hover:bg-surface-alt focus:ring-border",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  fullWidth = false,
  rounded = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
        rounded ? "rounded-full" : "rounded-lg"
      } ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
};
