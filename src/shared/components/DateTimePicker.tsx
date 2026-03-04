/**
 * DateTimePicker.tsx — Custom calendar + time picker hoàn toàn bằng Tailwind
 * Thay thế native <input type="date/time"> browser-default xấu.
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from "date-fns";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface DatePickerProps {
  value: string; // "yyyy-MM-dd"
  onChange: (val: string) => void;
}

interface TimePickerProps {
  value: string; // "HH:mm"
  onChange: (val: string) => void;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const pad = (n: number) => String(n).padStart(2, "0");

const HOURS = Array.from({ length: 24 }, (_, i) => pad(i));
const MINUTES = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];

// ── useOutsideClick ───────────────────────────────────────────────────────────
function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  cb: () => void,
) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) cb();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, cb]);
}

// ── Dropdown animation ────────────────────────────────────────────────────────
const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  exit: { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.13 } },
};

// ════════════════════════════════════════════════════════════════════════════════
// DATE PICKER
// ════════════════════════════════════════════════════════════════════════════════
export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState<Date>(() =>
    value ? parseISO(value) : new Date(),
  );
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setOpen(false));

  const selected = value ? parseISO(value) : null;

  // Build calendar grid
  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(viewDate);
  const calStart = startOfWeek(monthStart);
  const calEnd = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: calStart, end: calEnd });

  const select = (day: Date) => {
    onChange(format(day, "yyyy-MM-dd"));
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative flex-1">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "border-border bg-bg text-text flex min-h-[44px] w-full items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition-all duration-200",
          open
            ? "border-primary ring-primary/20 ring-2"
            : "hover:border-primary/50",
        ].join(" ")}
      >
        <Calendar className="text-primary h-4 w-4 shrink-0" />
        <span className="flex-1 text-left font-medium">
          {selected ? format(selected, "dd MMM yyyy") : "Select date"}
        </span>
        <ChevronRight
          className={`text-text-muted h-4 w-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        />
      </button>

      {/* Dropdown calendar */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="border-border bg-surface absolute top-[calc(100%+8px)] left-0 z-50 w-72 rounded-2xl border p-4 shadow-2xl"
          >
            {/* Month navigation */}
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setViewDate((d) => subMonths(d, 1))}
                className="text-text-muted hover:bg-surface-alt rounded-lg p-1.5 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-text text-sm font-semibold">
                {format(viewDate, "MMMM yyyy")}
              </span>
              <button
                type="button"
                onClick={() => setViewDate((d) => addMonths(d, 1))}
                className="text-text-muted hover:bg-surface-alt rounded-lg p-1.5 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Weekday headers */}
            <div className="mb-1 grid grid-cols-7">
              {WEEKDAYS.map((d) => (
                <span
                  key={d}
                  className="text-text-muted py-1 text-center text-[11px] font-semibold uppercase"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-y-0.5">
              {days.map((day) => {
                const isSelected = selected ? isSameDay(day, selected) : false;
                const inMonth = isSameMonth(day, viewDate);
                const todayDay = isToday(day);
                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => select(day)}
                    className={[
                      "flex h-8 w-full items-center justify-center rounded-lg text-xs font-medium transition-all duration-150",
                      isSelected
                        ? "bg-primary text-white shadow-sm"
                        : todayDay
                          ? "text-primary border-primary/40 border font-bold"
                          : inMonth
                            ? "text-text hover:bg-surface-alt"
                            : "text-text-muted/40 cursor-default",
                    ].join(" ")}
                    disabled={!inMonth}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>

            {/* Shortcuts */}
            <div className="border-border mt-3 flex justify-between border-t pt-3">
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  setOpen(false);
                }}
                className="text-text-muted hover:text-error text-xs transition-colors"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => {
                  const today = new Date();
                  onChange(format(today, "yyyy-MM-dd"));
                  setViewDate(today);
                  setOpen(false);
                }}
                className="text-primary text-xs font-semibold"
              >
                Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════════
// TIME PICKER
// ════════════════════════════════════════════════════════════════════════════════
export const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setOpen(false));

  const [hh, mm] = (value || "09:00").split(":");
  const hourVal = hh ?? "09";
  const minVal = mm ?? "00";

  const setHour = (h: string) => onChange(`${h}:${minVal}`);
  const setMin = (m: string) => onChange(`${hourVal}:${m}`);

  const display12 = () => {
    const h = parseInt(hourVal, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${pad(h12)}:${minVal} ${suffix}`;
  };

  return (
    <div ref={ref} className="relative flex-1">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "border-border bg-bg text-text flex min-h-[44px] w-full items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition-all duration-200",
          open
            ? "border-primary ring-primary/20 ring-2"
            : "hover:border-primary/50",
        ].join(" ")}
      >
        <Clock className="text-primary h-4 w-4 shrink-0" />
        <span className="flex-1 text-left font-medium">{display12()}</span>
        <ChevronRight
          className={`text-text-muted h-4 w-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="border-border bg-surface absolute top-[calc(100%+8px)] left-0 z-50 w-64 overflow-hidden rounded-2xl border shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primary/10 border-border border-b px-4 py-2.5">
              <p className="text-primary text-center text-lg font-bold tracking-widest">
                {pad(
                  parseInt(hourVal, 10) % 12 === 0
                    ? 12
                    : parseInt(hourVal, 10) % 12,
                )}
                :{minVal}{" "}
                <span className="text-sm">
                  {parseInt(hourVal, 10) >= 12 ? "PM" : "AM"}
                </span>
              </p>
            </div>

            <div className="divide-border flex divide-x">
              {/* Hours column */}
              <div className="flex-1">
                <p className="text-text-muted border-border border-b px-3 py-1.5 text-center text-[10px] font-semibold tracking-wider uppercase">
                  Hour
                </p>
                <div className="scrollbar-thin h-48 overflow-y-auto py-1">
                  {HOURS.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHour(h)}
                      className={[
                        "w-full py-1.5 text-center text-sm transition-colors",
                        h === hourVal
                          ? "bg-primary font-semibold text-white"
                          : "text-text hover:bg-surface-alt",
                      ].join(" ")}
                    >
                      {pad(
                        parseInt(h, 10) % 12 === 0 ? 12 : parseInt(h, 10) % 12,
                      )}
                      <span className="text-[10px] opacity-60">
                        {parseInt(h, 10) >= 12 ? "PM" : "AM"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Minutes column */}
              <div className="flex-1">
                <p className="text-text-muted border-border border-b px-3 py-1.5 text-center text-[10px] font-semibold tracking-wider uppercase">
                  Min
                </p>
                <div className="scrollbar-thin h-48 overflow-y-auto py-1">
                  {MINUTES.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setMin(m);
                        setOpen(false);
                      }}
                      className={[
                        "w-full py-1.5 text-center text-sm transition-colors",
                        m === minVal
                          ? "bg-primary font-semibold text-white"
                          : "text-text hover:bg-surface-alt",
                      ].join(" ")}
                    >
                      :{m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
