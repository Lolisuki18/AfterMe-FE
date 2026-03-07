export const emergencyAlertEn = {
  emergencyAlert: {
    /* Banner */
    bannerTitle: "EMERGENCY ALERT",
    bannerStatus: "Sarah is unresponsive",
    bannerDesc:
      "This is an automated alert from AfterMe. Sarah failed to check in at the scheduled time.",

    /* Last check-in */
    lastCheckIn: "LAST CHECK-IN",
    today: "Today",
    currentStatus: "CURRENT STATUS",
    unresponsive: "Unresponsive",

    /* Location */
    lastKnownLocation: "LAST KNOWN LOCATION",
    address: "124 Market St, San Francisco, CA",
    locationAgo: "~15 minutes ago",
    mapAlt: "Map of San Francisco",

    /* Action center */
    actionTitle: "Action Center",
    actionSubtitle: "Immediate actions recommended for you.",
    callContact: "Call Sarah",
    callEmergency: "Call 113",
    shareLocation: "Share location with responders",

    /* Vault */
    vaultTitle: "Secure Digital Vault",
    vaultBadge: "PREMIUM",
    vaultDesc:
      "Access Sarah's critical info (Blood type, Allergies, Insurance).",
    pinTitle: "Enter Decryption PIN",
    pinHint: "Check your SMS for the code",
    unlockVault: "Unlock Vault",

    /* Footer */
    securityLabel: "AfterMe Security",
    encryptedConnection: "Encrypted Connection",
    connectionId: "ID: #AF-9283-926",
  },
};

export type EmergencyAlertTranslations = typeof emergencyAlertEn;
