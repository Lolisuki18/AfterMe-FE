import { useLanguage } from "@/app/useLanguage";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="bg-surface flex items-center gap-3 rounded-2xl px-4 py-4">
    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
      {icon}
    </div>
    <div>
      <p className="text-text-muted text-[11px] font-semibold tracking-wider uppercase">
        {label}
      </p>
      <p className="text-text text-lg font-bold">{value}</p>
    </div>
  </div>
);

interface ContactStatsProps {
  totalContacts: number;
  verifiedPercent: string;
  activeAlerts: string;
}

export const ContactStats = ({
  totalContacts,
  verifiedPercent,
  activeAlerts,
}: ContactStatsProps) => {
  const { t } = useLanguage();
  const s = t.emergency;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        }
        label={s.totalContacts}
        value={String(totalContacts)}
      />
      <StatCard
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        label={s.verifiedNumbers}
        value={verifiedPercent}
      />
      <StatCard
        icon={
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        }
        label={s.activeAlerts}
        value={activeAlerts}
      />
    </div>
  );
};
