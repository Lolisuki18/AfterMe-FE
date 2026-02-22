import type { SVGProps } from "react";

export const WarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.757}
      d="M39.945 33.088 25.239 7.353a3.677 3.677 0 0 0-6.397 0L4.136 33.088a3.677 3.677 0 0 0 3.217 5.515h29.412a3.676 3.676 0 0 0 3.18-5.515ZM22.059 16.544v7.353M22.059 31.25h.018"
    />
  </svg>
);
