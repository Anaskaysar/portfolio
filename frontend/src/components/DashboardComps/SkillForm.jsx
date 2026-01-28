import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const SkillForm = ({ skill, onSubmit, onCancel }) => {
  const defaultValues = {
    category: "",
    items: [],
  };

  const [formData, setFormData] = useState({
    ...defaultValues,
    ...skill
  });

  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim() && !formData.items.includes(newItem.trim())) {
      setFormData({ ...formData, items: [...formData.items, newItem.trim()] });
      setNewItem("");
    }
  };

  const removeItem = (item) => {
    setFormData({
      ...formData,
      items: formData.items.filter((i) => i !== item),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-w-md w-full"
    >
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          {skill?.id ? "Edit Skill Category" : "Add New Skill Category"}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category Name</label>
            <input
              type="text"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
              placeholder="e.g. Frontend, Backend, Tools"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Skills</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddItem(e)}
                className="flex-1 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="Add skill (e.g. React)"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-500 hover:text-white rounded-xl transition-all"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.items.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-medium border border-emerald-500/20"
                >
                  {item}
                  <button type="button" onClick={() => removeItem(item)} className="hover:text-rose-500">
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
            {skill?.id ? "Save Changes" : "Add Category"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SkillForm;
