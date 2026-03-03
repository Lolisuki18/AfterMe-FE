import type { ReactNode } from "react";
import { useLanguage } from "../../../app/useLanguage";
import { PoliceShieldIcon, AmbulanceIcon, SilentIcon } from "@/shared/icon";

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ActionCard = ({ icon, title, description }: ActionCardProps) => (
  <button
    type="button"
    className="bg-surface border-border hover:bg-surface-alt flex flex-col items-center gap-2 rounded-2xl border px-4 py-6 text-center transition"
  >
    <div className="border-border bg-surface-alt flex h-12 w-12 items-center justify-center rounded-full border">
      {icon}
    </div>
    <span className="text-text text-sm font-semibold">{title}</span>
    <span className="text-text-muted text-xs">{description}</span>
  </button>
);

const QuickEmergencyActions = () => {
  const { t } = useLanguage();
  const s = t.sosTrigger;

  const actions = [
    {
      icon: <PoliceShieldIcon className="h-6 w-6 text-blue-400" />,
      title: s.callPolice,
      description: s.callPoliceDesc,
    },
    {
      icon: <AmbulanceIcon className="h-6 w-6 text-emerald-400" />,
      title: s.ambulance,
      description: s.ambulanceDesc,
    },
    {
      icon: <SilentIcon className="h-6 w-6 text-purple-400" />,
      title: s.silentSos,
      description: s.silentSosDesc,
    },
  ];

  return (
    <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:px-0">
      {actions.map((a) => (
        <ActionCard key={a.title} {...a} />
      ))}
    </div>
  );
};

export default QuickEmergencyActions;
