
import type { Test } from '@/types';

export const testA1LexikKleidung: Test = {
  id: 'a1-lexik-kleidung-test',
  level: 'A1',
  topic: 'Одежда (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-kleidung-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "юбка"?',
      options: ['die Hose', 'das Kleid', 'der Rock', 'das Hemd'],
      correctAnswer: 'der Rock',
      explanation: '"Der Rock" означает "юбка".',
    },
    {
      id: 'a1-lexik-kleidung-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich trage ein rotes ___ (футболка)."',
      sentenceParts: ['Ich trage ein rotes ', '.'],
      correctAnswer: 'T-Shirt',
      explanation: '"Футболка" по-немецки "das T-Shirt".',
    },
    {
      id: 'a1-lexik-kleidung-test-q3',
      type: 'multiple_choice',
      question: 'Что означает "der Pullover"?',
      options: ['платье', 'свитер', 'шапка', 'туфли'],
      correctAnswer: 'свитер',
      explanation: '"Der Pullover" означает "свитер".',
    },
    {
      id: 'a1-lexik-kleidung-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Мои туфли черные."',
      prompt: 'Мои туфли черные.',
      languageDirection: 'to_german',
      correctAnswer: 'Meine Schuhe sind schwarz.',
      explanation: '"Мои туфли" - "Meine Schuhe" (Plural). "черные" - "schwarz".',
    },
     {
      id: 'a1-lexik-kleidung-test-q5',
      type: 'multiple_choice',
      question: 'Какое слово означает "куртка"?',
      options: ['der Mantel', 'die Jacke', 'das Hemd', 'die Bluse'],
      correctAnswer: 'die Jacke',
      explanation: '"Die Jacke" означает "куртка".',
    },
  ],
};
