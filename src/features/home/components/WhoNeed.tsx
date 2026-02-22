import { getAudiences } from "../data";
import { useLanguage } from "@/app/useLanguage";

export const WhoNeed = () => {
  const { t } = useLanguage();
  const wn = t.whoNeed;
  const AUDIENCES = getAudiences(wn.audiences);

  return (
    <section
      id="who-needs"
      className="bg-navy relative overflow-hidden py-12 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(255,255,255,0.04) 48px, rgba(255,255,255,0.04) 96px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {wn.title}
          </h2>
          <p className="text-base text-white/60 lg:text-lg">{wn.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                {a.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{a.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
