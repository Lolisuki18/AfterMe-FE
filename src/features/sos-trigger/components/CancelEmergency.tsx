import { useLanguage } from "../../../app/useLanguage";
import { XIcon } from "@/shared/icon";

const CancelEmergency = () => {
  const { t } = useLanguage();
  const s = t.sosTrigger;

  return (
    <button
      type="button"
      className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-700 bg-transparent px-6 py-2.5 text-sm font-medium text-gray-400 transition hover:border-gray-500 hover:text-white"
    >
      <XIcon className="h-4 w-4" />
      {s.cancelLabel}
    </button>
  );
};

export default CancelEmergency;
