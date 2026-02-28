import { useLanguage } from "@/app/useLanguage";
import { PhoneCallIcon, ChatBubbleIcon, MapPinIcon } from "@/shared/icon";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  action: string;
  color: string; // tailwind color class like "red" | "blue" | "primary"
}

const EmergencyCard = ({
  icon,
  title,
  description,
  detail,
  action,
  color,
}: CardProps) => {
  const bgMap: Record<string, string> = {
    red: "bg-red-500/10",
    blue: "bg-blue-500/10",
    primary: "bg-primary/10",
  };
  const textMap: Record<string, string> = {
    red: "text-red-500",
    blue: "text-blue-500",
    primary: "text-primary",
  };
  const btnMap: Record<string, string> = {
    red: "bg-red-500 hover:bg-red-600 text-white",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    primary: "bg-primary hover:bg-primary/90 text-white",
  };

  return (
    <div className="bg-surface flex flex-col rounded-2xl p-5 sm:p-6">
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${bgMap[color]}`}
      >
        <span className={textMap[color]}>{icon}</span>
      </div>
      <h3 className="text-text text-sm font-bold">{title}</h3>
      <p className="text-text-muted mt-1 flex-1 text-xs leading-relaxed">
        {description}
      </p>
      <p className="text-text-muted mt-2 text-xs font-medium">{detail}</p>
      <button
        className={`mt-3 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${btnMap[color]}`}
      >
        {action}
      </button>
    </div>
  );
};

export const EmergencySupport = () => {
  const { t } = useLanguage();
  const w = t.wellbeing;

  return (
    <section>
      <h2 className="text-text text-lg font-bold">{w.emergencyTitle}</h2>
      <p className="text-text-muted mt-1 text-sm">{w.emergencySubtitle}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <EmergencyCard
          icon={<PhoneCallIcon />}
          title={w.crisisHotline}
          description={w.crisisHotlineDesc}
          detail={w.crisisHotlineNumber}
          action={w.crisisAction}
          color="red"
        />
        <EmergencyCard
          icon={<ChatBubbleIcon />}
          title={w.textSupport}
          description={w.textSupportDesc}
          detail={w.textSupportNumber}
          action={w.textAction}
          color="blue"
        />
        <EmergencyCard
          icon={<MapPinIcon />}
          title={w.nearbyHelp}
          description={w.nearbyHelpDesc}
          detail={w.nearbyHelpDetail}
          action={w.nearbyAction}
          color="primary"
        />
      </div>
    </section>
  );
};
