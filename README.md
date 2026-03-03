# AfterMe — Frontend

> Ứng dụng nhắc nhở sinh hoạt hàng ngày (ăn uống, uống nước, chăm sóc sức khỏe, ...) kết hợp tính năng đặc biệt về quản lý di sản số cá nhân.

## Tech Stack

| Technology      | Version | Purpose                              |
| --------------- | ------- | ------------------------------------ |
| React           | 19      | UI library                           |
| TypeScript      | 5.7     | Type safety                          |
| Vite            | 6.x     | Build tool & dev server              |
| Tailwind CSS    | 4.2     | Utility-first CSS (với custom theme) |
| React Router    | 7.x     | Client-side routing                  |
| Zustand         | 5.x     | Lightweight state management         |
| Axios           | 1.x     | HTTP client                          |
| React Hook Form | 7.x     | Form state management                |
| Zod             | 4.x     | Schema validation                    |
| Framer Motion   | 12.x    | Animation library                    |
| Lucide React    | 0.575   | Icon library                         |
| MUI Icons       | 7.x     | Material UI icons                    |
| date-fns        | 4.x     | Date utility                         |
| Tippy.js        | 6.x     | Tooltip library                      |
| Vitest          | 4.x     | Unit testing framework               |
| Testing Library | 16.x    | Component testing utilities          |
| Prettier        | 3.x     | Code formatting                      |
| ESLint          | 9.x     | Linting                              |
| Vercel          | —       | Deployment platform                  |

---

## Getting Started

### Prerequisites

- **Node.js** >= 20
- **npm** >= 10

### Installation

