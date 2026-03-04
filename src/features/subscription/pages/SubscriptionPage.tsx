import { useLocation } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { subscriptionStore } from "../store/subscriptionStore";
import {
  PlanSummaryCard,
  PaymentMethodForm,
  SubscriptionManagement,
  BillingHistoryTable,
} from "../components";

interface LocationState {
  planName?: string;
  planPrice?: string;
}

const SubscriptionPage = () => {
  const { t } = useLanguage();
  const s = t.subscription;
  const data = subscriptionStore.getData();
  const location = useLocation();
  const state = (location.state as LocationState) || {};

  const planName = state.planName || data.planName;
  const planPrice = state.planPrice
    ? `${state.planPrice}/month`
    : data.planPrice;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-text text-2xl font-bold">{s.title}</h1>
        <p className="text-text-muted mt-1 max-w-xl text-sm leading-relaxed">
          {s.subtitle}
        </p>
      </div>

      {/* Main 2-column layout */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Left: Plan summary */}
        <div className="lg:col-span-2">
          <PlanSummaryCard planName={planName} planPrice={planPrice} />
        </div>

        {/* Right: Payment + Management */}
        <div className="space-y-6 lg:col-span-3">
          <PaymentMethodForm />
          <SubscriptionManagement
            planName={planName}
            planPrice={planPrice}
            nextBillingDate={data.nextBillingDate}
          />
        </div>
      </div>

      {/* Billing history - full width */}
      <BillingHistoryTable entries={data.billingHistory} />
    </div>
  );
};

export default SubscriptionPage;
