// import ProjectsComponent from "../components/Projects";

// export default function Projects() {
//   return (
//     <div className="pt-20 min-h-screen">
//       <div className="container mx-auto px-6">
//         <h1 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">Projects</h1>
//         <ProjectsComponent />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../lib/data.js";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "ai-ml", label: "AI & ML" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A collection of projects I've built, ranging from full-stack applications to specialized backend systems.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-violet-600 dark:bg-violet-500 text-white shadow-md"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-8">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          {/* Projects Grid */}
          <div className="flex flex-col gap-20">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-500 dark:text-zinc-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
