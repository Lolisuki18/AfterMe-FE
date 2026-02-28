import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { HeartIcon } from "../icon";

export const WellbeingHero = () => {
  const { t } = useLanguage();
  const w = t.wellbeing;

  return (
    <section className="from-primary/10 via-primary/5 to-bg relative overflow-hidden rounded-2xl bg-linear-to-br p-6 sm:p-10">
      <div className="relative z-10 max-w-lg">
        {/* Heart icon */}
        <div className="bg-primary/15 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
          <HeartIcon />
        </div>

        <h1 className="text-text text-2xl font-bold sm:text-3xl">
          {w.heroTitle}
        </h1>
        <p className="text-text-muted mt-3 text-sm leading-relaxed">
          {w.heroSubtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button rounded>{w.heroCta1}</Button>
          <Button rounded variant="outline">
            {w.heroCta2}
          </Button>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="bg-primary/5 absolute -top-10 -right-10 h-48 w-48 rounded-full" />
      <div className="bg-primary/5 absolute right-20 -bottom-8 h-32 w-32 rounded-full" />
    </section>
  );
};
