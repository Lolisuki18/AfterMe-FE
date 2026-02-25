import type { SVGProps } from "react";

export const GhostIcon = ({
  className = "relative drop-shadow-xl",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 200 220"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Ghost body */}
    <path
      d="M100 20 C50 20 20 60 20 110 L20 190 L40 175 L60 190 L80 175 L100 190 L120 175 L140 190 L160 175 L180 190 L180 110 C180 60 150 20 100 20Z"
      className="fill-primary/80"
    />
    {/* Left eye */}
    <ellipse cx="78" cy="105" rx="14" ry="18" fill="white" />
    <ellipse cx="82" cy="110" rx="7" ry="9" fill="#1e1e2e" />
    {/* Right eye */}
    <ellipse cx="122" cy="105" rx="14" ry="18" fill="white" />
    <ellipse cx="126" cy="110" rx="7" ry="9" fill="#1e1e2e" />
    {/* Smile */}
    <path
      d="M82 138 Q100 152 118 138"
      stroke="white"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
