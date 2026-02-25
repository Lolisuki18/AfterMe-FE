import { Outlet } from "react-router-dom";
import { Footer, Header, SettingToggle } from "../components";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="bg-bg flex-1">
        <Outlet />
      </main>
      <Footer />
      <SettingToggle />
    </div>
  );
};
