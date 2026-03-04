import { useState } from "react";
import { useLanguage } from "../../../app/useLanguage";
import { Button } from "../../../shared/components";
import {
  CopyIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  EmailIcon,
} from "@/shared/icon";

const MOCK_LINK = "https://afterme.app/ref/sarah-m-2024";

const ShareWidget = () => {
  const { t } = useLanguage();
  const r = t.referral;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(MOCK_LINK);
    } catch {
      /* fallback – select text */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: <TwitterIcon />, label: r.twitter },
    { icon: <FacebookIcon />, label: r.facebook },
    { icon: <InstagramIcon />, label: r.instagram },
    { icon: <EmailIcon />, label: r.email },
  ];

  return (
    <div className="border-border bg-surface rounded-2xl border p-5 sm:p-6">
      <h2 className="text-text text-lg font-semibold">{r.shareTitle}</h2>
      <p className="text-text-muted mt-1 text-sm">{r.shareSubtitle}</p>

      {/* Copy link row */}
      <div className="mt-4 flex items-center gap-2">
        <div className="border-border bg-surface-alt text-text-muted flex-1 truncate rounded-lg border px-3 py-2.5 text-sm select-all">
          {MOCK_LINK}
        </div>
        <Button
          variant={copied ? "secondary" : "primary"}
          size="md"
          rounded
          leftIcon={<CopyIcon className="h-4 w-4" />}
          onClick={handleCopy}
        >
          {copied ? r.copied : r.copyLink}
        </Button>
      </div>

      {/* Social share buttons */}
      <div className="mt-4 flex items-center gap-3">
        {socials.map((s) => (
          <button
            key={s.label}
            type="button"
            className="border-border bg-surface-alt text-text-muted hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full border transition hover:text-white"
            title={s.label}
          >
            {s.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShareWidget;
