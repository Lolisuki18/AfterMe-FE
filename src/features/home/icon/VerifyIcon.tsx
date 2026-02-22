import type { SVGProps } from "react";

const VerifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.801}
      d="M28.006 18.204c0 7.001-4.901 10.502-10.727 12.532a1.4 1.4 0 0 1-.938-.014c-5.839-2.016-10.74-5.517-10.74-12.518V8.402a1.4 1.4 0 0 1 1.4-1.4c2.8 0 6.302-1.68 8.738-3.81a1.638 1.638 0 0 1 2.129 0c2.45 2.143 5.937 3.81 8.738 3.81a1.4 1.4 0 0 1 1.4 1.4v9.802Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.801}
      d="m12.602 16.803 2.801 2.801 5.601-5.601"
    />
  </svg>
);
export default VerifyIcon;
