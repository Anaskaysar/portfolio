import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Go Back Home
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFound;
