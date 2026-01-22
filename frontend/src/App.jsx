import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Background from "./pages/Background";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Research from "./pages/Research";

function AppContent() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors relative overflow-hidden">
        {/* Gradient Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/background" element={<Background />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
