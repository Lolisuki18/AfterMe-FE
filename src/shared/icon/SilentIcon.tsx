import type { SVGProps } from "react";

export const SilentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    {...props}
  >
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
    <line x1={22} y1={9} x2={16} y2={15} />
    <line x1={16} y1={9} x2={22} y2={15} />
  </svg>
);

