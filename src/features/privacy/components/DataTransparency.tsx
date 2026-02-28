import { useLanguage } from "@/app/useLanguage";

const icons: Record<string, React.ReactNode> = {
  checkin: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  contacts: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  alert: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  device: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  location: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
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
