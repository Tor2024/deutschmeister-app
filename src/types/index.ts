import type { LanguageLevel, ExerciseType as ExerciseTypeName } from '@/lib/constants';

export interface BaseExercise {
  id: string;
  type: ExerciseTypeName; // Используем переименованный тип
  question: string;
  explanation?: string; // Explanation for the correct answer or general concept
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  options: string[];
  correctAnswer: string;
}

export interface TranslationExercise extends BaseExercise {
  type: 'translation';
  prompt: string; // Sentence/phrase to translate
  languageDirection: 'to_german' | 'from_german';
  correctAnswer: string; // The correct translation
}

export interface FillInTheBlankExercise extends BaseExercise {
  type: 'fill_in_the_blank';
  sentenceParts: string[]; // e.g., ["Das ist ", " Haus."] for "Das ist ___ Haus."
  correctAnswer: string; // The word(s) that fill the blank
}

export interface ListeningComprehensionExercise extends BaseExercise {
  type: 'listening_comprehension';
  options?: string[];
  correctAnswer: string;
}

export interface WritingPromptExercise extends BaseExercise {
  type: 'writing_prompt';
  suggestedLength?: string;
}

export type Exercise =
  | MultipleChoiceExercise
  | TranslationExercise
  | FillInTheBlankExercise
  | ListeningComprehensionExercise
  | WritingPromptExercise;

export interface VocabularyItem {
  german: string;
  russian: string;
  example?: string; // Example sentence in German
}

export interface ReadingComprehensionQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Lesson {
  id: string;
  level: LanguageLevel;
  topic: string;
  theory: string;
  audio?: string;
  transcript?: string;
  exercises: Exercise[];
  vocabulary?: VocabularyItem[];
  aiGeneratedExercises?: Exercise[];
  readingText?: string;
  readingComprehensionExercises?: ReadingComprehensionQuestion[];
}

export interface Test {
  id: string;
  level: LanguageLevel;
  topic: string;
  questions: Exercise[];
}

export interface ModularTest extends Test {
  coveredLessonIds: string[];
  description?: string; // Optional description for the module
}


export interface ExerciseAttempt {
  correctStreak: number;
  lastScore: number;
  attemptsCount: number;
  mastered: boolean;
}

export interface UserProgress {
  currentLevel: LanguageLevel | null;
  completedLessons: string[];
  testResults: Record<string, { score: number; date: string }>;
  exerciseAttempts: Record<string, ExerciseAttempt>;
  learningGoals: string;
  lastActivity: string | null;
}

export interface AudioMaterial {
  id: string;
  title: string;
  src: string;
  transcript: string;
  level: LanguageLevel;
}
