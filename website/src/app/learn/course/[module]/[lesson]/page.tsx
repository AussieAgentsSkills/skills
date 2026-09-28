"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { 
  getModule, 
  getLesson, 
  getNextLesson, 
  getPrevLesson,
  getLessonId,
  modules
} from "@/data/lessons";
import { 
  ProgressBar, 
  LessonContent, 
  NavigationButtons, 
  Quiz,
  useProgress 
} from "@/components/learn";

export default function LessonPage() {
  const params = useParams();
  const moduleSlug = params.module as string;
  const lessonSlug = params.lesson as string;

  const { 
    isLoaded, 
    isLessonCompleted, 
    isLessonUnlocked,
    markComplete,
    saveQuizScore,
    updateLastVisited,
    getModuleProgress 
  } = useProgress();

  const module = getModule(moduleSlug);
  const lesson = getLesson(moduleSlug, lessonSlug);
  const nextLesson = getNextLesson(moduleSlug, lessonSlug);
  const prevLesson = getPrevLesson(moduleSlug, lessonSlug);

  // Update last visited
  if (isLoaded && lesson) {
    updateLastVisited(getLessonId(moduleSlug, lessonSlug));
  }

  // Handle 404
  if (!module || !lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Lesson Not Found</h1>
          <p className="text-slate-400 mb-6">This lesson doesn&apos;t exist or may have moved.</p>
          <Link
            href="/learn"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  const lessonId = getLessonId(moduleSlug, lessonSlug);
  const isCompleted = isLoaded ? isLessonCompleted(lessonId) : false;
  const isUnlocked = isLoaded ? isLessonUnlocked(moduleSlug, lessonSlug) : true;
  const moduleProgress = isLoaded ? getModuleProgress(moduleSlug) : 0;

  // Find lesson index
  const lessonIndex = module.lessons.findIndex(l => l.slug === lessonSlug);
  const moduleIndex = modules.findIndex(m => m.slug === moduleSlug);

  // Check if this is a quiz lesson
  const hasQuiz = lesson.quiz && lesson.quiz.length > 0;

  // Handle locked lesson
  if (isLoaded && !isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-white mb-4">Lesson Locked</h1>
          <p className="text-slate-400 mb-6">
            Complete the previous lessons to unlock this one.
          </p>
          <Link
            href="/learn"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  const handleMarkComplete = () => {
    markComplete(lessonId);
  };

  const handleQuizPass = () => {
    saveQuizScore(lessonId, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header backLink={{ href: "/learn", label: "← Course" }} navLinks={[
        { href: "/learn/progress", label: "Progress" },
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <Link href="/learn" className="text-slate-500 hover:text-slate-300">Learn</Link>
          <span className="text-slate-600">/</span>
          <Link href="/learn" className="text-slate-500 hover:text-slate-300">{module.title}</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">{lesson.title}</span>
        </nav>

        {/* Module progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">
              Module {moduleIndex + 1}: {module.title}
            </span>
            <span className="text-slate-500 text-sm">
              Lesson {lessonIndex + 1} of {module.lessons.length}
            </span>
          </div>
          <ProgressBar progress={moduleProgress} size="sm" />
        </div>

        {/* Lesson header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-slate-500 text-sm">
              {hasQuiz ? "Quiz" : `Lesson ${lessonIndex + 1}`}
            </span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500 text-sm">{lesson.duration}</span>
            {isCompleted && (
              <>
                <span className="text-slate-700">·</span>
                <span className="text-green-400 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Completed
                </span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
          <p className="text-slate-400 mt-2">{lesson.description}</p>
        </div>

        {/* Lesson content */}
        <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700 mb-8">
          <LessonContent content={lesson.content} />
          
          {/* Quiz component */}
          {hasQuiz && lesson.quiz && (
            <div className="mt-8">
              <Quiz 
                questions={lesson.quiz} 
                onPass={handleQuizPass}
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <NavigationButtons
          prevHref={prevLesson ? `/learn/course/${prevLesson.module.slug}/${prevLesson.lesson.slug}` : undefined}
          prevLabel={prevLesson?.lesson.title}
          nextHref={nextLesson ? `/learn/course/${nextLesson.module.slug}/${nextLesson.lesson.slug}` : undefined}
          nextLabel={nextLesson?.lesson.title}
          onMarkComplete={hasQuiz ? undefined : handleMarkComplete}
          isCompleted={isCompleted}
        />

        {/* Course complete message */}
        {!nextLesson && isCompleted && (
          <div className="mt-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-xl font-bold text-white mb-2">Congratulations!</h2>
            <p className="text-slate-300 mb-4">
              You&apos;ve completed Zero to Claude Code! You now have the skills to build
              software with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learn/progress"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
              >
                View Your Progress
              </Link>
              <Link
                href="/"
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition"
              >
                Explore Skills →
              </Link>
            </div>
          </div>
        )}
      </div>

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
