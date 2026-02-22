import type { SVGProps } from "react";

export const ActivityIcon = ({
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
      d="M30.115 16.426H26.72a2.738 2.738 0 0 0-2.642 1.999l-3.217 11.443a.342.342 0 0 1-.657 0L12.648 2.984a.342.342 0 0 0-.657 0L8.774 14.428a2.738 2.738 0 0 1-2.628 1.998H2.738"
    />
  </svg>
);
