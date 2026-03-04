import { HeaderimgIcon, StarIcon } from "@/shared/icon";
import { useLanguage } from "@/app/useLanguage";
import { useAuthStore } from "@/features/auth/store/authStore";

export const Hero = () => {
  const { t } = useLanguage();
  const h = t.hero;
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const ctaHref = isAuthenticated ? "/dashboard" : "/onboarding";

  return (
    <section className="bg-bg relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="flex flex-col items-start pt-8 lg:pt-0">
          <span className="border-accent/30 bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium sm:text-sm">
            <span className="bg-accent h-2 w-2 rounded-full" />
            {h.badge}
          </span>

          <h1 className="text-text mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {h.heading1}
            <br />
            {h.heading2}
            <br />
            <span className="text-primary">{h.heading3}</span>
            <br />
            <span className="text-primary">{h.heading4}</span>
          </h1>

          <p className="text-text-muted mb-10 max-w-md text-base leading-relaxed sm:text-lg">
            {h.description}
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={ctaHref}
              className="bg-primary hover:bg-primary-hover inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors sm:w-auto"
            >
              {isAuthenticated ? t.header.dashboard : h.ctaPrimary}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#how-it-works"
              className="border-border bg-surface text-text hover:bg-surface-alt inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-base font-semibold transition-colors sm:w-auto"
            >
              <StarIcon />
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((letter, i) => (
                <div
                  key={letter}
                  className="border-bg flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{
                    backgroundColor: [
                      "#4fb6ac",
                      "#ef7a73",
                      "#1e3a5f",
                      "#8fb6c6",
                    ][i],
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs sm:text-sm">
              {h.socialProof}
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-full">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute -inset-6 rounded-3xl blur-2xl"
            />
            <div className="relative">
              <HeaderimgIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
