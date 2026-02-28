import type { ReactNode } from "react";
import { useLanguage } from "../../../app/useLanguage";
import { PoliceShieldIcon, AmbulanceIcon, SilentIcon } from "../icon";

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ActionCard = ({ icon, title, description }: ActionCardProps) => (
  <button
    type="button"
    className="flex flex-col items-center gap-2 rounded-2xl border border-gray-800 bg-gray-900/70 px-4 py-6 text-center transition hover:border-gray-600 hover:bg-gray-800"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
      {icon}
    </div>
    <span className="text-sm font-semibold text-white">{title}</span>
    <span className="text-xs text-gray-400">{description}</span>
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
