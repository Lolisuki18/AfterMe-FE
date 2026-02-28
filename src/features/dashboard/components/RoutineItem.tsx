import { useLanguage } from "@/app/useLanguage";
import type { RoutineItem as RoutineItemData } from "../store/dashboardStore";
import { CoffeeIcon, BookIcon, ForkKnifeIcon, MoonIcon, RunIcon, HeartSmIcon, CheckCircleSmFilledIcon, ClockSmIcon } from "@/shared/icon";
import type { ComponentType } from "react";

interface RoutineItemProps {
  item: RoutineItemData;
  isLast?: boolean;
}

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  coffee: CoffeeIcon,
  book: BookIcon,
  "fork-knife": ForkKnifeIcon,
  moon: MoonIcon,
  run: RunIcon,
  heart: HeartSmIcon,
};

export const RoutineItem = ({ item, isLast = false }: RoutineItemProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const Icon = ICON_MAP[item.iconType] ?? CoffeeIcon;

  const isCompleted = item.status === "completed";
  const isActive = item.status === "active";

  /* ── Status dot ─────────────────────────────────────────────────── */
  const statusDot = isCompleted ? (
    <CheckCircleSmFilledIcon className="h-5 w-5 text-green-500" />
  ) : isActive ? (
    <span className="bg-primary h-3.5 w-3.5 rounded-full ring-4 ring-indigo-500/20" />
  ) : (
    <ClockSmIcon className="text-text-muted h-5 w-5" />
  );

  /* ── Time display ──────────────────────────────────────────────── */
  const timeText = item.endTime ? `${item.time} – ${item.endTime}` : item.time;

  return (
    <div className="relative flex gap-4">
      {/* Vertical connector line */}
      {!isLast && (
        <div className="border-border absolute top-6 bottom-0 left-[9px] border-l-2" />
      )}

      {/* Dot column */}
      <div className="z-10 flex h-5 w-5 shrink-0 items-center justify-center">
        {statusDot}
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 py-2.5 ${
          isActive ? "bg-surface-alt" : ""
        }`}
      >
        {/* Activity icon */}
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            isCompleted
              ? "bg-green-500/10 text-green-500"
              : isActive
                ? "bg-primary/10 text-primary"
                : "bg-surface-alt text-text-muted"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>

        {/* Title + time */}
        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-medium ${
              isCompleted ? "text-text-muted line-through" : "text-text"
            }`}
          >
            {item.title}
          </p>
          <p className="text-text-muted text-xs">{timeText}</p>
        </div>

        {/* Badges */}
        {isActive && (
          <span className="bg-primary shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white">
            {d.now}
          </span>
        )}
        {isCompleted && (
          <span className="text-text-muted shrink-0 text-xs">
            {d.completed}
          </span>
        )}
      </div>
    </div>
  );
};
