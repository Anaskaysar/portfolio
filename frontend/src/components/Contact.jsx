import { personalInfo } from "../lib/data";
import { GithubIcon, LinkedInIcon, MailIcon } from "../lib/icons";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">work together</span>
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Open for opportunities and collaborations.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-500 dark:to-cyan-500 text-white font-medium rounded-lg hover:from-violet-700 hover:to-cyan-700 dark:hover:from-violet-400 dark:hover:to-cyan-400 hover:shadow-lg transition-all duration-300 mb-12"
        >
          <MailIcon />
          Email me
        </a>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Footer Text */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;