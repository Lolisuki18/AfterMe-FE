import { getSteps } from "../data";
import { useLanguage } from "@/app/useLanguage";

export const HowWork = () => {
  const { t } = useLanguage();
  const hw = t.howWork;
  const STEPS = getSteps(hw.steps);

  return (
    <section
      id="how-it-works"
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

      {/* Blue-tinted border wrapper */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="border-primary/20 bg-primary/5 rounded-3xl border px-4 py-8 sm:px-8 sm:py-14">
          {/* Heading */}
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-14">
            <h2 className="text-secondary mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
              {hw.title}
            </h2>
            <p className="text-text-muted text-base lg:text-lg">
              {hw.subtitle}
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
