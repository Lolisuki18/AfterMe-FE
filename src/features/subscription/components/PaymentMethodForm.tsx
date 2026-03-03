import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button, Input } from "@/shared/components";
import {
  CreditCardIcon,
  GooglePayIcon,
  AppleIcon,
  EnvelopeIcon,
  UserOutlineIcon,
  LockClosedIcon,
} from "@/shared/icon";

type PaymentTab = "card" | "gpay" | "apple";

export const PaymentMethodForm = () => {
  const { t } = useLanguage();
  const s = t.subscription;
  const [activeTab, setActiveTab] = useState<PaymentTab>("card");

  const tabs: { key: PaymentTab; label: string; icon: React.ReactNode }[] = [
    {
      key: "card",
      label: s.creditCard,
      icon: <CreditCardIcon className="h-4 w-4" />,
    },
    {
      key: "gpay",
      label: s.googlePay,
      icon: <GooglePayIcon className="h-4 w-4" />,
    },
    {
      key: "apple",
      label: s.applePay,
      icon: <AppleIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6">
      <h2 className="text-text text-base font-bold">{s.paymentMethod}</h2>

      {/* Tabs */}
      <div className="mt-4 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === tab.key
                ? "bg-primary text-white"
                : "bg-surface-alt text-text-muted hover:text-text"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Credit Card form */}
      {activeTab === "card" && (
        <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input
            label={s.email}
            placeholder={s.emailPlaceholder}
            type="email"
            leftIcon={<EnvelopeIcon className="h-4 w-4" />}
          />
          <Input
            label={s.nameOnCard}
            placeholder={s.nameOnCardPlaceholder}
            leftIcon={<UserOutlineIcon className="h-4 w-4" />}
          />
          <Input
            label={s.cardNumber}
            placeholder={s.cardPlaceholder}
            leftIcon={<CreditCardIcon className="h-4 w-4" />}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input label={s.expiry} placeholder={s.expiryPlaceholder} />
            <Input label={s.cvc} placeholder={s.cvcPlaceholder} />
          </div>

          {/* Trial info */}
          <div className="bg-primary/5 rounded-xl px-4 py-3">
            <p className="text-primary text-sm font-semibold">{s.trialInfo}</p>
            <p className="text-text-muted mt-1 text-xs">{s.trialDesc}</p>
          </div>

          <Button variant="primary" fullWidth size="lg" rounded>
            {s.startTrial}
          </Button>

          <div className="flex items-center justify-center gap-2 pt-1">
            <LockClosedIcon className="text-text-muted h-4 w-4" />
            <span className="text-text-muted text-xs">{s.securedBy}</span>
          </div>
        </form>
      )}

      {/* Google Pay */}
      {activeTab === "gpay" && (
        <div className="mt-5 space-y-4">
          <p className="text-text-muted text-sm">{s.trialDesc}</p>
          <Button variant="primary" fullWidth size="lg" rounded>
            {s.payWithGoogle}
          </Button>
        </div>
      )}

      {/* Apple Pay */}
      {activeTab === "apple" && (
        <div className="mt-5 space-y-4">
          <p className="text-text-muted text-sm">{s.trialDesc}</p>
          <Button
            fullWidth
            size="lg"
            rounded
            className="bg-black text-white hover:bg-black/90"
          >
            {s.payWithApple}
          </Button>
        </div>
      )}
    </div>
  );
};
