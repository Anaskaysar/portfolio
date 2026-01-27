import { CheckCircle, Edit2, Trash2 } from "lucide-react";

const ExperienceTable = ({ experiences, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Role</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Company</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Period</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {experiences.map((exp) => (
            <tr 
              key={exp.id} 
              className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="font-bold text-zinc-900 dark:text-white">{exp.role}</div>
                <div className="text-sm text-zinc-500 truncate max-w-[300px]">{exp.description}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-zinc-900 dark:text-white">{exp.company}</div>
                <div className="text-sm text-zinc-500">{exp.location}</div>
              </td>
              <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">{exp.period}</td>
              <td className="px-6 py-4">
                {exp.current ? (
                  <span className="flex items-center gap-1 text-emerald-500">
                    <CheckCircle size={16} />
                    <span className="text-sm">Current</span>
                  </span>
                ) : (
                  <span className="text-sm text-zinc-400">Past</span>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => onEdit(exp)}
                    className="p-2 text-zinc-500 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition-all"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => onDelete(exp.id)}
                    className="p-2 text-zinc-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExperienceTable;
