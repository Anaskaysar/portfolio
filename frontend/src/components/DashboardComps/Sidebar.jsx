import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  User
} from "lucide-react";

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
      active 
        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30" 
        : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
    }`}
  >
    <Icon size={20} className={active ? "text-white" : "group-hover:scale-110 transition-transform"} />
    {!collapsed && <span className="font-medium whitespace-nowrap">{label}</span>}
  </button>
);

const Sidebar = ({ activeTab, setActiveTab, collapsed, setCollapsed }) => {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: GraduationCap, label: "Experience" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "research", icon: BarChart3, label: "Research" },
    { id: "timeline", icon: Calendar, label: "Timeline" },
    { id: "personal", icon: User, label: "Personal Info" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 260 }}
      className="fixed left-0 top-0 h-screen bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 z-50 flex flex-col transition-colors"
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between">
        {!collapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"
          >
            Admin.
          </motion.div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            {...item}
            active={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <SidebarItem 
          icon={LogOut} 
          label="Logout" 
          collapsed={collapsed}
          onClick={() => console.log("Logout")}
        />
      </div>
    </motion.aside>
  );
};

export default Sidebar;
