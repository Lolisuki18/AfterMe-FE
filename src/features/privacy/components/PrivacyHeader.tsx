import { useLanguage } from "@/app/useLanguage";
import { ShieldCheckIcon } from "@/shared/icon";

export const PrivacyHeader = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <section className="py-8 text-center sm:py-12">
      {/* Shield icon */}
      <div className="bg-primary/10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
        <ShieldCheckIcon className="text-primary h-8 w-8" />
      </div>
      <h1 className="text-text text-2xl font-bold sm:text-3xl">
        {p.heroTitle}
      </h1>
      <p className="text-text-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed">
        {p.heroSubtitle}
      </p>
    </section>
  );
};
