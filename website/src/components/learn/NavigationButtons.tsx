"use client";

import Link from "next/link";

interface NavigationButtonsProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  onMarkComplete?: () => void;
  isCompleted?: boolean;
}

export function NavigationButtons({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  onMarkComplete,
  isCompleted
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-slate-700">
      {/* Previous */}
      <div className="w-full sm:w-auto">
        {prevHref ? (
          <Link
            href={prevHref}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-slate-500">Previous</div>
              <div className="font-medium">{prevLabel}</div>
            </div>
          </Link>
        ) : (
          <div /> // Spacer
        )}
      </div>

      {/* Mark Complete */}
      {onMarkComplete && (
        <button
          onClick={onMarkComplete}
          disabled={isCompleted}
          className={`px-6 py-3 rounded-lg font-medium transition ${
            isCompleted
              ? "bg-green-900/50 text-green-400 border border-green-700 cursor-default"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          {isCompleted ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Completed
            </span>
          ) : (
            "Mark Complete"
          )}
        </button>
      )}

      {/* Next */}
      <div className="w-full sm:w-auto">
        {nextHref ? (
          <Link
            href={nextHref}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition group justify-end"
          >
            <div className="text-right">
              <div className="text-xs text-slate-500">Next</div>
              <div className="font-medium">{nextLabel}</div>
            </div>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div /> // Spacer
        )}
      </div>
    </div>
  );
}
