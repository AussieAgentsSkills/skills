"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { modules, getLessonId, getTotalLessons } from "@/data/lessons";

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  lastVisited: string;
  startedAt: string;
}

const STORAGE_KEY = "zero-to-claude-progress";

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizScores: {},
  lastVisited: "",
  startedAt: new Date().toISOString()
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);
  const progressRef = useRef(progress);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UserProgress;
        setProgress(parsed);
        progressRef.current = parsed;
      }
    } catch {
      // Corrupted data — start fresh
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  const saveProgress = useCallback((newProgress: UserProgress) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
      progressRef.current = newProgress;
    } catch {
      // Storage full or unavailable — progress will be lost on refresh
    }
  }, []);

  // Mark a lesson as complete
  const markComplete = useCallback((lessonId: string) => {
    const current = progressRef.current;
    const newProgress = {
      ...current,
      completedLessons: current.completedLessons.includes(lessonId)
        ? current.completedLessons
        : [...current.completedLessons, lessonId],
      lastVisited: lessonId
    };
    saveProgress(newProgress);
  }, [saveProgress]);

  // Save quiz score
  const saveQuizScore = useCallback((lessonId: string, score: number) => {
    const current = progressRef.current;
    const newProgress = {
      ...current,
      quizScores: {
        ...current.quizScores,
        [lessonId]: score
      },
      completedLessons: current.completedLessons.includes(lessonId)
        ? current.completedLessons
        : [...current.completedLessons, lessonId],
      lastVisited: lessonId
    };
    saveProgress(newProgress);
  }, [saveProgress]);

  // Update last visited
  const updateLastVisited = useCallback((lessonId: string) => {
    const current = progressRef.current;
    if (current.lastVisited !== lessonId) {
      const newProgress = {
        ...current,
        lastVisited: lessonId
      };
      saveProgress(newProgress);
    }
  }, [saveProgress]);

  // Check if lesson is completed
  const isLessonCompleted = useCallback((lessonId: string): boolean => {
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  // Check if lesson is unlocked (previous lessons completed)
  const isLessonUnlocked = useCallback((moduleSlug: string, lessonSlug: string): boolean => {
    // First lesson of first module is always unlocked
    if (modules[0].slug === moduleSlug && modules[0].lessons[0].slug === lessonSlug) {
      return true;
    }

    // Find the position
    let prevLessonId: string | null = null;
    
    for (const module of modules) {
      for (let i = 0; i < module.lessons.length; i++) {
        const lesson = module.lessons[i];
        if (module.slug === moduleSlug && lesson.slug === lessonSlug) {
          // Found it - check if previous is completed
          if (prevLessonId) {
            return progress.completedLessons.includes(prevLessonId);
          }
          return true;
        }
        prevLessonId = getLessonId(module.slug, lesson.slug);
      }
    }
    
    return false;
  }, [progress.completedLessons]);

  // Get overall progress percentage
  const getOverallProgress = useCallback((): number => {
    const total = getTotalLessons();
    if (total === 0) return 0;
    return (progress.completedLessons.length / total) * 100;
  }, [progress.completedLessons]);

  // Get module progress percentage
  const getModuleProgress = useCallback((moduleSlug: string): number => {
    const module = modules.find(m => m.slug === moduleSlug);
    if (!module) return 0;
    
    const completedInModule = module.lessons.filter(lesson => 
      progress.completedLessons.includes(getLessonId(moduleSlug, lesson.slug))
    ).length;
    
    return (completedInModule / module.lessons.length) * 100;
  }, [progress.completedLessons]);

  // Reset progress
  const resetProgress = useCallback(() => {
    saveProgress({
      ...defaultProgress,
      startedAt: new Date().toISOString()
    });
  }, [saveProgress]);

  return {
    progress,
    isLoaded,
    markComplete,
    saveQuizScore,
    updateLastVisited,
    isLessonCompleted,
    isLessonUnlocked,
    getOverallProgress,
    getModuleProgress,
    resetProgress
  };
}
