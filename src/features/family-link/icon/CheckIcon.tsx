import type { SVGProps } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CheckIcon;
