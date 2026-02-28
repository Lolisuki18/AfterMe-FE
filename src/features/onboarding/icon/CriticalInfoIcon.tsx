export const CriticalInfoIcon = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 2h6l1 7H8L9 2z" />
    <rect x="5" y="9" width="14" height="13" rx="2" />
    <path d="M12 13v3" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" />
  </svg>
);
