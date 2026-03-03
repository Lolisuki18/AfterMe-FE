import { BotAvatarIcon } from "@/shared/icon";

const TypingIndicator = () => (
  <div className="flex items-end gap-2">
    {/* Bot avatar */}
    <div className="bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
      <BotAvatarIcon className="h-4 w-4" />
    </div>

    {/* Dots bubble */}
    <div className="bg-surface flex items-center gap-1 rounded-2xl rounded-bl-sm px-4 py-3">
      <span className="bg-text-muted h-2 w-2 animate-bounce rounded-full [animation-delay:0ms]" />
      <span className="bg-text-muted h-2 w-2 animate-bounce rounded-full [animation-delay:150ms]" />
      <span className="bg-text-muted h-2 w-2 animate-bounce rounded-full [animation-delay:300ms]" />
    </div>
  </div>
);

export default TypingIndicator;
