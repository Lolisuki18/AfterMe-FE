import type { SVGProps } from "react";

export const ScenariosIcon = ({
  className = "h-7 w-7",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 45"
    className={className}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.757}
      d="M29.412 38.603v-3.676a7.353 7.353 0 0 0-7.353-7.353h-11.03a7.353 7.353 0 0 0-7.353 7.353v3.676M16.544 20.22a7.353 7.353 0 1 0 0-14.705 7.353 7.353 0 0 0 0 14.706ZM31.25 14.706l9.191 9.191M40.441 14.706l-9.191 9.191"
    />
  </svg>
);
