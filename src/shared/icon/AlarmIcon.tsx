import type { SVGProps } from "react";

export const AlarmIcon = ({
  className = "h-6 w-6",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34 34"
    className={className}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.801}
      d="M14.378 29.406a2.8 2.8 0 0 0 4.85 0M4.568 21.46A1.4 1.4 0 0 0 5.6 23.806h22.405a1.4 1.4 0 0 0 1.036-2.343c-1.862-1.92-3.837-3.96-3.837-10.26a8.402 8.402 0 0 0-16.803 0c0 6.3-1.976 8.34-3.834 10.259Z"
    />
  </svg>
);
