import type { OnboardingTranslations } from "./en";

export const onboardingVi: OnboardingTranslations = {
  onboarding: {
    step: "Bước",
    of: "trong",
    percentComplete: "% Hoàn thành",
    back: "← Quay lại",
    next: "Tiếp theo →",
    getStarted: "Bắt đầu",
    goToDashboard: "Đến Bảng điều khiển →",

    // Step 1 – Welcome
    welcome: {
      title: "Chào mừng đến với AfterMe",
      subtitle:
        "Hãy thiết lập mạng lưới an toàn cá nhân của bạn. Chúng tôi sẽ giúp bạn cấu hình lịch check-in và liên hệ khẩn cấp trong vài phút.",
      coverTitle: "Những gì chúng tôi sẽ thiết lập:",
      items: [
        "Thông tin hồ sơ cơ bản của bạn",
        "Thiết lập lịch check-in hàng ngày",
        "Xác định ngưỡng không hoạt động",
        "Thêm liên hệ tin cậy",
      ],
    },

    // Step 2 – Profile
    profile: {
      title: "Hãy để chúng tôi hiểu bạn hơn",
      subtitle: "Chúng tôi cần một vài thông tin để cá nhân hóa trải nghiệm.",
      firstName: "Họ",
      lastName: "Tên",
      email: "Email",
      phone: "Số điện thoại",
      hearAboutUs: "Bạn biết đến chúng tôi qua đâu?",
      hearAboutUsPlaceholder: "Chọn một lựa chọn",
      hearOptions: [
        "Mạng xã hội",
        "Bạn bè hoặc gia đình",
        "Công cụ tìm kiếm",
        "Quảng cáo",
        "Khác",
      ],
      required: "*",
      optional: "(Tùy chọn)",
    },

    // Step 3 – Check-in
    checkin: {
      title: "Thiết lập lịch check-in hàng ngày",
      subtitle: "Chúng tôi cần một vài thông tin để cá nhân hóa trải nghiệm.",
      frequency: "Tần suất check-in",
      daily: "Hàng ngày",
      weekly: "Hàng tuần",
      time: "Giờ check-in",
      am: "SA",
      pm: "CH",
    },

    // Step 4 – Inactivity trigger
    trigger: {
      title: "Xác định ngưỡng không hoạt động",
      subtitle:
        "Nếu bạn bỏ lỡ các lần check-in trong một khoảng thời gian nhất định, chúng tôi sẽ cho rằng bạn không có mặt và kích hoạt kế hoạch di sản của bạn.",
      label: "Kích hoạt Chế độ Di sản sau:",
      day: "1 ngày",
      days3: "3 ngày",
      days7: "7 ngày",
      daysChoose: "Thời gian không hoạt động:",
      day1: "ngày",
      days: "ngày",
    },

    // Step 5 – Trusted contact
    contact: {
      title: "Thêm liên hệ tin cậy",
      subtitle:
        "Nếu bạn bỏ lỡ các lần check-in trong một khoảng thời gian nhất định, chúng tôi sẽ kích hoạt kế hoạch di sản.",
      name: "Tên",
      email: "Email",
      phone: "Số điện thoại",
      note: "Liên hệ tin cậy của bạn sẽ được xác lập sau khi họ xác nhận qua email",
      skip: "Bỏ qua bước này",
      required: "*",
    },

    // Step 6 – Complete
    complete: {
      title: "Bạn đã sẵn sàng!",
    },
  },
};
