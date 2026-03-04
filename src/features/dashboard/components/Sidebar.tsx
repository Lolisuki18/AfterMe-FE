import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useAuthStore } from "@/features/auth/store/authStore";
import Logo from "@/shared/icon/Logo";
import {
  XIcon,
  HomeIcon,
  SettingsIcon,
  BellIcon,
  UserIcon,
  ShieldBadgeIcon,
  PhoneIcon,
  LockIcon,
  HeartOutlineIcon,
  PeopleGroupIcon,
  ChartIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  CreditCardIcon,
  HomeOutlineIcon,
  LogoutIcon,
  ShieldAlertIcon,
  ClockOutlineIcon,
  GearIcon,
} from "@/shared/icon";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

/* ── Types ──────────────────────────────────────────────────────────── */
interface NavItem {
  label: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface NavGroup {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: NavItem[];
}

export const Sidebar = ({ open = false, onClose }: SidebarProps) => {
  const { t } = useLanguage();
  const s = t.dashboard.sidebar;
  const location = useLocation();
  const navigate = useNavigate();
  const { user, clearSession } = useAuthStore();

  /* ── Nav groups ─────────────────────────────────────────────────── */
  const NAV_GROUPS: NavGroup[] = [
    {
      key: "safety",
      label: s.safetyGroup,
      icon: ShieldBadgeIcon,
      children: [
        {
          label: s.safetySettings,
          to: "/dashboard/settings",
          icon: SettingsIcon,
        },
        {
          label: s.emergencyContacts,
          to: "/dashboard/emergency-contacts",
          icon: PhoneIcon,
        },
        {
          label: s.digitalVault,
          to: "/dashboard/digital-vault",
          icon: LockIcon,
        },
      ],
    },
    {
      key: "life",
      label: s.dailyLifeGroup,
      icon: HeartOutlineIcon,
      children: [
        {
          label: s.lifestyle,
          to: "/dashboard/lifestyle",
          icon: HeartOutlineIcon,
        },
        { label: s.family, to: "/dashboard/family", icon: PeopleGroupIcon },
        {
          label: s.dailyRoutine,
          to: "/dashboard/daily-routine",
          icon: ClockOutlineIcon,
        },
        {
          label: s.activityLog,
          to: "/dashboard/activity-log",
          icon: ChartIcon,
        },
        { label: s.reminders, to: "/dashboard/reminders", icon: BellIcon },
      ],
    },
    {
      key: "account",
      label: s.account,
      icon: UserIcon,
      children: [
        {
          label: s.personalInfo,
          to: "/dashboard/account/personal",
          icon: UserIcon,
        },
        {
          label: s.security,
          to: "/dashboard/account/security",
          icon: ShieldCheckIcon,
        },
        {
          label: s.notifications,
          to: "/dashboard/account/notifications",
          icon: BellIcon,
        },
        {
          label: s.privacy,
          to: "/dashboard/privacy",
          icon: ShieldAlertIcon,
        },
      ],
    },
    {
      key: "subscription",
      label: s.subscription,
      icon: CreditCardIcon,
      children: [
        {
          label: s.subscription,
          to: "/dashboard/subscription",
          icon: CreditCardIcon,
        },
        {
          label: s.subscriptionManage,
          to: "/dashboard/subscription/manage",
          icon: GearIcon,
        },
      ],
    },
  ];

  /* ── Collapsible state ──────────────────────────────────────────── */
  const isChildActive = (group: NavGroup) =>
    group.children.some(
      (c) =>
        location.pathname === c.to || location.pathname.startsWith(c.to + "/"),
    );

  const [openGroups, setOpenGroups] = useState<Set<string>>(() => {
    const init = new Set<string>();
    NAV_GROUPS.forEach((g) => {
      if (isChildActive(g)) init.add(g.key);
    });
    return init;
  });

  // Auto-expand when navigating into a group
  useEffect(() => {
    NAV_GROUPS.forEach((g) => {
      if (isChildActive(g)) {
        setOpenGroups((prev) => {
          if (prev.has(g.key)) return prev;
          return new Set([...prev, g.key]);
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  /* ── Render helpers ─────────────────────────────────────────────── */
  const linkClass = (isActive: boolean) =>
    `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-text-muted hover:bg-surface-alt hover:text-text"
    }`;

  const childLinkClass = (isActive: boolean) =>
    `flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-text-muted hover:bg-surface-alt hover:text-text"
    }`;

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
        {/* Logo + AfterMe */}
        <div className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-text-muted hover:text-text lg:hidden"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex-1 space-y-1 overflow-y-auto px-3">
          {/* Home — standalone */}
          <NavLink
            to="/dashboard"
            end
            onClick={onClose}
            className={({ isActive }) => linkClass(isActive)}
          >
            {({ isActive }) => (
              <>
                <HomeIcon
                  className={`h-[18px] w-[18px] ${isActive ? "text-white" : ""}`}
                />
                {s.home}
              </>
            )}
          </NavLink>

          {/* Collapsible groups */}
          {NAV_GROUPS.map((group) => {
            const isOpen = openGroups.has(group.key);
            const hasActive = isChildActive(group);

            return (
              <div key={group.key}>
                {/* Group header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.key)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    hasActive && !isOpen
                      ? "text-primary"
                      : "text-text-muted hover:bg-surface-alt hover:text-text"
                  }`}
                >
                  <group.icon className="h-[18px] w-[18px]" />
                  <span className="flex-1 text-left">{group.label}</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Children */}
                {isOpen && (
                  <div className="border-border mt-1 ml-4 space-y-0.5 border-l pl-3">
                    {group.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        end
                        onClick={onClose}
                        className={({ isActive }) => childLinkClass(isActive)}
                      >
                        {({ isActive }) => (
                          <>
                            <child.icon
                              className={`h-4 w-4 ${isActive ? "text-white" : ""}`}
                            />
                            {child.label}
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* User info + actions at bottom */}
        <div className="border-border space-y-3 border-t px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <UserIcon className="text-primary h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-text truncate text-sm font-medium">
                {user?.name ?? "User"}
              </p>
              <p className="text-text-muted truncate text-xs">
                {user?.email ?? s.studentPlan}
              </p>
            </div>
          </div>

          {/* Back to Home + Logout */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-text-muted hover:bg-surface-alt hover:text-text flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
            >
              <HomeOutlineIcon className="h-4 w-4" />
              {s.backToHome}
            </button>
            <button
              type="button"
              onClick={() => {
                clearSession();
                navigate("/login");
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogoutIcon className="h-4 w-4" />
              {s.logout}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
