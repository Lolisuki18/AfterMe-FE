import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Input } from "@/shared/components";
import { TimePicker } from "@/shared/components/DateTimePicker";
import type { RoutineTime } from "../store/lifestyleStore";

interface QuickAddModalProps {
  open: boolean;
  onClose: () => void;
  section: RoutineTime;
  onAdd: (section: RoutineTime, name: string, time: string) => void;
}

export const QuickAddModal = ({
  open,
  onClose,
  section,
  onAdd,
}: QuickAddModalProps) => {
  const { t } = useLanguage();
  const ls = t.lifestyle;

  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const sectionLabel =
    section === "sunup"
      ? ls.sunup
      : section === "midday"
        ? ls.midday
        : ls.sleeptime;

  const handleSubmit = () => {
    if (!name.trim() || !startTime || !endTime) return;
    onAdd(section, name.trim(), `${startTime} – ${endTime}`);
    setName("");
    setStartTime("");
    setEndTime("");
    onClose();
  };

  const handleClose = () => {
    setName("");
    setStartTime("");
    setEndTime("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={`${ls.quickAddTitle} — ${sectionLabel}`}
      footer={
        <>
          <Button variant="ghost" size="sm" rounded onClick={handleClose}>
            {ls.cancel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            rounded
            onClick={handleSubmit}
            disabled={!name.trim() || !startTime || !endTime}
          >
            {ls.addRoutine}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label={ls.routineName}
          placeholder={ls.routineNamePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-text mb-1.5 block text-sm font-medium">
              {ls.startTime}
            </label>
            <TimePicker
              value={startTime || "09:00"}
              onChange={(val) => setStartTime(val)}
            />
          </div>
          <div>
            <label className="text-text mb-1.5 block text-sm font-medium">
              {ls.endTime}
            </label>
            <TimePicker
              value={endTime || "10:00"}
              onChange={(val) => setEndTime(val)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
