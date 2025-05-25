
import type { Test } from '@/types';

export const testC1LexikPolitikGesellschaft: Test = {
  id: 'c1-lexik-politik-gesellschaft-test',
  level: 'C1',
  topic: 'Политика и общество (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c1-lexik-politik-gesellschaft-test-q1',
      type: 'multiple_choice',
      question: 'Какое немецкое слово означает "выборы"?',
      options: ['die Regierung', 'das Parlament', 'die Wahl', 'die Partei'],
      correctAnswer: 'die Wahl',
      explanation: '"Die Wahl" (мн.ч. "die Wahlen") означает "выборы".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Die Meinungs___ ist ein Grundrecht in vielen Demokratien."',
      sentenceParts: ['Die Meinungs', ' ist ein Grundrecht in vielen Demokratien.'],
      correctAnswer: 'freiheit',
      explanation: '"Die Meinungsfreiheit" означает "свобода слова/мнений".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Правительство должно принять меры против безработицы."',
      prompt: 'Правительство должно принять меры против безработицы.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Regierung muss Maßnahmen gegen die Arbeitslosigkeit ergreifen.',
      // Альтернатива: Die Regierung muss Maßnahmen gegen die Arbeitslosigkeit treffen.
      explanation: '"Принять меры" - "Maßnahmen ergreifen/treffen". "Безработица" - "die Arbeitslosigkeit".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-test-q4',
      type: 'multiple_choice',
      question: 'Что означает глагол "fordern" в политическом контексте?',
      options: ['поддерживать', 'критиковать', 'требовать', 'обсуждать'],
      correctAnswer: 'требовать',
      explanation: '"Fordern" означает "требовать".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-test-q5',
      type: 'multiple_choice',
      question: 'Какое слово описывает процесс интеграции мигрантов в общество?',
      options: ['die Globalisierung', 'die Revolution', 'die Integration', 'die Demonstration'],
      correctAnswer: 'die Integration',
      explanation: '"Die Integration" означает "интеграция".',
    },
  ],
};
