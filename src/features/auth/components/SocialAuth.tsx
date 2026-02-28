import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components/Button";
import { GoogleIcon } from "../icon/GoogleIcon";
import { AppleIcon } from "../icon/AppleIcon";

// ─────────────────────────────────────────────────────────────────────────────
export const SocialAuth = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="relative flex items-center">
        <div className="border-border grow border-t" />
        <span className="text-text-muted mx-4 shrink text-xs font-medium">
          {t.auth.orContinueWith}
        </span>
        <div className="border-border grow border-t" />
      </div>

      {/* Social buttons */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          leftIcon={<GoogleIcon className="h-5 w-5" />}
        >
          {t.auth.login.google}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          leftIcon={<AppleIcon className="h-5 w-5" />}
        >
          {t.auth.login.apple}
        </Button>
      </div>
    </div>
  );
};
