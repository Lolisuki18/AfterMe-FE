import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import type { RoutineItem as RoutineItemData } from "../store/dashboardStore";
import { dashboardStore } from "../store/dashboardStore";
import { RoutineItem } from "./RoutineItem";
import { EditScheduleModal } from "./EditScheduleModal";

interface RoutineTimelineProps {
  routines: RoutineItemData[];
  onRoutinesChange?: (routines: RoutineItemData[]) => void;
}

export const RoutineTimeline = ({
  routines,
  onRoutinesChange,
}: RoutineTimelineProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);

  const handleSave = (updated: RoutineItemData[]) => {
    dashboardStore.setRoutines(updated);
    onRoutinesChange?.(updated);
  };

  return (
    <section className="bg-surface rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-base font-semibold">{d.todaysRoutine}</h2>
        <button
          type="button"
          onClick={() => navigate("/dashboard/daily-routine")}
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

      {/* Edit Schedule Modal */}
      <EditScheduleModal
        open={showEdit}
        onClose={() => setShowEdit(false)}
        routines={routines}
        onSave={handleSave}
      />
    </section>
  );
};
