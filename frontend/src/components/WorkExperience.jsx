import { experience } from "../lib/data";

const WorkExperience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
          Work <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-20">
              {/* Left Column: Year */}
              <div className="w-full md:w-1/4">
                <span className="text-lg font-bold text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>

              {/* Right Column: Details */}
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  {job.role}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-4">
                  {job.company} • {job.location}
                </p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
