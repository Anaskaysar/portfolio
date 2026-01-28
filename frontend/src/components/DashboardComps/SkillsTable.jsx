import { Code, Edit2, Trash2 } from "lucide-react";

const SkillsTable = ({ skills, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Category</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Skills</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {skills.map((skill) => (
            <tr 
              key={skill.id} 
              className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                    <Code size={18} />
                  </div>
                  <div className="font-bold text-zinc-900 dark:text-white">{skill.category}</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-md border border-zinc-200 dark:border-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => onEdit(skill)}
                    className="p-2 text-zinc-500 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition-all"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => onDelete(skill.id)}
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

export default SkillsTable;
