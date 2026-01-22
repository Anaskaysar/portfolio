import { Link } from "react-router-dom";
import { projects } from "../lib/data.js";
import { ArrowRightIcon } from "../lib/Icons.jsx";
import ProjectCard from "./ProjectCard.jsx";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Recent work I'm proud of
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors group"
          >
            <span>View all projects</span>
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-20 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link (Mobile) */}
        <Link
          to="/projects"
          className="md:hidden flex items-center justify-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors group"
        >
          <span>View all projects</span>
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;