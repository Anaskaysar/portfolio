import { Mail, Save, User } from "lucide-react";
import { useState } from "react";

const PersonalInfoForm = ({ info, onUpdate }) => {
  const [formData, setFormData] = useState(info || {
    name: "",
    title: "",
    tagline: "",
    email: "",
    availability: "Open to work",
    github: "",
    linkedin: "",
    x: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Professional Title</label>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
            placeholder="e.g. Full Stack Developer"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Tagline</label>
          <textarea 
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white resize-none"
            placeholder="A brief introduction about yourself..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Availability</label>
          <input 
            type="text" 
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
            placeholder="e.g. Open to work"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">GitHub Profile</label>
          <input 
            type="url" 
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
            placeholder="https://github.com/username"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LinkedIn Profile</label>
          <input 
            type="url" 
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
            placeholder="https://linkedin.com/in/username"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button 
          type="submit"
          className="flex items-center gap-2 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-violet-500/20 active:scale-95"
        >
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
