import { useTheme } from "@/app/useTheme";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "./Button";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      className="fixed right-4 bottom-4 shadow-lg"
    >
      {isDark ? t.themeToggle.light : t.themeToggle.dark}
    </Button>
  );
};
