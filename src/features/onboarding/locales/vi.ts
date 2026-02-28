import type { OnboardingTranslations } from "./en";

export const onboardingVi: OnboardingTranslations = {
  onboarding: {
    // ── Shared / Layout ──────────────────────────────────────────────────
    stepOf: "BƯỚC {current} TRÊN {total}",
    percentCompleted: "{percent}% Hoàn thành",
    welcomeTitle: "Chào mừng đến với AfterMe",
    welcomeSubtitle:
      "Hãy thiết lập hồ sơ an toàn của bạn trong 3 bước đơn giản.",
    privacyFirst: "Quyền riêng tư",
    back: "Quay lại",
    next: "Tiếp: Thời gian check-in",
    continue: "Tiếp tục",
    skipForNow: "Bỏ qua",
    completeSetup: "Hoàn tất thiết lập",
    saveAndExit: "Lưu & Thoát",
    helpAndSupport: "Trợ giúp & Hỗ trợ",

    // ── Footer links ──────────────────────────────────────────────────
    termsOfService: "Điều khoản dịch vụ",
    privacyPolicy: "Chính sách bảo mật",
    helpCenter: "Trung tâm trợ giúp",
    dataEncryptedNote:
      "Dữ liệu của bạn được mã hóa và chỉ chia sẻ trong trường hợp khẩn cấp thực sự.",

    // ── Step 1 – Basic Profile ───────────────────────────────────────
    step1: {
      title: "Hồ sơ cơ bản",
      whyTitle: "Tại sao cần thông tin này?",
      whyDescription:
        "Hồ sơ cơ bản giúp nhân viên cứu hộ xác định bạn nhanh chóng nếu có cảnh báo. Chúng tôi lưu trữ mã hóa cục bộ trên thiết bị của bạn.",
      criticalInfoTitle: "Thông tin quan trọng",
      criticalInfoDesc: "Chia sẻ dị ứng hoặc tình trạng sức khỏe.",
      encryptedTitle: "Mã hóa đầu cuối",
      encryptedDesc: "Chỉ bạn và liên hệ của bạn mới xem được.",
      testimonialQuote:
        '"AfterMe giúp tôi an tâm khi đi bộ về nhà muộn từ thư viện."',
      testimonialAuthor: "Sarah J., Sinh viên",
      fullNameLabel: "Họ và tên",
      fullNameRequired: "*",
      fullNamePlaceholder: "VD: Nguyễn Văn A",
      medicalNoteLabel: "Ghi chú y tế / Giới thiệu",
      medicalNoteOptional: "Tùy chọn",
      medicalNotePlaceholder:
        "Thông tin y tế quan trọng (VD: Hen suyễn, Tiểu đường) hoặc đôi nét về bạn...",
      medicalNoteHelper:
        "Thông tin này sẽ được chia sẻ với liên hệ khẩn cấp khi có cảnh báo.",
      checkInPreferences: "Ưu tiên check-in",
      morning: "Buổi sáng",
      evening: "Buổi tối",
    },

    // ── Step 2 – Check-in Pulse ──────────────────────────────────────
    step2: {
      title: "Thiết lập nhịp check-in",
      subtitle:
        "Chúng tôi không cần giờ chính xác. Chỉ cần chọn khung giờ bạn thường hoạt động để chúng tôi biết khi nào cần kiểm tra.",
      whyWeAsk: "Tại sao chúng tôi hỏi? (Đây là kiểm tra nhịp thụ động)",
      morning: "Buổi sáng",
      morningTime: "Khoảng 8:00 SA - 10:00 SA",
      afternoon: "Buổi trưa",
      afternoonTime: "Khoảng 12:00 CH - 2:00 CH",
      evening: "Buổi chiều",
      eveningTime: "Khoảng 6:00 CH - 8:00 CH",
      night: "Ban đêm",
      nightTime: "Khoảng 10:00 CH - 12:00 SA",
      addCustomTime: "Thêm khung giờ tùy chỉnh",
    },

    // ── Step 3 – Emergency Contact ───────────────────────────────────
    step3: {
      title: "Liên hệ khẩn cấp",
      subtitle:
        "Thêm liên hệ tin cậy sẽ được thông báo ngay lập tức trong trường hợp khẩn cấp. Chúng tôi khuyên bạn thêm phụ huynh hoặc bạn thân.",
      fullNameLabel: "Họ và tên",
      fullNamePlaceholder: "VD: Trần Thị B",
      relationshipLabel: "Mối quan hệ",
      relationshipPlaceholder: "Chọn mối quan hệ",
      phoneLabel: "Số điện thoại",
      phonePlaceholder: "+84 912 345 678",
      notifyTitle: "Thông báo cho họ tôi đã tham gia AfterMe",
      notifyDesc: "Chúng tôi sẽ gửi SMS an toàn giới thiệu ứng dụng.",
      emergencyContact: "Liên hệ khẩn cấp",
      relationships: {
        parent: "Phụ huynh",
        sibling: "Anh chị em",
        spouse: "Vợ / Chồng",
        friend: "Bạn thân",
        roommate: "Bạn cùng phòng",
        other: "Khác",
      },
    },
  },
};
