import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { subscriptionStore } from "../store/subscriptionStore";

interface SubscriptionManagementProps {
  planName: string;
  planPrice: string;
  nextBillingDate: string;
  onPlanCancelled?: () => void;
}

export const SubscriptionManagement = ({
  planName,
  planPrice,
  nextBillingDate,
  onPlanCancelled,
}: SubscriptionManagementProps) => {
  const { t } = useLanguage();
  const s = t.subscription;
  const navigate = useNavigate();
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const handleManagePlan = () => {
    navigate("/dashboard/subscription/plan");
  };

  const handleCancelSubscription = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    subscriptionStore.cancelPlan();
    setShowCancelConfirm(false);
    onPlanCancelled?.();
  };

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-text text-base font-bold">{s.currentPlan}</h2>
        <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-green-600 uppercase">
          {s.activeBadge}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-bold">
              {planName}
            </span>
            <span className="text-text text-lg font-bold">{planPrice}</span>
          </div>
          <p className="text-text-muted mt-1 max-w-sm text-xs leading-relaxed">
            {s.proPlanDesc}
          </p>
          <p className="text-text-muted mt-2 text-xs">
            {s.nextBilling}:{" "}
            <span className="text-text font-semibold">{nextBillingDate}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            rounded
            onClick={handleManagePlan}
          >
            {s.managePlan}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            rounded
            className="text-red-500"
            onClick={handleCancelSubscription}
          >
            {s.cancelSubscription}
          </Button>
        </div>
      </div>

      {/* Cancel confirmation modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-surface w-full max-w-sm rounded-2xl p-6 shadow-xl">
            <h3 className="text-text text-lg font-bold">
              {s.cancelConfirmTitle}
            </h3>
            <p className="text-text-muted mt-2 text-sm leading-relaxed">
              {s.cancelConfirmDesc}
            </p>
            <div className="mt-5 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                size="sm"
                rounded
                onClick={() => setShowCancelConfirm(false)}
              >
                {s.keepPlan}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                rounded
                className="text-red-500"
                onClick={confirmCancel}
              >
                {s.confirmCancel}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
