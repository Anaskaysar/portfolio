
// This will later come from your backend/CMS
const recentUpdates = [
  {
    id: 1,
    date: "Apr 2025",
    updates: [
      {
        type: "graduation",
        title: "Graduation",
        description:
          "Successfully completed my M.Sc. in Computational Sciences at Laurentian University with a CGPA of 9.10/10.",
      },
      {
        type: "award",
        title: "Award",
        description:
          "Received the Mabel Jean and Bob Lye Memorial Award (2024–2025) for academic excellence.",
      },
    ],
  },
  {
    id: 2,
    date: "Sept 2023",
    updates: [
      {
        type: "presentation",
        title: "Online Presentation",
        description:
          'On Sept 5th 2023, I along with my team mates successfully presented our research paper "Accurate Prediction of Pulmonary Fibrosis Progression Using EfficientNet and Quantile Regression: A High Performing Approach" in TENSYMP 2023 which was held in Canberra, Australia.',
        link: "https://ieeexplore.ieee.org/abstract/document/10223673",
      },
      {
        type: "education",
        title: "Masters Study",
        description:
          "On Sept 6th I started my Masters in Computational Sciences at Laurentian University.",
      },
    ],
  },
  {
    id: 3,
    date: "June 2023",
    updates: [
      {
        type: "publication",
        title: "Paper Accepted",
        description:
          '2023 IEEE Region 10 Symposium (TENSYMP) - "Accurate Prediction of Pulmonary Fibrosis Progression Using EfficientNet and Quantile Regression: A High Performing Approach".',
        link: "https://ieeexplore.ieee.org/abstract/document/10223673",
      },
    ],
  },
];

// Update type colors and icons
const updateStyles = {
  graduation: {
    bg: "from-violet-50 to-violet-100/30 dark:from-violet-950/20 dark:to-violet-900/10",
    border: "border-violet-200 dark:border-violet-900/50",
    icon: "🎓",
    iconBg: "bg-violet-500",
  },
  award: {
    bg: "from-amber-50 to-amber-100/30 dark:from-amber-950/20 dark:to-amber-900/10",
    border: "border-amber-200 dark:border-amber-900/50",
    icon: "🏆",
    iconBg: "bg-amber-500",
  },
  presentation: {
    bg: "from-blue-50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10",
    border: "border-blue-200 dark:border-blue-900/50",
    icon: "📊",
    iconBg: "bg-blue-500",
  },
  education: {
    bg: "from-emerald-50 to-emerald-100/30 dark:from-emerald-950/20 dark:to-emerald-900/10",
    border: "border-emerald-200 dark:border-emerald-900/50",
    icon: "📚",
    iconBg: "bg-emerald-500",
  },
  publication: {
    bg: "from-fuchsia-50 to-fuchsia-100/30 dark:from-fuchsia-950/20 dark:to-fuchsia-900/10",
    border: "border-fuchsia-200 dark:border-fuchsia-900/50",
    icon: "📝",
    iconBg: "bg-fuchsia-500",
  },
};

const About = () => {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            My journey, passion, and recent updates
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Introduction */}
          <div>
            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
              <p
                className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6"
                style={{ textAlign: "justify" }}
              >
                <span className="font-semibold text-zinc-900 dark:text-white">
                  Greetings!
                </span>{" "}
                I am Kaysarul Anas Apurba, a passionate Computer Science and
                Engineering graduate with a strong academic and research
                background.
              </p>

              <p
                className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6"
                style={{ textAlign: "justify" }}
              >
                I hold a{" "}
                <strong>
                  Master of Science in Computational Sciences (Course-Based)
                </strong>{" "}
                from Laurentian University, Sudbury, Canada (Sept 2023 – Apr
                2025), where I graduated with a CGPA of 9.10/10. My graduate
                studies deepened my expertise in cybersecurity, applied
                cryptography, network security, autonomous mobile robotics, image
                processing, and computer vision. Throughout the program, I
                completed hands-on projects that strengthened my skills in Python,
                C#, and machine learning applications. I was also honored with the
                Mabel Jean and Bob Lye Memorial Award (2024–2025) for academic
                excellence.
              </p>

              <p
                className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6"
                style={{ textAlign: "justify" }}
              >
                Previously, I obtained my{" "}
                <strong>B.Sc. in CSE from North South University (NSU)</strong>,
                Dhaka, Bangladesh. After graduation, I continued to work on my
                research project under the supervision of Prof. Dr. Tanzilur
                Rahman. I worked on AI-driven projects and developed strong
                foundations in machine learning and deep learning. My
                undergraduate thesis project secured a{" "}
                <strong>Top 10 position among 80 teams</strong> in the final-year
                thesis competition. During this time, I co-authored an IEEE
                publication:{" "}
                <em>
                  Accurate Prediction of Pulmonary Fibrosis Progression Using
                  EfficientNet and Quantile Regression (TENSYMP 2023)
                </em>
                .
              </p>

              <p
                className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6"
                style={{ textAlign: "justify" }}
              >
                Beyond academics, I actively participated in university clubs and
                technical initiatives that built my teamwork, leadership, and
                problem-solving skills.
              </p>

              <p
                className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                Outside of my professional and academic life, I enjoy reading
                thriller books, watching action-thriller movies and TV series,
                exploring new technologies, and playing football and video games.
              </p>
            </div>
          </div>

          {/* Right Column: Recent Updates */}
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl">
                💎
              </div>
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  Recent Updates
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Latest news and milestones
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {recentUpdates.map((timeBlock) => (
                <div key={timeBlock.id} className="relative">
                  {/* Date Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-md">
                      {timeBlock.date}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-700 dark:to-transparent"></div>
                  </div>

                  {/* Updates for this date */}
                  <div className="space-y-4 ml-4 md:ml-8">
                    {timeBlock.updates.map((update, index) => {
                      const style =
                        updateStyles[update.type] || updateStyles.education;

                      return (
                        <div
                          key={index}
                          className={`relative bg-gradient-to-br ${style.bg} border ${style.border} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`flex-shrink-0 w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center text-white text-xl`}
                            >
                              {style.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                                {update.title}
                              </h3>
                              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
                                {update.description}
                              </p>

                              {/* Link if available */}
                              {update.link && (
                                <a
                                  href={update.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
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
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Future Dashboard Note */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/50 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-sm text-cyan-900 dark:text-cyan-300 font-medium">
                    <strong>Coming Soon:</strong> Dashboard integration for easy
                    content management. Updates will be managed through an admin
                    panel and automatically displayed here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
