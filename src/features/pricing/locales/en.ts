export const pricingEn = {
  pricing: {
    // Header
    title: "Plans & Pricing",
    subtitle:
      "Choose the plan that fits your needs. All plans include core safety features.",
    monthly: "Monthly",
    yearly: "Yearly",
    savePercent: "Save 20%",

    // Plan cards
    basicTitle: "Basic",
    basicPrice: "Free",
    basicPeriod: "",
    basicDesc: "Essential safety features for individuals getting started.",
    basicCta: "Get Started",
    basicFeatures: [
      "1 Trusted Contact",
      "Daily Check-in Reminders",
      "Basic Emergency SOS",
      "Community Resources",
    ],

    standardTitle: "Standard",
    standardPriceMonthly: "49,000₫",
    standardPriceYearly: "470,000₫",
    standardPeriod: "/month",
    standardPeriodYearly: "/year",
    standardDesc: "Advanced protection for your daily safety routine.",
    standardCta: "Start Free Trial",
    standardBadge: "MOST POPULAR",
    standardFeatures: [
      "5 Trusted Contacts",
      "Smart Routine Tracking",
      "Priority SOS Alerts",
      "Digital Vault (5 GB)",
      "AI Lifestyle Assistant",
      "Activity & Habit Log",
    ],

    premiumTitle: "Premium",
    premiumPriceMonthly: "89,000₫",
    premiumPriceYearly: "854,000₫",
    premiumPeriod: "/month",
    premiumPeriodYearly: "/year",
    premiumDesc: "Complete safety ecosystem for you and your family.",
    premiumCta: "Start Free Trial",
    premiumFeatures: [
      "Unlimited Trusted Contacts",
      "Family Peace of Mind Dashboard",
      "Advanced SOS + Live Location",
      "Digital Vault (50 GB)",
      "AI Assistant + Wellbeing Coach",
      "Priority 24/7 Support",
    ],

    // Family Plan banner
    familyTitle: "Family Plan",
    familyDesc:
      "Protect your entire household with a single subscription. Add up to 6 family members with shared dashboards and coordinated safety alerts.",
    familyPrice: "149,000₫",
    familyPeriod: "/month",
    familyCta: "Explore Family Plan",

    // Why choose us
    whyTitle: "Why Choose AfterMe?",
    whyPrivacyTitle: "Privacy First",
    whyPrivacyDesc:
      "End-to-end encryption and zero data sharing with third parties.",
    whySupportTitle: "24/7 Support",
    whySupportDesc:
      "Our safety team is always available when you need them most.",
    whyCommunityTitle: "Trusted Community",
    whyCommunityDesc:
      "Join thousands of users who trust AfterMe for their daily safety.",
  },
};

export type PricingTranslations = typeof pricingEn;
