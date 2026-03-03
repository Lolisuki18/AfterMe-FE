import type { SVGProps } from "react";

export const CheckCircleSmIcon = ({
  className = "h-5 w-5",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
