import { STEPS } from "../data";

export const HowWork = () => {
  return (
    <section className="bg-bg relative overflow-hidden">
      {/* Striped bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      {/* Blue-tinted border wrapper */}
      <div className="container mx-auto px-6">
        <div className="border-primary/20 bg-primary/5 rounded-3xl border px-8 py-14">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-secondary mb-4 text-4xl font-bold">
              How AfterMe Works
            </h2>
            <p className="text-text-muted text-lg">
              Simple setup for powerful protection. It takes less than 5 minutes
              to secure your digital legacy.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="border-border bg-surface flex flex-col gap-5 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Icon bubble */}
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  {step.icon}
                </div>
                <h3 className="text-secondary text-base font-bold">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
