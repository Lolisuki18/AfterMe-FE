import { useLanguage } from "@/app/useLanguage";
import { Toggle } from "@/shared/components";
import {
  SunOutlineIcon,
  ClockOutlineIcon,
  MoonCrescentIcon,
} from "@/shared/icon";
import type {
  RoutineItem as RoutineItemType,
  RoutineTime,
} from "../store/lifestyleStore";

interface RoutineCardProps {
  item: RoutineItemType;
  section: RoutineTime;
  onToggle: (section: RoutineTime, id: string) => void;
}

const SECTION_ICON_COLORS: Record<RoutineTime, string> = {
  sunup: "bg-amber-500/10 text-amber-500",
  midday: "bg-primary/10 text-primary",
  sleeptime: "bg-indigo-500/10 text-indigo-500",
};

export const RoutineCard = ({ item, section, onToggle }: RoutineCardProps) => {
  const { t } = useLanguage();
  const ls = t.lifestyle as Record<string, string>;

  return (
    <div className="bg-surface flex items-center gap-3 rounded-xl px-4 py-3">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${SECTION_ICON_COLORS[section]}`}
      >
        {section === "sunup" && <SunOutlineIcon className="h-4 w-4" />}
        {section === "midday" && <ClockOutlineIcon className="h-4 w-4" />}
        {section === "sleeptime" && <MoonCrescentIcon className="h-4 w-4" />}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-text text-sm font-semibold">
          {item.customTitle || ls[item.titleKey]}
        </p>
        <p className="text-text-muted text-xs">
          {item.customTime || ls[item.timeKey]}
        </p>
      </div>

      <Toggle
        checked={item.enabled}
        onChange={() => onToggle(section, item.id)}
      />
    </div>
  );
};
