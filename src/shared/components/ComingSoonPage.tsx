import { useLanguage } from "@/app/useLanguage";
import Logo from "@/shared/icon/Logo";
import { ClockOutlineIcon } from "@/shared/icon";

interface ComingSoonProps {
  /** The feature / page name to display */
  featureName?: string;
}

const ComingSoonPage = ({ featureName }: ComingSoonProps) => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      {/* Logo */}
      <Logo className="mb-6 h-10 w-auto opacity-60" />

      {/* Illustration */}
      <div className="bg-primary/10 mb-6 flex h-24 w-24 items-center justify-center rounded-full">
        <ClockOutlineIcon
          className="text-primary h-12 w-12"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h2 className="text-text mb-2 text-xl font-bold">
        {featureName
          ? `${featureName} — ${t.comingSoon.title}`
          : t.comingSoon.title}
      </h2>

      {/* Description */}
      <p className="text-text-muted max-w-sm text-sm leading-relaxed">
        {t.comingSoon.description}
      </p>
    </div>
  );
};

export default ComingSoonPage;
