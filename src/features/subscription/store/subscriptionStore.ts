export type BillingStatus = "paid" | "pending" | "failed";

export interface BillingEntry {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: BillingStatus;
}

export interface SubscriptionData {
  planName: string;
  planPrice: string;
  nextBillingDate: string;
  billingHistory: BillingEntry[];
}

const STORAGE_KEY = "afterme_subscription";
const CARDS_KEY = "afterme_payment_cards";

const DEFAULT_DATA: SubscriptionData = {
  planName: "Pro Plan",
  planPrice: "$9.99/month",
  nextBillingDate: "Jul 15, 2025",
  billingHistory: [
    {
      id: "b1",
      date: "Jun 15, 2025",
      description: "Pro Plan — Monthly",
      amount: "$9.99",
      status: "paid",
    },
    {
      id: "b2",
      date: "May 15, 2025",
      description: "Pro Plan — Monthly",
      amount: "$9.99",
      status: "paid",
    },
    {
      id: "b3",
      date: "Apr 15, 2025",
      description: "Pro Plan — Monthly",
      amount: "$9.99",
      status: "paid",
    },
    {
      id: "b4",
      date: "Mar 15, 2025",
      description: "Pro Plan — Monthly",
      amount: "$9.99",
      status: "paid",
    },
    {
      id: "b5",
      date: "Feb 15, 2025",
      description: "Pro Plan — Monthly",
      amount: "$9.99",
      status: "failed",
    },
  ],
};

const DEFAULT_CARDS: PaymentCard[] = [
  {
    id: "card-1",
    last4: "4242",
    brand: "Visa",
    expiry: "12/26",
    isDefault: true,
  },
  {
    id: "card-2",
    last4: "8888",
    brand: "Mastercard",
    expiry: "03/27",
    isDefault: false,
  },
];

export interface PaymentCard {
  id: string;
  last4: string;
  brand: string;
  expiry: string;
  isDefault: boolean;
}

export const subscriptionStore = {
  getData(): SubscriptionData {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return DEFAULT_DATA;
  },

  saveData(data: SubscriptionData): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  updatePlan(planName: string, planPrice: string): void {
    const data = this.getData();
    data.planName = planName;
    data.planPrice = planPrice;
    this.saveData(data);
  },

  cancelPlan(): void {
    const data = this.getData();
    data.planName = "Free Plan";
    data.planPrice = "$0/month";
    data.nextBillingDate = "—";
    this.saveData(data);
  },

  // ─── Payment cards ────────────────────────────────────────────────────────
  getCards(): PaymentCard[] {
    try {
      const raw = localStorage.getItem(CARDS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return DEFAULT_CARDS;
  },

  saveCards(cards: PaymentCard[]): void {
    localStorage.setItem(CARDS_KEY, JSON.stringify(cards));
  },

  addCard(card: Omit<PaymentCard, "id">): void {
    const cards = this.getCards();
    cards.push({ ...card, id: `card-${Date.now()}` });
    this.saveCards(cards);
  },

  removeCard(cardId: string): void {
    const cards = this.getCards().filter((c) => c.id !== cardId);
    // Ensure at least one default
    if (cards.length > 0 && !cards.some((c) => c.isDefault)) {
      cards[0].isDefault = true;
    }
    this.saveCards(cards);
  },

  setDefaultCard(cardId: string): void {
    const cards = this.getCards().map((c) => ({
      ...c,
      isDefault: c.id === cardId,
    }));
    this.saveCards(cards);
  },
};
