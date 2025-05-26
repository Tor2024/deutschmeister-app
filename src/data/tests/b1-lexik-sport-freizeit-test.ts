
import type { Test } from '@/types';

export const testB1LexikSportFreizeit: Test = {
  id: 'b1-lexik-sport-freizeit-test',
  level: 'B1',
  topic: 'Спорт и активный отдых (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-lexik-sport-freizeit',
  questions: [
    {
      id: 'b1-lexik-sport-freizeit-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "соревнование"?',
      options: ['die Mannschaft', 'der Sieg', 'der Wettbewerb', 'das Training'],
      correctAnswer: 'der Wettbewerb',
      explanation: '"Der Wettbewerb" означает "соревнование" или "конкурс".',
    },
    {
      id: 'b1-lexik-sport-freizeit-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный глагол: "Viele Leute ___ gern Yoga, um sich zu entspannen."',
      sentenceParts: ['Viele Leute ', ' gern Yoga, um sich zu entspannen.'],
      correctAnswer: 'machen', // или treiben
      explanation: '"Yoga machen" или "Yoga treiben" означает "заниматься йогой".',
    },
    {
      id: 'b1-lexik-sport-freizeit-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Поддерживать себя в форме важно для здоровья."',
      prompt: 'Поддерживать себя в форме важно для здоровья.',
      languageDirection: 'to_german',
      correctAnswer: 'Sich fit zu halten ist wichtig für die Gesundheit.',
      explanation: '"Поддерживать себя в форме" - "sich fit halten".',
    },
    {
      id: 'b1-lexik-sport-freizeit-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "поражение"?',
      options: ['der Sieg', 'die Niederlage', 'das Unentschieden', 'der Punkt'],
      correctAnswer: 'die Niederlage',
      explanation: '"Die Niederlage" означает "поражение".',
    },
  ],
};
