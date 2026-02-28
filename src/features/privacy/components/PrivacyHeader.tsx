import { useLanguage } from "@/app/useLanguage";

export const PrivacyHeader = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <section className="py-8 text-center sm:py-12">
      {/* Shield icon */}
      <div className="bg-primary/10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
        <svg
          className="text-primary h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
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
