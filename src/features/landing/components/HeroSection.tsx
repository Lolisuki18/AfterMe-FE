import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";

export const HeroSection = () => {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <section className="container mx-auto px-4 py-12 sm:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left text */}
        <div className="max-w-xl flex-1">
          <h1 className="text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl">
            {l.heroLine1}
            <br />
            {l.heroLine2}{" "}
            <span className="text-primary">{l.heroBeingAlone}</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-500">
            {l.heroDesc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button rounded size="lg">
              <a href="/onboarding">{l.heroCta}</a>
            </Button>
            <Button
              variant="outline"
              rounded
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <a href="#how">{l.heroCtaSecondary}</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-6 flex items-center gap-2">
            {/* Stacked avatar circles */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gray-300"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">{l.heroSocialProof}</span>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80"
              alt={l.heroImgAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
