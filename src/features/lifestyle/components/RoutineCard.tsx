import { useLanguage } from "@/app/useLanguage";
import { Toggle } from "@/shared/components";
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
        {section === "sunup" && (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
        {section === "midday" && (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {section === "sleeptime" && (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-text text-sm font-semibold">{ls[item.titleKey]}</p>
        <p className="text-text-muted text-xs">{ls[item.timeKey]}</p>
      </div>

      <Toggle
        checked={item.enabled}
        onChange={() => onToggle(section, item.id)}
      />
    </div>
  );
};
