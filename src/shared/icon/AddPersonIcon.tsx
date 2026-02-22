import type { SVGProps } from "react";

export const AddPersonIcon = ({
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
      d="M22.405 29.406v-2.8a5.601 5.601 0 0 0-5.602-5.601H8.402a5.601 5.601 0 0 0-5.601 5.6v2.801M12.603 15.403a5.601 5.601 0 1 0 0-11.202 5.601 5.601 0 0 0 0 11.202ZM26.605 11.202v8.402M30.806 15.403h-8.401"
    />
  </svg>
);
