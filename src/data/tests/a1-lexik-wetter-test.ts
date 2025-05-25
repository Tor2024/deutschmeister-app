
import type { Test } from '@/types';

export const testA1LexikWetter: Test = {
  id: 'a1-lexik-wetter-test',
  level: 'A1',
  topic: 'Погода (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-wetter-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "солнечно"?',
      options: ['Es regnet', 'Es ist windig', 'Es ist sonnig', 'Es schneit'],
      correctAnswer: 'Es ist sonnig',
      explanation: '"Es ist sonnig" означает "Солнечно".',
    },
    {
      id: 'a1-lexik-wetter-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Im Winter ist es oft ___ (холодно)."',
      sentenceParts: ['Im Winter ist es oft ', '.'],
      correctAnswer: 'kalt',
      explanation: '"Холодно" по-немецки "kalt".',
    },
    {
      id: 'a1-lexik-wetter-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Сегодня ветрено."',
      prompt: 'Сегодня ветрено.',
      languageDirection: 'to_german',
      correctAnswer: 'Heute ist es windig.',
      explanation: '"Ветрено" - "windig".',
    },
    {
      id: 'a1-lexik-wetter-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово НЕ описывает погоду?',
      options: ['wolkig', 'warm', 'schnell', 'kühl'],
      correctAnswer: 'schnell',
      explanation: '"Schnell" (быстрый) не описывает погоду, в отличие от "wolkig" (облачно), "warm" (тепло), "kühl" (прохладно).',
    },
  ],
};
