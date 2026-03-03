import { useLanguage } from "../../../app/useLanguage";
import {
  SetupHeader,
  ChatContainer,
  QuickReplyChips,
  ChatInputArea,
} from "../components";
import { SettingToggle } from "../../../shared/components";

const AiSetupPage = () => {
  const { t } = useLanguage();
  const a = t.aiSetup;

  const handleQuickReply = (chip: string) => {
    // In production this would send the chip text as a user message
    console.log("Quick reply selected:", chip);
  };

  const handleSend = (text: string) => {
    // In production this would add user message + trigger AI response
    console.log("Send:", text);
  };

  return (
    <div className="bg-bg flex h-screen flex-col">
      {/* Sticky header */}
      <SetupHeader />

      {/* Scrollable chat area */}
      <ChatContainer />

      {/* Quick replies */}
      <div className="shrink-0 pb-2">
        <QuickReplyChips chips={a.quickReplies} onSelect={handleQuickReply} />
      </div>

      {/* Input bar */}
      <ChatInputArea onSend={handleSend} />

      {/* Theme / Language toggle */}
      <SettingToggle />
    </div>
  );
};

export default AiSetupPage;
