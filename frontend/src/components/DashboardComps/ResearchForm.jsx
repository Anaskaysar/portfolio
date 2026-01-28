import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const ResearchForm = ({ research, onSubmit, onCancel }) => {
  const defaultValues = {
    title: "",
    venue: "",
    date: "",
    description: "",
    tags: [],
    link: "",
    type: "publication",
    supervisor: "",
    institution: "",
    featured: false,
  };

  const [formData, setFormData] = useState({
    ...defaultValues,
    ...research
  });

  const [newTag, setNewTag] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, newTag.trim()] });
      setNewTag("");
    }
  };

  const removeTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
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
          {research?.id ? "Edit Research Item" : "Add New Research Item"}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
              placeholder="e.g. Deep Learning for Image Recognition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Venue / Institution</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. IEEE Conference / MIT"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Date</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. Dec 2024"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
              >
                <option value="publication">Publication</option>
                <option value="experience">Research Experience</option>
              </select>
            </div>
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
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Featured Research</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all resize-none"
              placeholder="Briefly describe the research..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Supervisor</label>
              <input
                type="text"
                value={formData.supervisor}
                onChange={(e) => setFormData({ ...formData, supervisor: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. Dr. John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Link (Optional)</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tags</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                className="flex-1 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="Add tag (e.g. AI)"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-500 hover:text-white rounded-xl transition-all"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-xs font-medium border border-cyan-500/20"
                >
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="hover:text-rose-500">
                    <X size={14} />
                  </button>
                </span>
              ))}
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
            {research?.id ? "Save Changes" : "Add Research"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ResearchForm;
