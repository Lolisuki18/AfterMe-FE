import { useLanguage } from "@/app/useLanguage";
import { useTheme } from "@/app/useTheme";
import { SunIcon, MoonIcon } from "@/shared/icon";
import { SettingsIcon } from "@/features/dashboard/icon";

const SettingsPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const s = t.settings;

  return (
    <div className="mx-auto w-full max-w-2xl px-2 sm:px-0">
      {/* Page heading */}
      <div className="mb-6 flex items-center gap-3">
        <SettingsIcon className="text-primary h-6 w-6" />
        <h1 className="text-text text-xl font-bold sm:text-2xl">{s.title}</h1>
      </div>

      {/* Settings card */}
      <div className="bg-surface divide-border divide-y rounded-2xl">
        {/* ── Theme row ───────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            {isDark ? (
              <MoonIcon className="text-primary h-5 w-5 shrink-0" />
            ) : (
              <SunIcon className="text-primary h-5 w-5 shrink-0" />
            )}
            <span className="text-text text-sm font-medium">
              {isDark ? s.darkMode : s.lightMode}
            </span>
          </div>

          {/* Toggle switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`focus-visible:ring-primary relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus-visible:ring-2 ${
              isDark ? "bg-primary" : "bg-border"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                isDark ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* ── Language row ────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="text-primary shrink-0 text-lg" aria-hidden="true">
              🌐
            </span>
            <span className="text-text text-sm font-medium">{s.language}</span>
          </div>

          {/* Language pill toggle */}
          <div
            className="border-border bg-surface-alt flex items-center gap-0.5 rounded-full border p-0.5"
            role="group"
            aria-label="Select language"
          >
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              aria-pressed={language === "vi"}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                language === "vi"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <span aria-hidden="true">🇻🇳</span>
              <span>VI</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                language === "en"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <span aria-hidden="true">🇬🇧</span>
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
