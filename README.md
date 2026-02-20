# AfterMe — Frontend

> Dashboard quản lý tài khoản người dùng.

## Tech Stack

| Technology   | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| React        | 19      | UI library              |
| TypeScript   | 5.7     | Type safety             |
| Vite         | 6.x     | Build tool & dev server |
| Tailwind CSS | 4.2     | Utility-first CSS       |
| React Router | 7.x     | Client-side routing     |
| Axios        | 1.x     | HTTP client             |
| Prettier     | 3.x     | Code formatting         |
| ESLint       | 9.x     | Linting                 |
| Vercel       | —       | Deployment platform     |

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
npm run dev          # Start dev server at http://localhost:3000
```

### Build

```bash
npm run build        # TypeScript check + production build
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run format       # Format all files with Prettier
npm run format:check # Check formatting (CI)
npm run lint         # Run ESLint
```

## Project Structure

```
src/
├── app/                        # App configuration & orchestration
│   ├── App.tsx                 # Root component
│   ├── router.tsx              # Route definitions (lazy loaded)
│   ├── providers.tsx           # Global providers (React Query, Auth, etc.)
│   └── config.ts              # App config from environment variables
│
├── features/                   # Feature modules (domain-based)
│   ├── auth/
│   │   ├── pages/             # Page components
│   │   ├── services/          # API calls cho feature này
│   │   └── index.ts           # Public API (barrel export)
│   ├── dashboard/
│   │   ├── pages/
│   │   └── index.ts
│   └── user/
│       ├── pages/
│       ├── services/
│       └── index.ts
│
├── shared/                     # Shared across all features
│   ├── components/            # Reusable UI components (Button, Input...)
│   └── layouts/               # Layout wrappers (DashboardLayout)
│
├── services/                   # Global API layer
│   ├── axios.ts               # Axios instance + interceptors
│   └── api.ts                 # Generic CRUD helper
│
├── hooks/                      # Custom React hooks
│   ├── useApi.ts              # Generic API call hook
│   └── useToggle.ts           # Boolean toggle hook
│
├── index.css                   # Tailwind CSS entry
├── main.tsx                    # App entry point
└── vite-env.d.ts              # Environment variable types
```

### Architecture Principles

- **Feature-Based Architecture** — Mỗi domain (auth, user, dashboard) là một module độc lập
- **Barrel Exports** — Mỗi feature expose public API qua `index.ts`, tránh import trực tiếp internal files
- **Lazy Loading** — Tất cả pages được lazy load để giảm initial bundle size
- **Separation of Concerns** — `app/` chỉ lo routing/config, `features/` lo business, `shared/` lo UI chung

## Environment Variables

Tạo file `.env.local` (không commit) dựa trên [`.env.example`](.env.example):

| Variable        | Description          | Example                     |
| --------------- | -------------------- | --------------------------- |
| `VITE_API_URL`  | Backend API base URL | `http://localhost:8080/api` |
| `VITE_APP_NAME` | App display name     | `AfterMe`                   |

> Vite chỉ expose biến có prefix `VITE_` ra client. Xem type definitions tại `src/vite-env.d.ts`.

## Path Aliases

Import sử dụng alias `@/` thay vì đường dẫn tương đối:

```tsx
// ✅ Good
import { Button } from "@/shared/components";
import { userApi } from "@/features/user/services/userApi";

// ❌ Avoid
import { Button } from "../../../shared/components";
```

Cấu hình tại `vite.config.ts` (resolve.alias) và `tsconfig.app.json` (paths).

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
fix(scope):      Sửa bug              → fix(user): fix email validation
refactor(scope): Refactor code        → refactor(api): simplify interceptors
chore:           Config/dependencies   → chore: update tailwind to v4.2
docs:            Documentation        → docs: update README
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

## Deployment (Vercel)

### Setup

1. Import repo trên [vercel.com](https://vercel.com)
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

File `vercel.json` đã cấu hình rewrite để React Router hoạt động đúng trên Vercel.

## Adding a New Feature

```bash
# 1. Tạo folder structure
mkdir -p src/features/ten-feature/{pages,services,components,types}

# 2. Tạo các file cần thiết
touch src/features/ten-feature/index.ts
touch src/features/ten-feature/pages/TenPage.tsx
touch src/features/ten-feature/services/tenApi.ts

# 3. Thêm route tại src/app/router.tsx
# 4. Export public API qua index.ts
```

## License

Private — FPT University EXE101 Project
