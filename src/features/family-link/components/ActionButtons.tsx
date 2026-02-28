import { useLanguage } from "../../../app/useLanguage";
import { Button } from "../../../shared/components";
import { LockIcon } from "../icon";

const ActionButtons = () => {
  const { t } = useLanguage();
  const fl = t.familyLink;

  return (
    <div className="flex flex-col items-center gap-3">
      <Button variant="primary" size="lg" rounded fullWidth>
        {fl.accept}
      </Button>

      <button
        type="button"
        className="text-text-muted hover:text-text text-sm font-medium transition"
      >
        {fl.decline}
      </button>

      <p className="text-text-muted text-xs">{fl.declineHint}</p>

      {/* Footer note */}
      <div className="text-text-muted mt-4 flex items-center gap-1.5 text-xs">
        <LockIcon className="h-3.5 w-3.5" />
        <span>{fl.footerNote}</span>
      </div>
    </div>
  );
};

export default ActionButtons;
