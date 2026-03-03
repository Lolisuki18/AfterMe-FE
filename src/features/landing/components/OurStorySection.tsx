import { useLanguage } from "@/app/useLanguage";

export const OurStorySection = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;

  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
          {/* Image */}
          <div className="flex-1">
            <div className="bg-surface-alt aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt={l.storyImgAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg flex-1">
            <span className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1 text-xs font-bold tracking-wider uppercase">
              {l.storyTag}
            </span>
            <h2 className="text-text mt-4 text-3xl font-extrabold sm:text-4xl">
              {l.storyTitle}
            </h2>
            <p className="text-text-muted mt-5 text-sm leading-relaxed">
              {l.storyPara1}
            </p>
            <p className="text-text-muted mt-4 text-sm leading-relaxed">
              {l.storyPara2}
            </p>

            {/* Timeline dots */}
            <div className="mt-8 space-y-4">
              {[l.storyMilestone1, l.storyMilestone2, l.storyMilestone3].map(
                (m) => (
                  <div key={m} className="flex items-start gap-3">
                    <div className="bg-primary mt-1 h-2.5 w-2.5 shrink-0 rounded-full" />
                    <p className="text-text-muted text-sm">{m}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
