
import type { Test } from '@/types';

export const testA2LexikKonflikteLoesungen: Test = {
  id: 'a2-lexik-konflikte-loesungen-test',
  level: 'A2',
  topic: 'Простые конфликты и решения (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-konflikte-test-q1',
      type: 'multiple_choice',
      question: 'Что делать, если ваш телефон не работает?',
      options: ['Купить новый', 'Попробовать его починить', 'Выбросить его', 'Ничего не делать'],
      correctAnswer: 'Попробовать его починить',
      explanation: 'Сначала стоит попробовать починить (reparieren) сломанную вещь.',
    },
    {
      id: 'a2-lexik-konflikte-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich habe meine Schlüssel ___. Ich kann sie nicht finden."',
      sentenceParts: ['Ich habe meine Schlüssel ', '. Ich kann sie nicht finden.'],
      correctAnswer: 'verloren',
      explanation: '"Verloren haben" означает "потерять".',
    },
    {
      id: 'a2-lexik-konflikte-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Что случилось?"',
      prompt: 'Что случилось?',
      languageDirection: 'to_german',
      correctAnswer: 'Was ist los?',
      explanation: '"Was ist los?" - это распространенный способ спросить "Что случилось?".',
    },
    {
      id: 'a2-lexik-konflikte-test-q4',
      type: 'multiple_choice',
      question: 'Какая фраза означает "извиниться"?',
      options: ['Hilfe rufen', 'sich entschuldigen', 'eine Lösung finden', 'ein Problem haben'],
      correctAnswer: 'sich entschuldigen',
      explanation: '"Sich entschuldigen" означает "извиняться".',
    },
  ],
};
