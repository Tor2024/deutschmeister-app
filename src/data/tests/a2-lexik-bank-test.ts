
import type { Test } from '@/types';

export const testA2LexikBank: Test = {
  id: 'a2-lexik-bank-test',
  level: 'A2',
  topic: 'Простая банковская лексика (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-bank-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "счет (банковский)"?',
      options: ['das Geld', 'die Karte', 'das Konto', 'der Automat'],
      correctAnswer: 'das Konto',
      explanation: '"Das Konto" означает "счет (банковский)".',
    },
    {
      id: 'a2-lexik-bank-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный глагол: "Ich möchte Geld ___ (снять)."',
      sentenceParts: ['Ich möchte Geld ', '.'],
      correctAnswer: 'abheben',
      explanation: '"Снимать деньги" по-немецки "Geld abheben".',
    },
    {
      id: 'a2-lexik-bank-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Где ближайший банкомат?"',
      prompt: 'Где ближайший банкомат?',
      languageDirection: 'to_german',
      correctAnswer: 'Wo ist der nächste Geldautomat?',
      explanation: '"Ближайший банкомат" - "der nächste Geldautomat".',
    },
    {
      id: 'a2-lexik-bank-test-q4',
      type: 'multiple_choice',
      question: 'Что означает "Geld überweisen"?',
      options: ['Вносить деньги', 'Платить наличными', 'Переводить деньги', 'Проверять баланс'],
      correctAnswer: 'Переводить деньги',
      explanation: '"Geld überweisen" означает "переводить деньги".',
    },
  ],
};

    