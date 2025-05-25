
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, LanguageLevel, ExerciseAttempt, FlashcardAttempt } from '@/types';

const PROGRESS_KEY = 'deutschMeisterProgress';

const getDefaultProgress = (): UserProgress => ({
  currentLevel: null,
  completedLessons: [],
  testResults: {},
  exerciseAttempts: {},
  learningGoals: 'Общее улучшение знаний немецкого языка.',
  lastActivity: null,
  flashcardProgress: {}, // Initialize flashcard progress
});

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(getDefaultProgress());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_KEY);
      if (storedProgress) {
        const parsedProgress = JSON.parse(storedProgress);
        // Ensure flashcardProgress exists in loaded data
        if (!parsedProgress.flashcardProgress) {
          parsedProgress.flashcardProgress = {};
        }
        setProgress(parsedProgress);
      } else {
        // Initialize with default if nothing is stored
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(getDefaultProgress()));
      }
    } catch (error) {
      console.error('Failed to load progress from localStorage:', error);
      // Fallback to default progress if localStorage is corrupt or inaccessible
      setProgress(getDefaultProgress());
    }
    setIsLoading(false);
  }, []);

  const updateProgress = useCallback((newProgressData: Partial<UserProgress>) => {
    setProgress(prev => {
      const updated = { ...prev, ...newProgressData, lastActivity: new Date().toISOString() };
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save progress to localStorage:', error);
      }
      return updated;
    });
  }, []);

  const setCurrentLevel = useCallback((level: LanguageLevel) => {
    updateProgress({ currentLevel: level });
  }, [updateProgress]);

  const completeLesson = useCallback((lessonId: string) => {
    updateProgress({
      completedLessons: Array.from(new Set([...progress.completedLessons, lessonId])),
    });
  }, [progress.completedLessons, updateProgress]);

  const recordTestResult = useCallback((testId: string, score: number) => {
    updateProgress({
      testResults: {
        ...progress.testResults,
        [testId]: { score, date: new Date().toISOString() },
      },
    });
  }, [progress.testResults, updateProgress]);

  const recordExerciseAttempt = useCallback((exerciseId: string, isCorrect: boolean) => {
    const currentAttempt = progress.exerciseAttempts[exerciseId] || {
      correctStreak: 0,
      lastScore: 0,
      attemptsCount: 0,
      mastered: false,
    };

    const newAttempt: ExerciseAttempt = {
      attemptsCount: currentAttempt.attemptsCount + 1,
      lastScore: isCorrect ? 100 : 0,
      correctStreak: isCorrect ? currentAttempt.correctStreak + 1 : 0,
      mastered: false, // Recalculate mastery
    };

    // Simple mastery: 3 correct in a row, or 2 correct with last being 100%
    if (newAttempt.correctStreak >= 2 && newAttempt.lastScore === 100) { 
      newAttempt.mastered = true;
    }
    
    updateProgress({
      exerciseAttempts: {
        ...progress.exerciseAttempts,
        [exerciseId]: newAttempt,
      },
    });
  }, [progress.exerciseAttempts, updateProgress]);
  
  const setLearningGoals = useCallback((goals: string) => {
    updateProgress({ learningGoals: goals });
  }, [updateProgress]);

  const recordFlashcardWordMastery = useCallback((lessonId: string, germanWord: string, mastered: boolean) => {
    updateProgress({
      flashcardProgress: {
        ...(progress.flashcardProgress || {}),
        [lessonId]: {
          ...((progress.flashcardProgress || {})[lessonId] || {}),
          [germanWord]: {
            mastered,
            lastReviewed: new Date().toISOString(),
          },
        },
      },
    });
  }, [progress.flashcardProgress, updateProgress]);

  const clearProgress = useCallback(() => {
    const freshProgress = getDefaultProgress();
    setProgress(freshProgress);
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(freshProgress));
    } catch (error) {
      console.error('Failed to clear progress in localStorage:', error);
    }
  }, []);

  return {
    progress,
    isLoading,
    updateProgress,
    setCurrentLevel,
    completeLesson,
    recordTestResult,
    recordExerciseAttempt,
    setLearningGoals,
    clearProgress,
    recordFlashcardWordMastery, // Export the new function
  };
}
