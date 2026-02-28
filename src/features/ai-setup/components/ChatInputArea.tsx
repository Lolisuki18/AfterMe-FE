import { useState, type KeyboardEvent } from "react";
import { useLanguage } from "../../../app/useLanguage";
import { PlusCircleIcon, SendIcon } from "../icon";

interface ChatInputAreaProps {
  onSend: (text: string) => void;
}

const ChatInputArea = ({ onSend }: ChatInputAreaProps) => {
  const { t } = useLanguage();
  const a = t.aiSetup;
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-border bg-bg shrink-0 border-t px-4 pt-3 pb-3 sm:px-6">
      <div className="mx-auto flex max-w-3xl items-center gap-2">
        {/* Plus icon */}
        <button
          type="button"
          className="text-text-muted hover:text-text flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition"
        >
          <PlusCircleIcon />
        </button>

        {/* Input */}
        <div className="border-border bg-surface flex flex-1 items-center overflow-hidden rounded-full border pr-1 pl-4">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={a.inputPlaceholder}
            className="text-text placeholder:text-text-muted min-h-[44px] flex-1 bg-transparent text-sm outline-none"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!value.trim()}
            className="bg-primary hover:bg-primary-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition disabled:opacity-40"
          >
            <SendIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Hint */}
      <p className="text-text-muted mt-1.5 text-center text-xs">{a.sendHint}</p>
    </div>
  );
};

export default ChatInputArea;
