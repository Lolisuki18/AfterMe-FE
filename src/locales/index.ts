export { en } from "./en";
export { vi } from "./vi";
export type { Translations } from "./en";

// Text được quản lý tập trung tại en.ts và vi.ts —
// khi cần thêm page mới chỉ cần thêm key vào 2 file này
// và dùng const { t } = useLanguage().
