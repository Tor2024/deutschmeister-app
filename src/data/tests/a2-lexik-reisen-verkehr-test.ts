
import type { Test } from '@/types';

export const testA2LexikReisenVerkehr: Test = {
  id: 'a2-lexik-reisen-verkehr-test',
  level: 'A2',
  topic: 'Путешествия и транспорт (Тест)',
  questions: [
    {
      id: 'a2-lexik-reisen-verkehr-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "аэропорт"?',
      options: ['der Bahnhof', 'die Haltestelle', 'der Flughafen', 'das Gleis'],
      correctAnswer: 'der Flughafen',
      explanation: '"Der Flughafen" означает "аэропорт".',
    },
    {
      id: 'a2-lexik-reisen-verkehr-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный глагол: "Wir müssen in München ___ (пересаживаться)."',
      sentenceParts: ['Wir müssen in München ', '.'],
      correctAnswer: 'umsteigen',
      explanation: '"Пересаживаться" по-немецки "umsteigen".',
    },
    {
      id: 'a2-lexik-reisen-verkehr-test-q3',
      type: 'multiple_choice',
      question: 'Какое слово означает "билет (на транспорт)"?',
      options: ['der Koffer', 'das Gepäck', 'die Fahrkarte', 'die Verspätung'],
      correctAnswer: 'die Fahrkarte',
      explanation: '"Die Fahrkarte" (или "das Ticket") означает "билет".',
    },
    {
      id: 'a2-lexik-reisen-verkehr-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Самолет отправляется в 15:00."',
      prompt: 'Самолет отправляется в 15:00.',
      languageDirection: 'to_german',
      correctAnswer: 'Das Flugzeug fliegt um 15:00 Uhr ab.', // fliegt ab um 15:00 Uhr тоже верно
      explanation: '"Самолет" - "das Flugzeug", "отправляется" (отделяемая приставка) - "fliegt ab", "в 15:00" - "um 15:00 Uhr".',
    },
    {
      id: 'a2-lexik-reisen-verkehr-test-q5',
      type: 'multiple_choice',
      question: 'Что означает "einsteigen"?',
      options: ['выходить', 'входить/садиться', 'летать', 'прибывать'],
      correctAnswer: 'входить/садиться',
      explanation: '"Einsteigen" означает "входить" или "садиться" (в транспорт).',
    },
  ],
};
