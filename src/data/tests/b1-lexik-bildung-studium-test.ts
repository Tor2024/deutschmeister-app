
import type { Test } from '@/types';

export const testB1LexikBildungStudium: Test = {
  id: 'b1-lexik-bildung-studium-test',
  level: 'B1',
  topic: 'Образование и Учеба (Тест)',
  questions: [
    {
      id: 'b1-lexik-bildung-studium-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "экзамен"?',
      options: ['die Vorlesung', 'das Seminar', 'die Prüfung', 'das Zeugnis'],
      correctAnswer: 'die Prüfung',
      explanation: '"Die Prüfung" означает "экзамен".',
    },
    {
      id: 'b1-lexik-bildung-studium-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Er ___ Medizin an der Universität Heidelberg."',
      sentenceParts: ['Er ', ' Medizin an der Universität Heidelberg.'],
      correctAnswer: 'studiert',
      explanation: '"Учиться в вузе" или "изучать (предмет в вузе)" - "studieren".',
    },
    {
      id: 'b1-lexik-bildung-studium-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой любимый предмет - история."',
      prompt: 'Мой любимый предмет - история.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Lieblingsfach ist Geschichte.',
      explanation: '"Любимый предмет" - "das Lieblingsfach", "история" - "die Geschichte".',
    },
    {
      id: 'b1-lexik-bildung-studium-test-q4',
      type: 'multiple_choice',
      question: 'Что означает "durchfallen"?',
      options: ['сдать экзамен', 'пропустить занятие', 'провалить экзамен', 'получить хорошую оценку'],
      correctAnswer: 'провалить экзамен',
      explanation: '"Durchfallen" (bei einer Prüfung) означает "провалить экзамен".',
    },
  ],
};
