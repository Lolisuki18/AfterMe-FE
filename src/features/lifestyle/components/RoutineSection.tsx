import React from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import {
  SunOutlineIcon,
  ClockOutlineIcon,
  MoonCrescentIcon,
  PlusIcon,
} from "@/shared/icon";
import { RoutineCard } from "./RoutineCard";
import type { RoutineItem, RoutineTime } from "../store/lifestyleStore";

interface RoutineSectionProps {
  section: RoutineTime;
  items: RoutineItem[];
  onToggle: (section: RoutineTime, id: string) => void;
}

const SECTION_ICONS: Record<RoutineTime, React.ReactNode> = {
  sunup: <SunOutlineIcon className="h-5 w-5 text-amber-500" />,
  midday: <ClockOutlineIcon className="text-primary h-5 w-5" />,
  sleeptime: <MoonCrescentIcon className="h-5 w-5 text-indigo-500" />,
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
          <PlusIcon className="mr-1 h-3.5 w-3.5" />
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
