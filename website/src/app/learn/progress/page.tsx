"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { modules, getLessonId, getTotalLessons } from "@/data/lessons";
import { ProgressBar, useProgress } from "@/components/learn";

export default function ProgressPage() {
  const { progress, isLoaded, getOverallProgress, getModuleProgress, isLessonCompleted, resetProgress } = useProgress();

  const totalLessons = getTotalLessons();
  const completedLessons = progress.completedLessons.length;
  const overallProgress = getOverallProgress();

  // Calculate time spent (rough estimate: 4 minutes per completed lesson)
  const minutesSpent = completedLessons * 4;
  const hoursSpent = Math.floor(minutesSpent / 60);
  const remainingMinutes = minutesSpent % 60;

  // Format dates
  const startDate = progress.startedAt ? new Date(progress.startedAt).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }) : "Not started";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header backLink={{ href: "/learn", label: "← Back to Course" }} navLinks={[]} />

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Your Progress</h1>
        <p className="text-slate-400 mb-8">Track your journey through Zero to Claude Code</p>

        {/* Overview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-3xl font-bold text-orange-400">{isLoaded ? Math.round(overallProgress) : 0}%</div>
            <div className="text-slate-500 text-sm">Complete</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-3xl font-bold text-white">{isLoaded ? completedLessons : 0}/{totalLessons}</div>
            <div className="text-slate-500 text-sm">Lessons Done</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-3xl font-bold text-white">
              {hoursSpent > 0 ? `${hoursSpent}h ${remainingMinutes}m` : `${remainingMinutes}m`}
            </div>
            <div className="text-slate-500 text-sm">Time Spent</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-xl font-bold text-white">{startDate}</div>
            <div className="text-slate-500 text-sm">Started</div>
          </div>
        </div>

        {/* Overall progress */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Overall Progress</h2>
          <ProgressBar progress={isLoaded ? overallProgress : 0} size="lg" />
          
          {overallProgress === 100 ? (
            <div className="mt-4 bg-green-900/30 rounded-lg p-4 border border-green-700">
              <p className="text-green-400 font-medium">🎉 Congratulations! You&apos;ve completed Zero to Claude Code!</p>
              <p className="text-slate-400 text-sm mt-1">You now have the skills to build software with Claude Code. Keep practicing!</p>
            </div>
          ) : overallProgress > 0 ? (
            <p className="text-slate-400 text-sm mt-4">
              Keep going! You&apos;re making great progress.
            </p>
          ) : (
            <p className="text-slate-400 text-sm mt-4">
              You haven&apos;t started yet.{" "}
              <Link href="/learn/course/terminal-basics/what-is-terminal" className="text-orange-400 hover:underline">
                Begin your journey →
              </Link>
            </p>
          )}
        </div>

        {/* Module breakdown */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Module Progress</h2>
          <div className="space-y-4">
            {modules.map((module, index) => {
              const moduleProgress = isLoaded ? getModuleProgress(module.slug) : 0;
              const completedInModule = module.lessons.filter(l => 
                isLoaded && isLessonCompleted(getLessonId(module.slug, l.slug))
              ).length;

              return (
                <div key={module.id} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    moduleProgress === 100 
                      ? "bg-green-900/50 text-green-400 border border-green-700"
                      : "bg-slate-700 text-slate-400"
                  }`}>
                    {moduleProgress === 100 ? "✓" : module.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">
                        {index + 1}. {module.title}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {completedInModule}/{module.lessons.length}
                      </span>
                    </div>
                    <ProgressBar progress={moduleProgress} size="sm" showPercentage={false} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quiz scores */}
        {Object.keys(progress.quizScores).length > 0 && (
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Quiz Scores</h2>
            <div className="space-y-2">
              {Object.entries(progress.quizScores).map(([lessonId, score]) => {
                const [moduleSlug] = lessonId.split("/");
                const module = modules.find(m => m.slug === moduleSlug);
                
                return (
                  <div key={lessonId} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">{module?.title || moduleSlug} Quiz</span>
                    <span className={`font-medium ${score >= 80 ? "text-green-400" : "text-orange-400"}`}>
                      {score}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-medium transition"
          >
            Continue Learning
          </Link>
          <button
            onClick={() => {
              if (confirm("Are you sure? This will reset all your progress.")) {
                resetProgress();
              }
            }}
            className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition"
          >
            Reset Progress
          </button>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 Aussie Agent Skills. Open source under MIT license.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white">Skills</Link>
            <Link href="/premium" className="hover:text-white">Premium</Link>
            <Link href="/newsletter" className="hover:text-white">Newsletter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
