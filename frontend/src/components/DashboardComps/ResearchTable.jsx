import { Edit2, ExternalLink, GraduationCap, Trash2 } from "lucide-react";

const ResearchTable = ({ research, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title & Venue</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Type</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Date</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {research.map((item) => (
            <tr 
              key={item.id} 
              className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500 mt-1">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      {item.title}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-violet-500">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <div className="text-sm text-zinc-500">{item.venue}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.type === 'publication' 
                    ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400' 
                    : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                }`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400 text-sm">{item.date}</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => onEdit(item)}
                    className="p-2 text-zinc-500 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition-all"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => onDelete(item.id)}
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

export default ResearchTable;
