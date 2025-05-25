
import type { Test } from '@/types';

export const testA2Possessivpronomen: Test = {
  id: 'a2-possessivpronomen-test',
  level: 'A2',
  topic: 'Притяжательные местоимения (Тест)',
  questions: [
    {
      id: 'a2-possessiv-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: Das ist ___ (наша) Schule (ж.р., Nominativ).',
      options: ['unser', 'unsere', 'unserem', 'unseren'],
      correctAnswer: 'unsere',
      explanation: 'Для существительного женского рода "Schule" в Nominativ притяжательное местоимение "unser" принимает форму "unsere".',
    },
    {
      id: 'a2-possessiv-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Ich helfe ___ (его, er) Bruder (м.р., Dativ).',
      sentenceParts: ['Ich helfe ', ' Bruder.'],
      correctAnswer: 'seinem',
      explanation: 'Глагол "helfen" требует Dativ. Для существительного мужского рода "Bruder" в Dativ притяжательное местоимение "sein" (его) изменяется на "seinem".',
    },
    {
      id: 'a2-possessiv-test-q3',
      type: 'multiple_choice',
      question: 'Какая форма правильная для "ваши (ihr) книги" (die Bücher, Akkusativ)?',
      options: ['euer Bücher', 'eure Bücher', 'euren Bücher', 'eueren Bücher'],
      correctAnswer: 'eure Bücher',
      explanation: 'Для существительного множественного числа "Bücher" в Akkusativ притяжательное местоимение "euer" принимает форму "eure".',
    },
    {
      id: 'a2-possessiv-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Sie sucht ___ (её, sie) Schlüssel (м.р., Akkusativ).',
      sentenceParts: ['Sie sucht ', ' Schlüssel.'],
      correctAnswer: 'ihren',
      explanation: 'Глагол "suchen" требует Akkusativ. Для существительного мужского рода "Schlüssel" в Akkusativ притяжательное местоимение "ihr" (её) изменяется на "ihren".',
    },
    {
      id: 'a2-possessiv-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "Это их (sie, pl.) дом."',
      options: [
        'Das ist ihr Haus.',
        'Das ist ihre Haus.',
        'Das ist ihrem Haus.'
        ],
      correctAnswer: 'Das ist ihr Haus.',
      explanation: '"Haus" (дом) среднего рода. Притяжательное местоимение "ihr" (их) для среднего рода в Nominativ - "ihr".',
    },
  ],
};
