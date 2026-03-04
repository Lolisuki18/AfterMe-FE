# AfterMe — Frontend

Ứng dụng nhắc nhở sinh hoạt hàng ngày kết hợp quản lý di sản số cá nhân.

## Tech Stack

| Technology      | Version | Purpose                       |
| --------------- | ------- | ----------------------------- |
| React           | 19      | UI library                    |
| TypeScript      | 5.7     | Type safety                   |
| Vite            | 6.x     | Build tool & dev server       |
| Tailwind CSS    | 4.x     | Utility-first CSS             |
| React Router    | 7.x     | Client-side routing           |
| Zustand         | 5.x     | State management              |
| Framer Motion   | 12.x    | Animations & page transitions |
| Axios           | 1.x     | HTTP client                   |
| React Hook Form | 7.x     | Form state management         |
| Zod             | 4.x     | Schema validation             |
| date-fns        | 4.x     | Date utilities                |
| Lucide React    | 0.575   | Icon library                  |
| Vitest          | 4.x     | Unit testing                  |
| Testing Library | 16.x    | Component testing             |

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
```

## Scripts

| Command                 | Description                                  |
| ----------------------- | -------------------------------------------- |
| `npm run dev`           | Start dev server tại `http://localhost:3000` |
| `npm run build`         | TypeScript check + production build          |
| `npm run preview`       | Preview production build locally             |
| `npm run lint`          | Run ESLint                                   |
| `npm run format`        | Format toàn bộ files với Prettier            |
| `npm run format:check`  | Check formatting (dùng cho CI)               |
| `npm test`              | Vitest watch mode (development)              |
| `npm run test:run`      | Chạy tất cả tests một lần (CI)               |
| `npm run test:coverage` | Chạy tests với coverage report               |

## Environment Variables

| Variable        | Example                     |
| --------------- | --------------------------- |
| `VITE_API_URL`  | `http://localhost:8080/api` |
| `VITE_APP_NAME` | `AfterMe`                   |

## Project Structure

```
src/
├── app/          # Router, providers, theme/language context
├── features/     # Feature modules (auth, dashboard, reminders, ...)
├── shared/       # Layouts, components, icons, locales, constants
├── services/     # Axios instance + generic API helper
├── hooks/        # Shared custom hooks
└── locales/      # Global i18n (en / vi)
```

Each feature follows the convention:

```
features/<name>/
├── index.ts       # Barrel export
├── pages/
├── components/
├── locales/       # en.ts, vi.ts
└── store/         # Zustand (if needed)
```

## Branch Strategy

```
production  ← production deploy
  master    ← staging / integration
  feature/* ← development
```

## License

Private — FPT University EXE101
