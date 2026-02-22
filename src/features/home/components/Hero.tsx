import { HeaderimgIcon, StarIcon } from "@/shared/icon";

export const Hero = () => {
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

      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start">
          <span className="border-accent/30 bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
            <span className="bg-accent h-2 w-2 rounded-full" />
            Gentle reminders for a meaningful life
          </span>

          {/* Headline */}
          <h1 className="text-text mb-6 text-5xl leading-tight font-extrabold tracking-tight lg:text-6xl">
            Reminding you
            <br />
            of what matters
            <br />
            <span className="text-primary">in the most</span>
            <br />
            <span className="text-primary">human way.</span>
          </h1>
          <p className="text-text-muted mb-10 max-w-md text-lg leading-relaxed">
            AfterMe helps you remember and maintain the habits that matter in
            life&nbsp;— without pressure, without feeling mechanical.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/login"
              className="bg-primary hover:bg-primary-hover inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors"
            >
              Start your journey
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#how-it-works"
              className="border-border bg-surface text-text hover:bg-surface-alt inline-flex items-center gap-2 rounded-xl border px-7 py-3.5 text-base font-semibold transition-colors"
            >
              <StarIcon />
              See How It Works
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((letter, i) => (
                <div
                  key={letter}
                  className="border-bg flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold text-white"
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
            <p className="text-text-muted text-sm">
              Trusted by users worldwide
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
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
