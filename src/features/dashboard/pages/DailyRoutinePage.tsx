import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { TimePicker } from "@/shared/components/DateTimePicker";
import { PlusIcon, TrashIcon, ArrowRightIcon } from "@/shared/icon";
import {
  dashboardStore,
  type RoutineItem,
  type RoutineIconType,
} from "../store/dashboardStore";
import { toast } from "sonner";

const ICON_OPTIONS: { value: RoutineIconType; emoji: string }[] = [
  { value: "coffee", emoji: "☕" },
  { value: "book", emoji: "📖" },
  { value: "fork-knife", emoji: "🍽️" },
  { value: "moon", emoji: "🌙" },
  { value: "run", emoji: "🏃" },
  { value: "heart", emoji: "❤️" },
];

const DailyRoutinePage = () => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const navigate = useNavigate();
  const data = dashboardStore.getData();

  const [routines, setRoutines] = useState<RoutineItem[]>(data.routines);
  const [editingId, setEditingId] = useState<string | null>(null);

  // New routine form state
  const [newTitle, setNewTitle] = useState("");
  const [newIcon, setNewIcon] = useState<RoutineIconType>("coffee");
  const [newStartTime, setNewStartTime] = useState("08:00");
  const [newEndTime, setNewEndTime] = useState("");

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    const item: RoutineItem = {
      id: `r_${Date.now()}`,
      title: newTitle.trim(),
      time: formatTime(newStartTime),
      endTime: newEndTime ? formatTime(newEndTime) : undefined,
      status: "upcoming",
      iconType: newIcon,
    };
    const updated = [...routines, item];
    setRoutines(updated);
    dashboardStore.setRoutines(updated);
    setNewTitle("");
    setNewStartTime("08:00");
    setNewEndTime("");
    toast.success("Routine added!");
  };

  const handleDelete = (id: string) => {
    const updated = routines.filter((r) => r.id !== id);
    setRoutines(updated);
    dashboardStore.setRoutines(updated);
    toast.success("Routine removed.");
  };

  const handleSaveEdit = (item: RoutineItem) => {
    const updated = routines.map((r) => (r.id === item.id ? item : r));
    setRoutines(updated);
    dashboardStore.setRoutines(updated);
    setEditingId(null);
    toast.success("Routine updated!");
  };

  const formatTime = (t24: string) => {
    const [h, m] = t24.split(":").map(Number);
    const suffix = h >= 12 ? "PM" : "AM";
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${h12}:${m.toString().padStart(2, "0")} ${suffix}`;
  };

  const getIconEmoji = (iconType: RoutineIconType) =>
    ICON_OPTIONS.find((o) => o.value === iconType)?.emoji ?? "☕";

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-text text-2xl font-bold">{d.todaysRoutine}</h1>
          <p className="text-text-muted mt-1 text-sm">{d.editScheduleDesc}</p>
        </div>
        <Button
          variant="outline"
          rounded
          onClick={() => navigate("/dashboard")}
          leftIcon={<ArrowRightIcon className="h-4 w-4 rotate-180" />}
        >
          {d.sidebar.home}
        </Button>
      </div>

      {/* Existing routines */}
      <section className="space-y-3">
        {routines.map((routine) =>
          editingId === routine.id ? (
            <EditableRoutineRow
              key={routine.id}
              routine={routine}
              onSave={handleSaveEdit}
              onCancel={() => setEditingId(null)}
              d={d}
            />
          ) : (
            <div
              key={routine.id}
              className="bg-surface flex items-center gap-3 rounded-xl px-4 py-3"
            >
              <span className="text-lg">{getIconEmoji(routine.iconType)}</span>
              <div className="min-w-0 flex-1">
                <p className="text-text text-sm font-semibold">
                  {routine.title}
                </p>
                <p className="text-text-muted text-xs">
                  {routine.time}
                  {routine.endTime ? ` – ${routine.endTime}` : ""}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEditingId(routine.id)}
                  className="text-primary text-xs font-semibold hover:underline"
                >
                  {d.editSchedule}
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(routine.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ),
        )}
        {routines.length === 0 && (
          <div className="text-text-muted py-12 text-center text-sm">
            No routines yet. Add one below!
          </div>
        )}
      </section>

      {/* Add new routine form */}
      <section className="bg-surface rounded-2xl p-5">
        <h2 className="text-text mb-4 text-base font-bold">{d.addRoutine}</h2>

        <div className="space-y-4">
          {/* Title + Icon */}
          <div className="flex gap-3">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder={d.routineNamePlaceholder}
              className="border-border bg-bg text-text placeholder-text-muted focus:ring-primary/30 flex-1 rounded-xl border px-3 py-2.5 text-sm outline-none focus:ring-2"
            />
            <select
              value={newIcon}
              onChange={(e) => setNewIcon(e.target.value as RoutineIconType)}
              className="border-border bg-bg text-text rounded-xl border px-3 py-2.5 text-sm outline-none"
            >
              {ICON_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.emoji} {opt.value}
                </option>
              ))}
            </select>
          </div>

          {/* Times */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-text-muted mb-1 block text-xs font-medium">
                {d.startTime}
              </label>
              <TimePicker value={newStartTime} onChange={setNewStartTime} />
            </div>
            <div>
              <label className="text-text-muted mb-1 block text-xs font-medium">
                {d.endTime}
              </label>
              <TimePicker value={newEndTime} onChange={setNewEndTime} />
            </div>
          </div>

          <Button
            variant="primary"
            rounded
            fullWidth
            leftIcon={<PlusIcon className="h-4 w-4" />}
            onClick={handleAdd}
            disabled={!newTitle.trim()}
          >
            {d.addRoutine}
          </Button>
        </div>
      </section>
    </div>
  );
};

/* ── Inline editable row ─────────────────────────────────────────── */

interface EditableRoutineRowProps {
  routine: RoutineItem;
  onSave: (item: RoutineItem) => void;
  onCancel: () => void;
  d: ReturnType<
    typeof import("@/app/useLanguage").useLanguage
  >["t"]["dashboard"];
}

const EditableRoutineRow = ({
  routine,
  onSave,
  onCancel,
  d,
}: EditableRoutineRowProps) => {
  const [title, setTitle] = useState(routine.title);
  const [icon, setIcon] = useState<RoutineIconType>(routine.iconType);
  const [startTime, setStartTime] = useState(to24(routine.time));
  const [endTime, setEndTime] = useState(
    routine.endTime ? to24(routine.endTime) : "",
  );

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({
      ...routine,
      title: title.trim(),
      iconType: icon,
      time: formatTime(startTime),
      endTime: endTime ? formatTime(endTime) : undefined,
    });
  };

  return (
    <div className="bg-surface-alt space-y-3 rounded-xl p-4">
      <div className="flex gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-border bg-bg text-text flex-1 rounded-xl border px-3 py-2 text-sm outline-none"
        />
        <select
          value={icon}
          onChange={(e) => setIcon(e.target.value as RoutineIconType)}
          className="border-border bg-bg text-text rounded-xl border px-3 py-2 text-sm outline-none"
        >
          {ICON_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.emoji}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <TimePicker value={startTime} onChange={setStartTime} />
        <TimePicker value={endTime} onChange={setEndTime} />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" rounded onClick={onCancel}>
          {d.cancelEdit}
        </Button>
        <Button variant="primary" size="sm" rounded onClick={handleSave}>
          {d.saveSchedule}
        </Button>
      </div>
    </div>
  );
};

/* ── Helpers ──────────────────────────────────────────────────────── */

function formatTime(t24: string) {
  const [h, m] = t24.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${m.toString().padStart(2, "0")} ${suffix}`;
}

/** Convert "8:00 AM" → "08:00" */
function to24(time12: string): string {
  const match = time12.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return "08:00";
  let h = parseInt(match[1], 10);
  const m = match[2];
  const period = match[3].toUpperCase();
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return `${h.toString().padStart(2, "0")}:${m}`;
}

export default DailyRoutinePage;
