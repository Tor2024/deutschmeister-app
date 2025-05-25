
import type { Test } from '@/types';

export const testA2LexikKleidung: Test = {
  id: 'a2-lexik-kleidung-test',
  level: 'A2',
  topic: 'Одежда (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-kleidung-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "пальто"?',
      options: ['die Jacke', 'der Pullover', 'der Mantel', 'das Hemd'],
      correctAnswer: 'der Mantel',
      explanation: '"Der Mantel" означает "пальто".',
    },
    {
      id: 'a2-lexik-kleidung-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ziehe meine neuen ___ (обувь) an."',
      sentenceParts: ['Ich ziehe meine neuen ', ' an.'],
      correctAnswer: 'Schuhe',
      explanation: '"Обувь" по-немецки "die Schuhe" (всегда во множественном числе в этом контексте).',
    },
    {
      id: 'a2-lexik-kleidung-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она носит красную юбку."',
      prompt: 'Она носит красную юбку.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie trägt einen roten Rock.',
      explanation: '"Она носит" - "Sie trägt". "Юбка" - "der Rock" (м.р.). "Красную юбку" (Akkusativ) - "einen roten Rock".',
    },
    {
      id: 'a2-lexik-kleidung-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово НЕ является предметом одежды?',
      options: ['die Mütze', 'das Kleid', 'der Tisch', 'die Socken'],
      correctAnswer: 'der Tisch',
      explanation: '"Der Tisch" (стол) - это предмет мебели, а не одежды.',
    },
    {
      id: 'a2-lexik-kleidung-test-q5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск: "Im Sommer trage ich oft ein leichtes ___ (платье)."',
      sentenceParts: ['Im Sommer trage ich oft ein leichtes ', '.'],
      correctAnswer: 'Kleid',
      explanation: '"Платье" по-немецки "das Kleid".',
    },
  ],
};
