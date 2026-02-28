import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { ShieldBadgeIcon } from "@/shared/icon";

interface WelcomeHeaderProps {
  userName: string;
}

export const WelcomeHeader = ({ userName }: WelcomeHeaderProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-text text-xl font-bold sm:text-2xl">
          {d.welcomeBack.replace("{name}", userName)}
        </h1>
        <div className="mt-1 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          <span className="text-text-muted text-sm">{d.systemStatus}</span>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        rounded
        leftIcon={<ShieldBadgeIcon className="h-4 w-4" />}
      >
        {d.checkStatus}
      </Button>
    </div>
  );
};
