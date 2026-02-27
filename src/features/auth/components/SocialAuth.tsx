import { useLanguage } from "@/app/useLanguage";
import { GoogleIcon } from "../icon/GoogleIcon";
import { GitHubIcon } from "../icon/GitHubIcon";
import { resolveKey } from "../utils/authUtils";

interface SocialAuthProps {
  mode?: "login" | "register";
}

// ─────────────────────────────────────────────────────────────────────────────
export const SocialAuth = ({ mode = "login" }: SocialAuthProps) => {
  const { t } = useLanguage();
  void mode; // reserved for future differentiation

  const handleSocialClick = (provider: string) => {
    alert(resolveKey(t, "auth.social.comingSoon") + ` (${provider})`);
  };

  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="relative flex items-center">
        <div className="border-border flex-grow border-t" />
        <span className="text-text-muted mx-4 flex-shrink text-xs font-medium">
          {t.auth.orContinueWith}
        </span>
        <div className="border-border flex-grow border-t" />
      </div>

      {/* Social buttons */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleSocialClick("Google")}
          className="border-border bg-surface hover:bg-surface-alt text-text flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
        >
          <GoogleIcon />
          Google
        </button>
        <button
          type="button"
          onClick={() => handleSocialClick("GitHub")}
          className="border-border bg-surface hover:bg-surface-alt text-text flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
        >
          <GitHubIcon />
          GitHub
        </button>
      </div>
    </div>
  );
};
