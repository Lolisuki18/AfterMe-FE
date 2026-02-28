import type { AiSetupTranslations } from "./en";

export const aiSetupVi: AiSetupTranslations = {
  aiSetup: {
    brandName: "AfterMe",
    brandSub: "Bạn đồng hành an toàn",
    progressLabel: "Tiến trình cài đặt",
    progressPercent: "65%",
    exitSetup: "Thoát cài đặt",

    timestamp: "Hôm nay, 9:41 SA",
    botName: "Trợ lý AfterMe",
    userName: "Bạn",
    typingLabel: "đang nhập",

    messages: [
      {
        id: "1",
        from: "bot",
        text: "Chào buổi sáng! Để tùy chỉnh kiểm tra an toàn hiệu quả, tôi cần biết một chút về thói quen của bạn. Thời gian nào thường phù hợp nhất để bắt đầu ngày mới?",
      },
      {
        id: "2",
        from: "user",
        text: "Tôi nghĩ buổi sáng thường phù hợp hơn với tôi.",
      },
      {
        id: "3",
        from: "bot",
        text: "Hiểu rồi, buổi sáng nhé. ☀️ Thế 8:00 SA thì sao? Hay bạn muốn muộn hơn một chút để uống cà phê trước?",
      },
    ],

    quickReplies: [
      "Vâng, 8:00 SA được",
      "Muộn hơn một chút",
      "Giúp tôi quyết định",
      "Hôm nay không",
    ],

    inputPlaceholder: "Nhập câu trả lời...",
    sendHint: "Nhấn Enter để gửi",
  },
};
