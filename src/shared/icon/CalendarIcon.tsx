import * as React from "react";
import type { SVGProps } from "react";

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.837}
      d="M9.455 2.364v4.728M18.912 2.364v4.728M22.456 4.728H5.91a2.364 2.364 0 0 0-2.364 2.364v16.547a2.364 2.364 0 0 0 2.364 2.364h16.547a2.364 2.364 0 0 0 2.364-2.364V7.092a2.364 2.364 0 0 0-2.364-2.364ZM3.545 11.82H24.82"
    />
  </svg>
);

export default CalendarIcon;
