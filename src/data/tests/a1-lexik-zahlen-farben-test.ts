
import type { Test } from '@/types';

export const testA1LexikZahlenFarben: Test = {
  id: 'a1-lexik-zahlen-farben-test',
  level: 'A1',
  topic: 'Числа (0-100) и Цвета (Тест)',
  questions: [
    {
      id: 'a1-lexik-zahlen-farben-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "девяносто"?',
      options: ['neun', 'neunzehn', 'neunzig', 'neunte'],
      correctAnswer: 'neunzig',
      explanation: '"Neunzig" означает "девяносто".',
    },
    {
      id: 'a1-lexik-zahlen-farben-test-q2',
      type: 'fill_in_the_blank',
      question: 'Напишите словом: 67',
      sentenceParts: ['67 = ', ''],
      correctAnswer: 'siebenundsechzig',
      explanation: 'Числа от 21 до 99 образуются по принципу "единицы и десятки": siebenundsechzig.',
    },
    {
      id: 'a1-lexik-zahlen-farben-test-q3',
      type: 'multiple_choice',
      question: 'Какой цвет "weiß"?',
      options: ['черный', 'серый', 'белый', 'коричневый'],
      correctAnswer: 'белый',
      explanation: '"Weiß" означает "белый".',
    },
    {
      id: 'a1-lexik-zahlen-farben-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Die Tomate ist ___ (красный).',
      sentenceParts: ['Die Tomate ist ', '.'],
      correctAnswer: 'rot',
      explanation: '"Красный" по-немецки "rot".',
    },
    {
      id: 'a1-lexik-zahlen-farben-test-q5',
      type: 'translation',
      question: 'Переведите на немецкий: "У него две синие машины."',
      prompt: 'У него две синие машины.',
      languageDirection: 'to_german',
      correctAnswer: 'Er hat zwei blaue Autos.',
      explanation: '"Две" - "zwei", "синие машины" - "blaue Autos" (прилагательное склоняется).',
    },
  ],
};
