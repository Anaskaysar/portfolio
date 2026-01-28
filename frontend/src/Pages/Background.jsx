import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import { getExperiences } from "../lib/api.js";

const Background = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExperiences();
        if (data) {
          setExperience(data);
        }
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Professional Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">💼</span>
              <span>Professional Experience</span>
            </h2>

            {loading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-600"></div>
              </div>
            ) : experience.length > 0 ? (
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={job.id} className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                          {job.role}
                        </h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          {job.company}, {job.location}
                        </p>
                      </div>
                      {job.current && (
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <span className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-900/50 rounded-full border border-emerald-300 dark:border-emerald-800">
                            <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-500 rounded-full animate-pulse"></span>
                            Current
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 font-semibold">
                      {job.period}
                    </p>

                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                      {job.description}
                    </p>

                    {job.details && job.details.length > 0 && (
                      <ul className="space-y-2.5">
                        {job.details.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <span className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0 font-bold">
                              ▸
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-zinc-500 dark:text-zinc-400 py-10">
                No professional experience found.
              </p>
            )}
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              <span>Education</span>
            </h2>

            <div className="space-y-8">
              {/* MSc */}
              <div className="relative border-l-4 border-violet-500 pl-8 pb-8">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-violet-500 border-4 border-white dark:border-zinc-950" />

                <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                        Master of Science in Computational Sciences (Course-Based)
                      </h3>
                      <p className="text-violet-600 dark:text-violet-400 font-semibold">
                        Laurentian University, Sudbury, Canada
                      </p>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0 font-semibold">
                      Sept 2023 - Apr 2025
                    </span>
                  </div>

                  <div className="space-y-3 mt-4">
                    <p className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold">
                      CGPA: 9.10/10
                    </p>
                    <div className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3">
                      <p className="text-sm text-zinc-800 dark:text-zinc-300 font-medium">
                        🏆 Mabel Jean and Bob Lye Memorial Award (2024–2025) for
                        Academic Excellence
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold mb-2">
                        Focus Areas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Cybersecurity",
                          "Applied Cryptography",
                          "Network Security",
                          "Autonomous Mobile Robotics",
                          "Image Processing",
                          "Computer Vision",
                          "Machine Learning",
                        ].map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-300 dark:border-zinc-700"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BSc */}
              <div className="relative border-l-4 border-cyan-500 pl-8">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-cyan-500 border-4 border-white dark:border-zinc-950" />

                <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                        Bachelor of Science in Computer Science & Engineering
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                        North South University, Dhaka, Bangladesh
                      </p>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0 font-semibold">
                      Jan 2018 - Apr 2022
                    </span>
                  </div>

                  <div className="space-y-3 mt-4">
                    <div className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3">
                      <p className="text-sm text-zinc-800 dark:text-zinc-300 font-medium">
                        🏅 Undergraduate Thesis: Top 10 position among 80 teams in
                        final-year competition
                      </p>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      Developed strong foundations in machine learning, deep
                      learning, and AI-driven projects. Continued research work
                      post-graduation under the supervision of Prof. Dr. Tanzilur
                      Rahman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Achievements Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🏆</span>
              <span>Awards & Achievements</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Award 1 */}
              <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                      Mabel Jean and Bob Lye Memorial Award
                    </h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400 font-semibold mb-1">
                      Laurentian University | 2024-2025
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Recognized for outstanding academic excellence with a CGPA
                      of 9.10/10
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center text-2xl">
                    🥇
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                      Top 10 Undergraduate Thesis
                    </h3>
                    <p className="text-sm text-rose-700 dark:text-rose-400 font-semibold mb-1">
                      North South University | 2022
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Ranked Top 10 among 80 teams in the final-year thesis
                      competition
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-2xl">
                    📝
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                      IEEE Publication
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400 font-semibold mb-1">
                      IEEE TENSYMP 2023
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Co-authored and presented research at international
                      conference
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                      Academic Excellence
                    </h3>
                    <p className="text-sm text-purple-700 dark:text-purple-400 font-semibold mb-1">
                      Master's Program
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Graduated with exceptional CGPA of 9.10/10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Activities */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🌟</span>
              <span>Beyond Academia</span>
            </h2>

            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Outside of my professional and academic pursuits, I maintain a
                diverse set of interests that keep me balanced and inspired. I'm
                an avid reader of thriller books and enjoy watching
                action-thriller movies and TV series. I'm passionate about
                exploring emerging technologies and staying current with industry
                trends.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                For recreation, I enjoy playing football and video games, which
                help me develop strategic thinking and teamwork skills in
                different contexts. I actively participated in university clubs
                and technical initiatives, which strengthened my leadership,
                collaboration, and problem-solving abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Background;
