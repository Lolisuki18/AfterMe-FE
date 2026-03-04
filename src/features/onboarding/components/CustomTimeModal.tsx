import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Input, Button } from "@/shared/components";
import { ClockIcon } from "@/shared/icon";

interface CustomTimeModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: { label: string; startTime: string; endTime: string }) => void;
}

export const CustomTimeModal = ({
  open,
  onClose,
  onAdd,
}: CustomTimeModalProps) => {
  const { t } = useLanguage();
  const s = t.onboarding.step2;

  const [label, setLabel] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!label.trim()) {
      setError(s.customLabelRequired);
      return;
    }
    if (!startTime || !endTime) {
      setError(s.customTimeRequired);
      return;
    }
    if (startTime >= endTime) {
      setError(s.customTimeInvalid);
      return;
    }
    onAdd({ label: label.trim(), startTime, endTime });
    reset();
  };

  const reset = () => {
    setLabel("");
    setStartTime("");
    setEndTime("");
    setError("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
            <ClockIcon className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="text-text text-base font-bold">
              {s.customTimeTitle}
            </h3>
            <p className="text-text-muted text-xs">{s.customTimeDesc}</p>
          </div>
        </div>

        {/* Label */}
        <div>
          <label className="text-text mb-1.5 block text-sm font-medium">
            {s.customLabel}
          </label>
          <Input
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
              setError("");
            }}
            placeholder={s.customLabelPlaceholder}
          />
        </div>

        {/* Time range */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-text mb-1.5 block text-sm font-medium">
              {s.customStartTime}
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => {
                setStartTime(e.target.value);
                setError("");
              }}
              className="border-border bg-surface text-text focus:border-primary focus:ring-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1"
            />
          </div>
          <div>
            <label className="text-text mb-1.5 block text-sm font-medium">
              {s.customEndTime}
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => {
                setEndTime(e.target.value);
                setError("");
              }}
              className="border-border bg-surface text-text focus:border-primary focus:ring-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1"
            />
          </div>
        </div>

        {error && <p className="text-xs font-medium text-red-400">{error}</p>}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={handleClose}>
            {s.customCancel}
          </Button>
          <Button onClick={handleAdd}>{s.customAdd}</Button>
        </div>
      </div>
    </Modal>
  );
};
