import { PrivacyHeader } from "../components/PrivacyHeader";
import { ProtectionOverview } from "../components/ProtectionOverview";
import { DataControlsSection } from "../components/DataControlsSection";
import { DataTransparency } from "../components/DataTransparency";
import { DangerZone } from "../components/DangerZone";

const PrivacyCenterPage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-12 sm:px-6">
      <PrivacyHeader />
      <ProtectionOverview />
      <DataControlsSection />
      <DataTransparency />
      <DangerZone />
    </div>
  );
};

export default PrivacyCenterPage;
