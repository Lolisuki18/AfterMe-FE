export const ContactCardIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="8" cy="10" r="2" />
    <path d="M12 14H4c0-2 2-3 4-3s4 1 4 3z" />
    <line x1="15" y1="8" x2="20" y2="8" />
    <line x1="15" y1="12" x2="20" y2="12" />
    <line x1="17" y1="16" x2="20" y2="16" />
  </svg>
);
