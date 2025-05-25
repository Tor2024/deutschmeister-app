
import type { Test } from '@/types';

export const testB2LexikMedienKommunikation: Test = {
  id: 'b2-lexik-medien-kommunikation-test',
  level: 'B2',
  topic: 'СМИ и коммуникация (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-lexik-medien-test-q1',
      type: 'multiple_choice',
      question: 'Was versteht man unter "Berichterstattung"?',
      options: ['Zensur von Nachrichten', 'Die Art und Weise, wie über Ereignisse berichtet wird', 'Werbung in Zeitungen', 'Private Kommunikation in sozialen Medien'],
      correctAnswer: 'Die Art und Weise, wie über Ereignisse berichtet wird',
      explanation: '"Die Berichterstattung" bezieht sich auf das освещение событий, репортажи.',
    },
    {
      id: 'b2-lexik-medien-test-q2',
      type: 'fill_in_the_blank',
      question: 'Um die öffentliche Meinung nicht zu manipulieren, sollten Journalisten stets ___ berichten.',
      sentenceParts: ['Um die öffentliche Meinung nicht zu manipulieren, sollten Journalisten stets ', ' berichten.'],
      correctAnswer: 'objektiv',
      explanation: '"Objektiv berichten" (объективно освещать события) ist ein Grundsatz des seriösen Journalismus.',
    },
    {
      id: 'b2-lexik-medien-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно проверять источники информации."',
      prompt: 'Важно проверять источники информации.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, Informationsquellen zu überprüfen.',
      // Альтернатива: Es ist wichtig, die Quellen der Informationen zu überprüfen.
      explanation: '"Проверять источники информации" - "Informationsquellen überprüfen" или "die Quellen der Informationen überprüfen".',
    },
    {
      id: 'b2-lexik-medien-test-q4',
      type: 'multiple_choice',
      question: 'Welcher Begriff bezeichnet die Fähigkeit, Medien und ihre Inhalte kritisch zu verstehen und zu nutzen?',
      options: ['Meinungsfreiheit', 'Desinformation', 'Medienkompetenz', 'Algorithmus'],
      correctAnswer: 'Medienkompetenz',
      explanation: '"Die Medienkompetenz" ist die Fähigkeit, Medien kritisch und bewusst zu nutzen.',
    },
  ],
};
