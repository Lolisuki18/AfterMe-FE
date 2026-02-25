import type { SidebarLink } from "../interface";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export const SIDEBAR_LINK: SidebarLink[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: <DashboardOutlinedIcon fontSize="small" />,
  },
  {
    label: "Users",
    to: "/users",
    icon: <PeopleOutlineIcon fontSize="small" />,
  },
  {
    label: "Reminders",
    to: "/reminders",
    icon: <NotificationsNoneOutlinedIcon fontSize="small" />,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: <SettingsOutlinedIcon fontSize="small" />,
  },
];
