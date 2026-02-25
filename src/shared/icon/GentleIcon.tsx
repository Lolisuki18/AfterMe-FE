import type { SVGProps } from "react";

export const GentleIcon = ({
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
      clipPath="url(#gentle-a)"
    >
      <path d="M11.989 17.978a1.895 1.895 0 0 0 1.34-.556l5.822-5.84a5.68 5.68 0 1 0-8.033-8.034L5.286 9.381a1.892 1.892 0 0 0-.555 1.338v6.313a.946.946 0 0 0 .946.946h6.312ZM15.14 7.57 1.893 20.816M16.559 14.193H8.516" />
    </g>
    <defs>
      <clipPath id="gentle-a">
        <path fill="#fff" d="M0 0h22.709v22.709H0z" />
      </clipPath>
    </defs>
  </svg>
);
