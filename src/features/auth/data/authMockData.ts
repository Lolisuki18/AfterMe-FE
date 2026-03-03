// ─── Static mock data for the Auth feature ───────────────────────────────────

export interface SocialProvider {
  id: string;
  label: string;
  icon: string; // SVG path id or simple key
}

export const SOCIAL_PROVIDERS: SocialProvider[] = [
  { id: "google", label: "Google", icon: "google" },
  { id: "github", label: "GitHub", icon: "github" },
];

// Default admin user when LocalStorage has no registered users
export const MOCK_USER = {
  id: "mock-001",
  name: "Admin",
  email: "admin@afterme.app",
  password: "123456",
};

// ─── Branding quotes shown on the right panel ────────────────────────────────
export interface BrandingSlide {
  quote: string;
  author: string;
}

export const BRANDING_SLIDES: BrandingSlide[] = [
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote:
      "AfterMe helps you remember the moments that matter — long after they happen.",
    author: "AfterMe Team",
  },
  {
    quote:
      "Grief is the price we pay for love. Make sure every memory is worth holding on to.",
    author: "Queen Elizabeth II",
  },
];
