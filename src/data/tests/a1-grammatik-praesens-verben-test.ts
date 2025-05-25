
import type { Test } from '@/types';

export const testA1GrammatikPraesensVerben: Test = {
  id: 'a1-grammatik-praesens-verben-test',
  level: 'A1',
  topic: 'Präsens (слабые и частые сильные глаголы) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a1-grammatik-praesens-verben',
  questions: [
    {
      id: 'a1-praesens-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму глагола "spielen" для "ihr":',
      options: ['spiele', 'spielst', 'spielt', 'spielen'],
      correctAnswer: 'spielt',
      explanation: 'Слабый глагол "spielen", для "ihr" окончание -t: ihr spielt.',
    },
    {
      id: 'a1-praesens-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "lesen": Er ___ ein Buch.',
      sentenceParts: ['Er ', ' ein Buch.'],
      correctAnswer: 'liest',
      explanation: 'Сильный глагол "lesen", e → ie для "er": er liest.',
    },
    {
      id: 'a1-praesens-test-q3',
      type: 'multiple_choice',
      question: 'Какая форма глагола "geben" верна для "du"?',
      options: ['gebe', 'gibst', 'gibt', 'geben'],
      correctAnswer: 'gibst',
      explanation: 'Сильный глагол "geben", e → i для "du": du gibst.',
    },
    {
      id: 'a1-praesens-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "werden": Das Wetter ___ besser.',
      sentenceParts: ['Das Wetter ', ' besser.'],
      correctAnswer: 'wird',
      explanation: 'Глагол "werden", для 3-го лица ед.ч. (das Wetter) форма "wird".',
    },
    {
      id: 'a1-praesens-test-q5',
      type: 'translation',
      question: 'Переведите на немецкий: "Ты спишь?"',
      prompt: 'Ты спишь?',
      languageDirection: 'to_german',
      correctAnswer: 'Schläfst du?',
      explanation: 'Сильный глагол "schlafen", a → ä для "du": schläfst. Вопрос: Schläfst du?',
    },
  ],
};
