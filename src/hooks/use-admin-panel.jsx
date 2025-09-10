import {
  Monitor,
  Settings,
  HelpCircle,
  FileText,
  Shield,
  Users,
  Package,
  Bell,
  BarChart3,
  TrendingUp,
  HardDrive,
  Image,
  Network,
} from "lucide-react";

function UseAdminPanel() {
  const menuItems = [
    {
      id: "overview",
      label: "Overview(NOT NOW)",
      icon: BarChart3,
      parent: "dashboard",
      to: "dashboard/overview",
    },
    {
      id: "notifications",
      label: "Notifications(NOT NOW)",
      icon: Bell,
      parent: "dashboard",
      to: "dashboard/notifications",
    },
    {
      id: "statics",
      label: "Statics",
      icon: TrendingUp,
      standalone: true,
      to: "statics",
    },
    // Service children
    {
      id: "storage",
      label: "Storage",
      icon: HardDrive,
      parent: "service",
      to: "services/storage",
    },
    {
      id: "image",
      label: "Image",
      icon: Image,
      parent: "service",
      to: "services/image",
    },
    {
      id: "network",
      label: "Network",
      icon: Network,
      parent: "service",
      to: "services/network",
    },
    {
      id: "logs",
      label: "Logs",
      icon: FileText,
      parent: "service",
      to: "service/logs",
    },
    {
      id: "maps",
      label: "Maps",
      parent: "machines",
      to: "machines/maps",
    },
    {
      id: "virtual_machines",
      label: "Virtual Machines",
      parent: "machines",
      to: "machines/virtual-machines",
    },
  ];

  const expandableMenus = [
    { key: "dashboard", label: "Dashboard", icon: BarChart3, count: null },
    { key: "machines", label: "Machines", icon: Monitor, count: null },
    { key: "service", label: "Service", icon: Settings, count: null },
    { key: "apps", label: "Apps", icon: Package, count: 8 },
    { key: "security", label: "Security", icon: Shield, count: null },
    { key: "users", label: "Users", icon: Users, count: null },
  ];

  const bottomMenuItems = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "support", label: "Support", icon: HelpCircle, status: "Online" },
    { id: "documents", label: "Documents", icon: FileText, external: true },
  ];

  return { expandableMenus, menuItems, bottomMenuItems };
}

export default UseAdminPanel;
