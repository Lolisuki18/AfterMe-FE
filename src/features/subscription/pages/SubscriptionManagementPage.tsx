import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useAuthStore } from "@/features/auth/store/authStore";
import {
  subscriptionStore,
  type PaymentCard,
} from "../store/subscriptionStore";
import { Button } from "@/shared/components";
import {
  CreditCardIcon,
  TrashIcon,
  PlusIcon,
  BackIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@/shared/icon";

// ─── Add Card Form ────────────────────────────────────────────────────────────

interface AddCardFormProps {
  onAdd: (card: Omit<PaymentCard, "id">) => void;
  onCancel: () => void;
}

const AddCardForm = ({ onAdd, onCancel }: AddCardFormProps) => {
  const { t } = useLanguage();
  const s = t.subscription;
  const [last4, setLast4] = useState("");
  const [brand, setBrand] = useState("Visa");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (last4.length === 4 && expiry) {
      onAdd({ last4, brand, expiry, isDefault: false });
      setLast4("");
      setExpiry("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-alt space-y-4 rounded-xl p-4"
    >
      <h3 className="text-text text-sm font-bold">{s.addCardTitle}</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <label className="text-text-muted mb-1 block text-xs">
            {s.cardNumber}
          </label>
          <input
            type="text"
            maxLength={4}
            placeholder="4242"
            value={last4}
            onChange={(e) => setLast4(e.target.value.replace(/\D/g, ""))}
            className="bg-surface border-border text-text focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
        </div>
        <div>
          <label className="text-text-muted mb-1 block text-xs">
            {s.creditCard}
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="bg-surface border-border text-text focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          >
            <option>Visa</option>
            <option>Mastercard</option>
            <option>Amex</option>
          </select>
        </div>
        <div>
          <label className="text-text-muted mb-1 block text-xs">
            {s.expiry}
          </label>
          <input
            type="text"
            maxLength={5}
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="bg-surface border-border text-text focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button type="submit" size="sm" rounded>
          {s.addCardBtn}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          rounded
          onClick={onCancel}
        >
          {s.cancelSubscription?.split(" ")[0] ?? "Cancel"}
        </Button>
      </div>
    </form>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const SubscriptionManagementPage = () => {
  const { t } = useLanguage();
  const s = t.subscription;
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const [cards, setCards] = useState<PaymentCard[]>(() =>
    subscriptionStore.getCards(),
  );
  const [data] = useState(() => subscriptionStore.getData());
  const [showAddCard, setShowAddCard] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [confirmRemoveId, setConfirmRemoveId] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleAddCard = (card: Omit<PaymentCard, "id">) => {
    subscriptionStore.addCard(card);
    setCards(subscriptionStore.getCards());
    setShowAddCard(false);
    showToast(s.cardAdded);
  };

  const handleRemoveCard = (cardId: string) => {
    const card = cards.find((c) => c.id === cardId);
    if (card?.isDefault) return; // default card cannot be removed
    setConfirmRemoveId(cardId);
  };

  const confirmRemoveCard = () => {
    if (!confirmRemoveId) return;
    subscriptionStore.removeCard(confirmRemoveId);
    setCards(subscriptionStore.getCards());
    setConfirmRemoveId(null);
    showToast(s.cardRemoved);
  };

  const handleSetDefault = (cardId: string) => {
    subscriptionStore.setDefaultCard(cardId);
    setCards(subscriptionStore.getCards());
    showToast(s.defaultChanged);
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      {/* Toast notification */}
      {toast && (
        <div className="animate-in fade-in slide-in-from-top-2 fixed top-4 right-4 z-50 flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg">
          <CheckCircleIcon className="h-4 w-4" />
          {toast}
        </div>
      )}

      {/* Remove card confirmation modal */}
      {confirmRemoveId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-surface w-full max-w-sm rounded-2xl p-6 shadow-xl">
            <h3 className="text-text text-lg font-bold">
              {s.removeCardConfirmTitle}
            </h3>
            <p className="text-text-muted mt-2 text-sm leading-relaxed">
              {s.removeCardConfirmDesc}
            </p>
            <div className="mt-5 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                size="sm"
                rounded
                onClick={() => setConfirmRemoveId(null)}
              >
                {s.removeCardCancel}
              </Button>
              <Button
                variant="danger"
                size="sm"
                rounded
                onClick={confirmRemoveCard}
              >
                {s.removeCardConfirm}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/dashboard/subscription")}
          className="text-text-muted hover:text-text rounded-lg p-1.5 transition-colors"
        >
          <BackIcon className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-text text-2xl font-bold">{s.manageTitle}</h1>
          <p className="text-text-muted mt-0.5 text-sm">{s.manageSubtitle}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Account Info + Current Plan */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Account Info */}
          <div className="bg-surface rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <UserIcon className="text-primary h-5 w-5" />
              <h2 className="text-text text-base font-bold">{s.accountInfo}</h2>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-text-muted text-xs">
                  {s.accountEmail}
                </span>
                <p className="text-text text-sm font-medium">
                  {user?.email ?? "—"}
                </p>
              </div>
              <div>
                <span className="text-text-muted text-xs">{s.memberSince}</span>
                <p className="text-text text-sm font-medium">Jan 2025</p>
              </div>
            </div>
          </div>

          {/* Current Plan */}
          <div className="bg-surface rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheckIcon className="text-primary h-5 w-5" />
              <h2 className="text-text text-base font-bold">
                {s.currentPlanLabel}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-bold">
                {data.planName}
              </span>
              <span className="text-text text-lg font-bold">
                {data.planPrice}
              </span>
            </div>
            <p className="text-text-muted mt-2 text-xs">
              {s.nextBilling}:{" "}
              <span className="text-text font-semibold">
                {data.nextBillingDate}
              </span>
            </p>
            <Button
              variant="outline"
              size="sm"
              rounded
              className="mt-4"
              onClick={() => navigate("/pricing")}
            >
              {s.changePlan}
            </Button>
          </div>
        </div>

        {/* Payment Methods — full width */}
        <div>
          <div className="bg-surface rounded-2xl p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCardIcon className="text-primary h-5 w-5" />
                <h2 className="text-text text-base font-bold">
                  {s.paymentCards}
                </h2>
              </div>
              {!showAddCard && (
                <Button
                  variant="outline"
                  size="sm"
                  rounded
                  leftIcon={<PlusIcon className="h-3.5 w-3.5" />}
                  onClick={() => setShowAddCard(true)}
                >
                  {s.addCard}
                </Button>
              )}
            </div>

            {showAddCard && (
              <div className="mb-4">
                <AddCardForm
                  onAdd={handleAddCard}
                  onCancel={() => setShowAddCard(false)}
                />
              </div>
            )}

            {cards.length === 0 ? (
              <p className="text-text-muted py-8 text-center text-sm">
                {s.noCards}
              </p>
            ) : (
              <div className="space-y-3">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-surface-alt flex items-center justify-between rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                        <CreditCardIcon className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-text text-sm font-semibold">
                            {card.brand} •••• {card.last4}
                          </span>
                          {card.isDefault && (
                            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-green-600 uppercase">
                              {s.defaultBadge}
                            </span>
                          )}
                        </div>
                        <span className="text-text-muted text-xs">
                          {s.expires} {card.expiry}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {!card.isDefault && (
                        <button
                          onClick={() => handleSetDefault(card.id)}
                          className="text-primary hover:bg-primary/10 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors"
                        >
                          {s.setAsDefault}
                        </button>
                      )}
                      <button
                        onClick={() => handleRemoveCard(card.id)}
                        disabled={card.isDefault}
                        title={
                          card.isDefault ? s.cannotRemoveDefault : s.removeCard
                        }
                        className={`rounded-lg p-1.5 transition-colors ${
                          card.isDefault
                            ? "cursor-not-allowed text-gray-400 opacity-40"
                            : "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                        }`}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back button */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          rounded
          leftIcon={<BackIcon className="h-4 w-4" />}
          onClick={() => navigate("/dashboard/subscription")}
        >
          {s.backToSubscription}
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionManagementPage;
