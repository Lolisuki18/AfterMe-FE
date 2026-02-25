import type { SVGProps } from "react";

export const CheckIcon = ({
  className = "text-primary h-5 w-5 shrink-0",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

export default CheckIcon;
