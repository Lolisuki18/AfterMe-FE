import { useState, useCallback } from "react";
import { useLanguage } from "@/app/useLanguage";
import { RoutineSection } from "../components";
import { QuickAddModal } from "../components/QuickAddModal";
import { lifestyleStore, type RoutineTime } from "../store/lifestyleStore";

const LifestyleAssistantPage = () => {
  const { t } = useLanguage();
  const ls = t.lifestyle;
  const [data, setData] = useState(() => lifestyleStore.getData());
  const [quickAddSection, setQuickAddSection] = useState<RoutineTime | null>(
    null,
  );

  const handleToggle = useCallback((section: RoutineTime, id: string) => {
    lifestyleStore.toggleItem(section, id);
    setData(lifestyleStore.getData());
  }, []);

  const handleQuickAdd = useCallback(
    (section: RoutineTime, name: string, time: string) => {
      lifestyleStore.addItem(section, name, time);
      setData(lifestyleStore.getData());
    },
    [],
  );

  return (
    <div className="mx-auto w-full max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-text text-2xl font-bold">{ls.title}</h1>
        <p className="text-text-muted mt-1 max-w-xl text-sm leading-relaxed">
          {ls.subtitle}
        </p>
      </div>

      {/* Sections */}
      <RoutineSection
        section="sunup"
        items={data.sunup}
        onToggle={handleToggle}
        onQuickAdd={setQuickAddSection}
      />
      <RoutineSection
        section="midday"
        items={data.midday}
        onToggle={handleToggle}
        onQuickAdd={setQuickAddSection}
      />
      <RoutineSection
        section="sleeptime"
        items={data.sleeptime}
        onToggle={handleToggle}
        onQuickAdd={setQuickAddSection}
      />

      {/* QuickAdd Modal */}
      {quickAddSection && (
        <QuickAddModal
          open={!!quickAddSection}
          onClose={() => setQuickAddSection(null)}
          section={quickAddSection}
          onAdd={handleQuickAdd}
        />
      )}
    </div>
  );
};

export default LifestyleAssistantPage;
