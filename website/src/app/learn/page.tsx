"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { modules, getLessonId, getTotalLessons } from "@/data/lessons";
import { ProgressBar, LessonCard, useProgress } from "@/components/learn";

export default function LearnPage() {
  const { isLoaded, getOverallProgress, getModuleProgress, isLessonCompleted, isLessonUnlocked } = useProgress();

  const totalLessons = getTotalLessons();
  const overallProgress = getOverallProgress();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/guides", label: "Guides" },
        { href: "/learn", label: "Learn", className: "text-orange-400 hover:text-orange-300 font-medium" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
          🎓 FREE COURSE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Zero to Claude Code
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Learn to build software with AI. From &quot;what&apos;s a terminal?&quot; to shipping your first app — 
          no prior experience required.
        </p>

        {/* Progress overview */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-medium">Your Progress</span>
            <Link href="/learn/progress" className="text-orange-400 hover:text-orange-300 text-sm">
              View Details →
            </Link>
          </div>
          <ProgressBar progress={isLoaded ? overallProgress : 0} />
          <p className="text-slate-500 text-sm mt-2">
            {isLoaded ? Math.round(overallProgress) : 0}% complete · {totalLessons} lessons
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-white">{modules.length}</div>
            <div className="text-slate-400 text-sm">Modules</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-white">{totalLessons}</div>
            <div className="text-slate-400 text-sm">Lessons</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-white">~3</div>
            <div className="text-slate-400 text-sm">Hours</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400">Free</div>
            <div className="text-slate-400 text-sm">Forever</div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-8">Course Modules</h2>
        
        <div className="space-y-8">
          {modules.map((module, moduleIndex) => {
            const moduleProgress = isLoaded ? getModuleProgress(module.slug) : 0;
            const isModuleStarted = moduleProgress > 0;
            const isModuleComplete = moduleProgress === 100;

            return (
              <div key={module.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                {/* Module header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      isModuleComplete 
                        ? "bg-green-900/50 border border-green-700"
                        : "bg-slate-700"
                    }`}>
                      {isModuleComplete ? "✓" : module.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-sm">Module {moduleIndex + 1}</span>
                        {isModuleComplete && (
                          <span className="bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded border border-green-700">
                            Complete
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white">{module.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{module.description}</p>
                    </div>
                  </div>
                  
                  {/* Module progress */}
                  <div className="mt-4">
                    <ProgressBar progress={moduleProgress} size="sm" showPercentage={false} />
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-xs">{module.lessons.length} lessons</span>
                      <span className="text-slate-500 text-xs">{Math.round(moduleProgress)}% complete</span>
                    </div>
                  </div>
                </div>

                {/* Lessons */}
                <div className="p-4 space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const lessonId = getLessonId(module.slug, lesson.slug);
                    const completed = isLoaded ? isLessonCompleted(lessonId) : false;
                    const unlocked = isLoaded ? isLessonUnlocked(module.slug, lesson.slug) : lessonIndex === 0 && moduleIndex === 0;

                    return (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        moduleSlug={module.slug}
                        index={lessonIndex}
                        isCompleted={completed}
                        isLocked={!unlocked}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-orange-100 mb-6 max-w-xl mx-auto">
            Begin with Module 1 and work your way through. Each lesson builds on the last, 
            and quizzes help reinforce what you learn.
          </p>
          <Link
            href="/learn/course/terminal-basics/what-is-terminal"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition"
          >
            Start Learning →
          </Link>
        </div>
      </section>

      {/* Skills promo */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold">Supercharge Your Claude Code</h3>
            <p className="text-slate-400 text-sm">Add Australian expertise with our agent skills library</p>
          </div>
          <Link
            href="/"
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition whitespace-nowrap"
          >
            Browse Skills →
          </Link>
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
