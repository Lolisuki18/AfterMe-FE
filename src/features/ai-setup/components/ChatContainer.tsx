import { useRef, useEffect } from "react";
import { useLanguage } from "../../../app/useLanguage";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface ChatContainerProps {
  showTyping?: boolean;
}

const ChatContainer = ({ showTyping = true }: ChatContainerProps) => {
  const { t } = useLanguage();
  const a = t.aiSetup;
  const bottomRef = useRef<HTMLDivElement>(null);

  /* Auto‑scroll on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [a.messages.length, showTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-5">
        {/* Timestamp */}
        <p className="text-text-muted text-center text-xs">{a.timestamp}</p>

        {/* Messages */}
        {a.messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            from={msg.from as "bot" | "user"}
            text={msg.text}
          />
        ))}

        {/* Typing indicator */}
        {showTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default ChatContainer;
