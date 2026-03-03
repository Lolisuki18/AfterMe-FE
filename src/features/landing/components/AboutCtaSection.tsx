import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";

export const AboutCtaSection = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-xl sm:px-16">
          {/* Decorative blobs */}
          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
            {l.ctaTitle}
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm text-white/80">
            {l.ctaDesc}
          </p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="ghost"
              rounded
              size="lg"
              className="text-primary bg-bg hover:bg-surface-alt font-bold"
            >
              <a href="/onboarding">{l.ctaButton}</a>
            </Button>
            <Button
              variant="outline"
              rounded
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="#how">{l.ctaSecondary}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
