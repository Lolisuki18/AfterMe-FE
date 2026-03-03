import { useLanguage } from "@/app/useLanguage";
import { BellIcon, PeopleIcon, ShieldCheckIcon } from "@/shared/icon";

export const RegisterLeftContent = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Headline */}
      <h1 className="text-text text-4xl leading-tight font-black break-words lg:text-5xl">
        {t.auth.registerWelcome}
        <br />
        <span className="text-primary">{t.auth.registerBrand}</span>
      </h1>

      <p className="text-text-muted mt-4 max-w-md text-sm leading-relaxed break-words whitespace-normal lg:text-base">
        {t.auth.registerSubtext}
      </p>

      {/* Features */}
      <div className="mt-8 space-y-5">
        {/* Daily Reminders */}
        <div className="flex items-start gap-3">
          <div className="bg-surface-alt flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <BellIcon className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="text-text text-sm font-semibold">
              {t.auth.registerFeature1Title}
            </h3>
            <p className="text-text-muted text-sm">
              {t.auth.registerFeature1Desc}
            </p>
          </div>
        </div>

        {/* Community Watch */}
        <div className="flex items-start gap-3">
          <div className="bg-surface-alt flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <PeopleIcon className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="text-text text-sm font-semibold">
              {t.auth.registerFeature2Title}
            </h3>
            <p className="text-text-muted text-sm">
              {t.auth.registerFeature2Desc}
            </p>
          </div>
        </div>

        {/* Privacy First – highlighted badge */}
        <div className="bg-primary/10 inline-flex items-center gap-3 rounded-xl px-4 py-3">
          <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <ShieldCheckIcon className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="text-text text-sm font-semibold">
              {t.auth.registerFeature3Title}
            </h3>
            <p className="text-text-muted text-sm">
              {t.auth.registerFeature3Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
