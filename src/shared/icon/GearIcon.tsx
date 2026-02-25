import type { SVGProps } from "react";

export const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.692L2 11v2l2.401.655 1.102 2.699L4 18l2 2 1.715-1.51 2.683 1.13.62 2.38h1.954l.644-2.401 2.67-1.104 1.748 1.485 2-2-1.428-1.733 1.097-2.709L22 13v-2l-2.378-.605Z"
    />
  </svg>
);
