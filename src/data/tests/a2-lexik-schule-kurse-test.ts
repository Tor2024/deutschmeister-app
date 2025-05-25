
import type { Test } from '@/types';

export const testA2LexikSchuleKurse: Test = {
  id: 'a2-lexik-schule-kurse-test',
  level: 'A2',
  topic: 'Школьная жизнь и курсы (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a2-lexik-schule-kurse',
  questions: [
    {
      id: 'a2-lexik-schule-kurse-test-q1',
      type: 'multiple_choice',
      question: 'Что такое "die Hausaufgaben"?',
      options: ['Перемена', 'Оценка', 'Домашние задания', 'Учебник'],
      correctAnswer: 'Домашние задания',
      explanation: '"Die Hausaufgaben" (Plural) означает "домашние задания".',
    },
    {
      id: 'a2-lexik-schule-kurse-test-q2',
      type: 'fill_in_the_blank',
      question: 'Er möchte ___ einem Sprachkurs ___. (участвовать)',
      sentenceParts: ['Er möchte ', ' einem Sprachkurs ', '.'],
      correctAnswer: 'an, teilnehmen',
      explanation: '"Teilnehmen an + Dativ" означает "участвовать в чём-либо". Модальный глагол "möchte", инфинитив "teilnehmen" в конце.',
    },
    {
      id: 'a2-lexik-schule-kurse-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Моя учительница очень добрая."',
      prompt: 'Моя учительница очень добрая.',
      languageDirection: 'to_german',
      correctAnswer: 'Meine Lehrerin ist sehr nett.',
      explanation: '"Учительница" - "die Lehrerin". "Моя учительница" - "Meine Lehrerin".',
    },
    {
      id: 'a2-lexik-schule-kurse-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "расписание уроков"?',
      options: ['das Zeugnis', 'der Stundenplan', 'die Prüfung', 'das Fach'],
      correctAnswer: 'der Stundenplan',
      explanation: '"Der Stundenplan" означает "расписание уроков".',
    },
  ],
};
