import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { WarningCard } from "../components";
import { safetyNetStore } from "../store/safetyNetStore";

const GracePeriodPage = () => {
  const { t } = useLanguage();
  const g = t.gracePeriod;
  const navigate = useNavigate();

  useEffect(() => {
    const { status } = safetyNetStore.getData();

    if (status === "alert_active") {
      // Already escalated — skip grace period
      navigate("/emergency-alert", { replace: true });
    } else if (status === "safe") {
      // Simulate a missed check-in: start the grace period countdown
      safetyNetStore.triggerGracePeriod();
    }
    // If "grace_period" → stay here, CountdownTimer reads remaining seconds from store
  }, [navigate]);

  return (
    <div className="bg-bg flex min-h-screen flex-col items-center justify-center px-4">
      <WarningCard />

      {/* Decorative bottom pill */}
      <div className="bg-border mt-8 h-1.5 w-16 rounded-full" />

      {/* Footer note */}
      <p className="text-text-muted mt-4 text-center text-xs">{g.noAlerts}</p>
    </div>
  );
};

export default GracePeriodPage;
