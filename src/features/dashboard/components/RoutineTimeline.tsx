import { useLanguage } from "@/app/useLanguage";
import type { RoutineItem as RoutineItemData } from "../store/dashboardStore";
import { RoutineItem } from "./RoutineItem";

interface RoutineTimelineProps {
  routines: RoutineItemData[];
}

export const RoutineTimeline = ({ routines }: RoutineTimelineProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;

  return (
    <section className="bg-surface rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-base font-semibold">{d.todaysRoutine}</h2>
        <button
          type="button"
          className="text-primary text-sm font-medium hover:underline"
        >
          {d.editSchedule}
        </button>
      </div>

      {/* Timeline items */}
      <div className="space-y-2">
        {routines.map((item, idx) => (
          <RoutineItem
            key={item.id}
            item={item}
            isLast={idx === routines.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
