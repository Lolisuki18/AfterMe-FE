import { useLanguage } from "@/app/useLanguage";
import { subscriptionStore } from "../store/subscriptionStore";
import {
  CheckoutForm,
  CurrentPlanCard,
  BillingHistoryTable,
} from "../components";

const SubscriptionPage = () => {
  const { t } = useLanguage();
  const s = t.subscription;
  const data = subscriptionStore.getData();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-text text-2xl font-bold">{s.title}</h1>
        <p className="text-text-muted mt-1 max-w-xl text-sm leading-relaxed">
          {s.subtitle}
        </p>
      </div>

      {/* Current plan */}
      <CurrentPlanCard
        planName={data.planName}
        planPrice={data.planPrice}
        nextBillingDate={data.nextBillingDate}
      />

      {/* Checkout form */}
      <CheckoutForm />

      {/* Billing history */}
      <BillingHistoryTable entries={data.billingHistory} />
    </div>
  );
};

export default SubscriptionPage;
