export const onboardingEn = {
  onboarding: {
    // ── Shared / Layout ──────────────────────────────────────────────────
    stepOf: "STEP {current} OF {total}",
    percentCompleted: "{percent}% Completed",
    back: "Back",
    continue: "Continue",
    next: "Next",
    skipForNow: "Skip for now",
    completeSetup: "Complete Setup",
    dataEncryptedNote:
      "Your data is encrypted and only shared in actual emergencies.",
    welcomeTitle: "Set Up Your Safety Profile",
    welcomeSubtitle:
      "This information helps us keep you safe and notify your loved ones if something goes wrong.",
    privacyFirst: "Privacy First",

    // ── Step 1 – Basic Profile ───────────────────────────────────────────
    step1: {
      title: "Basic Profile",
      whyTitle: "Why do we need this?",
      whyDescription:
        "Your profile helps emergency services identify you quickly and ensures your contacts receive accurate information.",
      criticalInfoTitle: "Critical Information",
      criticalInfoDesc:
        "Medical notes are shared with emergency responders to provide better care.",
      encryptedTitle: "Fully Encrypted",
      encryptedDesc:
        "All data is stored encrypted on your device and never shared without your consent.",
      testimonialQuote:
        "Having my medical info pre-filled saved precious minutes in the ER.",
      testimonialAuthor: "AfterMe User",
      fullNameLabel: "Full Name",
      fullNameRequired: "*",
      fullNamePlaceholder: "e.g. ninh Morgan",
      medicalNoteLabel: "Medical Note",
      medicalNoteOptional: "(Optional)",
      medicalNotePlaceholder: "Allergies, blood type, medications, conditions…",
      medicalNoteHelper:
        "Shared only with emergency contacts and first responders.",
      checkInPreferences: "Preferred Check-in Time",
      morning: "Morning",
      evening: "Evening",
    },

    // ── Step 2 – Check-in Pulse ──────────────────────────────────────────
    step2: {
      title: "Set your check-in pulse",
      subtitle:
        "Choose the times of day when you want AfterMe to check in on you.",
      whyWeAsk:
        "We'll send a gentle notification at each selected window. No response triggers an alert to your emergency contact after a grace period.",
      morning: "Morning",
      morningTime: "6:00 AM – 9:00 AM",
      afternoon: "Afternoon",
      afternoonTime: "12:00 PM – 2:00 PM",
      evening: "Evening",
      eveningTime: "5:00 PM – 8:00 PM",
      night: "Night",
      nightTime: "9:00 PM – 11:00 PM",
      addCustomTime: "Add custom time",
      customTimeTitle: "Add Custom Check-in Time",
      customTimeDesc: "Set a custom time window for check-in notifications.",
      customLabel: "Label",
      customLabelPlaceholder: "e.g. Gym, Work Break",
      customStartTime: "Start Time",
      customEndTime: "End Time",
      customLabelRequired: "Please enter a label for this time.",
      customTimeRequired: "Please select both start and end time.",
      customTimeInvalid: "End time must be after start time.",
      customCancel: "Cancel",
      customAdd: "Add Time",
    },

    // ── Step 3 – Emergency Contact ───────────────────────────────────────
    step3: {
      title: "Emergency Contact",
      subtitle:
        "Add someone we can notify if you miss a check-in. They'll only be contacted after a grace period.",
      required: "This field is required",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g. Jane Morgan",
      relationshipLabel: "Relationship",
      relationshipPlaceholder: "Select relationship",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+1 (555) 000-0000",
      notifyLabel: "Notify this contact",
      notifyDescription:
        "Send alerts to this person if you miss a check-in after the grace period.",
      completeButton: "Complete Setup",
      encryptedNote:
        "Contact details are encrypted and stored securely on your device.",
      relationships: {
        parent: "Parent",
        sibling: "Sibling",
        spouse: "Spouse / Partner",
        friend: "Friend",
        roommate: "Roommate",
        other: "Other",
      },
    },
  },
};

export type OnboardingTranslations = typeof onboardingEn;
