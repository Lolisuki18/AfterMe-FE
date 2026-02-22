import type { SVGProps } from "react";

export const DoublePersonIcon = ({
  className = "h-6 w-6",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34 34"
    className={className}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.801}
      d="M22.405 29.406v-2.8a5.601 5.601 0 0 0-5.602-5.601H8.402a5.601 5.601 0 0 0-5.601 5.6v2.801M22.404 4.38a5.601 5.601 0 0 1 0 10.844M30.806 29.406v-2.8a5.6 5.6 0 0 0-4.2-5.42M12.603 15.403a5.601 5.601 0 1 0 0-11.202 5.601 5.601 0 0 0 0 11.202Z"
    />
  </svg>
);
