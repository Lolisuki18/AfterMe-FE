import { useLanguage } from "../../../app/useLanguage";

const AlertTitle = () => {
  const { t } = useLanguage();
  const s = t.sosTrigger;

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 rounded-full border border-red-800/60 bg-red-950/70 px-3 py-1 text-xs font-semibold tracking-wider text-red-400">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
        {s.badgeArmed}
      </span>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
        {s.title}
      </h1>
      <p className="max-w-md text-sm text-gray-400">{s.subtitle}</p>
    </div>
  );
};

export default AlertTitle;