```bash
# Clone repository
git clone <repo-url>
cd AfterMe-FE

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Development

```bash
npm run dev          # Start dev server tại http://localhost:3000
```

### Build

```bash
npm run build        # TypeScript check + production build
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run format       # Format all files với Prettier
npm run format:check # Check formatting (CI)
npm run lint         # Run ESLint
```

### Testing

```bash
npm test             # Run Vitest in watch mode
npm run test:run     # Run all tests once (CI)
npm run test:coverage # Run tests with coverage report
```

---

## Project Structure

```
src/
├── app/                        # App configuration & orchestration
│   ├── App.tsx                 # Root component (ErrorBoundary + Providers + Router)
│   ├── router.tsx              # Route definitions (lazy loaded + ProtectedRoute)
│   ├── providers.tsx           # Global providers (ThemeProvider, LanguageProvider)
│   ├── config.ts              # App config từ environment variables
│   ├── ThemeContext.tsx        # Light / Dark mode context
│   ├── LanguageContext.tsx     # i18n context (vi / en)
│   ├── useTheme.ts            # Hook truy cập ThemeContext
│   └── useLanguage.ts         # Hook truy cập LanguageContext
│
├── features/                   # Feature modules (domain-based) — 23 modules
│   ├── auth/                  # Đăng nhập, đăng ký (schemas, services, hooks, utils)
│   ├── dashboard/             # Trang tổng quan chính (interface, types, store)
│   ├── onboarding/            # Luồng thiết lập ban đầu (interface, types, store)
│   ├── home/                  # Trang chủ public
│   ├── landing/               # Landing page marketing
│   ├── pricing/               # Bảng giá
│   ├── subscription/          # Quản lý gói đăng ký
│   ├── settings/              # Cài đặt tài khoản (personal, security, notifications)
│   ├── digital-vault/         # Kho lưu trữ tài sản số
│   ├── emergency-contacts/    # Quản lý liên hệ khẩn cấp
│   ├── emergency-alert/       # Trang cảnh báo khẩn cấp
│   ├── sos-trigger/           # Kích hoạt SOS
│   ├── grace-period/          # Giai đoạn chờ xác nhận (custom hooks)
│   ├── family/                # Dashboard gia đình
│   ├── family-link/           # Liên kết thành viên gia đình
│   ├── lifestyle/             # Trợ lý lối sống
│   ├── wellbeing/             # Sức khỏe tinh thần
│   ├── activity/              # Nhật ký hoạt động
│   ├── reminders/             # Tạo & quản lý nhắc nhở (services, hooks, types)
│   ├── privacy/               # Trung tâm quyền riêng tư
│   ├── referral/              # Giới thiệu bạn bè
│   ├── ai-setup/              # Thiết lập AI cá nhân
│   └── not-found/             # Trang 404
│
├── shared/                     # Chia sẻ giữa các features
│   ├── components/            # UI components (Button, Input, Textarea, Select, Toggle,
│   │                          #   Modal, Header, Footer, LanguageToggle, SettingToggle,
│   │                          #   ProtectedRoute, ErrorBoundary, PageSkeleton)
│   ├── layouts/               # Layout wrappers
│   │   ├── MainLayout         #   Public pages (Header + Footer)
│   │   ├── DashboardLayout    #   Protected pages (Sidebar + Content)
│   │   ├── AuthLayout         #   Login / Register (i18n, design token)
│   │   └── OnboardingLayout   #   Onboarding flow
│   ├── constants/             # Hằng số dùng chung (contact info, ...)
│   ├── icon/                  # 147+ custom SVG icon components
│   └── locales/               # Shared translation keys (en, vi)
│
├── services/                   # Global API layer
│   ├── axios.ts               # Axios instance + interceptors (Bearer token, 401 redirect)
│   └── api.ts                 # Generic CRUD wrapper (get, post, put, patch, delete)
│
├── hooks/                      # Custom React hooks dùng chung
│   ├── useApi.ts              # Generic API call hook (loading, error state)
│   ├── useToggle.ts           # Boolean toggle hook
│   ├── useDocumentTitle.ts    # Reactive document title (SEO-friendly)
│   └── __tests__/             # Unit tests cho hooks
│
├── test/                       # Test infrastructure
│   └── setup.ts               # Vitest setup (jest-dom, localStorage mock)
│
├── locales/                    # Global translations (en, vi)
├── index.css                   # Tailwind CSS entry + custom theme (light/dark)
├── main.tsx                    # App entry point
└── vite-env.d.ts              # Vite environment variable types
```

### Feature Module Convention

Mỗi feature module tuân theo cấu trúc nhất quán:

```
features/<feature-name>/
├── index.ts           # Barrel export — public API duy nhất
├── pages/             # Page components
├── components/        # UI components nội bộ
├── locales/           # Translation keys (en.ts, vi.ts)
├── store/             # Zustand store (nếu cần)
│   └── __tests__/     # Unit tests cho store
├── services/          # API calls riêng (auth, reminders)
├── hooks/             # Custom hooks riêng (auth, grace-period, reminders)
├── schemas/           # Zod validation schemas (auth)
├── types/             # TypeScript types/interfaces
├── interface/         # Data interfaces (dashboard, home, onboarding)
├── data/              # Static/mock data
└── utils/             # Utility functions
```

> Không phải tất cả feature đều có đầy đủ các folder trên — chỉ tạo khi cần thiết.

---

## Routing

Tất cả routes được định nghĩa tại `src/app/router.tsx` với **lazy loading**.

### Public Routes (MainLayout)

| Path         | Page              | Mô tả                    |
| ------------ | ----------------- | ------------------------ |
| `/`          | HomePage          | Trang chủ                |
| `/pricing`   | PricingPage       | Bảng giá                 |
| `/wellbeing` | WellbeingPage     | Sức khỏe tinh thần       |
| `/privacy`   | PrivacyCenterPage | Trung tâm quyền riêng tư |

### Auth Routes (không layout wrapper)

| Path        | Page         |
| ----------- | ------------ |
| `/login`    | LoginPage    |
| `/register` | RegisterPage |

### Onboarding Routes (OnboardingLayout)

| Path          | Page           |
| ------------- | -------------- |
| `/onboarding` | OnboardingPage |

### Dashboard Routes (DashboardLayout — protected)

| Path                               | Page                   |
| ---------------------------------- | ---------------------- |
| `/dashboard`                       | DashboardPage          |
| `/dashboard/settings`              | SettingsPage           |
| `/dashboard/account/personal`      | PersonalInfoPage       |
| `/dashboard/account/security`      | SecurityPage           |
| `/dashboard/account/notifications` | NotificationsPage      |
| `/dashboard/emergency-contacts`    | EmergencyContactsPage  |
| `/dashboard/digital-vault`         | DigitalVaultPage       |
| `/dashboard/lifestyle`             | LifestyleAssistantPage |
| `/dashboard/family`                | FamilyDashboardPage    |
| `/dashboard/activity-log`          | ActivityLogPage        |
| `/dashboard/subscription`          | SubscriptionPage       |
| `/dashboard/referral`              | ReferralPage           |
| `/reminders/new`                   | CreateReminderPage     |

### Standalone Pages (không layout wrapper)

| Path               | Page               |
| ------------------ | ------------------ |
| `/emergency-alert` | EmergencyAlertPage |
| `/grace-period`    | GracePeriodPage    |
| `/landing`         | LandingPage        |
| `/family-link`     | FamilyLinkPage     |
| `/ai-setup`        | AiSetupPage        |
| `/sos-trigger`     | SosTriggerPage     |
| `/404`             | NotFoundPage       |

---

## Theming

Hệ thống hỗ trợ **Light / Dark mode** thông qua CSS custom properties + Tailwind CSS.

### CSS Custom Properties

Định nghĩa tại `src/index.css`, bao gồm:

- **Brand**: `--app-primary`, `--app-primary-hover`, `--app-secondary`, `--app-navy`
- **Surface**: `--app-bg`, `--app-surface`, `--app-surface-alt`
- **Text**: `--app-text`, `--app-text-muted`
- **Border**: `--app-border`
- **Status**: `--app-success`, `--app-warning`, `--app-error`
- **Other**: `--app-accent`, `--app-third`, `--app-gentle`

Tailwind được map qua `@theme` directive, cho phép sử dụng trực tiếp trong className:

```tsx
<div className="bg-surface text-text border-border">
  <span className="text-primary">Highlighted</span>
