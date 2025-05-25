
import type { Test } from '@/types';

export const testA2VerbLassen: Test = {
  id: 'a2-verb-lassen-test',
  level: 'A2',
  topic: 'Глагол lassen (основы) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a2-verb-lassen',
  questions: [
    {
      id: 'a2-lassen-test-q1',
      type: 'multiple_choice',
      question: 'Какая форма глагола "lassen" правильная для "du"?',
      options: ['lasse', 'lasst', 'lässt', 'lassen'],
      correctAnswer: 'lässt',
      explanation: 'Глагол "lassen" - сильный. Для "du" форма "lässt" (с умлаутом).',
    },
    {
      id: 'a2-lassen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "lassen": Wir ___ unsere Kinder heute Abend länger fernsehen.',
      sentenceParts: ['Wir ', ' unsere Kinder heute Abend länger fernsehen.'],
      correctAnswer: 'lassen',
      explanation: 'Для "wir" форма глагола "lassen" - "lassen". Значение: позволять, разрешать.',
    },
    {
      id: 'a2-lassen-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я оставляю ключи на столе."',
      prompt: 'Я оставляю ключи на столе.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich lasse die Schlüssel auf dem Tisch.',
      explanation: 'Значение "оставлять". "Ich lasse die Schlüssel..."',
    },
    {
      id: 'a2-lassen-test-q4',
      type: 'multiple_choice',
      question: 'Какое значение имеет "lassen" в предложении: "Der Vater lässt seinen Sohn mit dem Auto fahren."?',
      options: ['Оставлять', 'Велеть что-то сделать', 'Позволять/разрешать', 'Забывать'],
      correctAnswer: 'Позволять/разрешать',
      explanation: 'В данном контексте "lässt fahren" означает "позволяет/разрешает ехать".',
    },
    {
      id: 'a2-lassen-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Sie ___ sich ein neues Kleid ___." (велеть сшить)',
      sentenceParts: ['Sie ', ' sich ein neues Kleid ', '.'],
      correctAnswer: 'lässt, nähen', // nähen - шить
      explanation: 'Конструкция "etwas machen lassen" (велеть что-то сделать). "Sie lässt sich ein Kleid nähen." (Она велит сшить себе платье / Ей шьют платье.)',
    },
  ],
};
