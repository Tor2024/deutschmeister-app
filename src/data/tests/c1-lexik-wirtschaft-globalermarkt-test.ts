
import type { Test } from '@/types';

export const testC1LexikWirtschaftGlobalermarkt: Test = {
  id: 'c1-lexik-wirtschaft-globalermarkt-test',
  level: 'C1',
  topic: 'Экономика и глобальный рынок (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c1-lexik-wirtschaft-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt den Zustand, wenn die Preise allgemein steigen und die Kaufkraft des Geldes sinkt?',
      options: ['Deflation', 'Rezession', 'Inflation', 'Konjunktur'],
      correctAnswer: 'Inflation',
      explanation: '"Die Inflation" ist der allgemeine Anstieg der Preise und der Rückgang der Kaufkraft.',
    },
    {
      id: 'c1-lexik-wirtschaft-test-q2',
      type: 'fill_in_the_blank',
      question: 'Die ___ (глобализация) hat zu einer engeren Vernetzung der Weltwirtschaft geführt.',
      sentenceParts: ['Die ', ' hat zu einer engeren Vernetzung der Weltwirtschaft geführt.'],
      correctAnswer: 'Globalisierung',
      explanation: '"Die Globalisierung" ist der passende Begriff.',
    },
    {
      id: 'c1-lexik-wirtschaft-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Многие компании инвестируют в новые технологии."',
      prompt: 'Многие компании инвестируют в новые технологии.',
      languageDirection: 'to_german',
      correctAnswer: 'Viele Unternehmen investieren in neue Technologien.',
      explanation: '"Инвестировать в" - "investieren in + Akkusativ".',
    },
    {
      id: 'c1-lexik-wirtschaft-test-q4',
      type: 'multiple_choice',
      question: 'Was bedeutet "der Wettbewerb" im wirtschaftlichen Kontext?',
      options: ['Kooperation', 'Monopol', 'Konkurrenz', 'Subvention'],
      correctAnswer: 'Konkurrenz',
      explanation: '"Der Wettbewerb" bedeutet "конкуренция" zwischen Unternehmen oder Akteuren am Markt.',
    },
  ],
};
