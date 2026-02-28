import { useLanguage } from "@/app/useLanguage";
import {
  CheckCircleOutlineIcon,
  UsersOutlineIcon,
  BellAlertIcon,
  MobileIcon,
  MapPinIcon,
} from "@/shared/icon";

const icons: Record<string, React.ReactNode> = {
  checkin: <CheckCircleOutlineIcon className="h-5 w-5" strokeWidth={1.5} />,
  contacts: <UsersOutlineIcon className="h-5 w-5" strokeWidth={1.5} />,
  alert: <BellAlertIcon className="h-5 w-5" strokeWidth={1.5} />,
  device: <MobileIcon className="h-5 w-5" strokeWidth={1.5} />,
  location: <MapPinIcon className="h-5 w-5" strokeWidth={1.5} />,
};

interface DataItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DataItem = ({ icon, title, description }: DataItemProps) => (
  <div className="bg-surface-alt flex gap-3 rounded-xl p-4">
    <div className="text-primary mt-0.5 shrink-0">{icon}</div>
    <div>
      <p className="text-text text-sm font-semibold">{title}</p>
      <p className="text-text-muted mt-0.5 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const DataTransparency = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  const dataItems: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: icons.checkin,
      title: p.checkinHistory,
      desc: p.checkinHistoryDesc,
    },
    {
      icon: icons.contacts,
      title: p.trustedContactsData,
      desc: p.trustedContactsDataDesc,
    },
    { icon: icons.alert, title: p.alertLogs, desc: p.alertLogsDesc },
    { icon: icons.device, title: p.deviceInfo, desc: p.deviceInfoDesc },
    {
      icon: icons.location,
      title: p.emergencyLocation,
      desc: p.emergencyLocationDesc,
    },
  ];

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-lg font-bold">{p.dataTransparency}</h2>
        <button className="text-primary text-sm font-medium hover:underline">
          {p.downloadReport}
        </button>
      </div>

      <div className="bg-surface rounded-2xl p-5 sm:p-6">
        <p className="text-text-muted mb-4 text-sm leading-relaxed">
          {p.transparencyIntro}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {dataItems.map((item, i) => (
            <DataItem
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
