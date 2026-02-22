import type { SVGProps } from "react";

export const PlaneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m32.599 35.163-3.296-15.017 6.41-6.41c2.746-2.748 3.662-6.41 2.746-8.242-1.83-.915-5.494 0-8.24 2.747l-6.41 6.41L8.79 11.355c-.916-.183-1.649.183-2.015.915l-.55.916c-.366.916-.182 1.832.55 2.381l9.707 6.41-3.663 5.494H7.326l-1.832 1.832 5.494 3.662 3.663 5.495 1.832-1.832v-5.494l5.494-3.663 6.41 9.707c.55.732 1.465.915 2.38.55l.916-.367c.733-.55 1.1-1.282.916-2.198Z"
    />
  </svg>
);
