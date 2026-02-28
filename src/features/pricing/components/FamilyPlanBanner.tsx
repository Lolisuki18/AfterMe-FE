import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { FamilyGroupIcon } from "@/shared/icon";

export const FamilyPlanBanner = () => {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section className="bg-primary overflow-hidden rounded-2xl text-white">
      <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
          <FamilyGroupIcon />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-bold">{p.familyTitle}</h3>
          <p className="mt-1 text-sm text-white/80">{p.familyDesc}</p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold">{p.familyPrice}</span>
            <span className="text-sm text-white/70">{p.familyPeriod}</span>
          </div>
          <Button rounded className="text-primary bg-white hover:bg-white/90">
            {p.familyCta}
          </Button>
        </div>
      </div>
    </section>
  );
};
