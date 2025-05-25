
import type { Test } from '@/types';

export const testB1LexikBildungStudium: Test = {
  id: 'b1-lexik-bildung-studium-test',
  level: 'B1',
  topic: 'Образование и Учеба (Тест)',
  questions: [
    {
      id: 'b1-lexik-bildung-studium-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "университет"?',
      options: ['die Schule', 'die Hochschule', 'die Universität', 'die Fachhochschule'],
      correctAnswer: 'die Universität',
      explanation: '"Die Universität" (или "die Uni") означает "университет".',
    },
    {
      id: 'b1-lexik-bildung-studium-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Nach der Schule möchte ich an der ___ Medizin ___ (учиться).',
      sentenceParts: ['Nach der Schule möchte ich an der ', ' Medizin ', '.'],
      correctAnswer: 'Universität, studieren', // или Hochschule
      explanation: '"Учиться в вузе" - "studieren". "Universität" - университет.',
    },
    {
      id: 'b1-lexik-bildung-studium-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он сдал все экзамены."',
      prompt: 'Он сдал все экзамены.',
      languageDirection: 'to_german',
      correctAnswer: 'Er hat alle Prüfungen bestanden.',
      explanation: '"Сдать экзамен" - "eine Prüfung bestehen". "Все экзамены" - "alle Prüfungen".',
    },
    {
      id: 'b1-lexik-bildung-studium-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "учебный предмет"?',
      options: ['die Vorlesung', 'das Fach', 'das Zeugnis', 'die Note'],
      correctAnswer: 'das Fach',
      explanation: '"Das Fach" означает "учебный предмет".',
    },
  ],
};
