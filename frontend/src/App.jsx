import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import Navigation from "./components/Navigation.jsx";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


// Lazy load pages
const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Background = lazy(() => import("./Pages/Background.jsx"));
const Projects = lazy(() => import("./Pages/Projects.jsx"));
const Research = lazy(() => import("./Pages/Research.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));

const AdminDashboard = lazy(() => import("./Pages/Dashboard/AdminDashboard.jsx"));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-violet-600 text-white rounded-md font-medium"
      >
        Skip to Content
      </a>

      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors relative overflow-hidden">
        {/* Gradient Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {!location.pathname.startsWith("/dashboard") && <Navigation />}

          <main id="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/background" element={<Background />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/dashboard" element={<AdminDashboard/>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
