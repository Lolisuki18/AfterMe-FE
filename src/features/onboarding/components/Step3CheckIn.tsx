import { useLanguage } from "@/app/useLanguage";
import type { Step3CheckInProps } from "../interface";
import { ProgressBar } from "./ProgressBar";
import { SunIcon, CalendarIcon } from "@/shared/icon";
import { Button } from "@/shared/components";

const timeBoxClass =
  "border-border bg-bg text-text w-14 rounded-lg border px-2 py-2.5 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-primary/50 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

export const Step3CheckIn = ({
  data,
  onChange,
  onNext,
  onBack,
}: Step3CheckInProps) => {
  const { t } = useLanguage();
  const o = t.onboarding;
  const c = o.checkin;

  // Đưa mảng này vào trong để lấy data từ object `c` của ngôn ngữ
  const daysOfWeek = [
    { value: "Mon", label: c.mon || "T2" },
    { value: "Tue", label: c.tue || "T3" },
    { value: "Wed", label: c.wed || "T4" },
    { value: "Thu", label: c.thu || "T5" },
    { value: "Fri", label: c.fri || "T6" },
    { value: "Sat", label: c.sat || "T7" },
    { value: "Sun", label: c.sun || "CN" },
  ];

  return (
    <>
      <ProgressBar currentStep={3} />

      <h1 className="text-navy dark:text-text mb-2 text-center text-2xl font-bold sm:text-3xl">
        {c.title}
      </h1>
      <p className="text-text-muted mb-10 text-center text-sm">{c.subtitle}</p>

      {/* Frequency selector */}
      <div className="mb-6 flex flex-col items-center gap-4">
        <p className="text-primary font-semibold">{c.frequency}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {(["daily", "weekly"] as const).map((freq) => (
            <button
              key={freq}
              onClick={() => onChange("checkInFrequency", freq)}
              className={`border-border flex h-20 w-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 text-sm font-medium transition-all ${
                data.checkInFrequency === freq
                  ? "border-primary text-primary bg-primary/5"
                  : "text-text-muted hover:border-primary/40"
              }`}
            >
              {freq === "daily" ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <CalendarIcon className="h-6 w-6" />
              )}
              {freq === "daily" ? c.daily : c.weekly}
            </button>
          ))}
        </div>
      </div>

      {/* Weekday Selector (Chỉ hiện khi chọn Weekly) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          data.checkInFrequency === "weekly"
            ? "mb-8 max-h-32 opacity-100"
            : "mb-0 max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-text-muted text-sm font-medium">
            {c.selectDay || "Chọn ngày trong tuần"}
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {daysOfWeek.map((day) => (
              <button
                key={day.value}
                onClick={() => onChange("checkInDay", day.value)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-all ${
                  data.checkInDay === day.value
                    ? "bg-primary shadow-primary/30 text-white shadow-lg"
                    : "bg-bg border-border text-text-muted hover:border-primary/50 hover:text-primary border"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time picker */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-text-muted text-sm font-medium">{c.time}</span>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hour Input */}
          <input
            type="number"
            min={1}
            max={12}
            className={timeBoxClass}
            value={data.checkInHour}
            placeholder="12"
            onChange={(e) => {
              let val = e.target.value;
              if (parseInt(val) > 12) val = "12";
              onChange("checkInHour", val);
            }}
            onBlur={() => {
              let val = data.checkInHour;
              if (!val || parseInt(val) < 1) val = "1";
              onChange("checkInHour", val.toString().padStart(2, "0"));
            }}
          />

          <span className="text-text mb-1 text-xl font-bold">:</span>

          {/* Minute Input */}
          <input
            type="number"
            min={0}
            max={59}
            className={timeBoxClass}
            value={data.checkInMinute}
            placeholder="00"
            onChange={(e) => {
              let val = e.target.value;
              if (parseInt(val) > 59) val = "59";
              onChange("checkInMinute", val);
            }}
            onBlur={() => {
              let val = data.checkInMinute;
              if (!val || val === "") val = "0";
              onChange("checkInMinute", val.toString().padStart(2, "0"));
            }}
          />

          {/* AM / PM */}
          <div className="border-primary flex flex-col overflow-hidden rounded-lg border-2">
            {(["AM", "PM"] as const).map((period) => (
              <button
                key={period}
                onClick={() => onChange("checkInPeriod", period)}
                className={`cursor-pointer px-3 py-1 text-sm font-bold transition-colors ${
                  data.checkInPeriod === period
                    ? "bg-primary text-white"
                    : "text-text-muted hover:bg-primary/10"
                }`}
              >
                {period === "AM" ? c.am : c.pm}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" size="sm">
          {o.back}
        </Button>
        <Button onClick={onNext} variant="primary" size="lg">
          {o.next}
        </Button>
      </div>
    </>
  );
};
