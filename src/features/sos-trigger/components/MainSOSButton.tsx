import { useLanguage } from "../../../app/useLanguage";

/**
 * Giant pulsating SOS button – the hero element.
 * Uses Tailwind animations + custom box-shadow for the alarm glow.
 */
const MainSOSButton = () => {
  const { t } = useLanguage();
  const s = t.sosTrigger;

  return (
    <div className="relative flex items-center justify-center py-6">
      {/* Outer pulse ring 3 (slowest, largest) */}
      <span className="absolute h-72 w-72 animate-ping rounded-full bg-red-600/10 [animation-duration:3s] sm:h-80 sm:w-80" />

      {/* Outer pulse ring 2 */}
      <span className="absolute h-60 w-60 animate-ping rounded-full bg-red-600/15 [animation-duration:2.2s] sm:h-68 sm:w-68" />

      {/* Outer pulse ring 1 (fastest, closest) */}
      <span className="absolute h-52 w-52 animate-ping rounded-full bg-red-600/20 [animation-duration:1.6s] sm:h-56 sm:w-56" />

      {/* Glow halo (static) */}
      <span className="absolute h-52 w-52 rounded-full bg-red-600/30 blur-2xl sm:h-56 sm:w-56" />

      {/* Main button */}
      <button
        type="button"
        className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full bg-linear-to-br from-red-500 via-red-600 to-red-700 shadow-[0_0_60px_rgba(239,68,68,0.5)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:h-52 sm:w-52"
      >
        <span className="text-4xl font-black tracking-wider text-white sm:text-5xl">
          {s.sosLabel}
        </span>
        <span className="mt-0.5 text-sm font-semibold tracking-wide text-white/80">
          {s.sosHold}
        </span>
        <span className="mt-2 text-xs text-white/60">{s.sosActivate}</span>
      </button>
    </div>
  );
};

export default MainSOSButton;
