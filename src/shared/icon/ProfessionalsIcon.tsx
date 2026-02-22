import type { SVGProps } from "react";

export const ProfessionalsIcon = ({
  className = "h-7 w-7",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    className={className}
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
