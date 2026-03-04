import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../components";
import { PageTransition } from "../components/PageTransition";

export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="bg-bg flex-1">
        <PageTransition routeKey={pathname} variant="page">
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};
