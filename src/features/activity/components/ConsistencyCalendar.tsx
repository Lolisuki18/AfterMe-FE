import { useLanguage } from "@/app/useLanguage";

interface ConsistencyCalendarProps {
  activeDays: number[];
}

export const ConsistencyCalendar = ({
  activeDays,
}: ConsistencyCalendarProps) => {
  const { t } = useLanguage();
  const a = t.activity;
  const dayLabels = [a.mon, a.tue, a.wed, a.thu, a.fri, a.sat, a.sun];

  // Mock: render a 5-row × 7-col grid for ~30 days
  const totalCells = 35;

  return (
    <div className="bg-surface rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-base font-bold">
          {a.consistencyCalendar}
        </h2>
        <div className="text-text-muted flex gap-2 text-xs font-semibold">
          <button type="button" className="text-primary underline">
            {a.month}
          </button>
          <button type="button">{a.week}</button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {dayLabels.map((d) => (
          <span
            key={d}
            className="text-text-muted pb-1 text-[10px] font-semibold uppercase"
          >
            {d}
          </span>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: totalCells }, (_, i) => {
          const day = i + 1;
          if (day > 30) return <span key={i} />;
          const isActive = activeDays.includes(day);
          return (
            <div
              key={i}
              className={`flex h-8 w-full items-center justify-center rounded-md text-xs font-medium ${
                isActive
                  ? "bg-primary/20 text-primary font-bold"
                  : "text-text-muted"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};
