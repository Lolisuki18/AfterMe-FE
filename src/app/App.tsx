import { SettingToggle } from "@/shared/components/SettingToggle";
import { AppProviders } from "./providers";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
      <SettingToggle />
    </AppProviders>
  );
};
