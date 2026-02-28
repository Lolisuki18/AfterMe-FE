import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button, Input } from "@/shared/components";

type PaymentTab = "card" | "gpay" | "apple";

export const PaymentMethodForm = () => {
  const { t } = useLanguage();
  const s = t.subscription;
  const [activeTab, setActiveTab] = useState<PaymentTab>("card");

  const tabs: { key: PaymentTab; label: string; icon: React.ReactNode }[] = [
    {
      key: "card",
      label: s.creditCard,
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      key: "gpay",
      label: s.googlePay,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
        </svg>
      ),
    },
    {
      key: "apple",
      label: s.applePay,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
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
            leftIcon={
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <Input
            label={s.nameOnCard}
            placeholder={s.nameOnCardPlaceholder}
            leftIcon={
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />
          <Input
            label={s.cardNumber}
            placeholder={s.cardPlaceholder}
            leftIcon={
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            }
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
            <svg
              className="text-text-muted h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
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
