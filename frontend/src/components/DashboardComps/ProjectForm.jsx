import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const ProjectForm = ({ project, onSubmit, onCancel }) => {
  const defaultValues = {
    title: "",
    description: "",
    category: "fullstack",
    tech_stack: [],
    github_link: "",
    live_link: "",
    featured: false,
  };

  const [formData, setFormData] = useState({
    ...defaultValues,
    ...project
  });

  const [newTech, setNewTech] = useState("");

  const handleAddTech = (e) => {
    e.preventDefault();
    if (newTech && !formData.tech_stack.includes(newTech)) {
      setFormData({ ...formData, tech_stack: [...formData.tech_stack, newTech] });
      setNewTech("");
    }
  };

  const removeTech = (tech) => {
    setFormData({
      ...formData,
      tech_stack: formData.tech_stack.filter((t) => t !== tech),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-w-2xl w-full"
    >
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          {project?.id ? "Edit Project" : "Add New Project"}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="p-6 space-y-6">
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Project Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
              placeholder="e.g. Portfolio Website"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all resize-none"
              placeholder="Briefly describe your project..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
              >
                <option value="fullstack">Full Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="ai-ml">AI & ML</option>
              </select>
            </div>

            {/* Featured Toggle */}
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  />
                  <div className={`w-10 h-6 rounded-full transition-colors ${formData.featured ? "bg-violet-600" : "bg-zinc-300 dark:bg-zinc-700"}`} />
                  <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.featured ? "translate-x-4" : ""}`} />
                </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Featured Project</span>
              </label>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tech Stack</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTech(e)}
                className="flex-1 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="Add tech (e.g. React)"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-500 hover:text-white rounded-xl transition-all"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1 px-3 py-1 bg-violet-500/10 text-violet-500 rounded-full text-xs font-medium"
                >
                  {tech}
                  <button type="button" onClick={() => removeTech(tech)} className="hover:text-rose-500">
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">GitHub Link</label>
              <input
                type="url"
                value={formData.github_link}
                onChange={(e) => setFormData({ ...formData, github_link: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Live Link</label>
              <input
                type="url"
                value={formData.live_link}
                onChange={(e) => setFormData({ ...formData, live_link: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 text-zinc-600 dark:text-zinc-400 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-violet-500/20 active:scale-95"
          >
            {project?.id ? "Save Changes" : "Create Project"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ProjectForm;
