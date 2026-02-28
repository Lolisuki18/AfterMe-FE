import React from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { RoutineCard } from "./RoutineCard";
import type { RoutineItem, RoutineTime } from "../store/lifestyleStore";

interface RoutineSectionProps {
  section: RoutineTime;
  items: RoutineItem[];
  onToggle: (section: RoutineTime, id: string) => void;
}

const SECTION_ICONS: Record<RoutineTime, React.ReactNode> = {
  sunup: (
    <svg
      className="h-5 w-5 text-amber-500"
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
  ),
  midday: (
    <svg
      className="text-primary h-5 w-5"
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
  ),
  sleeptime: (
    <svg
      className="h-5 w-5 text-indigo-500"
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
  ),
};

export const RoutineSection = ({
  section,
  items,
  onToggle,
}: RoutineSectionProps) => {
  const { t } = useLanguage();
  const ls = t.lifestyle;
  const title =
    section === "sunup"
      ? ls.sunup
      : section === "midday"
        ? ls.midday
        : ls.sleeptime;
  const desc =
    section === "sunup"
      ? ls.sunupDesc
      : section === "midday"
        ? ls.middayDesc
        : ls.sleeptimeDesc;

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {SECTION_ICONS[section]}
          <div>
            <h2 className="text-text text-base font-bold">{title}</h2>
            <p className="text-text-muted text-xs">{desc}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" rounded>
          <svg
            className="mr-1 h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          {ls.quickAdd}
        </Button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <RoutineCard
            key={item.id}
            item={item}
            section={section}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
};
