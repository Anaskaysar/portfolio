import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import { getResearch } from "../lib/api";

export default function Research() {
  const [researchItems, setResearchItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResearch();
        if (data) {
          setResearchItems(data);
        }
      } catch (error) {
        console.error("Error fetching research items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">📚</span>
            <span>Research & Publications</span>
          </h2>

          <div className="space-y-6">
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-600"></div>
              </div>
            ) : researchItems.length > 0 ? (
              researchItems.map((item) => (
                <div key={item.id} className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {item.type === 'publication' ? 'IEEE' : 'RES'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      {item.venue && (
                        <p className="text-sm text-fuchsia-700 dark:text-fuchsia-400 font-semibold mb-2">
                          {item.venue} {item.date && `, ${item.date}`}
                        </p>
                      )}
                      {item.institution && (
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-1">
                          <span className="font-semibold">Institution:</span> {item.institution}
                        </p>
                      )}
                      {item.supervisor && (
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-1">
                          <span className="font-semibold">Supervisor:</span> {item.supervisor}
                        </p>
                      )}
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                        >
                          <span>View Details</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-zinc-500 dark:text-zinc-400 py-10">
                No research items found.
              </p>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
