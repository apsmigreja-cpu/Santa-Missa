import { useEffect, useState, useCallback } from 'react';
import { UserProgress } from '../types';
import { MODULES_DATA } from '../data/modulesData';

const PROGRESS_STORAGE_KEY = 'santa_missa_formacao_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizScores: {},
  bookmarkedLessons: [],
  lastVisitedLessonId: 'm1-a1',
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === 'undefined') return defaultProgress;
    try {
      const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage quota errors
    }
  }, [progress]);

  const toggleLessonCompleted = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const exists = prev.completedLessons.includes(lessonId);
      const updated = exists
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        completedLessons: updated,
        lastVisitedLessonId: lessonId,
      };
    });
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const toggleBookmark = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedLessons.includes(lessonId);
      const updated = exists
        ? prev.bookmarkedLessons.filter((id) => id !== lessonId)
        : [...prev.bookmarkedLessons, lessonId];
      return {
        ...prev,
        bookmarkedLessons: updated,
      };
    });
  }, []);

  const isBookmarked = useCallback(
    (lessonId: string) => progress.bookmarkedLessons.includes(lessonId),
    [progress.bookmarkedLessons]
  );

  const saveQuizScore = useCallback((moduleId: string, score: number, total: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: {
          score,
          total,
          date: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const setLastVisited = useCallback((lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      lastVisitedLessonId: lessonId,
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    if (window.confirm('Deseja realmente reiniciar todo o progresso de formação?')) {
      setProgress(defaultProgress);
    }
  }, []);

  const totalLessons = MODULES_DATA.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = progress.completedLessons.length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return {
    progress,
    toggleLessonCompleted,
    isLessonCompleted,
    toggleBookmark,
    isBookmarked,
    saveQuizScore,
    setLastVisited,
    resetAllProgress,
    totalLessons,
    completedCount,
    progressPercentage,
  };
}
