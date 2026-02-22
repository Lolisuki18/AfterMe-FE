import { appConfig } from "@/app/config";

export const Footer = () => {
  return (
    <footer className="border-border bg-surface border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              Về {appConfig.appName}
            </h3>
            <p className="text-text-muted text-sm">
              Nền tảng quản lý và lưu trữ thông tin quan trọng cho tương lai.
            </p>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-text-muted hover:text-text">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/services" className="text-text-muted hover:text-text">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-text-muted hover:text-text">
                  Bảng giá
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="text-text-muted hover:text-text">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-muted hover:text-text">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-text-muted hover:text-text">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">Liên hệ</h3>
            <ul className="text-text-muted space-y-2 text-sm">
              <li>Email: info@afterme.com</li>
              <li>Hotline: 1900-xxxx</li>
              <li>Địa chỉ: TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
        <div className="border-border text-text-muted mt-8 border-t pt-8 text-center text-sm">
          © {new Date().getFullYear()} {appConfig.appName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
