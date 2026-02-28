import type { ReactNode } from "react";
import { useLanguage } from "../../../app/useLanguage";
import { BotAvatarIcon } from "../icon";

interface ChatMessageProps {
  from: "bot" | "user";
  text: string;
}

const ChatMessage = ({ from, text }: ChatMessageProps) => {
  const { t } = useLanguage();
  const a = t.aiSetup;
  const isBot = from === "bot";

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <div
      className={`flex ${isBot ? "flex-row" : "flex-row-reverse"} items-end gap-2`}
    >
      {children}
    </div>
  );

  return (
    <Wrapper>
      {/* Avatar */}
      {isBot ? (
        <div className="bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
          <BotAvatarIcon className="h-4 w-4" />
        </div>
      ) : (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
          U
        </div>
      )}

      {/* Bubble */}
      <div className="max-w-[75%] space-y-1">
        <span className="text-text-muted text-xs">
          {isBot ? a.botName : a.userName}
        </span>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
            isBot
              ? "bg-surface text-text rounded-bl-sm"
              : "bg-primary rounded-br-sm text-white"
          }`}
        >
          {text}
        </div>
      </div>
    </Wrapper>
  );
};

export default ChatMessage;
