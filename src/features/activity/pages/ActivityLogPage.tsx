import { useState, useCallback } from "react";
import { useLanguage } from "@/app/useLanguage";
import { activityStore } from "../store/activityStore";
import {
  ConsistencyCalendar,
  TodayRoutineList,
  InsightsSidebar,
} from "../components";

const ActivityLogPage = () => {
  const { t } = useLanguage();
  const a = t.activity;
  const [data, setData] = useState(() => activityStore.getData());

  const handleToggle = useCallback((id: string) => {
    activityStore.toggleRoutineStatus(id);
    setData(activityStore.getData());
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-text text-2xl font-bold">{a.title}</h1>
        <p className="text-text-muted mt-1 max-w-xl text-sm leading-relaxed">
          {a.subtitle}
        </p>
      </div>

      {/* Main + sidebar */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left */}
        <div className="min-w-0 flex-1 space-y-6">
          <ConsistencyCalendar activeDays={data.calendarActiveDays} />
          <TodayRoutineList
            routines={data.todayRoutines}
            onToggle={handleToggle}
          />
        </div>

        {/* Right */}
        <aside className="w-full shrink-0 lg:w-72">
          <InsightsSidebar insights={data.insights} />
        </aside>
      </div>
    </div>
  );
};

export default ActivityLogPage;
