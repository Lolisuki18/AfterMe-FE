import { useLanguage } from "@/app/useLanguage";
import { ClockBasicIcon, MapPinIcon } from "@/shared/icon";

export const StatusGrid = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {/* Last Check-In Card */}
      <div className="bg-surface rounded-2xl p-5 sm:p-6">
        <div className="text-text-muted mb-3 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <ClockBasicIcon className="text-primary h-4 w-4" />
          {a.lastCheckIn}
        </div>
        <p className="text-text text-3xl font-extrabold">10:42 AM</p>
        <p className="text-text-muted text-sm">{a.today}</p>

        <hr className="border-border my-4" />

        <div className="text-text-muted flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <MapPinIcon className="text-primary h-4 w-4" />
          {a.currentStatus}
        </div>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          {a.unresponsive}
        </span>
      </div>

      {/* Location / Map Card */}
      <div className="bg-surface relative overflow-hidden rounded-2xl">
        {/* Simulated map background */}
        <div className="relative h-full min-h-[200px] bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-122.4194,37.7749,12,0/400x300?access_token=placeholder')] bg-cover bg-center">
          {/* Fallback gradient when image doesn't load */}
          <div className="absolute inset-0 bg-linear-to-br from-teal-900/70 to-gray-900/70" />

          {/* City label overlay */}
          <div className="relative flex h-full min-h-[200px] items-center justify-center">
            <span className="text-text-muted text-lg font-bold">
              San Francisco
            </span>
          </div>

          {/* Location info card at bottom */}
          <div className="bg-bg/90 absolute right-3 bottom-3 left-3 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              <div>
                <p className="text-text-muted text-[10px] font-bold tracking-wider uppercase">
                  {a.lastKnownLocation}
                </p>
                <p className="text-text mt-0.5 text-sm font-semibold">
                  {a.address}
                </p>
                <p className="text-text-muted text-xs">{a.locationAgo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
