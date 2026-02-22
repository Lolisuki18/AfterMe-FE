import type { SVGProps } from "react";

export const DatabaseIcon = ({
  className = "h-6 w-6",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33 33"
    className={className}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.738}
      d="M16.426 10.95c6.804 0 12.32-1.838 12.32-4.106s-5.516-4.106-12.32-4.106-12.32 1.838-12.32 4.106 5.516 4.107 12.32 4.107Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.738}
      d="M4.107 6.844v19.164c0 1.09 1.298 2.134 3.608 2.904s5.444 1.203 8.711 1.203c3.268 0 6.401-.433 8.712-1.203 2.31-.77 3.608-1.815 3.608-2.904V6.844"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.738}
      d="M4.107 16.426c0 1.09 1.298 2.134 3.608 2.904s5.444 1.203 8.711 1.203c3.268 0 6.401-.433 8.712-1.203 2.31-.77 3.608-1.815 3.608-2.904"
    />
  </svg>
);
