
import type { Test } from '@/types';

export const testA2TemporalsaetzeAlsWenn: Test = {
  id: 'a2-temporalsaetze-als-wenn-test',
  level: 'A2',
  topic: "Придаточные времени с 'als' и 'wenn' (Тест)",
  testType: 'thematic',
  questions: [
    {
      id: 'a2-temporalsaetze-als-wenn-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: ___ ich klein war, spielte ich oft draußen.',
      options: ['Wenn', 'Als', 'Obwohl', 'Dass'],
      correctAnswer: 'Als',
      explanation: 'Речь идет об однократном, длительном периоде в прошлом ("когда я был маленьким"), поэтому используется союз "als".',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный союз: Immer ___, es regnet, bleiben wir zu Hause.',
      sentenceParts: ['Immer ', ', es regnet, bleiben wir zu Hause.'],
      correctAnswer: 'wenn',
      explanation: '"Immer wenn" (всегда когда) указывает на повторяющееся действие в настоящем или прошлом.',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-test-q3',
      type: 'multiple_choice',
      question: 'Какой союз подойдет: ___ du morgen kommst, backe ich einen Kuchen.',
      options: ['Als', 'Wenn', 'Dass'],
      correctAnswer: 'Wenn',
      explanation: 'Речь идет об однократном событии в будущем (которое также может быть условием), поэтому используется "wenn".',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Когда он позвонил, я был в душе."',
      prompt: 'Когда он позвонил, я был в душе.',
      languageDirection: 'to_german',
      correctAnswer: 'Als er anrief, war ich unter der Dusche.',
      explanation: 'Звонок - это однократное событие в прошлом, поэтому используется "als".',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение:',
      options: [
        'Wenn ich habe Zeit, ich lese.',
        'Wenn ich Zeit habe, lese ich.',
        'Wenn habe ich Zeit, lese ich.'
      ],
      correctAnswer: 'Wenn ich Zeit habe, lese ich.',
      explanation: 'В придаточном предложении с "wenn" спрягаемый глагол (habe) идет в конец. В главном предложении (lese ich) после придаточного идет глагол, затем подлежащее (инверсия).',
    }
  ],
};
