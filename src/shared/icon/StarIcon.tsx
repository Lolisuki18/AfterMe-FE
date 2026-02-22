import type { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.801}
      clipPath="url(#a)"
    >
      <path d="M9.276 14.47a1.868 1.868 0 0 0-1.341-1.342l-5.727-1.477a.466.466 0 0 1 0-.898l5.727-1.478a1.867 1.867 0 0 0 1.341-1.34l1.477-5.727a.467.467 0 0 1 .9 0l1.475 5.727a1.868 1.868 0 0 0 1.342 1.341l5.727 1.476a.467.467 0 0 1 0 .9l-5.727 1.476a1.866 1.866 0 0 0-1.342 1.342l-1.477 5.727a.467.467 0 0 1-.899 0L9.276 14.47ZM18.67 2.8v3.734M20.538 4.667h-3.735M3.734 15.87v1.867M4.668 16.803H2.8" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h22.405v22.405H0z" />
      </clipPath>
    </defs>
  </svg>
);
