import { ExternalLinkIcon, GithubIcon } from "../lib/icons.jsx";

const ProjectCard = ({ project, index }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 border-b border-zinc-200 dark:border-zinc-800 pb-20 last:border-0 last:pb-0">
      <div 
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
          index % 2 === 1 ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Project Image */}
        <div className="w-full md:w-3/5">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl group">
            {/* Background Gradient/Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 dark:from-violet-500/20 dark:to-cyan-500/20 mix-blend-overlay z-10 pointer-events-none" />
            
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out"
              />
            ) : (
              <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400">No Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          {/* Category Badge (Optional - mostly for Projects page but harmless here) */}
          {project.category && (
            <div className="flex justify-center md:justify-start mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium  bg-violet-100 dark:bg-violet-400/10 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-400/20">
                {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
              </span>
            </div>
          )}

          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            {project.title}
          </h3>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 text-justify leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
              >
                <GithubIcon className="w-5 h-5" />
                Code
              </a>
            )}
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors font-medium"
              >
                <ExternalLinkIcon className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
