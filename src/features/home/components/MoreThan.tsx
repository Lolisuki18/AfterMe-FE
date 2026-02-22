import { getFeatures } from "../data/MoreThanData";
import { useLanguage } from "@/app/useLanguage";

export const MoreThan = () => {
  const { t } = useLanguage();
  const mt = t.moreThan;
  const FEATURES = getFeatures(mt.features);

  return (
    <section
      id="features"
      className="bg-bg relative overflow-hidden py-12 lg:py-24"
    >
      {/* Striped bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 max-w-lg lg:mb-14">
          <span className="text-primary mb-3 inline-block text-sm font-semibold tracking-widest uppercase">
            {mt.badge}
          </span>
          <h2 className="text-secondary mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            {mt.title}
          </h2>
          <p className="text-text-muted text-base lg:text-lg">{mt.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="border-border bg-surface flex flex-col gap-4 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.iconBg}`}
              >
                {f.icon}
              </div>
              <h3 className="text-secondary text-base font-bold">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
