"use client";

import Link from "next/link";
import type { Lesson } from "@/data/lessons";

interface LessonCardProps {
  lesson: Lesson;
  moduleSlug: string;
  index: number;
  isCompleted: boolean;
  isLocked: boolean;
}

export function LessonCard({ lesson, moduleSlug, index, isCompleted, isLocked }: LessonCardProps) {
  const isQuiz = lesson.quiz && lesson.quiz.length > 0;

  if (isLocked) {
    return (
      <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 opacity-50">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-500 font-medium">
          🔒
        </div>
        <div className="flex-1">
          <h3 className="text-slate-500 font-medium">{lesson.title}</h3>
          <p className="text-slate-600 text-sm">{lesson.description}</p>
        </div>
        <span className="text-slate-600 text-sm">Complete previous lessons</span>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/course/${moduleSlug}/${lesson.slug}`}
      className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-orange-500 transition group"
    >
      {/* Lesson number / status */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
        isCompleted 
          ? "bg-green-900/50 text-green-400 border border-green-700"
          : isQuiz
          ? "bg-purple-900/50 text-purple-400 border border-purple-700"
          : "bg-slate-700 text-slate-300 group-hover:bg-orange-900/50 group-hover:text-orange-400 group-hover:border-orange-700 border border-slate-600"
      }`}>
        {isCompleted ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : isQuiz ? (
          "?"
        ) : (
          index + 1
        )}
      </div>

      {/* Lesson info */}
      <div className="flex-1">
        <h3 className="text-white font-medium group-hover:text-orange-400 transition flex items-center gap-2">
          {lesson.title}
          {isQuiz && <span className="text-xs bg-purple-900/50 text-purple-400 px-2 py-0.5 rounded">Quiz</span>}
        </h3>
        <p className="text-slate-400 text-sm">{lesson.description}</p>
      </div>

      {/* Duration */}
      <span className="text-slate-500 text-sm">{lesson.duration}</span>

      {/* Arrow */}
      <svg className="w-5 h-5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
