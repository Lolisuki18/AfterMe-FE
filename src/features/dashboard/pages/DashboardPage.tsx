import { dashboardStore } from "../store/dashboardStore";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { CheckInCard } from "../components/CheckInCard";
import { RoutineTimeline } from "../components/RoutineTimeline";
import { useDocumentTitle } from "@/hooks";

const DashboardPage = () => {
  useDocumentTitle("Dashboard");
  const { user, routines } = dashboardStore.getData();

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 px-2 sm:px-0">
      <WelcomeHeader userName={user.name} />
      <CheckInCard />
      <RoutineTimeline routines={routines} />
    </div>
  );
};

export default DashboardPage;
