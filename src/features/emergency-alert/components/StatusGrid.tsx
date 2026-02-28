import { useLanguage } from "@/app/useLanguage";
import { ClockIcon, MapPinIcon } from "../icon";

export const StatusGrid = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {/* Last Check-In Card */}
      <div className="rounded-2xl bg-gray-800/70 p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
          <ClockIcon className="text-primary h-4 w-4" />
          {a.lastCheckIn}
        </div>
        <p className="text-3xl font-extrabold text-white">10:42 AM</p>
        <p className="text-sm text-gray-400">{a.today}</p>

        <hr className="my-4 border-gray-700" />

        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
          <MapPinIcon className="text-primary h-4 w-4" />
          {a.currentStatus}
        </div>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          {a.unresponsive}
        </span>
      </div>

      {/* Location / Map Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-800/70">
        {/* Simulated map background */}
        <div className="relative h-full min-h-[200px] bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-122.4194,37.7749,12,0/400x300?access_token=placeholder')] bg-cover bg-center">
          {/* Fallback gradient when image doesn't load */}
          <div className="absolute inset-0 bg-linear-to-br from-teal-900/70 to-gray-900/70" />

          {/* City label overlay */}
          <div className="relative flex h-full min-h-[200px] items-center justify-center">
            <span className="text-lg font-bold text-white/60">
              San Francisco
            </span>
          </div>

          {/* Location info card at bottom */}
          <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-gray-900/90 p-3 backdrop-blur-sm">
            <div className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              <div>
                <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  {a.lastKnownLocation}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {a.address}
                </p>
                <p className="text-xs text-gray-500">{a.locationAgo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
