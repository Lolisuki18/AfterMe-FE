export const referralEn = {
  referral: {
    /* Hero */
    heroLabel: "REFERRAL PROGRAM",
    heroTitle: "Invite your squad,",
    heroTitleAccent: "get Premium",
    heroDesc:
      "Build a safer community together. For every friend who subscribes, you both get a free month of AfterMe Premium!",
    heroCta: "Start Inviting",
    heroCtaSecondary: "How it works",
    heroImgAlt: "Group of friends",
    heroOverlay: "Safety in numbers",

    /* Share widget */
    shareTitle: "Share the Safety",
    shareSubtitle: "Give friends 30 days of Premium for free.",
    copyLink: "Copy Link",
    copied: "Copied!",
    twitter: "Twitter",
    facebook: "Facebook",
    instagram: "Instagram",
    email: "Email",

    /* Stats */
    statReferralsLabel: "SUCCESSFUL REFERRALS",
    statReferralsValue: "12",
    statReferralsSub: "Friends Joined",
    statReferralsHint: "3 more to unlock Super Badge!",
    statMonthsLabel: "FREE MONTHS EARNED",
    statMonthsValue: "4",
    statMonthsSub: "Months Free",
    statMonthsHint: "Next reward in 1 referral",

    /* Referral history */
    historyTitle: "Referral History",
    viewAll: "View All",
    statusSubscribed: "Subscribed",
    statusPending: "Pending",
    statusJoined: "Joined",

    /* Mock data */
    referrals: [
      {
        name: "Sarah M.",
        date: "Joined 2 days ago",
        status: "subscribed",
        initials: "SM",
      },
      {
        name: "James R.",
        date: "Joined 5 days ago",
        status: "subscribed",
        initials: "JR",
      },
      {
        name: "Marcus L.",
        date: "Invited 1 week ago",
        status: "pending",
        initials: "ML",
      },
      {
        name: "Emily L.",
        date: "Joined yesterday",
        status: "joined",
        initials: "EL",
      },
    ] as { name: string; date: string; status: string; initials: string }[],
  },
};

export type ReferralTranslations = typeof referralEn;
