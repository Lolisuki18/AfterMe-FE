import { RISKS } from "../data";

export const TheRisk = () => {
  return (
    <section className="bg-bg relative overflow-hidden py-12 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-16">
          <h2 className="text-secondary mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            The Risks We Often Ignore
          </h2>
          <p className="text-text-muted text-base lg:text-lg">
            Modern life is digital and often solitary. We've built a solution
            for the vulnerabilities that most apps overlook.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RISKS.map((risk) => (
            <div
              key={risk.title}
              className="border-border bg-surface flex flex-col gap-4 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-text-muted">{risk.icon}</div>
              <h3 className="text-secondary text-base font-bold">
                {risk.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
