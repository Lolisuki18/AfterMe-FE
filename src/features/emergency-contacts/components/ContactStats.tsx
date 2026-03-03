import { useLanguage } from "@/app/useLanguage";
import {
  UsersOutlineIcon,
  CheckCircleOutlineIcon,
  BellAlertIcon,
} from "@/shared/icon";

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
        icon={<UsersOutlineIcon className="h-5 w-5" />}
        label={s.totalContacts}
        value={String(totalContacts)}
      />
      <StatCard
        icon={<CheckCircleOutlineIcon className="h-5 w-5" />}
        label={s.verifiedNumbers}
        value={verifiedPercent}
      />
      <StatCard
        icon={<BellAlertIcon className="h-5 w-5" />}
        label={s.activeAlerts}
        value={activeAlerts}
      />
    </div>
  );
};
