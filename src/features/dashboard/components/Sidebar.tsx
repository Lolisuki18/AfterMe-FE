import { NavLink } from "react-router-dom";
import Logo from "@/shared/icon/Logo";
import { XIcon } from "@/shared/icon";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SIDEBAR_LINK } from "../data";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ open = false, onClose }: SidebarProps) => {
  return (
    <>
      {/* Backdrop — mobile only */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`border-border bg-surface fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r transition-transform duration-200 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo + close */}
        <div className="border-border flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Logo className="h-9 w-auto" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-text-muted hover:text-text md:hidden"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 space-y-1 p-4">
          {SIDEBAR_LINK.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-muted hover:bg-surface-alt hover:text-text"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* User info + logout */}
        <div className="border-border border-t p-4">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <AccountCircleOutlinedIcon className="text-text-muted" />
            <div className="min-w-0 flex-1">
              <p className="text-text truncate text-sm font-medium">NA</p>
              <p className="text-text-muted truncate text-xs">
                user@afterme.com
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-text-muted hover:bg-error/10 hover:text-error mt-1 flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <LogoutOutlinedIcon fontSize="small" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};
