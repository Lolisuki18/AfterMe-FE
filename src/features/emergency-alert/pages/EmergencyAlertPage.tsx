import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertBanner,
  StatusGrid,
  ActionCenter,
  SecureVaultUnlock,
  SecurityFooter,
} from "../components";
import { safetyNetStore } from "@/features/grace-period/store/safetyNetStore";

const EmergencyAlertPage = () => {
  const navigate = useNavigate();

  // Guard: only accessible when an alert is truly active
  useEffect(() => {
    const { status } = safetyNetStore.getData();
    if (status !== "alert_active") {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

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
