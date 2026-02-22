# AfterMe-FE — Hệ thống theme màu & dark mode

## 1. Quản lý màu sắc toàn dự án

- Toàn bộ màu sắc được khai báo trong `src/index.css` dưới dạng CSS variables.
- Dễ dàng thêm, sửa, tuỳ biến màu cho cả light và dark mode.
- Khi thêm màu mới, chỉ cần thêm biến vào `:root` (light) và `.dark` (dark), rồi đăng ký vào `@theme`.

## 2. Sử dụng theme trong code

- Dùng các class Tailwind như `bg-primary`, `text-text`, `border-border`, `bg-surface`, ...
- Màu sẽ tự động đổi theo chế độ sáng/tối.

## 3. Chuyển đổi dark/light mode

- Đã có component `ThemeToggle` (nút chuyển chế độ) ở góc dưới phải.
- Toàn bộ state theme được quản lý qua `ThemeContext`.
- Dùng hook `useTheme()` để lấy trạng thái và chuyển đổi theme:

```tsx
import { useTheme } from "@/app/ThemeContext";
const { isDark, toggleTheme } = useTheme();
```

## 4. Cấu trúc theme

- `src/index.css`: Khai báo token màu, surface, text, border, status.
- `src/app/ThemeContext.tsx`: Context + hook quản lý theme.
- `src/app/providers.tsx`: Wrap `ThemeProvider` cho toàn app.
- `src/shared/components/ThemeToggle.tsx`: Nút chuyển dark/light mode.

## 5. Thêm màu mới

1. Thêm biến vào `:root` và `.dark` trong `src/index.css`.
2. Đăng ký biến vào block `@theme`.
3. Dùng class tương ứng trong Tailwind (`bg-newcolor`, `text-newcolor`, ...).

## 6. Ví dụ sử dụng

```tsx
<div className="bg-surface border-border text-text border">
  <p className="text-text-muted">Phụ đề</p>
</div>
```

---

> Mọi thay đổi về màu sắc sẽ tự động áp dụng cho toàn bộ dự án, không cần sửa từng component.
