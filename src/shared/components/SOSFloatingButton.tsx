import { useNavigate } from "react-router-dom";
import { safetyNetStore } from "@/features/grace-period/store/safetyNetStore";

/**
 * Persistent floating SOS button — fixed bottom-right, visible on every
 * dashboard page. Tapping immediately triggers the SOS flow and navigates
 * to /emergency-alert (skipping grace period, matching the SosTriggerPage
 * "hold to activate" behaviour but as a quick-access shortcut).
 *
 * On /sos-trigger itself the button is hidden to avoid duplication.
 */
export const SOSFloatingButton = () => {
  const navigate = useNavigate();

  const handleSOS = () => {
    safetyNetStore.triggerGracePeriod();
    navigate("/grace-period");
  };

  return (
    <div className="pointer-events-none fixed right-5 bottom-24 z-50 sm:right-8 sm:bottom-28">
      {/* Pulse rings */}
      <span className="absolute inset-0 animate-ping rounded-full bg-red-500/25 [animation-duration:2s]" />
      <span className="absolute inset-0 scale-110 animate-ping rounded-full bg-red-500/15 [animation-duration:2.8s]" />

      <button
        type="button"
        onClick={handleSOS}
        aria-label="SOS Emergency"
        className="pointer-events-auto relative flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-600/40 transition-transform duration-150 hover:scale-110 focus:ring-4 focus:ring-red-400/50 focus:outline-none active:scale-95"
      >
        <span className="text-[11px] font-black tracking-widest text-white">
          SOS
        </span>
      </button>
    </div>
  );
};
