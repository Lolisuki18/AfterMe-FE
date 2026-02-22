import type { SVGProps } from "react";

export const CalendarDayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path stroke="currentColor" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export default CalendarDayIcon;
