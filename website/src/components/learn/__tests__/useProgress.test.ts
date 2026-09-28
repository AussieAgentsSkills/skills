import { renderHook, act } from "@testing-library/react";
import { useProgress } from "../useProgress";

const STORAGE_KEY = "zero-to-claude-progress";

beforeEach(() => {
  localStorage.clear();
});

describe("useProgress", () => {
  describe("localStorage persistence", () => {
    it("loads default progress when localStorage is empty", () => {
      const { result } = renderHook(() => useProgress());
      expect(result.current.isLoaded).toBe(true);
      expect(result.current.progress.completedLessons).toEqual([]);
      expect(result.current.progress.quizScores).toEqual({});
      expect(result.current.progress.lastVisited).toBe("");
    });

    it("loads existing progress from localStorage", () => {
      const stored = {
        completedLessons: ["terminal-basics/what-is-terminal"],
        quizScores: { "terminal-basics/what-is-terminal": 100 },
        lastVisited: "terminal-basics/what-is-terminal",
        startedAt: "2026-01-01T00:00:00.000Z",
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));

      const { result } = renderHook(() => useProgress());
      expect(result.current.progress).toEqual(stored);
      expect(result.current.isLoaded).toBe(true);
    });

    it("saves progress to localStorage when marking a lesson complete", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      expect(saved.completedLessons).toContain(
        "terminal-basics/what-is-terminal"
      );
    });

    it("persists progress across hook remounts", () => {
      const { result, unmount } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      unmount();

      const { result: result2 } = renderHook(() => useProgress());
      expect(result2.current.progress.completedLessons).toContain(
        "terminal-basics/what-is-terminal"
      );
    });

    it("handles corrupted localStorage data gracefully", () => {
      localStorage.setItem(STORAGE_KEY, "not-valid-json{{{");

      const { result } = renderHook(() => useProgress());
      expect(result.current.isLoaded).toBe(true);
      expect(result.current.progress.completedLessons).toEqual([]);
    });
  });

  describe("markComplete", () => {
    it("adds lesson to completedLessons", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      expect(result.current.progress.completedLessons).toContain(
        "terminal-basics/what-is-terminal"
      );
    });

    it("does not duplicate already completed lessons", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });
      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      expect(
        result.current.progress.completedLessons.filter(
          (id) => id === "terminal-basics/what-is-terminal"
        )
      ).toHaveLength(1);
    });

    it("updates lastVisited", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      expect(result.current.progress.lastVisited).toBe(
        "terminal-basics/what-is-terminal"
      );
    });
  });

  describe("saveQuizScore", () => {
    it("saves score and marks lesson complete", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.saveQuizScore("terminal-basics/quiz", 80);
      });

      expect(result.current.progress.quizScores["terminal-basics/quiz"]).toBe(
        80
      );
      expect(result.current.progress.completedLessons).toContain(
        "terminal-basics/quiz"
      );
    });

    it("preserves quiz score when markComplete is called after", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.saveQuizScore("terminal-basics/quiz", 90);
      });
      act(() => {
        result.current.markComplete("terminal-basics/quiz");
      });

      expect(result.current.progress.quizScores["terminal-basics/quiz"]).toBe(
        90
      );
      expect(result.current.progress.completedLessons).toContain(
        "terminal-basics/quiz"
      );
    });
  });

  describe("updateLastVisited", () => {
    it("updates lastVisited in state and localStorage", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.updateLastVisited("terminal-basics/what-is-terminal");
      });

      expect(result.current.progress.lastVisited).toBe(
        "terminal-basics/what-is-terminal"
      );
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      expect(saved.lastVisited).toBe("terminal-basics/what-is-terminal");
    });

    it("does not write to localStorage if lastVisited has not changed", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.updateLastVisited("terminal-basics/what-is-terminal");
      });

      const spy = jest.spyOn(Storage.prototype, "setItem");
      act(() => {
        result.current.updateLastVisited("terminal-basics/what-is-terminal");
      });
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe("isLessonCompleted", () => {
    it("returns false for incomplete lessons", () => {
      const { result } = renderHook(() => useProgress());
      expect(
        result.current.isLessonCompleted("terminal-basics/what-is-terminal")
      ).toBe(false);
    });

    it("returns true for completed lessons", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      expect(
        result.current.isLessonCompleted("terminal-basics/what-is-terminal")
      ).toBe(true);
    });
  });

  describe("resetProgress", () => {
    it("clears all progress and saves to localStorage", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
        result.current.saveQuizScore("terminal-basics/quiz", 100);
      });

      act(() => {
        result.current.resetProgress();
      });

      expect(result.current.progress.completedLessons).toEqual([]);
      expect(result.current.progress.quizScores).toEqual({});
      expect(result.current.progress.lastVisited).toBe("");

      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      expect(saved.completedLessons).toEqual([]);
    });
  });

  describe("getOverallProgress", () => {
    it("returns 0 when no lessons are completed", () => {
      const { result } = renderHook(() => useProgress());
      expect(result.current.getOverallProgress()).toBe(0);
    });

    it("returns correct percentage after completing a lesson", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });

      expect(result.current.getOverallProgress()).toBeGreaterThan(0);
    });
  });

  describe("rapid successive updates (stale closure prevention)", () => {
    it("preserves all data when multiple operations happen in sequence", () => {
      const { result } = renderHook(() => useProgress());

      act(() => {
        result.current.markComplete("terminal-basics/what-is-terminal");
      });
      act(() => {
        result.current.saveQuizScore("terminal-basics/quiz", 95);
      });
      act(() => {
        result.current.updateLastVisited("terminal-basics/navigation");
      });

      expect(result.current.progress.completedLessons).toContain(
        "terminal-basics/what-is-terminal"
      );
      expect(result.current.progress.completedLessons).toContain(
        "terminal-basics/quiz"
      );
      expect(result.current.progress.quizScores["terminal-basics/quiz"]).toBe(
        95
      );
      expect(result.current.progress.lastVisited).toBe(
        "terminal-basics/navigation"
      );

      // Verify localStorage has everything
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      expect(saved.completedLessons).toContain(
        "terminal-basics/what-is-terminal"
      );
      expect(saved.completedLessons).toContain("terminal-basics/quiz");
      expect(saved.quizScores["terminal-basics/quiz"]).toBe(95);
    });
  });
});
