
import type { Test } from '@/types';

export const testA1LexikGefuehleZustaende: Test = {
  id: 'a1-lexik-gefuehle-zustaende-test',
  level: 'A1',
  topic: 'Простые чувства и состояния (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-gefuehle-zustaende-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "уставший"?',
      options: ['glücklich', 'traurig', 'müde', 'krank'],
      correctAnswer: 'müde',
      explanation: '"Müde" означает "уставший".',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich habe großen ___ (жажда)."',
      sentenceParts: ['Ich habe großen ', '.'],
      correctAnswer: 'Durst',
      explanation: '"Durst haben" означает "хотеть пить" / "испытывать жажду".',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она здорова."',
      prompt: 'Она здорова.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie ist gesund.',
      explanation: '"Здоровый" - "gesund". "Она есть здоровая" - "Sie ist gesund".',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-test-q4',
      type: 'multiple_choice',
      question: 'Какое выражение означает "бояться"?',
      options: ['Hunger haben', 'Durst haben', 'Angst haben', 'Glück haben'],
      correctAnswer: 'Angst haben',
      explanation: '"Angst haben" означает "бояться".',
    },
  ],
};
