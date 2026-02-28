import { useLanguage } from "../../../app/useLanguage";
import { ShieldRedIcon } from "@/shared/icon";

const EmergencyHeader = () => {
  const { t } = useLanguage();
  const s = t.sosTrigger;

  const links = [
    s.navDashboard,
    s.navContacts,
    s.navSafetyCheck,
    s.navSettings,
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 sm:px-10">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <ShieldRedIcon className="h-6 w-6 text-red-500" />
        <span className="text-lg font-bold text-white">{s.brandName}</span>
      </div>

      {/* Nav links – hidden on mobile */}
      <nav className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Profile pill */}
      <button
        type="button"
        className="rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        {s.navProfile}
      </button>
    </header>
  );
};

export default EmergencyHeader;