</div>
```

### Theme Toggle

Sử dụng `useTheme()` hook:

```tsx
const { theme, isDark, toggleTheme } = useTheme();
```

Theme được lưu vào `localStorage` và sync class `dark` lên `<html>`.

---

## Internationalization (i18n)

Hỗ trợ **Tiếng Việt** (mặc định) và **English**.

- Global translations: `src/locales/en.ts`, `src/locales/vi.ts`
- Feature translations: `src/features/<name>/locales/en.ts`, `vi.ts`
- Shared translations: `src/shared/locales/en.ts`, `vi.ts`

Sử dụng `useLanguage()` hook:

```tsx
const { language, t, toggleLanguage } = useLanguage();

return <h1>{t.dashboard.title}</h1>;
```

---

## State Management

Sử dụng **Zustand** cho state management — nhẹ, không boilerplate, tích hợp tốt với React.

### Auth Store (`src/features/auth/store/authStore.ts`)

```tsx
import { useAuthStore } from "@/features/auth/store/authStore";

// Trong React component (reactive)
const { user, isAuthenticated, clearSession } = useAuthStore();

// Ngoài React (non-reactive) — axios interceptor, ProtectedRoute
const token = useAuthStore.getState().token;
```

Store tự động hydrate từ `localStorage` khi khởi tạo và persist sau mỗi login/logout.

> Mỗi feature có thể tạo Zustand store riêng tại `features/<name>/store/`.

---

## API Layer

### Axios Instance (`src/services/axios.ts`)

- Base URL từ `appConfig.apiUrl`
- Timeout: 15 giây
- **Request interceptor**: tự động gắn `Bearer` token từ Zustand auth store
- **Response interceptor**: gọi `clearSession()` và chuyển hướng về `/login` khi nhận 401

### Generic API Helper (`src/services/api.ts`)

```tsx
import { api } from "@/services";

// GET
const users = await api.get<User[]>("/users");

// POST
await api.post("/users", { name: "John" });

// PUT / PATCH / DELETE
await api.put("/users/1", data);
await api.patch("/users/1", partial);
await api.delete("/users/1");
```

### useApi Hook (`src/hooks/useApi.ts`)

```tsx
const { data, isLoading, error, execute } = useApi(userApi.getAll);

useEffect(() => {
  execute();
}, []);
```

---

## Error Handling

### ErrorBoundary

App được bao bọc bởi `ErrorBoundary` tại `App.tsx` — bắt mọi lỗi render và hiển thị fallback UI thay vì màn hình trắng.

```tsx
// Đã được wrap sẵn trong App.tsx
<ErrorBoundary>
  <AppProviders>
    <RouterProvider />
  </AppProviders>
