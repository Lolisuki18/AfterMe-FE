import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { ThemeToggle } from "../components/ThemeToggle";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="bg-bg flex-1">
        <Outlet />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};
