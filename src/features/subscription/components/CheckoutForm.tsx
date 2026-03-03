import { useLanguage } from "@/app/useLanguage";
import { Button, Input } from "@/shared/components";
import {
  EnvelopeIcon,
  UserOutlineIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@/shared/icon";

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

        {/* Secured + card logos */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <LockClosedIcon className="text-text-muted h-4 w-4" />
          <span className="text-text-muted text-xs">{s.securedBy}</span>
        </div>
      </form>
    </div>
  );
};
