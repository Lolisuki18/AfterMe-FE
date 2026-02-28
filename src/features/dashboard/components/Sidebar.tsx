import { NavLink } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import Logo from "@/shared/icon/Logo";
import { XIcon } from "@/shared/icon";
import {
  HomeIcon,
  SettingsIcon,
  BellIcon,
  UserIcon,
  ShieldIcon,
} from "../icon";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ open = false, onClose }: SidebarProps) => {
  const { t } = useLanguage();
  const s = t.dashboard.sidebar;

  const NAV_LINKS = [
    { label: s.home, to: "/dashboard", icon: HomeIcon },
    { label: s.safetySettings, to: "/dashboard/settings", icon: SettingsIcon },
    { label: s.reminders, to: "/reminders/new", icon: BellIcon },
    { label: s.account, to: "/dashboard/account", icon: UserIcon },
  ];

  return (
    <>
      {/* Backdrop — mobile only */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`bg-surface fixed inset-y-0 left-0 z-50 flex w-64 flex-col transition-transform duration-200 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo + Safety Hub */}
        <div className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <ShieldIcon className="text-primary h-5 w-5" />
            <div className="leading-tight">
              <Logo className="h-6 w-auto" />
              <p className="text-text-muted text-[10px] font-medium tracking-wide">
                {s.safetyHub}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-text-muted hover:text-text lg:hidden"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mt-4 flex-1 space-y-1 px-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/dashboard"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-muted hover:bg-surface-alt hover:text-text"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <link.icon
                    className={`h-[18px] w-[18px] ${isActive ? "text-white" : ""}`}
                  />
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User info at bottom */}
        <div className="border-border border-t px-4 py-4">
          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div className="bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <UserIcon className="text-primary h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-text truncate text-sm font-medium">
                Alex Morgan
              </p>
              <p className="text-text-muted truncate text-xs">
                {s.studentPlan}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