</ErrorBoundary>
```

### ProtectedRoute

Dashboard routes được bảo vệ bởi `ProtectedRoute` — redirect về `/login` nếu chưa đăng nhập, lưu lại intended URL để redirect sau khi login.

---

## Testing

Sử dụng **Vitest** + **Testing Library** cho unit tests.

### Cấu trúc test

```
src/
├── test/setup.ts                                # Global setup (jest-dom, mocks)
├── hooks/__tests__/useToggle.test.ts            # Hook tests
├── hooks/__tests__/useDocumentTitle.test.ts     # Hook tests
└── features/auth/store/__tests__/authStore.test.ts  # Store tests
```

### Chạy tests

```bash
npm test                 # Watch mode (development)
npm run test:run         # Single run (CI/CD)
npm run test:coverage    # Coverage report
```

### Viết test mới

Đặt file `*.test.ts(x)` trong folder `__tests__/` cùng cấp với code cần test:

```
features/<name>/store/__tests__/featureStore.test.ts
features/<name>/hooks/__tests__/useFeature.test.ts
shared/components/__tests__/Button.test.tsx
```

---

## Build Optimization

Cấu hình tại `vite.config.ts`:

- **Code splitting**: manual chunks cho `vendor` (react, react-dom, react-router-dom) và `axios`
- **Minification**: esbuild
- **Source maps**: tắt ở production
- **Chunk size warning**: 1000 KB

---

## Environment Variables

Tạo file `.env.local` (không commit) dựa trên [`.env.example`](.env.example):

| Variable        | Description          | Example                     |
| --------------- | -------------------- | --------------------------- |
| `VITE_API_URL`  | Backend API base URL | `http://localhost:8080/api` |
| `VITE_APP_NAME` | App display name     | `AfterMe`                   |

> Vite chỉ expose biến có prefix `VITE_` ra client. Type definitions tại `src/vite-env.d.ts`.

---

## Path Aliases

Sử dụng alias `@/` thay vì đường dẫn tương đối:

```tsx
// ✅ Good
import { Button } from "@/shared/components";
import { api } from "@/services";
import { useTheme } from "@/app/useTheme";

// ❌ Avoid
import { Button } from "../../../shared/components";
```

Cấu hình tại `vite.config.ts` (`resolve.alias`) và `tsconfig.app.json` (`paths`).

---

## Git Workflow

### Branch Strategy

```
production    ← Deploy chính thức (Vercel Production)
    ↑ PR
  master      ← Staging / integration (Vercel Preview)
    ↑ PR
feature/*     ← Phát triển tính năng (Vercel Preview)
```

| Branch       | Mục đích                      | Deploy                |
| ------------ | ----------------------------- | --------------------- |
| `feature/*`  | Phát triển tính năng          | Preview URL           |
| `master`     | Staging / integration testing | Preview URL (staging) |
| `production` | Production release            | Production domain     |

### Commit Convention

```
feat(scope):     Tính năng mới        → feat(auth): add login form
fix(scope):      Sửa bug              → fix(reminders): fix date picker
refactor(scope): Refactor code        → refactor(api): simplify interceptors
chore:           Config/dependencies   → chore: update tailwind to v4.2
docs:            Documentation        → docs: update README
style:           Code style           → style(dashboard): format components
```

### Flow

```bash
# 1. Tạo feature branch
git checkout master && git pull
git checkout -b feature/ten-tinh-nang

# 2. Develop + commit
git add . && git commit -m "feat(scope): mô tả ngắn"

# 3. Push + tạo PR → master
git push origin feature/ten-tinh-nang

# 4. Sau khi test staging OK → tạo PR: master → production
```

---

## Deployment (Vercel)

### Setup

1. Import repo tại [vercel.com](https://vercel.com)
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Production Branch: `production`

### Environment Variables trên Vercel

Tại **Project Settings → Environment Variables**, thêm biến cho từng môi trường:

| Variable        | Development                 | Preview                           | Production                |
| --------------- | --------------------------- | --------------------------------- | ------------------------- |
| `VITE_API_URL`  | `http://localhost:8080/api` | `https://api-staging.afterme.com` | `https://api.afterme.com` |
| `VITE_APP_NAME` | `AfterMe Dev`               | `AfterMe Staging`                 | `AfterMe`                 |

### SPA Routing

File `vercel.json` đã cấu hình rewrite rule `/((?!assets/).*)` → `/index.html` để React Router hoạt động đúng.

---

## Adding a New Feature

```bash
# 1. Tạo folder structure
mkdir -p src/features/ten-feature/{pages,components,locales,store}

# 2. Tạo barrel export
echo "export { default as TenPage } from './pages/TenPage';" > src/features/ten-feature/index.ts

# 3. Tạo page component
# src/features/ten-feature/pages/TenPage.tsx

# 4. Tạo locales
# src/features/ten-feature/locales/en.ts
# src/features/ten-feature/locales/vi.ts

# 5. Lazy import & thêm route tại src/app/router.tsx
# 6. Export public API qua index.ts (barrel export)
```

> Chỉ tạo thêm `services/`, `hooks/`, `schemas/`, `types/` khi feature thực sự cần.

---

## License

Private — FPT University EXE101 Project
