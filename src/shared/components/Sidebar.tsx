import { NavLink } from "react-router-dom";

interface SidebarLink {
  label: string;
  to: string;
}

const sidebarLinks: SidebarLink[] = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Users", to: "/users" },
];

export const Sidebar = () => {
  return (
    <aside className="border-border bg-surface flex w-64 flex-col border-r">
      <div className="border-border flex h-16 items-center justify-center border-b">
        <span className="text-primary text-xl font-bold">AfterMe</span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-text-muted hover:bg-surface-alt hover:text-text"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
