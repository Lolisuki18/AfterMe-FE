import { useLanguage } from "@/app/useLanguage";
import { Button, Input } from "@/shared/components";

export const CheckoutForm = () => {
  const { t } = useLanguage();
  const s = t.subscription;

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6">
      <h2 className="text-text text-lg font-bold">{s.secureCheckout}</h2>

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

        {/* Secured + card logos */}
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
    </div>
  );
};
