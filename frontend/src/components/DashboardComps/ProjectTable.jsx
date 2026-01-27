import { Edit2, Github, Trash2 } from "lucide-react";

const ProjectTable = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Project</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Category</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Tech Stack</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {projects.map((project) => (
            <tr 
              key={project.id} 
              className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-400">
                        <Github size={20} />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white">{project.title}</div>
                    <div className="text-sm text-zinc-500 truncate max-w-[200px]">{project.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-xs font-medium">
                  {project.category || "General"}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech_stack?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs text-zinc-500 dark:text-zinc-400">
                      {tech}{i < 2 && project.tech_stack.length > 1 ? "," : ""}
                    </span>
                  ))}
                  {project.tech_stack?.length > 3 && (
                    <span className="text-xs text-zinc-400">+{project.tech_stack.length - 3}</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.featured ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"}`} />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {project.featured ? "Featured" : "Standard"}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => onEdit(project)}
                    className="p-2 text-zinc-500 hover:text-violet-500 hover:bg-violet-500/10 rounded-lg transition-all"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => onDelete(project.id)}
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

export default ProjectTable;
