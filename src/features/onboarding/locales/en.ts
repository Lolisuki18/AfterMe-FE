export const onboardingEn = {
  onboarding: {
    // ── Shared / Layout ──────────────────────────────────────────────────
    stepOf: "STEP {current} OF {total}",
    percentCompleted: "{percent}% Completed",
    welcomeTitle: "Welcome to AfterMe",
    welcomeSubtitle: "Let's set up your safety profile in 3 simple steps.",
    privacyFirst: "Privacy First",
    back: "Back",
    next: "Next: Check-in Times",
    continue: "Continue",
    skipForNow: "Skip for now",
    completeSetup: "Complete Setup",
    saveAndExit: "Save & Exit",
    helpAndSupport: "Help & Support",

    // ── Footer links ──────────────────────────────────────────────────
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    helpCenter: "Help Center",
    dataEncryptedNote:
      "Your data is encrypted and only shared in actual emergencies.",

    // ── Step 1 – Basic Profile ───────────────────────────────────────
    step1: {
      title: "Basic Profile",
      whyTitle: "Why this info?",
      whyDescription:
        "Your basic profile helps emergency responders identify you quickly if an alert is triggered. We store this locally encrypted on your device.",
      criticalInfoTitle: "Critical Info",
      criticalInfoDesc: "Share allergies or conditions.",
      encryptedTitle: "End-to-End Encrypted",
      encryptedDesc: "Only you and your contacts can see this.",
      testimonialQuote:
        '"AfterMe gives me peace of mind when I walk home late from the library."',
      testimonialAuthor: "Sarah J., Student",
      fullNameLabel: "Full Name",
      fullNameRequired: "*",
      fullNamePlaceholder: "e.g. Alex Morgan",
      medicalNoteLabel: "Medical Note / Bio",
      medicalNoteOptional: "Optional",
      medicalNotePlaceholder:
        "Any critical medical info (e.g., Asthma, Diabetes) or just a bit about you...",
      medicalNoteHelper:
        "This will be shared with your emergency contact during an alert.",
      checkInPreferences: "Check-in Preferences",
      morning: "Morning",
      evening: "Evening",
    },

    // ── Step 2 – Check-in Pulse ──────────────────────────────────────
    step2: {
      title: "Set your check-in pulse",
      subtitle:
        "We don't need exact times. Just pick the windows when you're usually active so we know when to check on you.",
      whyWeAsk: "Why we ask? (This is a passive pulse check)",
      morning: "Morning",
      morningTime: "Around 8:00 AM - 10:00 AM",
      afternoon: "Afternoon",
      afternoonTime: "Around 12:00 PM - 2:00 PM",
      evening: "Evening",
      eveningTime: "Around 6:00 PM - 8:00 PM",
      night: "Night",
      nightTime: "Around 10:00 PM - 12:00 AM",
      addCustomTime: "Add a custom time window",
    },

    // ── Step 3 – Emergency Contact ───────────────────────────────────
    step3: {
      title: "Emergency Contact",
      subtitle:
        "Add a trusted contact who will be notified instantly in case of an emergency. We recommend adding a parent or close friend.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g. Jane Doe",
      relationshipLabel: "Relationship",
      relationshipPlaceholder: "Select relationship",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+1 (555) 000-0000",
      notifyTitle: "Notify them I joined AfterMe",
      notifyDesc: "We'll send them a secure SMS introducing the app.",
      emergencyContact: "Emergency Contact",
      relationships: {
        parent: "Parent",
        sibling: "Sibling",
        spouse: "Spouse / Partner",
        friend: "Close Friend",
        roommate: "Roommate",
        other: "Other",
      },
    },
  },
};

export type OnboardingTranslations = typeof onboardingEn;
