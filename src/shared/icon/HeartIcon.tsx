import type { SVGProps } from "react";

export const HeartIcon = ({
  className = "h-7 w-7",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    className={className}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.747}
      d="M34.797 25.64c2.729-2.674 5.494-5.88 5.494-10.073A10.073 10.073 0 0 0 30.218 5.494c-3.223 0-5.494.916-8.241 3.663-2.747-2.747-5.018-3.663-8.241-3.663A10.073 10.073 0 0 0 3.663 15.567c0 4.212 2.747 7.417 5.494 10.073l12.82 12.82 12.82-12.82Z"
    />
  </svg>
);
