import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Button, Input, Modal } from "@/shared/components";
import {
  CreditCardIcon,
  GooglePayIcon,
  AppleIcon,
  EnvelopeIcon,
  UserOutlineIcon,
  LockClosedIcon,
  CheckCircleFilledIcon,
} from "@/shared/icon";

type PaymentTab = "card" | "gpay" | "apple";

interface FormErrors {
  email?: string;
  nameOnCard?: string;
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
}

export const PaymentMethodForm = () => {
  const { t } = useLanguage();
  const s = t.subscription;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<PaymentTab>("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form fields
  const [email, setEmail] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitsOnly = cardNumber.replace(/\s/g, "");

    if (!email.trim()) newErrors.email = s.fieldRequired;
    else if (!emailRegex.test(email)) newErrors.email = s.emailInvalid;

    if (!nameOnCard.trim()) newErrors.nameOnCard = s.fieldRequired;

    if (!digitsOnly) newErrors.cardNumber = s.fieldRequired;
    else if (!/^\d{16}$/.test(digitsOnly))
      newErrors.cardNumber = s.cardNumberInvalid;

    if (!expiry.trim()) newErrors.expiry = s.fieldRequired;
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry))
      newErrors.expiry = s.expiryInvalid;

    if (!cvc.trim()) newErrors.cvc = s.fieldRequired;
    else if (!/^\d{3}$/.test(cvc)) newErrors.cvc = s.cvcInvalid;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);
    // Simulate processing
    await new Promise((r) => setTimeout(r, 1500));
    setIsProcessing(false);
    setShowSuccess(true);
  };

  const handleFormatCard = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  const handleFormatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      setExpiry(`${digits.slice(0, 2)}/${digits.slice(2)}`);
    } else {
      setExpiry(digits);
    }
  };

  const handleGooglePay = async () => {
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsProcessing(false);
    setShowSuccess(true);
  };

  const handleApplePay = async () => {
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsProcessing(false);
    setShowSuccess(true);
  };

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
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              label={s.email}
              placeholder={s.emailPlaceholder}
              type="email"
              leftIcon={<EnvelopeIcon className="h-4 w-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <Input
              label={s.nameOnCard}
              placeholder={s.nameOnCardPlaceholder}
              leftIcon={<UserOutlineIcon className="h-4 w-4" />}
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
            {errors.nameOnCard && (
              <p className="mt-1 text-xs text-red-500">{errors.nameOnCard}</p>
            )}
          </div>
          <div>
            <Input
              label={s.cardNumber}
              placeholder={s.cardPlaceholder}
              leftIcon={<CreditCardIcon className="h-4 w-4" />}
              value={cardNumber}
              onChange={(e) => handleFormatCard(e.target.value)}
            />
            {errors.cardNumber && (
              <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                label={s.expiry}
                placeholder={s.expiryPlaceholder}
                value={expiry}
                onChange={(e) => handleFormatExpiry(e.target.value)}
              />
              {errors.expiry && (
                <p className="mt-1 text-xs text-red-500">{errors.expiry}</p>
              )}
            </div>
            <div>
              <Input
                label={s.cvc}
                placeholder={s.cvcPlaceholder}
                value={cvc}
                onChange={(e) =>
                  setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))
                }
              />
              {errors.cvc && (
                <p className="mt-1 text-xs text-red-500">{errors.cvc}</p>
              )}
            </div>
          </div>

          {/* Trial info */}
          <div className="bg-primary/5 rounded-xl px-4 py-3">
            <p className="text-primary text-sm font-semibold">{s.trialInfo}</p>
            <p className="text-text-muted mt-1 text-xs">{s.trialDesc}</p>
          </div>

          <Button
            variant="primary"
            fullWidth
            size="lg"
            rounded
            type="submit"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : s.startTrial}
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
          <Button
            variant="primary"
            fullWidth
            size="lg"
            rounded
            onClick={handleGooglePay}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : s.payWithGoogle}
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
            onClick={handleApplePay}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : s.payWithApple}
          </Button>
        </div>
      )}

      {/* Success Modal */}
      <Modal open={showSuccess} onClose={() => setShowSuccess(false)}>
        <div className="flex flex-col items-center gap-4 p-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircleFilledIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-text text-xl font-bold">
            {s.paymentSuccessTitle}
          </h2>
          <p className="text-text-muted text-sm">{s.paymentSuccessDesc}</p>
          <Button
            variant="primary"
            rounded
            fullWidth
            onClick={() => {
              setShowSuccess(false);
              navigate("/dashboard");
            }}
          >
            {s.goToDashboard}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
