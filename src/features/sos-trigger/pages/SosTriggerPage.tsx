import { useNavigate } from "react-router-dom";
import {
  EmergencyHeader,
  AlertTitle,
  MainSOSButton,
  QuickEmergencyActions,
  CancelEmergency,
} from "../components";
import { SettingToggle } from "../../../shared/components";
import { safetyNetStore } from "@/features/grace-period/store/safetyNetStore";

const SosTriggerPage = () => {
  const navigate = useNavigate();

  const handleSOS = () => {
    safetyNetStore.triggerSOS();
    navigate("/emergency-alert", { replace: true });
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <EmergencyHeader />

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 pb-12">
        <AlertTitle />
        <MainSOSButton onActivate={handleSOS} />
        <QuickEmergencyActions />
        <CancelEmergency onCancel={handleCancel} />
      </main>

      <SettingToggle />
    </div>
  );
};

export default SosTriggerPage;
