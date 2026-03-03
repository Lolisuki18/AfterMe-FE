export const remindersEn = {
  reminders: {
    // Page header
    backToDashboard: "Back to dashboard",
    createTitle: "Create a Reminder",
    createSubtitle: "Set up a reminder that works the way you need it.",

    // Form fields
    titleLabel: "What do you want to be reminded about?",
    titlePlaceholder: "e.g. Take medicine, Check in, Evening walk",
    titleError: "Please give your reminder a title.",
    notesLabel: "Additional notes",
    notesOptional: "(optional)",
    notesPlaceholder: "Anything you want to remember...",

    // Date / time
    whenLabel: "When should we remind you?",

    // Frequency
    frequencyLabel: "How often?",
    once: "Once",
    daily: "Daily",
    weekly: "Weekly",

    // Feelings
    feelingLabel: "How should the reminder feel?",
    gentle: "Gentle",
    gentleDesc: "A soft nudge",
    normal: "Normal",
    normalDesc: "Clear and practical",
    firm: "Firm",
    firmDesc: "Hard to ignore",

    // Safety check-in
    safetyLabel: "Safety Check-in",
    safetyDesc: "AfterMe can follow up if you don't respond to this reminder.",

    // Footer note
    editNote: "You can always edit or pause reminders later.",

    // Actions
    cancel: "Cancel",
    create: "Create Reminder",

    // Toast messages
    toastSuccess: "Reminder created! Redirecting to dashboard...",
    toastError: "Something went wrong. Please try again.",
  },
};

export type RemindersTranslations = typeof remindersEn;
