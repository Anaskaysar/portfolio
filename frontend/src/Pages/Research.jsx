export default function Research() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-4xl">📚</span>
          <span>Research & Publications</span>
        </h2>

        <div className="space-y-6">
          {/* Main Publication */}
          <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center text-white font-bold">
                IEEE
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  Accurate Prediction of Pulmonary Fibrosis Progression Using
                  EfficientNet and Quantile Regression: A High Performing
                  Approach
                </h3>
                <p className="text-sm text-fuchsia-700 dark:text-fuchsia-400 font-semibold mb-2">
                  IEEE TENSYMP 2023, Canberra, Australia
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                  Co-authored research paper presented at the 2023 IEEE Region
                  10 Symposium focusing on AI-driven medical image analysis
                  and machine learning applications in healthcare.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Medical Imaging",
                    "EfficientNet",
                    "Quantile Regression",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/10223673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                >
                  <span>View Publication</span>
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
              </div>
            </div>
          </div>

          {/* Research Experience */}
          <div className="relative z-10 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
              Graduate Research Assistant
            </h3>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              <span className="font-semibold">Supervisor:</span>{" "}
              <a
                href="https://sites.google.com/site/tanzilctg/Home"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-violet-600 dark:text-violet-400 hover:underline"
              >
                Prof. Dr. Tanzilur Rahman
              </a>
            </p>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              <span className="font-semibold">Institution:</span> North South
              University, Bangladesh
            </p>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Continued research on AI-driven projects, machine learning, and
              deep learning applications. Contributed to data preprocessing,
              model training, and evaluation workflows in medical image
              analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
