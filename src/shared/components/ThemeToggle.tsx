import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { useTheme } from "@/app/useTheme";
import { GearIcon, MoonIcon, SunIcon } from "../icon";
import LanguageIcon from "@mui/icons-material/Language";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div ref={containerRef} className="fixed right-6 bottom-6 z-50 lg:bottom-8">
      {/* Dropdown Panel */}
      <div
        className={`border-border bg-surface absolute right-0 bottom-16 w-56 origin-bottom-left rounded-2xl border shadow-2xl transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        } `}
        role="menu"
        aria-label="Settings"
      >
        {/* Header */}
        <div className="border-border border-b px-4 pt-3 pb-2">
          <p className="text-text-muted text-xs font-semibold tracking-wider uppercase">
            {t.settings.title}
          </p>
        </div>

        {/* Theme Row */}
        <div className="border-border flex items-center justify-between gap-3 border-b px-4 py-3">
          <div className="flex items-center gap-2">
            {isDark ? (
              <MoonIcon className="text-primary h-4 w-4 flex-shrink-0" />
            ) : (
              <SunIcon className="text-primary h-4 w-4 flex-shrink-0" />
            )}
            <span className="text-text text-sm font-medium">
              {isDark ? t.settings.darkMode : t.settings.lightMode}
            </span>
          </div>

          {/* Toggle switch */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`focus-visible:ring-primary relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus-visible:ring-2 ${isDark ? "bg-primary" : "bg-border"} `}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${isDark ? "translate-x-5" : "translate-x-0"} `}
            />
          </button>
        </div>

        {/* Language Row */}
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 text-base" aria-hidden="true">
              <LanguageIcon className="text-blue-400" />
            </span>
            <span className="text-text text-sm font-medium">
              {t.settings.language}
            </span>
          </div>

          {/* Language pill toggle */}
          <div
            className="border-border bg-surface-alt flex items-center gap-0.5 rounded-full border p-0.5"
            role="group"
            aria-label="Select language"
          >
            <button
              onClick={() => setLanguage("vi")}
              aria-pressed={language === "vi"}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold transition-all duration-200 ${
                language === "vi"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              <span aria-hidden="true">🇻🇳</span>
              <span>VI</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold transition-all duration-200 ${
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

      {/* Gear Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open settings"
        aria-expanded={open}
        title="Settings"
        className={`border-border bg-surface flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-14 md:w-14 ${open ? "bg-primary border-primary scale-110 text-white shadow-xl" : "text-text"} `}
      >
        <GearIcon
          className={`text-text h-5 w-5 transition-transform duration-500 md:h-6 md:w-6 ${open ? "rotate-90" : "rotate-0"}`}
        />
      </button>
    </div>
  );
};
