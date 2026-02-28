import {
  EmergencyHeader,
  AlertTitle,
  MainSOSButton,
  QuickEmergencyActions,
  CancelEmergency,
} from "../components";
import { SettingToggle } from "../../../shared/components";

const SosTriggerPage = () => (
  <div className="flex min-h-screen flex-col bg-gray-950">
    <EmergencyHeader />

    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 pb-12">
      <AlertTitle />
      <MainSOSButton />
      <QuickEmergencyActions />
      <CancelEmergency />
    </main>

    <SettingToggle />
  </div>
);

export default SosTriggerPage;
