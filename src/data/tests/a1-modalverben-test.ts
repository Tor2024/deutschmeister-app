
import type { Test } from '@/types';

export const testA1Modalverben: Test = {
  id: 'a1-modalverben-test',
  level: 'A1',
  topic: 'Модальные глаголы (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-modal-test-q1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "können": Ich ___ gut schwimmen.',
      sentenceParts: ['Ich ', ' gut schwimmen.'],
      correctAnswer: 'kann',
      explanation: 'Для "ich" форма глагола "können" - "kann".',
    },
    {
      id: 'a1-modal-test-q2',
      type: 'multiple_choice',
      question: 'Какая форма глагола "müssen" подходит для "du"?',
      options: ['muss', 'müssen', 'musst', 'müsst'],
      correctAnswer: 'musst',
      explanation: 'Для "du" используется форма "musst".',
    },
    {
      id: 'a1-modal-test-q3',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Er ___ heute arbeiten."',
      sentenceParts: ['Er ', ' heute arbeiten.'],
      correctAnswer: 'muss', // или will, kann, soll, darf
      explanation: 'Для "er" глагол "müssen" имеет форму "muss". Другие модальные глаголы тоже возможны (will, kann, soll, darf), но "muss" является частым вариантом.',
    },
    {
      id: 'a1-modal-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение с "wollen":',
      options: [
        'Wir wollen ins Kino gehen.',
        'Wir will ins Kino gehen.',
        'Wir wollt ins Kino gehen.'
      ],
      correctAnswer: 'Wir wollen ins Kino gehen.',
      explanation: 'Для "wir" форма глагола "wollen" - "wollen".',
    },
    {
      id: 'a1-modal-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "möchten": "___ du einen Kaffee?"',
      sentenceParts: ['', ' du einen Kaffee?'],
      correctAnswer: 'Möchtest',
      explanation: 'Вежливая форма "möchten" для "du" - "möchtest".',
    }
  ],
};
