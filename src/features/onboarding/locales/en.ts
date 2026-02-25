export const onboardingEn = {
  onboarding: {
    step: "Step",
    of: "of",
    percentComplete: "% Complete",
    back: "← Back",
    next: "Next Step →",
    getStarted: "Get Started",
    goToDashboard: "Go to Dashboard →",

    // Step 1 – Welcome
    welcome: {
      title: "Welcome to AfterMe",
      subtitle:
        "Let's set up your personal safety net. We'll help you configure your check-ins and emergency contacts in just a few minutes.",
      coverTitle: "What we'll cover:",
      items: [
        "Your basic profile information",
        "Establish your daily check-in",
        "Define inactivity trigger",
        "Setting up a trusted contact",
      ],
    },

    // Step 2 – Profile
    profile: {
      title: "Let's get to know you",
      subtitle: "We need a few details to personalize your experience.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Numbers",
      hearAboutUs: "How did you hear about us?",
      hearAboutUsPlaceholder: "Select an option",
      hearOptions: [
        "Social media",
        "Friend or family",
        "Search engine",
        "Advertisement",
        "Other",
      ],
      required: "*",
      optional: "(Optional)",
    },

    // Step 3 – Check-in
    checkin: {
      title: "Establish your daily check-in",
      subtitle: "We need a few details to personalize your experience.",
      frequency: "Check-in Frequency",
      daily: "Daily",
      weekly: "Weekly",
      time: "Check-in Time",
      am: "AM",
      pm: "PM",
    },

    // Step 4 – Inactivity trigger
    trigger: {
      title: "Define Inactivity Trigger",
      subtitle:
        "If you miss your daily check-ins for a set period, we will assume you are unavailable and activate your legacy plan.",
      label: "Activate Legacy Mode after:",
      day: "1 day",
      days3: "3 days",
      days7: "7 days",
      daysChoose: "The number of day you choose is :",
    },

    // Step 5 – Trusted contact
    contact: {
      title: "Add a trusted contact",
      subtitle:
        "If you miss your daily check-ins for a set period, we will assume you are unavailable and activate your legacy plan.",
      name: "Name",
      email: "Email",
      phone: "Numbers",
      note: "Your trusted contact will be established after they confirm it via email",
      skip: "Skip this for now",
      required: "*",
    },

    // Step 6 – Complete
    complete: {
      title: "You're all set !",
    },
  },
};

export type OnboardingTranslations = typeof onboardingEn;
