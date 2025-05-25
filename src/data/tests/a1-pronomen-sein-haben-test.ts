
import type { Test } from '@/types';

export const testA1PronomenSeinHaben: Test = {
  id: 'a1-pronomen-sein-haben-test',
  level: 'A1',
  topic: "Местоимения и 'sein'/'haben' (Тест)",
  testType: 'thematic',
  questions: [
    {
      id: 'a1-pronomen-sein-haben-test-q1',
      type: 'multiple_choice',
      question: 'Какое местоимение соответствует форме глагола "bin"?',
      options: ['du', 'er', 'ich', 'wir'],
      correctAnswer: 'ich',
      explanation: 'Форма "bin" глагола "sein" используется только с местоимением "ich" (я).',
    },
    {
      id: 'a1-pronomen-sein-haben-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "haben": Wir ___ viele Bücher.',
      sentenceParts: ['Wir ', ' viele Bücher.'],
      correctAnswer: 'haben',
      explanation: 'Для местоимения "wir" (мы) глагол "haben" имеет форму "haben".',
    },
    {
      id: 'a1-pronomen-sein-haben-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение:',
      options: ['Du ist nett.', 'Du sind nett.', 'Du bist nett.'],
      correctAnswer: 'Du bist nett.',
      explanation: 'Для местоимения "du" (ты) глагол "sein" имеет форму "bist".',
    },
    {
      id: 'a1-pronomen-sein-haben-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "sein": Er ___ mein Freund.',
      sentenceParts: ['Er ', ' mein Freund.'],
      correctAnswer: 'ist',
      explanation: 'Для местоимения "er" (он) глагол "sein" имеет форму "ist".',
    },
    {
      id: 'a1-pronomen-sein-haben-test-q5',
      type: 'multiple_choice',
      question: 'Какая форма глагола "haben" верна для "ihr"?',
      options: ['hat', 'habt', 'haben', 'hast'],
      correctAnswer: 'habt',
      explanation: 'Для местоимения "ihr" (вы, неформ. мн.ч.) глагол "haben" имеет форму "habt".',
    },
     {
      id: 'a1-pronomen-sein-haben-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "У нее есть идея."',
      prompt: 'У нее есть идея.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie hat eine Idee.',
      explanation: '"Она" - "sie", глагол "haben" для "sie" (она) - "hat". "Идея" - "die Idee", с неопределенным артиклем "eine Idee".',
    }
  ],
};
