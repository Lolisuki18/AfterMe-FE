import type { SVGProps } from "react";

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.059 40.441c10.152 0 18.382-8.23 18.382-18.382 0-10.152-8.23-18.382-18.382-18.382-10.152 0-18.382 8.23-18.382 18.382 0 10.152 8.23 18.382 18.382 18.382Z"
    />
    <path
      stroke="#1E3A5F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.757}
      d="M22.06 11.03v11.029l7.352 3.676"
    />
  </svg>
);
