
import type { Test } from '@/types';

export const testA2LexikArbeitBeruf: Test = {
  id: 'a2-lexik-arbeit-beruf-test',
  level: 'A2',
  topic: 'Работа и профессия (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-arbeit-beruf-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "инженер" (женщина)?',
      options: ['der Ingenieur', 'die Ingenieurin', 'der Lehrer', 'die Ärztin'],
      correctAnswer: 'die Ingenieurin',
      explanation: '"Die Ingenieurin" означает "инженер" (женщина).',
    },
    {
      id: 'a2-lexik-arbeit-beruf-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Sie arbeitet in einem großen ___ (офис)."',
      sentenceParts: ['Sie arbeitet in einem großen ', '.'],
      correctAnswer: 'Büro',
      explanation: '"Офис" по-немецки "das Büro".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой брат - продавец."',
      prompt: 'Мой брат - продавец.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Bruder ist Verkäufer.',
      explanation: '"Продавец" (мужчина) - "der Verkäufer".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-test-q4',
      type: 'multiple_choice',
      question: 'Какой глагол означает "зарабатывать"?',
      options: ['arbeiten', 'studieren', 'verdienen', 'suchen'],
      correctAnswer: 'verdienen',
      explanation: '"Verdienen" означает "зарабатывать".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-test-q5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск: "Ich arbeite ___ Programmierer bei einer IT-Firma."',
      sentenceParts: ['Ich arbeite ', ' Programmierer bei einer IT-Firma.'],
      correctAnswer: 'als',
      explanation: 'Фраза "arbeiten als [профессия]" означает "работать в качестве [профессии]".',
    },
  ],
};
