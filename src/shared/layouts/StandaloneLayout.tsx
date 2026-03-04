import { Outlet, useLocation } from "react-router-dom";
import { PageTransition } from "@/shared/components/PageTransition";

export const StandaloneLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageTransition routeKey={pathname} variant="page">
      <Outlet />
    </PageTransition>
  );
};
