import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const ExperienceForm = ({ experience, onSubmit, onCancel }) => {
  const defaultValues = {
    role: "",
    company: "",
    location: "",
    period: "",
    current: false,
    description: "",
    details: [],
  };

  const [formData, setFormData] = useState({
    ...defaultValues,
    ...experience
  });

  const [newDetail, setNewDetail] = useState("");

  const handleAddDetail = (e) => {
    e.preventDefault();
    if (newDetail.trim()) {
      setFormData({ ...formData, details: [...formData.details, newDetail.trim()] });
      setNewDetail("");
    }
  };

  const removeDetail = (index) => {
    const updatedDetails = [...formData.details];
    updatedDetails.splice(index, 1);
    setFormData({ ...formData, details: updatedDetails });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-w-2xl w-full"
    >
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          {experience?.id ? "Edit Experience" : "Add New Experience"}
        </h2>
        <button onClick={onCancel} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Role</label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Company</label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. Google"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. Remote / New York"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Period</label>
              <input
                type="text"
                required
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="e.g. Jan 2023 - Present"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={formData.current}
                onChange={(e) => setFormData({ ...formData, current: e.target.checked })}
              />
              <div className={`w-10 h-6 rounded-full transition-colors ${formData.current ? "bg-violet-600" : "bg-zinc-300 dark:bg-zinc-700"}`} />
              <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.current ? "translate-x-4" : ""}`} />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Current Position</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all resize-none"
              placeholder="Briefly describe your role..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Key Responsibilities (Details)</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newDetail}
                onChange={(e) => setNewDetail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddDetail(e)}
                className="flex-1 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-all"
                placeholder="Add a responsibility..."
              />
              <button
                type="button"
                onClick={handleAddDetail}
                className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-500 hover:text-white rounded-xl transition-all"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {formData.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700"
                >
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{detail}</span>
                  <button type="button" onClick={() => removeDetail(index)} className="text-zinc-400 hover:text-rose-500 transition-colors">
                    <X size={16} />
                  </button>
                </div>
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
            {experience?.id ? "Save Changes" : "Add Experience"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ExperienceForm;
