import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import type {
  RoutineItem as RoutineItemData,
  RoutineIconType,
} from "../store/dashboardStore";
import { dashboardStore } from "../store/dashboardStore";
import { RoutineItem } from "./RoutineItem";
import { EditScheduleModal } from "./EditScheduleModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusIcon,
  CoffeeIcon,
  BookIcon,
  ForkKnifeIcon,
  MoonIcon,
  RunIcon,
  HeartSmIcon,
} from "@/shared/icon";
import { toast } from "sonner";

const ICON_OPTIONS: {
  value: RoutineIconType;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { value: "coffee", label: "Coffee", Icon: CoffeeIcon },
  { value: "book", label: "Study", Icon: BookIcon },
  { value: "fork-knife", label: "Meal", Icon: ForkKnifeIcon },
  { value: "moon", label: "Rest", Icon: MoonIcon },
  { value: "run", label: "Run", Icon: RunIcon },
  { value: "heart", label: "Health", Icon: HeartSmIcon },
];

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
  const [showEdit, setShowEdit] = useState(false);
  const [editingItem, setEditingItem] = useState<RoutineItemData | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const refresh = () => {
    const updated = dashboardStore.getData().routines;
    onRoutinesChange?.(updated);
  };

  const handleSave = (updated: RoutineItemData[]) => {
    dashboardStore.setRoutines(updated);
    onRoutinesChange?.(updated);
  };

  const handleEdit = (item: RoutineItemData) => {
    setEditingItem({ ...item });
    setShowEditModal(true);
  };

  const handleDelete = (id: string) => {
    dashboardStore.deleteRoutine(id);
    toast.success(d.routineDeleted);
    refresh();
  };

  const handleEditSave = () => {
    if (!editingItem || !editingItem.title.trim()) return;
    dashboardStore.updateRoutine(editingItem);
    toast.success(d.routineSaved);
    setShowEditModal(false);
    setEditingItem(null);
    refresh();
  };

  return (
    <section className="bg-surface rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-base font-semibold">{d.todaysRoutine}</h2>
        <button
          type="button"
          onClick={() => setShowEdit(true)}
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
            onStatusChange={refresh}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Edit Single Routine Modal */}
      <AnimatePresence>
        {showEditModal && editingItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setShowEditModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface w-full max-w-sm rounded-2xl p-6 shadow-2xl"
            >
              <h3 className="text-text mb-4 text-base font-bold">
                {d.editRoutine}
              </h3>

              {/* Title */}
              <div className="mb-3">
                <label className="text-text-muted mb-1 block text-xs font-medium">
                  {d.routineNamePlaceholder}
                </label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, title: e.target.value })
                  }
                  className="border-border bg-surface-alt text-text w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Start time */}
              <div className="mb-3 grid grid-cols-2 gap-3">
                <div>
                  <label className="text-text-muted mb-1 block text-xs font-medium">
                    {d.startTime}
                  </label>
                  <input
                    type="text"
                    value={editingItem.time}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, time: e.target.value })
                    }
                    placeholder="8:00 AM"
                    className="border-border bg-surface-alt text-text w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-text-muted mb-1 block text-xs font-medium">
                    {d.endTime}
                  </label>
                  <input
                    type="text"
                    value={editingItem.endTime ?? ""}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        endTime: e.target.value || undefined,
                      })
                    }
                    placeholder="9:00 AM"
                    className="border-border bg-surface-alt text-text w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Icon picker */}
              <div className="mb-5">
                <label className="text-text-muted mb-2 block text-xs font-medium">
                  {d.iconLabel}
                </label>
                <div className="flex gap-2">
                  {ICON_OPTIONS.map(({ value, label, Icon }) => (
                    <button
                      key={value}
                      type="button"
                      title={label}
                      onClick={() =>
                        setEditingItem({ ...editingItem, iconType: value })
                      }
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                        editingItem.iconType === value
                          ? "border-indigo-500 bg-indigo-500/10 text-indigo-500"
                          : "border-border bg-surface-alt text-text-muted hover:border-indigo-400"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="border-border text-text-muted flex-1 rounded-xl border py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  {d.cancelEdit}
                </button>
                <button
                  type="button"
                  onClick={handleEditSave}
                  className="bg-primary hover:bg-primary-hover flex-1 rounded-xl py-2 text-sm font-semibold text-white transition-colors"
                >
                  {d.saveSchedule}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Edit Schedule Modal */}
      <EditScheduleModal
        open={showEdit}
        onClose={() => setShowEdit(false)}
        routines={routines}
        onSave={handleSave}
      />
    </section>
  );
};
