
import type { Test } from '@/types';

export const testA1LexikHausWohnung: Test = {
  id: 'a1-lexik-haus-wohnung-test',
  level: 'A1',
  topic: 'Дом и квартира (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-haus-wohnung-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "гостиная"?',
      options: ['das Schlafzimmer', 'die Küche', 'das Wohnzimmer', 'das Badezimmer'],
      correctAnswer: 'das Wohnzimmer',
      explanation: '"Das Wohnzimmer" означает "гостиная".',
    },
    {
      id: 'a1-lexik-haus-wohnung-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "In meiner Küche gibt es einen ___ (стол)."',
      sentenceParts: ['In meiner Küche gibt es einen ', '.'],
      correctAnswer: 'Tisch',
      explanation: '"Стол" по-немецки "der Tisch". В Akkusativ после "einen" - "Tisch".',
    },
    {
      id: 'a1-lexik-haus-wohnung-test-q3',
      type: 'multiple_choice',
      question: 'Что означает "das Bett"?',
      options: ['стул', 'шкаф', 'кровать', 'лампа'],
      correctAnswer: 'кровать',
      explanation: '"Das Bett" означает "кровать".',
    },
    {
      id: 'a1-lexik-haus-wohnung-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Я живу в большом доме."',
      prompt: 'Я живу в большом доме.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich wohne in einem großen Haus.',
      explanation: '"Я живу" - "Ich wohne", "в доме" - "in einem Haus", "большом" - "großen" (склонение прилагательного).',
    },
    {
      id: 'a1-lexik-haus-wohnung-test-q5',
      type: 'multiple_choice',
      question: 'Какое немецкое слово означает "окно"?',
      options: ['die Tür', 'der Boden', 'das Fenster', 'die Wand'],
      correctAnswer: 'das Fenster',
      explanation: '"Das Fenster" означает "окно".',
    },
  ],
};
