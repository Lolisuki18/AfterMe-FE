import type { SVGProps } from "react";

export const CheckSmIcon = ({
  className = "h-4 w-4",
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
