import type { SVGProps } from "react";

export const KeyIcon = ({
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
      d="m28.493 13.787 4.228 4.228a1.838 1.838 0 0 0 2.573 0l3.86-3.86a1.838 1.838 0 0 0 0-2.574l-4.228-4.228M38.603 3.677 20.956 21.324M13.787 38.603c5.584 0 10.11-4.527 10.11-10.11 0-5.584-4.526-10.11-10.11-10.11s-10.11 4.526-10.11 10.11c0 5.583 4.526 10.11 10.11 10.11Z"
    />
  </svg>
);
