
import type { Test } from '@/types';

export const testB1LexikVeranstaltungenOrganisation: Test = {
  id: 'b1-lexik-veranstaltungen-organisation-test',
  level: 'B1',
  topic: 'Участие в мероприятиях и организация событий (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-lexik-veranstaltungen-organisation',
  questions: [
    {
      id: 'b1-veranstaltungen-test-q1',
      type: 'multiple_choice',
      question: 'Welches Verb bedeutet "приглашать"?',
      options: ['teilnehmen', 'organisieren', 'einladen', 'absagen'],
      correctAnswer: 'einladen',
      explanation: '"Einladen" bedeutet "приглашать".',
    },
    {
      id: 'b1-veranstaltungen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Können wir das Treffen auf nächste Woche ___? (перенести)',
      sentenceParts: ['Können wir das Treffen auf nächste Woche ', '?'],
      correctAnswer: 'verschieben',
      explanation: '"Verschieben" bedeutet "переносить, откладывать".',
    },
    {
      id: 'b1-veranstaltungen-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я хотел бы участвовать в этом курсе."',
      prompt: 'Я хотел бы участвовать в этом курсе.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich möchte an diesem Kurs teilnehmen.',
      explanation: '"Teilnehmen an + Dativ" - участвовать в. "Ich möchte ... teilnehmen."',
    },
    {
      id: 'b1-veranstaltungen-test-q4',
      type: 'multiple_choice',
      question: 'Was ist "die Eintrittskarte"?',
      options: ['Приглашение', 'Программа', 'Входной билет', 'Подарок'],
      correctAnswer: 'Входной билет',
      explanation: '"Die Eintrittskarte" означает "входной билет".',
    },
    {
      id: 'b1-veranstaltungen-test-q5',
      type: 'fill_in_the_blank',
      question: 'Bitte gib mir ___ , ob du zur Party kommst. (сообщи, дай знать)',
      sentenceParts: ['Bitte gib mir ', ', ob du zur Party kommst.'],
      correctAnswer: 'Bescheid',
      explanation: '"Bescheid geben" ist eine feste Wendung für "дать знать, сообщить".',
    },
  ],
};
