import type { OnboardingTranslations } from "./en";

export const onboardingVi: OnboardingTranslations = {
  onboarding: {
    // ── Shared / Layout ──────────────────────────────────────────────────
    stepOf: "BƯỚC {current} TRÊN {total}",
    percentCompleted: "{percent}% Hoàn thành",
    back: "Quay lại",
    continue: "Tiếp tục",
    next: "Tiếp theo",
    skipForNow: "Bỏ qua",
    completeSetup: "Hoàn tất thiết lập",
    dataEncryptedNote:
      "Dữ liệu của bạn được mã hóa và chỉ chia sẻ trong trường hợp khẩn cấp thực sự.",
    welcomeTitle: "Thiết lập Hồ sơ An toàn",
    welcomeSubtitle:
      "Thông tin này giúp chúng tôi bảo vệ bạn và thông báo cho người thân nếu có sự cố xảy ra.",
    privacyFirst: "Bảo mật Hàng đầu",

    // ── Step 1 – Basic Profile ───────────────────────────────────────────
    step1: {
      title: "Hồ sơ Cơ bản",
      whyTitle: "Tại sao chúng tôi cần thông tin này?",
      whyDescription:
        "Hồ sơ của bạn giúp dịch vụ khẩn cấp nhanh chóng nhận diện và đảm bảo liên hệ nhận được thông tin chính xác.",
      criticalInfoTitle: "Thông tin Quan trọng",
      criticalInfoDesc:
        "Ghi chú y tế được chia sẻ với nhân viên cấp cứu để cung cấp sự chăm sóc tốt hơn.",
      encryptedTitle: "Mã hóa Hoàn toàn",
      encryptedDesc:
        "Mọi dữ liệu được lưu trữ mã hóa trên thiết bị của bạn và không bao giờ được chia sẻ khi chưa có sự đồng ý.",
      testimonialQuote:
        "Thông tin y tế được điền sẵn đã tiết kiệm những phút quý giá tại phòng cấp cứu.",
      testimonialAuthor: "Người dùng AfterMe",
      fullNameLabel: "Họ và Tên",
      fullNameRequired: "*",
      fullNamePlaceholder: "VD: Nguyễn Văn An",
      medicalNoteLabel: "Ghi chú Y tế",
      medicalNoteOptional: "(Tùy chọn)",
      medicalNotePlaceholder: "Dị ứng, nhóm máu, thuốc, bệnh lý…",
      medicalNoteHelper:
        "Chỉ chia sẻ với liên hệ khẩn cấp và nhân viên cứu thương.",
      checkInPreferences: "Thời gian Check-in Ưa thích",
      morning: "Buổi sáng",
      evening: "Buổi tối",
    },

    // ── Step 2 – Check-in Pulse ──────────────────────────────────────────
    step2: {
      title: "Thiết lập nhịp check-in",
      subtitle:
        "Chọn các khung thời gian trong ngày để AfterMe kiểm tra sức khỏe của bạn.",
      whyWeAsk:
        "Chúng tôi sẽ gửi thông báo nhẹ nhàng vào mỗi khung giờ bạn chọn. Không có phản hồi sẽ kích hoạt cảnh báo sau thời gian ân hạn.",
      morning: "Buổi sáng",
      morningTime: "6:00 SA – 9:00 SA",
      afternoon: "Buổi chiều",
      afternoonTime: "12:00 CH – 2:00 CH",
      evening: "Buổi chiều tối",
      eveningTime: "5:00 CH – 8:00 CH",
      night: "Buổi tối",
      nightTime: "9:00 CH – 11:00 CH",
      addCustomTime: "Thêm thời gian tùy chỉnh",
      customTimeTitle: "Thêm thời gian check-in tùy chỉnh",
      customTimeDesc: "Thiết lập khung giờ tùy chỉnh cho thông báo check-in.",
      customLabel: "Tên",
      customLabelPlaceholder: "VD: Tập gym, Giải lao",
      customStartTime: "Giờ bắt đầu",
      customEndTime: "Giờ kết thúc",
      customLabelRequired: "Vui lòng nhập tên cho khung giờ này.",
      customTimeRequired: "Vui lòng chọn cả giờ bắt đầu và kết thúc.",
      customTimeInvalid: "Giờ kết thúc phải sau giờ bắt đầu.",
      customCancel: "Hủy",
      customAdd: "Thêm",
    },

    // ── Step 3 – Emergency Contact ───────────────────────────────────────
    step3: {
      title: "Liên hệ Khẩn cấp",
      subtitle:
        "Thêm người chúng tôi có thể thông báo nếu bạn bỏ lỡ check-in. Họ chỉ được liên hệ sau thời gian ân hạn.",
      required: "Trường này là bắt buộc",
      fullNameLabel: "Họ và Tên",
      fullNamePlaceholder: "VD: Nguyễn Thị Bình",
      relationshipLabel: "Mối quan hệ",
      relationshipPlaceholder: "Chọn mối quan hệ",
      phoneLabel: "Số điện thoại",
      phonePlaceholder: "+84 xxx xxx xxx",
      notifyLabel: "Thông báo liên hệ này",
      notifyDescription:
        "Gửi cảnh báo đến người này nếu bạn bỏ lỡ check-in sau thời gian ân hạn.",
      completeButton: "Hoàn tất Thiết lập",
      encryptedNote:
        "Thông tin liên hệ được mã hóa và lưu trữ an toàn trên thiết bị của bạn.",
      relationships: {
        parent: "Cha / Mẹ",
        sibling: "Anh / Chị / Em",
        spouse: "Vợ / Chồng / Bạn đời",
        friend: "Bạn bè",
        roommate: "Bạn cùng phòng",
        other: "Khác",
      },
    },
  },
};
