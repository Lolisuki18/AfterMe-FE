export interface StepItem {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface RiskItem {
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface PlanItem {
  name: string;
  price: string;
  per: string;
  tagline: string;
  features: string[];
  cta: string;
}

export interface Translations {
  header: {
    features: string;
    howItWorks: string;
    pricing: string;
    login: string;
    cta: string;
  };
  footer: {
    about: string;
    aboutDesc: string;
    links: string;
    aboutLink: string;
    services: string;
    pricingLink: string;
    support: string;
    faq: string;
    contact: string;
    privacyPolicy: string;
    contactTitle: string;
    email: string;
    hotline: string;
    address: string;
    addressValue: string;
    rights: string;
  };
  hero: {
    badge: string;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProof: string;
  };
  howWork: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  moreThan: {
    badge: string;
    title: string;
    subtitle: string;
    features: FeatureItem[];
  };
  theRisk: {
    title: string;
    subtitle: string;
    risks: RiskItem[];
  };
  whoNeed: {
    title: string;
    subtitle: string;
    audiences: AudienceItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    mostPopular: string;
    plans: PlanItem[];
  };
}

export const en: Translations = {
  header: {
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    login: "Log In",
    cta: "Start your journey",
  },
  footer: {
    about: "About",
    aboutDesc:
      "A platform for managing and storing important information for the future.",
    links: "Links",
    aboutLink: "About",
    services: "Services",
    pricingLink: "Pricing",
    support: "Support",
    faq: "FAQ",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    contactTitle: "Contact",
    email: "Email",
    hotline: "Hotline",
    address: "Address",
    addressValue: "Ho Chi Minh City",
    rights: "All rights reserved.",
  },
  hero: {
    badge: "Gentle reminders for a meaningful life",
    heading1: "Reminding you",
    heading2: "of what matters",
    heading3: "in the most",
    heading4: "human way.",
    description:
      "AfterMe helps you remember and maintain the habits that matter in life — without pressure, without feeling mechanical.",
    ctaPrimary: "Start your journey",
    ctaSecondary: "See How It Works",
    socialProof: "Trusted by users worldwide",
  },
  howWork: {
    title: "How AfterMe Works",
    subtitle:
      "Simple setup for powerful protection. It takes less than 5 minutes to secure your digital legacy.",
    steps: [
      {
        title: "Create Profile",
        description:
          "Set up your secure account and store your critical notes, passwords, and digital asset information.",
      },
      {
        title: "Set Check-ins",
        description:
          "Configure daily or weekly check-ins. We'll remind you to verify you're okay via email or app.",
      },
      {
        title: "Add Contacts",
        description:
          "Designate trusted contacts (family, friends) who should receive your information if you don't respond.",
      },
      {
        title: "Stay Protected",
        description:
          "If you miss your check-in grace period, we automatically send your pre-set messages to your contacts.",
      },
    ],
  },
  moreThan: {
    badge: "Features",
    title: "More Than Just a Reminder App",
    subtitle:
      "A comprehensive system designed to protect your digital legacy and ensure your physical safety.",
    features: [
      {
        title: "Smart Reminders",
        description:
          "Go beyond basic alarms. Set recurring reminders for medication, health routines, and life admin tasks.",
      },
      {
        title: "Dead Man Switch",
        description:
          "The core safety net. If you don't check in within your specified timeframe, your emergency protocol activates.",
      },
      {
        title: "Emergency Contacts",
        description:
          "Manage who gets notified. Assign different information to different people based on trust levels.",
      },
      {
        title: "Secure Vault",
        description:
          "Military-grade encryption for your passwords, documents, and personal notes. Only decrypted by your recipients.",
      },
      {
        title: "AI Assistant",
        description:
          "Get intelligent suggestions for what information to store and help drafting difficult messages to loved ones.",
      },
      {
        title: "Activity Monitoring",
        description:
          "Passive activity monitoring options to reduce the need for manual check-ins while maintaining privacy.",
      },
    ],
  },
  theRisk: {
    title: "The Risks We Often Ignore",
    subtitle:
      "Modern life is digital and often solitary. We've built a solution for the vulnerabilities that most apps overlook.",
    risks: [
      {
        title: "Unresponsive Scenarios",
        description:
          "Accidents or sudden illness can happen to anyone. If you live alone or travel, who will know if you stop responding?",
      },
      {
        title: "Inaccessible Data",
        description:
          "Financial accounts, passwords, and digital assets are often lost forever because family members cannot access them.",
      },
      {
        title: "Delayed Response",
        description:
          "In emergencies, every hour counts. Traditional methods often mean days pass before anyone realizes something is wrong.",
      },
      {
        title: "Daily Management",
        description:
          "Basic reminder apps handle tasks but fail to prepare you for the 'what if' scenarios of life.",
      },
    ],
  },
  whoNeed: {
    title: "Who Needs AfterMe?",
    subtitle:
      "Designed for anyone who wants to live more intentionally and protect those they care about.",
    audiences: [
      {
        title: "Solo Travelers",
        description:
          "Explore the world with confidence. If you don't check in from your hike or trip, local authorities or family get your location and itinerary details immediately.",
      },
      {
        title: "Living Alone",
        description:
          "Maintain your independence while having a safety net. Perfect for elderly individuals or anyone living solo who wants reassurance that someone will know if they need help.",
      },
      {
        title: "Professionals",
        description:
          "Secure your business continuity. Ensure critical work passwords and project details are transferred to colleagues if you're incapacitated.",
      },
    ],
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle:
      "Start for free. Upgrade when you need more protection. No hidden fees.",
    mostPopular: "Most Popular",
    plans: [
      {
        name: "Basic",
        price: "Free",
        per: "",
        tagline: "Essential protection for everyone.",
        features: [
          "Basic daily reminders",
          "1 Emergency Contact",
          "Standard Dead Man Switch (48h)",
          "5 Secure Notes",
          "Email Notifications",
        ],
        cta: "Get Started Free",
      },
      {
        name: "Premium",
        price: "$3",
        per: "/month",
        tagline: "Complete peace of mind with AI support.",
        features: [
          "Unlimited Reminders",
          "5 Emergency Contacts",
          "Custom Check-in Intervals",
          "Unlimited Secure Vault",
          "AI Message Assistant",
          "SMS & Call Alerts",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Family",
        price: "$8",
        per: "/month",
        tagline: "Protection for your whole household.",
        features: [
          "Everything in Premium",
          "Up to 5 Accounts",
          "Shared Emergency Contacts",
          "Family Dashboard",
          "Priority Support",
          "Early Warning System",
        ],
        cta: "Contact Sales",
      },
    ],
  },
};
