import { useLanguage } from "@/app/useLanguage";

export const MissionSection = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;

  const stats = [
    { value: l.missionStatUsers, label: l.missionStatUsersLabel },
    { value: l.missionStatCountries, label: l.missionStatCountriesLabel },
    { value: l.missionStatUptime, label: l.missionStatUptimeLabel },
  ];

  return (
    <section className="bg-bg relative overflow-hidden py-20 sm:py-28">
      {/* Background decoration */}
      <div className="bg-primary/5 pointer-events-none absolute inset-0" />
      <div className="bg-primary/10 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left content */}
          <div className="max-w-xl flex-1 text-center lg:text-left">
            <span className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1 text-xs font-bold tracking-wider uppercase">
              {l.missionTag}
            </span>
            <h1 className="text-text mt-4 text-4xl leading-tight font-extrabold sm:text-5xl">
              {l.missionTitle}
            </h1>
            <p className="text-text-muted mt-5 text-base leading-relaxed">
              {l.missionDesc}
            </p>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-primary text-3xl font-extrabold">
                    {s.value}
                  </p>
                  <p className="text-text-muted mt-1 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1">
            <div className="relative">
              <div className="bg-surface-alt aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
                  alt={l.missionImgAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="bg-surface ring-border absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 shadow-xl ring-1">
                <p className="text-text-muted text-xs font-medium">
                  {l.missionBadgeLabel}
                </p>
                <p className="text-primary mt-0.5 text-xl font-extrabold">
                  {l.missionBadgeValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
