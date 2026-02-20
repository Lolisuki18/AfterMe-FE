import { NavLink } from "react-router-dom";

interface SidebarLink {
  label: string;
  to: string;
}

const sidebarLinks: SidebarLink[] = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Users", to: "/users" },
];

/**
 * Sidebar — navigation panel bên trái.
 * Dùng NavLink để highlight active route.
 */
export const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <span className="text-xl font-bold text-indigo-600">AfterMe</span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
