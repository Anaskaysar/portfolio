import { AnimatePresence, motion } from "framer-motion";
import {
    Briefcase,
    Calendar,
    Code,
    GraduationCap,
    Plus,
    Settings as SettingsIcon,
    User
} from "lucide-react";
import { useEffect, useState } from "react";
import ExperienceTable from "../../components/DashboardComps/ExperienceTable";
import ProjectForm from "../../components/DashboardComps/ProjectForm";
import ProjectTable from "../../components/DashboardComps/ProjectTable";
import Sidebar from "../../components/DashboardComps/Sidebar";
import StatCard from "../../components/DashboardComps/StatCard";
import * as api from "../../lib/api";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [research, setResearch] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data on mount and when activeTab changes
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === "dashboard" || activeTab === "projects") {
        const projectsData = await api.getProjects();
        setProjects(projectsData || []);
      }
      if (activeTab === "dashboard" || activeTab === "experience") {
        const experiencesData = await api.getExperiences();
        setExperiences(experiencesData || []);
      }
      if (activeTab === "skills") {
        const skillsData = await api.getSkills();
        setSkills(skillsData || []);
      }
      if (activeTab === "research") {
        const researchData = await api.getResearch();
        setResearch(researchData || []);
      }
      if (activeTab === "timeline") {
        const timelineData = await api.getTimelineUpdates();
        setTimeline(timelineData || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProject = async (newProject) => {
    try {
      await api.createProject(newProject);
      setIsFormOpen(false);
      fetchData();
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project. Please try again.");
    }
  };

  const handleEditProject = async (updatedProject) => {
    try {
      await api.updateProject(updatedProject.id, updatedProject);
      setEditingProject(null);
      setIsFormOpen(false);
      fetchData();
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project. Please try again.");
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await api.deleteProject(id);
        fetchData();
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete project. Please try again.");
      }
    }
  };

  const handleDeleteExperience = async (id) => {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      try {
        await api.deleteExperience(id);
        fetchData();
      } catch (error) {
        console.error("Error deleting experience:", error);
        alert("Failed to delete experience. Please try again.");
      }
    }
  };

  const openEditForm = (project) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const PlaceholderSection = ({ icon: Icon, title, description }) => (
    <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
      <Icon size={64} className="mx-auto mb-4 text-zinc-300" />
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
      <p className="text-zinc-500">{description}</p>
    </div>
  );

  const MOCK_STATS = [
    { label: "Total Projects", value: projects.length.toString(), icon: Briefcase, trend: "up", trendValue: 8, color: "violet" },
    { label: "Work Experiences", value: experiences.length.toString(), icon: GraduationCap, trend: "up", trendValue: 12, color: "cyan" },
    { label: "Skills Categories", value: skills.length.toString(), icon: Code, trend: "up", trendValue: 3, color: "emerald" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex transition-colors">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />

      <main 
        className={`flex-1 transition-all duration-300 ${collapsed ? "ml-20" : "ml-[260px]"} p-8`}
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">
              {activeTab === "dashboard" && "Welcome back, Admin. Here's what's happening."}
              {activeTab === "projects" && "Manage your portfolio projects"}
              {activeTab === "experience" && "Manage your work experience"}
              {activeTab === "skills" && "Manage your technical skills"}
              {activeTab === "research" && "Manage your research and publications"}
              {activeTab === "timeline" && "Manage your timeline updates"}
              {activeTab === "personal" && "Update your personal information"}
              {activeTab === "settings" && "Configure dashboard settings"}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {(activeTab === "projects" || activeTab === "experience" || activeTab === "skills" || activeTab === "research" || activeTab === "timeline") && (
              <button 
                onClick={() => { setEditingProject(null); setIsFormOpen(true); }}
                className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-violet-500/20 active:scale-95"
              >
                <Plus size={20} />
                <span>Add {activeTab === "projects" ? "Project" : activeTab === "experience" ? "Experience" : activeTab === "skills" ? "Skill" : activeTab === "research" ? "Research" : "Update"}</span>
              </button>
            )}
          </div>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MOCK_STATS.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </div>

                {/* Quick Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Recent Projects</h3>
                    <div className="space-y-3">
                      {projects.slice(0, 3).map(p => (
                        <div key={p.id} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                          <Briefcase size={20} className="text-violet-500" />
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900 dark:text-white">{p.title}</div>
                            <div className="text-xs text-zinc-500">{p.category}</div>
                          </div>
                        </div>
                      ))}
                      {projects.length === 0 && (
                        <p className="text-sm text-zinc-500 text-center py-4">No projects yet. Add your first project!</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <button onClick={() => setActiveTab("projects")} className="w-full text-left p-3 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg transition-colors">
                        <div className="font-medium text-zinc-900 dark:text-white">Manage Projects</div>
                        <div className="text-xs text-zinc-500">Add, edit, or remove projects</div>
                      </button>
                      <button onClick={() => setActiveTab("experience")} className="w-full text-left p-3 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg transition-colors">
                        <div className="font-medium text-zinc-900 dark:text-white">Update Experience</div>
                        <div className="text-xs text-zinc-500">Manage work history</div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                  {projects.length > 0 ? (
                    <ProjectTable 
                      projects={projects} 
                      onEdit={openEditForm} 
                      onDelete={handleDeleteProject} 
                    />
                  ) : (
                    <div className="text-center py-20">
                      <Briefcase size={64} className="mx-auto mb-4 text-zinc-300" />
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">No Projects Yet</h3>
                      <p className="text-zinc-500 mb-4">Start by adding your first project!</p>
                      <button 
                        onClick={() => setIsFormOpen(true)}
                        className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-all"
                      >
                        Add Project
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                  {experiences.length > 0 ? (
                    <ExperienceTable 
                      experiences={experiences} 
                      onEdit={() => {}} 
                      onDelete={handleDeleteExperience} 
                    />
                  ) : (
                    <div className="text-center py-20">
                      <GraduationCap size={64} className="mx-auto mb-4 text-zinc-300" />
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">No Work Experience Yet</h3>
                      <p className="text-zinc-500">Add your work experience to showcase your career journey!</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PlaceholderSection 
                  icon={Code} 
                  title="Skills Management" 
                  description="Manage your technical skills and capabilities. Forms coming soon!"
                />
              </motion.div>
            )}

            {activeTab === "research" && (
              <motion.div
                key="research"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PlaceholderSection 
                  icon={GraduationCap} 
                  title="Research & Publications" 
                  description="Manage your research work and publications. Forms coming soon!"
                />
              </motion.div>
            )}

            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PlaceholderSection 
                  icon={Calendar} 
                  title="Timeline Updates" 
                  description="Manage your recent updates and milestones. Forms coming soon!"
                />
              </motion.div>
            )}

            {activeTab === "personal" && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PlaceholderSection 
                  icon={User} 
                  title="Personal Information" 
                  description="Update your profile and contact information. Forms coming soon!"
                />
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PlaceholderSection 
                  icon={SettingsIcon} 
                  title="Dashboard Settings" 
                  description="Configure your dashboard preferences and settings."
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Modal for Project Form */}
        <AnimatePresence>
          {isFormOpen && activeTab === "projects" && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-sm">
              <ProjectForm 
                project={editingProject}
                onSubmit={editingProject ? handleEditProject : handleAddProject}
                onCancel={() => { setIsFormOpen(false); setEditingProject(null); }}
              />
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;
