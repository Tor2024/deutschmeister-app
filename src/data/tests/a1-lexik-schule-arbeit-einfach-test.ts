
import type { Test } from '@/types';

export const testA1LexikSchuleArbeitEinfach: Test = {
  id: 'a1-lexik-schule-arbeit-einfach-test',
  level: 'A1',
  topic: 'Простая школьная и рабочая лексика (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-schule-arbeit-einfach-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "учительница"?',
      options: ['der Schüler', 'die Lehrerin', 'die Schule', 'die Arbeit'],
      correctAnswer: 'die Lehrerin',
      explanation: '"Die Lehrerin" означает "учительница".',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ (писать) einen Brief."',
      sentenceParts: ['Ich ', ' einen Brief.'],
      correctAnswer: 'schreibe',
      explanation: '"Писать" - "schreiben". Для "ich" форма "schreibe".',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-test-q3',
      type: 'multiple_choice',
      question: 'Что означает "das Heft"?',
      options: ['книга', 'ручка', 'тетрадь', 'домашнее задание'],
      correctAnswer: 'тетрадь',
      explanation: '"Das Heft" означает "тетрадь".',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Я работаю в офисе."',
      prompt: 'Я работаю в офисе.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich arbeite im Büro.',
      explanation: '"Я работаю" - "Ich arbeite". "В офисе" - "im Büro" (in dem Büro).',
    },
  ],
};
