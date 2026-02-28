import { WellbeingHero } from "../components/WellbeingHero";
import { EmergencySupport } from "../components/EmergencySupport";
import { SelfCareTools } from "../components/SelfCareTools";
import { SoloLivingTips } from "../components/SoloLivingTips";

const WellbeingPage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 pb-12 sm:px-6">
      <WellbeingHero />
      <EmergencySupport />
      <SelfCareTools />
      <SoloLivingTips />
    </div>
  );
};

export default WellbeingPage;
