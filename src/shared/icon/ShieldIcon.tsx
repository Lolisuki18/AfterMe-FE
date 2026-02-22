import type { SVGProps } from "react";

export const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.738}
      d="M27.377 17.795c0 6.844-4.791 10.267-10.485 12.251a1.37 1.37 0 0 1-.918-.013c-5.708-1.971-10.499-5.394-10.499-12.238V8.213a1.369 1.369 0 0 1 1.37-1.369c2.737 0 6.159-1.642 8.54-3.723a1.602 1.602 0 0 1 2.082 0c2.395 2.094 5.803 3.723 8.541 3.723a1.37 1.37 0 0 1 1.369 1.37v9.581Z"
    />
  </svg>
);
