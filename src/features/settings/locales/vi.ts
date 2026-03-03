import type { SettingsTranslations } from "./en";

export const settingsVi: SettingsTranslations = {
  accountSettings: {
    nav: {
      personalInfo: "Thông tin cá nhân",
      security: "Bảo mật",
      privacy: "Quyền riêng tư",
      notifications: "Thông báo",
    },
    personal: {
      title: "Thông tin cá nhân",
      subtitle: "Quản lý thông tin cá nhân và liên hệ của bạn.",
      firstName: "Tên",
      lastName: "Họ",
      universityEmail: "Email trường",
      emailHelper:
        "Chúng tôi sẽ dùng email này để khôi phục tài khoản và gửi thông báo quan trọng.",
      phoneNumber: "Số điện thoại",
      saveChanges: "Lưu thay đổi",
    },
    security: {
      title: "Cài đặt bảo mật",
      subtitle: "Cập nhật mật khẩu và bảo vệ tài khoản.",
      password: "Mật khẩu",
      lastChanged: "Thay đổi lần cuối {time}",
      changePassword: "Đổi mật khẩu",
      twoFactor: "Xác thực hai yếu tố",
      twoFactorDesc: "Thêm một lớp bảo mật cho tài khoản của bạn.",
      changePasswordTitle: "Đổi Mật khẩu",
      currentPassword: "Mật khẩu hiện tại",
      newPassword: "Mật khẩu mới",
      confirmPassword: "Xác nhận mật khẩu mới",
      updatePassword: "Cập nhật mật khẩu",
      cancel: "Hủy",
    },
    danger: {
      title: "Vùng nguy hiểm",
      description:
        "Xóa vĩnh viễn thông tin cá nhân và toàn bộ nội dung của bạn khỏi nền tảng AfterMe. Hành động này không thể hoàn tác, vui lòng cân nhắc kỹ.",
      deleteAccount: "Xóa tài khoản & Xóa tất cả dữ liệu",
      confirmTitle: "Xóa Tài khoản?",
      confirmDescription:
        "Hành động này sẽ xóa vĩnh viễn tài khoản và tất cả dữ liệu liên quan. Không thể hoàn tác.",
      confirmButton: "Vâng, Xóa Tài khoản",
      cancel: "Hủy",
    },
  },
};
