import {
  ConsentHeader,
  PrivacyPromiseCard,
  ActionButtons,
} from "../components";
import { SettingToggle } from "../../../shared/components";

const FamilyLinkPage = () => (
  <div className="bg-bg flex min-h-screen items-center justify-center px-4 py-10">
    <div className="w-full max-w-lg space-y-6">
      <ConsentHeader />
      <PrivacyPromiseCard />
      <ActionButtons />
    </div>

    {/* Language / theme toggle */}
    <SettingToggle />
  </div>
);

export default FamilyLinkPage;
