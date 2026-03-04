import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Input } from "@/shared/components";
import { TimePicker } from "@/shared/components/DateTimePicker";
import type { RoutineItem, RoutineIconType } from "../store/dashboardStore";
import {
  CoffeeIcon,
  BookIcon,
  ForkKnifeIcon,
  MoonIcon,
  RunIcon,
  HeartSmIcon,
  TrashIcon,
  PlusCircleIcon,
  GripVerticalIcon,
} from "@/shared/icon";
import type { ComponentType } from "react";

/* ── Icon map ─────────────────────────────────────────────────── */
const ICON_MAP: Record<
  RoutineIconType,
  ComponentType<{ className?: string }>
> = {
  coffee: CoffeeIcon,
  book: BookIcon,
  "fork-knife": ForkKnifeIcon,
  moon: MoonIcon,
  run: RunIcon,
  heart: HeartSmIcon,
};

const ICON_OPTIONS: { value: RoutineIconType; label: string }[] = [
  { value: "coffee", label: "☕ Coffee" },
  { value: "book", label: "📖 Study" },
  { value: "fork-knife", label: "🍴 Meal" },
  { value: "moon", label: "🌙 Rest" },
  { value: "run", label: "🏃 Exercise" },
  { value: "heart", label: "❤️ Wellness" },
];

/* ── Helpers ──────────────────────────────────────────────────── */
const to24h = (display: string): string => {
  // "8:00 AM" → "08:00", "10:00 PM" → "22:00"
  const match = display.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return "09:00";
  let h = parseInt(match[1], 10);
  const m = match[2];
  const ampm = match[3]?.toUpperCase();
  if (ampm === "PM" && h < 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${m}`;
};

const to12h = (val: string): string => {
  const [hh, mm] = val.split(":");
  const h = parseInt(hh, 10);
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mm} ${suffix}`;
};

/* ── Draft item (editing state) ──────────────────────────────── */
interface DraftRoutine {
  id: string;
  title: string;
  time24: string;
  endTime24: string;
  iconType: RoutineIconType;
}

interface EditScheduleModalProps {
  open: boolean;
  onClose: () => void;
  routines: RoutineItem[];
  onSave: (routines: RoutineItem[]) => void;
}

export const EditScheduleModal = ({
  open,
  onClose,
  routines,
  onSave,
}: EditScheduleModalProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;

  // Convert routines into editable draft state
  const toDrafts = (items: RoutineItem[]): DraftRoutine[] =>
    items.map((r) => ({
      id: r.id,
      title: r.title,
      time24: to24h(r.time),
      endTime24: r.endTime ? to24h(r.endTime) : "",
      iconType: r.iconType,
    }));

  const [drafts, setDrafts] = useState<DraftRoutine[]>(() =>
    toDrafts(routines),
  );

  const updateDraft = (id: string, patch: Partial<DraftRoutine>) => {
    setDrafts((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...patch } : d)),
    );
  };

  const removeDraft = (id: string) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
  };

  const addDraft = () => {
    setDrafts((prev) => [
      ...prev,
      {
        id: `r_${Date.now()}`,
        title: "",
        time24: "09:00",
        endTime24: "",
        iconType: "coffee",
      },
    ]);
  };

  const handleSave = () => {
    // Sort by time, convert back to RoutineItem format
    const sorted = [...drafts]
      .filter((d) => d.title.trim())
      .sort((a, b) => a.time24.localeCompare(b.time24));

    const now = new Date();
    const nowStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const result: RoutineItem[] = sorted.map((draft) => {
      // Determine status based on current time
      const endStr = draft.endTime24 || draft.time24;
      let status: RoutineItem["status"] = "upcoming";
      if (draft.time24 <= nowStr && endStr >= nowStr) status = "active";
      else if (endStr < nowStr) status = "completed";

      return {
        id: draft.id,
        title: draft.title.trim(),
        time: to12h(draft.time24),
        endTime: draft.endTime24 ? to12h(draft.endTime24) : undefined,
        status,
        iconType: draft.iconType,
      };
    });

    onSave(result);
    onClose();
  };

  const handleClose = () => {
    setDrafts(toDrafts(routines));
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="space-y-5">
        {/* Header */}
        <div>
          <h3 className="text-text text-lg font-bold">{d.editSchedule}</h3>
          <p className="text-text-muted text-sm">{d.editScheduleDesc}</p>
        </div>

        {/* Routine list */}
        <div className="max-h-[50vh] space-y-3 overflow-y-auto pr-1">
          {drafts.map((draft) => {
            const Icon = ICON_MAP[draft.iconType];
            return (
              <div
                key={draft.id}
                className="border-border bg-surface-alt flex flex-col gap-3 rounded-xl border p-3"
              >
                {/* Row 1: Icon selector + title + delete */}
                <div className="flex items-center gap-2">
                  <GripVerticalIcon className="text-text-muted h-4 w-4 shrink-0 cursor-grab" />

                  {/* Icon selector */}
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="text-primary h-4 w-4" />
                  </div>

                  <Input
                    value={draft.title}
                    onChange={(e) =>
                      updateDraft(draft.id, { title: e.target.value })
                    }
                    placeholder={d.routineNamePlaceholder}
                    className="flex-1"
                  />

                  <button
                    type="button"
                    onClick={() => removeDraft(draft.id)}
                    className="text-text-muted shrink-0 p-1 transition-colors hover:text-red-500"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* Row 2: Icon type + Time pickers */}
                <div className="flex flex-wrap items-end gap-2">
                  {/* Icon type dropdown */}
                  <div className="w-28 shrink-0">
                    <label className="text-text-muted mb-1 block text-[11px] font-medium">
                      {d.iconLabel}
                    </label>
                    <select
                      value={draft.iconType}
                      onChange={(e) =>
                        updateDraft(draft.id, {
                          iconType: e.target.value as RoutineIconType,
                        })
                      }
                      className="border-border bg-bg text-text w-full rounded-lg border px-2 py-2 text-xs"
                    >
                      {ICON_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Start time */}
                  <div className="min-w-0 flex-1">
                    <label className="text-text-muted mb-1 block text-[11px] font-medium">
                      {d.startTime}
                    </label>
                    <TimePicker
                      value={draft.time24}
                      onChange={(val) => updateDraft(draft.id, { time24: val })}
                    />
                  </div>

                  {/* End time (optional) */}
                  <div className="min-w-0 flex-1">
                    <label className="text-text-muted mb-1 block text-[11px] font-medium">
                      {d.endTime}
                    </label>
                    <TimePicker
                      value={draft.endTime24 || draft.time24}
                      onChange={(val) =>
                        updateDraft(draft.id, { endTime24: val })
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add routine button */}
        <button
          type="button"
          onClick={addDraft}
          className="text-primary hover:bg-primary/5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-current py-2.5 text-sm font-medium transition-colors"
        >
          <PlusCircleIcon className="h-4 w-4" />
          {d.addRoutine}
        </button>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={handleClose}>
            {d.cancelEdit}
          </Button>
          <Button onClick={handleSave}>{d.saveSchedule}</Button>
        </div>
      </div>
    </Modal>
  );
};
