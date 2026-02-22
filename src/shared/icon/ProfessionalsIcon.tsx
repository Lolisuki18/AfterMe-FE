import type { SVGProps } from "react";

export const ProfessionalsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.747}
      d="M29.303 36.628V7.326a3.663 3.663 0 0 0-3.663-3.663h-7.326a3.663 3.663 0 0 0-3.663 3.663v29.302"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.747}
      d="M36.628 10.989H7.326a3.663 3.663 0 0 0-3.663 3.662v18.314a3.663 3.663 0 0 0 3.663 3.663h29.302a3.663 3.663 0 0 0 3.663-3.663V14.651a3.663 3.663 0 0 0-3.663-3.662Z"
    />
  </svg>
);
