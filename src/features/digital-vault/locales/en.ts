export const vaultEn = {
  vault: {
    title: "Digital Vault",
    subtitle:
      "Securely manage your digital assets and instructions. This vault activates only when your Dead Man Switch triggers.",
    addAsset: "Add New Asset",

    // Stats
    vaultStatus: "Vault Status",
    encryptedItems: "Encrypted Items",
    lastBackup: "Last Backup",
    statusActive: "Active",
    assets: "Assets",

    // Digital Assets
    digitalAssets: "Digital Assets",
    username: "Username",
    password: "Password",
    location: "Location",

    // Asset types
    bankingFinance: "Banking & Finance",
    socialMedia: "Social Media",
    document: "Document",

    // Final message
    finalMessage: "Final Personal Message",
    finalMessageDesc:
      "This message will be sent to your designated emergency contacts along with access to your Digital Vault if your status becomes inactive.",
    messagePlaceholder: "Write a personal message to your loved ones...",
    saveMessage: "Save Message",

    // Sidebar
    securityStatus: "Security Status",
    endToEnd: "End-to-End Encrypted",
    aes256: "AES-256 standard",
    masterKey: "Master Key Generated",
    storedLocally: "Stored locally on device",
    beneficiaryPending: "Beneficiary Pending",
    contactNeedsVerify: "1 contact needs verification",

    vaultAccessProtocol: "Vault Access Protocol",
    inactivityTimer: "48hr Inactivity Timer",
    verificationAttempts: "3 Verification Attempts",
    autoWipe: "Auto-wipe after 5 failed logins",

    vaultAccessors: "Vault Accessors",
    manage: "Manage",
    accessorsDesc:
      "These contacts will receive your decryption key only after the Dead Man Switch protocol is fully activated.",

    // Add Asset Modal
    addAssetTitle: "Add New Asset",
    assetName: "Asset Name",
    assetNamePlaceholder: "e.g. Chase Bank Login",
    category: "Category",
    selectCategory: "Select a category",
    usernamePlaceholder: "e.g. alex.morgan",
    passwordPlaceholder: "Enter password",
    locationLabel: "File Location",
    locationPlaceholder: "e.g. Google Drive / Documents",
    cancel: "Cancel",
    add: "Add Asset",
    assetAdded: "Asset added successfully!",
    assetAddError: "Failed to add asset. Please try again.",
    assetDeleted: "Asset deleted.",
    messageSaved: "Message saved successfully!",

    // Manage Accessors Modal
    manageAccessors: "Manage Vault Accessors",
    manageAccessorsDesc:
      "Select emergency contacts who should receive your vault decryption key.",
    accessorAdded: "Accessor added.",
    accessorRemoved: "Accessor removed.",
    saveChanges: "Save Changes",
    close: "Close",
    noContactsAvailable:
      "No emergency contacts available. Add contacts in the Emergency Contacts page first.",
  },
};

export type VaultTranslations = typeof vaultEn;
