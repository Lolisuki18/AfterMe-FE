import type { SVGProps } from "react";

export const ShieldLockIcon = ({
  className = "h-10 w-10",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 11a1 1 0 100 2 1 1 0 000-2zm0 0V9m0 4v2"
    />
  </svg>
);
