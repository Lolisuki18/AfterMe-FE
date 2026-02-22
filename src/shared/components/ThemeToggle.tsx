import { useTheme } from "@/app/ThemeContext";
import { Button } from "./Button";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      className="fixed right-4 bottom-4 shadow-lg"
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </Button>
  );
};
