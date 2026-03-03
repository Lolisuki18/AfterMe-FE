import type {
  AudienceItem,
  FeatureItem,
  PlanItem,
  RiskItem,
  StepItem,
} from "../interface";

export const homeEn = {
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
    ] satisfies StepItem[],
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
    ] satisfies FeatureItem[],
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
    ] satisfies RiskItem[],
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
    ] satisfies AudienceItem[],
  },
  homePricing: {
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
          "Daily check‑in (every 24h)",
          "1 Emergency Contact",
          "Includes ads",
        ],
        cta: "Get Started Free",
      },
      {
        name: "Standard",
        price: "$2",
        per: "/month",
        tagline: "Flexibility without complexity.",
        features: [
          "Pick your own check‑in times",
          "Up to 5 Emergency Contacts",
          "No ads",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Premium",
        price: "$4",
        per: "/month",
        tagline: "Complete peace of mind with AI support.",
        features: [
          "Dead Man Switch (auto‑send info)",
          "Automatic phone calls to contacts",
          "Extra security for your data",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Family",
        price: "$6",
        per: "/month",
        tagline: "One plan for the whole household.",
        features: [
          "Up to 5 family members",
          "Parent control panel",
          "Managed and paid by parents",
        ],
        cta: "Contact Sales",
      },
    ] satisfies PlanItem[],
  },
};

export type HomeTranslations = typeof homeEn;
