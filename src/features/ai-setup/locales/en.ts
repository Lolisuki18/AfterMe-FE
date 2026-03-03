export const aiSetupEn = {
  aiSetup: {
    /* Header */
    brandName: "AfterMe",
    brandSub: "Safety Companion",
    progressLabel: "Setup Progress",
    progressPercent: "65%",
    exitSetup: "Exit Setup",

    /* Chat */
    timestamp: "Today, 9:41 AM",
    botName: "AfterMe Assistant",
    userName: "You",
    typingLabel: "typing",

    /* Mock conversation */
    messages: [
      {
        id: "1",
        from: "bot",
        text: "Good morning! To customize your safety check-ins effectively, I need to know a bit about your routine. What time usually works best for you to start your day?",
      },
      {
        id: "2",
        from: "user",
        text: "I think mornings are generally better for me.",
      },
      {
        id: "3",
        from: "bot",
        text: "Got it, mornings it is. ☀️ How about 8:00 AM? Or would you prefer a bit later to grab some coffee first?",
      },
    ] as { id: string; from: string; text: string }[],

    /* Quick replies */
    quickReplies: [
      "Yes, 8:00 AM works",
      "A bit later, please",
      "Help me decide",
      "Not today",
    ] as string[],

    /* Input */
    inputPlaceholder: "Type your answer...",
    sendHint: "Press Enter to send",
  },
};

export type AiSetupTranslations = typeof aiSetupEn;
