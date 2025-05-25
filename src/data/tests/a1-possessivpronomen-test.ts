
import type { Test } from '@/types';

export const testA1Possessivpronomen: Test = {
  id: 'a1-possessivpronomen-test',
  level: 'A1',
  topic: 'Притяжательные местоимения (Тест)',
  questions: [
    {
      id: 'a1-possessiv-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: Das ist ___ (мой) Ball (м.р., Nominativ).',
      options: ['mein', 'meine', 'meinen', 'meins'],
      correctAnswer: 'mein',
      explanation: 'Для существительного мужского рода "Ball" в Nominativ используется форма "mein".',
    },
    {
      id: 'a1-possessiv-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Ich sehe ___ (твой) Hund (м.р., Akkusativ).',
      sentenceParts: ['Ich sehe ', ' Hund.'],
      correctAnswer: 'deinen',
      explanation: 'Для существительного мужского рода "Hund" в Akkusativ притяжательное местоимение "dein" изменяется на "deinen".',
    },
    {
      id: 'a1-possessiv-test-q3',
      type: 'multiple_choice',
      question: 'Какая форма правильная для "её книга" (das Buch, Nominativ)?',
      options: ['ihr Buch', 'ihre Buch', 'ihren Buch'],
      correctAnswer: 'ihr Buch',
      explanation: 'Для существительного среднего рода "Buch" в Nominativ используется форма "ihr" (её).',
    },
    {
      id: 'a1-possessiv-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Wir lieben ___ (наши) Eltern (мн.ч., Akkusativ).',
      sentenceParts: ['Wir lieben ', ' Eltern.'],
      correctAnswer: 'unsere',
      explanation: 'Для существительного множественного числа "Eltern" в Akkusativ используется форма "unsere".',
    },
    {
      id: 'a1-possessiv-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "У него есть его (собственная) сестра."',
      options: [
        'Er hat sein Schwester.',
        'Er hat seine Schwester.',
        'Er hat seinen Schwester.'
        ],
      correctAnswer: 'Er hat seine Schwester.',
      explanation: '"Schwester" (сестра) женского рода. Глагол "haben" требует Akkusativ. Притяжательное местоимение "sein" для женского рода в Akkusativ - "seine".',
    },
  ],
};
