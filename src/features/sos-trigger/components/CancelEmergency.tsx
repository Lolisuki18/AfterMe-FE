import { useLanguage } from "../../../app/useLanguage";
import { XIcon } from "@/shared/icon";

interface CancelEmergencyProps {
  onCancel?: () => void;
}

const CancelEmergency = ({ onCancel }: CancelEmergencyProps) => {
  const { t } = useLanguage();
  const s = t.sosTrigger;

  return (
    <button
      type="button"
      onClick={onCancel}
      className="border-border text-text-muted hover:text-text mx-auto inline-flex items-center gap-2 rounded-full border bg-transparent px-6 py-2.5 text-sm font-medium transition"
    >
      <XIcon className="h-4 w-4" />
      {s.cancelLabel}
    </button>
  );
};

export default CancelEmergency;
