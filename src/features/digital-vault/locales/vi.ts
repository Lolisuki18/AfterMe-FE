import type { VaultTranslations } from "./en";

export const vaultVi: VaultTranslations = {
  vault: {
    title: "Kho lưu trữ số",
    subtitle:
      "Quản lý an toàn tài sản số và hướng dẫn của bạn. Kho này chỉ kích hoạt khi Công tắc an toàn được kích hoạt.",
    addAsset: "Thêm tài sản mới",
    vaultStatus: "Trạng thái kho",
    encryptedItems: "Dữ liệu mã hóa",
    lastBackup: "Sao lưu gần nhất",
    statusActive: "Hoạt động",
    assets: "Tài sản",
    digitalAssets: "Tài sản số",
    username: "Tên người dùng",
    password: "Mật khẩu",
    location: "Vị trí",
    bankingFinance: "Ngân hàng & Tài chính",
    socialMedia: "Mạng xã hội",
    document: "Tài liệu",
    finalMessage: "Tin nhắn cá nhân cuối cùng",
    finalMessageDesc:
      "Tin nhắn này sẽ được gửi đến các liên hệ khẩn cấp cùng với quyền truy cập vào Kho lưu trữ số nếu trạng thái của bạn trở nên không hoạt động.",
    messagePlaceholder: "Viết tin nhắn cá nhân gửi đến người thân...",
    saveMessage: "Lưu tin nhắn",
    securityStatus: "Trạng thái bảo mật",
    endToEnd: "Mã hóa đầu cuối",
    aes256: "Tiêu chuẩn AES-256",
    masterKey: "Khóa chính đã tạo",
    storedLocally: "Lưu trữ cục bộ trên thiết bị",
    beneficiaryPending: "Người thụ hưởng đang chờ",
    contactNeedsVerify: "1 liên hệ cần xác minh",
    vaultAccessProtocol: "Giao thức truy cập kho",
    inactivityTimer: "Hẹn giờ không hoạt động 48h",
    verificationAttempts: "3 lần xác minh",
    autoWipe: "Tự xóa sau 5 lần đăng nhập thất bại",
    vaultAccessors: "Người truy cập kho",
    manage: "Quản lý",
    accessorsDesc:
      "Các liên hệ này sẽ nhận khóa giải mã chỉ sau khi giao thức Công tắc an toàn được kích hoạt hoàn toàn.",

    // Add Asset Modal
    addAssetTitle: "Thêm tài sản mới",
    assetName: "Tên tài sản",
    assetNamePlaceholder: "VD: Đăng nhập ngân hàng",
    category: "Danh mục",
    selectCategory: "Chọn danh mục",
    usernamePlaceholder: "VD:  ninh.morgan",
    passwordPlaceholder: "Nhập mật khẩu",
    locationLabel: "Vị trí tệp",
    locationPlaceholder: "VD: Google Drive / Tài liệu",
    cancel: "Hủy",
    add: "Thêm tài sản",
    assetAdded: "Thêm tài sản thành công!",
    assetAddError: "Thêm tài sản thất bại. Vui lòng thử lại.",
    assetDeleted: "Đã xóa tài sản.",
    messageSaved: "Lưu tin nhắn thành công!",

    // Manage Accessors Modal
    manageAccessors: "Quản lý người truy cập kho",
    manageAccessorsDesc:
      "Chọn liên hệ khẩn cấp sẽ nhận khóa giải mã kho của bạn.",
    accessorAdded: "Đã thêm người truy cập.",
    accessorRemoved: "Đã xóa người truy cập.",
    saveChanges: "Lưu thay đổi",
    close: "Đóng",
    noContactsAvailable:
      "Chưa có liên hệ khẩn cấp. Hãy thêm liên hệ ở trang Liên hệ khẩn cấp trước.",

    // Security Key
    setKeyButton: "Khóa bảo mật",
    setSecurityKeyTitle: "Tạo khóa bảo mật",
    setSecurityKeyDesc: "Tạo khóa để bảo vệ thông tin tài sản của bạn.",
    newKeyPlaceholder: "Nhập khóa bảo mật mới",
    confirmKeyPlaceholder: "Xác nhận khóa bảo mật",
    keyMinLength: "Khóa bảo mật phải có ít nhất 4 ký tự.",
    keyMismatch: "Khóa không khớp. Vui lòng thử lại.",
    keySetSuccess: "Tạo khóa bảo mật thành công!",
    saveKey: "Lưu khóa",

    // Unlock Asset Modal
    unlockAssetTitle: "Mở khóa tài sản",
    unlockAssetDesc: "Nhập khóa bảo mật để xem chi tiết tài sản này.",
    enterSecurityKey: "Nhập khóa bảo mật",
    unlockButton: "Mở khóa",
    keyRequired: "Vui lòng nhập khóa bảo mật.",
    keyIncorrect: "Khóa bảo mật không đúng. Vui lòng thử lại.",
    noKeySetError: "Chưa tạo khóa bảo mật. Vui lòng tạo khóa trước.",
    showDetails: "Hiện chi tiết",
    hideDetails: "Ẩn chi tiết",

    // Delete Confirm Modal
    deleteConfirmTitle: "Xóa tài sản?",
    deleteConfirmDesc:
      'Bạn có chắc chắn muốn xóa "{asset}"? Hành động này không thể hoàn tác.',
    deleteWarning: "Tài sản và tất cả dữ liệu sẽ bị xóa vĩnh viễn.",
    deleteConfirmButton: "Xóa",
  },
};
