
import type { Test } from '@/types';

export const testA1TrennbarVerben: Test = {
  id: 'a1-trennbar-verben-test',
  level: 'A1',
  topic: 'Отделяемые приставки (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-trennbar-test-q1',
      type: 'multiple_choice',
      question: 'В предложении "Ich stehe um 7 Uhr auf." какая часть является отделяемой приставкой?',
      options: ['stehe', 'Uhr', 'auf', 'um'],
      correctAnswer: 'auf',
      explanation: 'В глаголе "aufstehen" приставка "auf-" отделяется и идет в конец предложения.',
    },
    {
      id: 'a1-trennbar-test-q2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол "anrufen" в правильную форму: Du ___ deine Oma oft ___.',
      sentenceParts: ['Du ', ' deine Oma oft ', '.'],
      correctAnswer: 'rufst, an',
      explanation: 'Глагол "anrufen" (звонить). Спрягаемая часть "rufst" (для "du"), приставка "an" идет в конец.',
    },
    {
      id: 'a1-trennbar-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение с глаголом "einkaufen":',
      options: [
        'Wir einkaufen heute Lebensmittel.',
        'Wir kaufen heute Lebensmittel ein.',
        'Wir ein kaufen heute Lebensmittel.'
      ],
      correctAnswer: 'Wir kaufen heute Lebensmittel ein.',
      explanation: 'В глаголе "einkaufen" приставка "ein-" отделяется и ставится в конец предложения. "kaufen" спрягается.',
    },
    {
      id: 'a1-trennbar-test-q4',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол "fernsehen" в правильную форму: Ihr ___ gern Trickfilme ___.',
      sentenceParts: ['Ihr ', ' gern Trickfilme ', '.'],
      correctAnswer: 'seht, fern',
      explanation: 'Глагол "fernsehen" (смотреть телевизор). Спрягаемая часть "seht" (для "ihr"), приставка "fern" идет в конец.',
    },
    {
      id: 'a1-trennbar-test-q5',
      type: 'multiple_choice',
      question: 'Как правильно спросить: "Ты идешь сегодня с нами?" (глагол "mitkommen")',
      options: [
        'Mitkommst du heute?',
        'Kommst du heute mit?',
        'Du mitkommst heute?'
      ],
      correctAnswer: 'Kommst du heute mit?',
      explanation: 'В вопросе спрягаемая часть глагола "kommst" на первом месте, приставка "mit" в конце.',
    }
  ],
};
