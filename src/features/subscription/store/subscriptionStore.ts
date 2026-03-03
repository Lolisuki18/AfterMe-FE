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
};
