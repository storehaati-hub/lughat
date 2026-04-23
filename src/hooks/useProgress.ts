import { useState, useEffect } from 'react';

export interface UserProgress {
  xp: number;
  level: number;
  completedLessons: string[]; // array of lesson IDs
  masteredWords: string[]; // array of word IDs
}

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  completedLessons: [],
  masteredWords: [],
};

const LEVEL_XP_REQ = 120; // XP needed per level

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem('urdu_learner_progress');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load progress", e);
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    localStorage.setItem('urdu_learner_progress', JSON.stringify(progress));
  }, [progress]);

  const addXP = (amount: number) => {
    setProgress((prev) => {
      const newXp = prev.xp + amount;
      const newLevel = Math.floor(newXp / LEVEL_XP_REQ) + 1;
      return {
        ...prev,
        xp: newXp,
        level: newLevel,
      };
    });
  };

  const markLessonCompleted = (lessonId: string) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
    });
  };

  const toggleWordMastered = (wordId: string) => {
    setProgress((prev) => {
      if (prev.masteredWords.includes(wordId)) {
        return {
          ...prev,
          masteredWords: prev.masteredWords.filter(id => id !== wordId),
        };
      }
      return {
        ...prev,
        masteredWords: [...prev.masteredWords, wordId],
      };
    });
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
  };

  return { progress, addXP, markLessonCompleted, toggleWordMastered, resetProgress };
}
