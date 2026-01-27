import { motion } from "framer-motion";

const StatCard = ({ label, value, icon: Icon, trend, trendValue, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500`}>
          <Icon size={24} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend === "up" ? "text-emerald-500" : "text-rose-500"
          }`}>
            <span>{trend === "up" ? "+" : "-"}{trendValue}%</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-1">{label}</p>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</h3>
      </div>
    </motion.div>
  );
};

export default StatCard;
