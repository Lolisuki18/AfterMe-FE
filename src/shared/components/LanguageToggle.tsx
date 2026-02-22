import { useLanguage } from "@/app/useLanguage";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const isVi = language === "vi";

  return (
    <div
      className="border-border bg-surface-alt flex items-center gap-1 rounded-full border p-0.5"
      role="group"
      aria-label="Chọn ngôn ngữ"
    >
      <button
        onClick={() => setLanguage("vi")}
        aria-pressed={isVi}
        title="Tiếng Việt"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
          isVi
            ? "bg-primary text-white shadow-sm"
            : "text-text-muted hover:text-text"
        }`}
      >
        <span aria-hidden="true">🇻🇳</span>
        <span>VI</span>
      </button>

      <button
        onClick={() => setLanguage("en")}
        aria-pressed={!isVi}
        title="English"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
          !isVi
            ? "bg-primary text-white shadow-sm"
            : "text-text-muted hover:text-text"
        }`}
      >
        <span aria-hidden="true">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
