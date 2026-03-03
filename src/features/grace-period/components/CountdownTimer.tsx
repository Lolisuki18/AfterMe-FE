interface CountdownTimerProps {
  hours: number;
  mins: number;
  secs: number;
  labels: { hours: string; mins: string; secs: string };
}

const pad = (n: number) => String(n).padStart(2, "0");

const TimeUnit = ({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`flex h-20 w-20 items-center justify-center rounded-2xl border text-3xl font-extrabold sm:h-24 sm:w-24 sm:text-4xl ${
        accent
          ? "border-primary/60 text-primary bg-primary/5"
          : "border-border bg-surface text-text"
      }`}
    >
      {value}
    </div>
    <span className="text-text-muted mt-2 text-[10px] font-bold tracking-widest uppercase">
      {label}
    </span>
  </div>
);

export const CountdownTimer = ({
  hours,
  mins,
  secs,
  labels,
}: CountdownTimerProps) => (
  <div className="flex items-center justify-center gap-3 sm:gap-5">
    <TimeUnit value={pad(hours)} label={labels.hours} />
    <TimeUnit value={pad(mins)} label={labels.mins} />
    <TimeUnit value={pad(secs)} label={labels.secs} accent />
  </div>
);
