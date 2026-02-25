import type { SVGProps } from "react";

export const CheckCircleIcon = ({
  className = "h-6 w-6",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    {...props}
  >
    <circle cx={12} cy={12} r={12} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      fill="none"
      d="m7 12.5 3.5 3.5L17 9"
    />
  </svg>
);
