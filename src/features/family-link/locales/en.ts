export const familyLinkEn = {
  familyLink: {
    /* Header */
    headerTitle: "Accept Sponsorship from",
    headerName: "Sarah Mitchell",
    headerSubtitle:
      "Sarah wants to add you to her AfterMe family plan. Review what she can and cannot see about your activity before accepting.",

    /* Privacy promise */
    privacyTitle: "Privacy Promise",
    canSeeTitle: "Sarah CAN see",
    cannotSeeTitle: "Sarah CANNOT see",
    canSeeItems: [
      "Whether you completed your daily check-in",
      "Your general activity status (Active / Inactive)",
      "Emergency alert notifications",
    ] as string[],
    cannotSeeItems: [
      "Your personal journal entries or notes",
      "Specific locations or GPS data",
      "Private messages or conversation content",
      "Your medical or wellness details",
    ] as string[],

    /* Actions */
    accept: "Accept & Join Family Plan",
    decline: "I'll decide later",
    declineHint: "You can always accept later from Settings",

    /* Footer */
    footerNote:
      "Your privacy is our priority. You can change permissions anytime.",
  },
};

export type FamilyLinkTranslations = typeof familyLinkEn;
