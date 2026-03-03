import {
  AlertBanner,
  StatusGrid,
  ActionCenter,
  SecureVaultUnlock,
  SecurityFooter,
} from "../components";

const EmergencyAlertPage = () => {
  return (
    <div className="bg-bg min-h-screen px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl space-y-6">
        <AlertBanner />
        <StatusGrid />
        <ActionCenter />
        <SecureVaultUnlock />
        <SecurityFooter />
      </div>
    </div>
  );
};

export default EmergencyAlertPage;
