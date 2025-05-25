
import type { Test } from '@/types';

export const testA1Pluralbildung: Test = {
  id: 'a1-pluralbildung-test',
  level: 'A1',
  topic: 'Множественное число (Тест)',
  questions: [
    {
      id: 'a1-plural-test-q1',
      type: 'multiple_choice',
      question: 'Какое множественное число у слова "das Auto"?',
      options: ['die Autoen', 'die Autoe', 'die Autos', 'die Auter'],
      correctAnswer: 'die Autos',
      explanation: 'Слова, оканчивающиеся на -o, часто образуют множественное число с окончанием -s.',
    },
    {
      id: 'a1-plural-test-q2',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число: der Tisch → die ___',
      sentenceParts: ['der Tisch → die ', ''],
      correctAnswer: 'Tische',
      explanation: 'Многие существительные мужского рода образуют множественное число с окончанием -e: die Tische.',
    },
    {
      id: 'a1-plural-test-q3',
      type: 'multiple_choice',
      question: 'Как будет "ребенок" (das Kind) во множественном числе?',
      options: ['die Kinde', 'die Kinden', 'die Kinder', 'die Kinds'],
      correctAnswer: 'die Kinder',
      explanation: 'Существительные среднего рода часто образуют множественное число с окончанием -er: die Kinder.',
    },
    {
      id: 'a1-plural-test-q4',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число: die Blume (цветок) → die ___',
      sentenceParts: ['die Blume → die ', ''],
      correctAnswer: 'Blumen',
      explanation: 'Многие существительные женского рода, оканчивающиеся на -e, образуют множественное число с окончанием -n: die Blumen.',
    },
    {
      id: 'a1-plural-test-q5',
      type: 'multiple_choice',
      question: 'Какой определенный артикль используется для ВСЕХ существительных во множественном числе?',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'die',
      explanation: 'Определенный артикль для всех родов во множественном числе всегда "die".',
    }
  ],
};
