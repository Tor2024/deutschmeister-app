
import type { Test } from '@/types';

export const testA2GrammatikPraeteritumSeinHabenModal: Test = {
  id: 'a2-grammatik-praeteritum-sein-haben-modal-test',
  level: 'A2',
  topic: 'Präteritum (sein, haben, Modalverben) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a2-grammatik-praeteritum-sein-haben-modal',
  questions: [
    {
      id: 'a2-praeteritum-test-q1',
      type: 'multiple_choice',
      question: 'Какая форма "sein" в Präteritum для "wir"?',
      options: ['sind', 'waren', 'wart', 'seid'],
      correctAnswer: 'waren',
      explanation: 'Для "wir" форма Präteritum от "sein" - "waren".',
    },
    {
      id: 'a2-praeteritum-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "haben" в Präteritum: Du ___ gestern Glück.',
      sentenceParts: ['Du ', ' gestern Glück.'],
      correctAnswer: 'hattest',
      explanation: 'Для "du" форма Präteritum от "haben" - "hattest".',
    },
    {
      id: 'a2-praeteritum-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильную форму "wollen" в Präteritum: "Er ___ einen Apfel essen."',
      options: ['will', 'wollte', 'wollt', 'wollen'],
      correctAnswer: 'wollte',
      explanation: 'Для "er" форма Präteritum от "wollen" - "wollte".',
    },
    {
      id: 'a2-praeteritum-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте модальный глагол "müssen" в Präteritum: "Wir ___ das machen."',
      sentenceParts: ['Wir ', ' das machen.'],
      correctAnswer: 'mussten',
      explanation: 'Для "wir" форма Präteritum от "müssen" - "mussten".',
    },
    {
      id: 'a2-praeteritum-test-q5',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не мог прийти."',
      prompt: 'Я не мог прийти.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich konnte nicht kommen.',
      explanation: 'Präteritum от "können" для "ich" - "konnte".',
    },
  ],
};
