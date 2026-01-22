import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { personalInfo } from "../lib/data";
import { MoonIcon, SunIcon } from "../lib/icons";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Helper to check if route is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <span className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              {personalInfo.initials}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              <Link
                to="/projects"
                className={`nav-link ${
                  isActive("/projects")
                    ? "text-violet-600 dark:text-violet-400 font-semibold"
                    : ""
                }`}
              >
                Projects
              </Link>
              <Link
                to="/background"
                className={`nav-link ${
                  isActive("/background")
                    ? "text-violet-600 dark:text-violet-400 font-semibold"
                    : ""
                }`}
              >
                Background
              </Link>
              <Link
                to="/research"
                className={`nav-link ${
                  isActive("/research")
                    ? "text-violet-600 dark:text-violet-400 font-semibold"
                    : ""
                }`}
              >
                Research
              </Link>
              <Link
                to="/about"
                className={`nav-link ${
                  isActive("/about")
                    ? "text-violet-600 dark:text-violet-400 font-semibold"
                    : ""
                }`}
              >
                About
              </Link>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 
                         hover:text-zinc-900 dark:hover:text-white 
                         hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 
                       text-zinc-600 dark:text-zinc-400 
                       hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-md md:hidden">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Menu Links */}
          <div className="h-full flex flex-col items-center justify-center gap-10 text-center">
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className={`mobile-menu-link ${
                isActive("/projects") ? "text-violet-400" : ""
              }`}
            >
              Projects
            </Link>

            <Link
              to="/background"
              onClick={() => setOpen(false)}
              className={`mobile-menu-link ${
                isActive("/background") ? "text-violet-400" : ""
              }`}
            >
              Background
            </Link>

            <Link
              to="/research"
              onClick={() => setOpen(false)}
              className={`mobile-menu-link ${
                isActive("/research") ? "text-violet-400" : ""
              }`}
            >
              Research
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={`mobile-menu-link ${
                isActive("/about") ? "text-violet-400" : ""
              }`}
            >
              About
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mt-10 flex items-center gap-3 px-6 py-3 rounded-lg 
                         bg-zinc-800 text-zinc-300 hover:text-white transition"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;