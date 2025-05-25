
import type { LucideIcon } from 'lucide-react';
import { Home, BookOpen, CheckSquare, BarChart3, SpellCheck, Code } from 'lucide-react'; // Added Code icon

export const APP_NAME = 'DeutschMeister';

interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Главная', icon: Home },
  { href: '/lessons', label: 'Уроки', icon: BookOpen },
  { href: '/vocabulary', label: 'Словарь / Карточки', icon: SpellCheck },
  { href: '/tests', label: 'Тесты', icon: CheckSquare },
  { href: '/progress', label: 'Прогресс', icon: BarChart3 },
  { href: '/developers', label: 'Разработчики', icon: Code }, // Added Developers link
];

export const LANGUAGE_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type LanguageLevel = typeof LANGUAGE_LEVELS[number];

export const EXERCISE_TYPES = ['multiple_choice', 'translation', 'fill_in_the_blank', 'listening_comprehension', 'writing_prompt'] as const;
export type ExerciseType = typeof EXERCISE_TYPES[number];
