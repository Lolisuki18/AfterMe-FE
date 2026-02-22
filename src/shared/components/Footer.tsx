import { appConfig } from "@/app/config";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Về {appConfig.appName}
            </h3>
            <p className="text-sm text-gray-600">
              Nền tảng quản lý và lưu trữ thông tin quan trọng cho tương lai.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Liên kết
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Bảng giá
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="text-gray-600 hover:text-gray-900">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Liên hệ
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@afterme.com</li>
              <li>Hotline: 1900-xxxx</li>
              <li>Địa chỉ: TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {appConfig.appName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
