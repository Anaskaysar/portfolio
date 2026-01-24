import { personalInfo } from "../lib/data.js";
import { DownloadIcon, GithubIcon, HomeIcon, LinkedInIcon, XIcon } from "../lib/icons.jsx";
import OptimizedImage from "./OptimizedImage.jsx";

// Import SVG assets
import djangoIcon from "../assets/Skills_SVG/django_2.svg";
import dockerIcon from "../assets/Skills_SVG/docker.svg";
import gcpIcon from "../assets/Skills_SVG/gcp.svg";
import githubIcon from "../assets/Skills_SVG/github-gray.svg";
import linuxIcon from "../assets/Skills_SVG/linux.svg";
import pgsqlIcon from "../assets/Skills_SVG/pgsql.svg";
import pythonIcon from "../assets/Skills_SVG/python.svg";
import reactIcon from "../assets/Skills_SVG/rect.svg";

const Hero = () => {
  const techStack = [
    { name: "Python", icon: pythonIcon },
    { name: "Django", icon: djangoIcon },
    { name: "PostgreSQL", icon: pgsqlIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "GCP", icon: gcpIcon },
    { name: "React", icon: reactIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Linux", icon: linuxIcon },
  ];

  return (
    <section className="pt-28 pb-16 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-5">
          {/* Text Content (2 columns) */}
          <div className="lg:col-span-2 order-2 lg:order-1 text-center lg:text-left">
            {/* Open badge */}
            <div className="hidden md:block mb-6">
              <span className="badge-success inline-flex items-center">
                {personalInfo.availability}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-cyan-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed text-justify ">
              {personalInfo.tagline}
            </p>

            {/* Location & Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-zinc-500 dark:text-zinc-400 mb-10">
              <div className="flex items-center gap-2">
                <HomeIcon />
                <span className="text-sm">Ontario, Canada</span>
              </div>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors font-medium"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn flex items-center gap-2 px-4 py-2"
              >
                <GithubIcon />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn flex items-center gap-2 px-4 py-2"
              >
                <LinkedInIcon />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href={personalInfo.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn flex items-center gap-2 px-4 py-2"
              >
                <XIcon />
                <span className="text-sm font-medium">X</span>
              </a>

              <a
                href="/Resume_of_Kaysarul_Anas.pdf"
                download
                className="icon-btn flex items-center gap-2 px-4 py-2"
              >
                <DownloadIcon />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>

          {/* Profile Image (1 column) */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 p-[4px]">
              {/* Outer ring - adapts to theme */}
              <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 p-[3px]">
                {/* Inner ring - adapts to theme */}
                <div className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-800 p-[3px]">
                  <OptimizedImage
                    src="/profile.jpg"
                    alt="Kaysarul Anas"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="text-center">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
              >
                <div className="w-16 h-16 flex items-center justify-center border-2 border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800/50 p-3 group-hover:border-violet-400 dark:group-hover:border-violet-500 transition-colors shadow-sm dark:shadow-none">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;