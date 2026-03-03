import type { SVGProps } from "react";

export const FirmIcon = ({
  className = "h-4 w-4",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 23"
    className={className}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.839}
      clipPath="url(#firm-a)"
    >
      <path d="M11.354 20.817a9.462 9.462 0 1 0 0-18.924 9.462 9.462 0 0 0 0 18.924ZM11.354 7.57v3.784M11.354 15.14h.009" />
    </g>
    <defs>
      <clipPath id="firm-a">
        <path fill="#fff" d="M0 0h22.709v22.709H0z" />
      </clipPath>
    </defs>
  </svg>
);
