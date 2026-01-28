import { Calendar, Edit2, Trash2 } from "lucide-react";

const TimelineTable = ({ timeline, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Update</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Type</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Date</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {timeline.map((update) => (
            <tr 
              key={update.id} 
              className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 mt-1">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white">{update.title}</div>
                    <div className="text-sm text-zinc-500 truncate max-w-[400px]">{update.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-700">
                  {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400 text-sm">{update.date}</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => onEdit(update)}
                    className="p-2 text-zinc-500 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition-all"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => onDelete(update.id)}
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

export default TimelineTable;
