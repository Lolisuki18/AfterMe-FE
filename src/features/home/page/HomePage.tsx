import { Button } from "@/shared/components";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-text mb-4 text-4xl font-bold">
          Chào mừng đến với AfterMe
        </h1>
        <p className="text-text-muted mb-8 text-lg">
          Nền tảng quản lý và lưu trữ thông tin quan trọng cho tương lai
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="bg-primary hover:bg-primary-hover rounded-md px-6 py-3 text-white"
          >
            Đăng nhập
          </a>
          <a
            href="/register"
            className="border-border bg-surface text-text hover:bg-surface-alt rounded-md border px-6 py-3"
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-text mb-6 text-3xl font-bold">Trang chủ</h1>

        <div className="flex gap-4">
          <Button variant="primary">Nút Primary (#4FB6AC)</Button>
          <Button variant="secondary">Nút Secondary (#1E3A5F)</Button>
          <Button variant="ghost">Nút Ghost</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
