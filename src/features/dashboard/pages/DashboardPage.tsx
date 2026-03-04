import { useState } from "react";
import { dashboardStore } from "../store/dashboardStore";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { CheckInCard } from "../components/CheckInCard";
import { RoutineTimeline } from "../components/RoutineTimeline";
import { useDocumentTitle } from "@/hooks";

const DashboardPage = () => {
  useDocumentTitle("Dashboard");
  const data = dashboardStore.getData();
  const [routines, setRoutines] = useState(data.routines);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 px-2 sm:px-0">
      <WelcomeHeader userName={data.user.name} />
      <CheckInCard />
      <RoutineTimeline routines={routines} onRoutinesChange={setRoutines} />
    </div>
  );
};

export default DashboardPage;
