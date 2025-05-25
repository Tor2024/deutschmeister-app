
import type { Test } from '@/types';

export const testC2LexikMedienkritikDigitaleGesellschaft: Test = {
  id: 'c2-lexik-medienkritik-digitale-gesellschaft-test',
  level: 'C2',
  topic: 'Медиакритика и цифровое общество (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c2-lexik-medienkritik-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt die gezielte Verbreitung falscher oder irreführender Informationen?',
      options: ['Informationsflut', 'Desinformation', 'Medienkompetenz', 'Zensur'],
      correctAnswer: 'Desinformation',
      explanation: '"Desinformation" ist die absichtliche Verbreitung von Falschinformationen.',
    },
    {
      id: 'c2-lexik-medienkritik-test-q2',
      type: 'fill_in_the_blank',
      question: 'Die Fähigkeit, Medieninhalte kritisch zu bewerten und zu verstehen, nennt man ___.',
      sentenceParts: ['Die Fähigkeit, Medieninhalte kritisch zu bewerten und zu verstehen, nennt man ', '.'],
      correctAnswer: 'Medienkompetenz',
      explanation: '"Medienkompetenz" ist die Fähigkeit, Medien kritisch und kompetent zu nutzen.',
    },
    {
      id: 'c2-lexik-medienkritik-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Проверка источников важна для борьбы с фейковыми новостями."',
      prompt: 'Проверка источников важна для борьбы с фейковыми новостями.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Überprüfung von Quellen ist wichtig für den Kampf gegen Fake News.',
      // Alternative: Quellenüberprüfung ist wichtig im Kampf gegen Fake News.
      explanation: 'Schlüsselbegriffe: "Überprüfung von Quellen" (Quellenüberprüfung), "wichtig", "Kampf gegen Fake News".',
    },
    {
      id: 'c2-lexik-medienkritik-test-q4',
      type: 'multiple_choice',
      question: 'Was ist eine "Filterblase"?',
      options: [
        'Ein neues soziales Netzwerk.',
        'Ein Zustand, in dem ein Nutzer hauptsächlich Informationen erhält, die seine eigenen Ansichten bestätigen.',
        'Ein Sicherheitssystem zum Schutz von Daten.',
        'Eine Methode zur schnellen Nachrichtenverbreitung.'
      ],
      correctAnswer: 'Ein Zustand, in dem ein Nutzer hauptsächlich Informationen erhält, die seine eigenen Ansichten bestätigen.',
      explanation: 'Eine "Filterblase" entsteht, wenn Algorithmen Inhalte so filtern, dass dem Nutzer vorwiegend bestätigende Informationen angezeigt werden.',
    },
    {
      id: 'c2-lexik-medienkritik-test-q5',
      type: 'short_answer',
      question: 'Welche Rolle spielt der Datenschutz in der digitalen Gesellschaft? Nennen Sie zwei Aspekte.',
      correctAnswer: 'Mögliche Aspekte: Schutz der Privatsphäre, Verhinderung von Datenmissbrauch, Kontrolle über eigene Daten, Vertrauen in digitale Dienste.',
      explanation: 'Der Datenschutz ist entscheidend für die Rechte des Einzelnen im digitalen Raum.'
    }
  ],
};
