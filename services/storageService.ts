import { GameProgress, Difficulty } from "../types";

const STORAGE_KEY = 'chess_game_progress_v1';

const DEFAULT_PROGRESS: GameProgress = {
  easyLevel: 1,
  mediumLevel: 1,
  hardLevel: 1
};

export const getProgress = (): GameProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn("Failed to read progress", e);
  }
  return DEFAULT_PROGRESS;
};

export const saveProgress = (progress: GameProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("Failed to save progress", e);
  }
};

export const incrementLevel = (difficulty: Difficulty) => {
  const current = getProgress();
  const next = { ...current };
  
  if (difficulty === Difficulty.EASY) {
    next.easyLevel = Math.min(100, next.easyLevel + 1);
  } else if (difficulty === Difficulty.MEDIUM) {
    next.mediumLevel = Math.min(100, next.mediumLevel + 1);
  } else if (difficulty === Difficulty.HARD) {
    next.hardLevel = Math.min(100, next.hardLevel + 1);
  }
  
  saveProgress(next);
  return next;
};