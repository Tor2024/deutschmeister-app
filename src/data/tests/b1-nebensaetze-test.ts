
import type { Test } from '@/types';

export const testB1Nebensaetze: Test = {
  id: 'b1-nebensaetze-test',
  level: 'B1',
  topic: 'Придаточные предложения (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-nebensaetze-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: "Ich kann heute nicht kommen, ___ ich krank bin."',
      options: ['obwohl', 'damit', 'weil', 'wenn'],
      correctAnswer: 'weil',
      explanation: 'Союз "weil" (потому что) вводит придаточное причины.',
    },
    {
      id: 'b1-nebensaetze-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный союз и поставьте глагол в конец: "Er lernt Deutsch, ___ er in Deutschland arbeiten ___ (möchten)."',
      sentenceParts: ['Er lernt Deutsch, ', ' er in Deutschland arbeiten ', '.'],
      correctAnswer: 'weil, möchte', // или damit, möchte (если цель)
      explanation: 'Для причины: "weil er ... arbeiten möchte." Для цели: "damit er ... arbeiten möchte." (если бы он учил для кого-то другого, чтобы тот работал). Но "um...zu" здесь не подходит т.к. разные субъекты не предполагаются.',
    },
    {
      id: 'b1-nebensaetze-test-q3',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения уступки ("хотя")?',
      options: ['wenn', 'als', 'obwohl', 'damit'],
      correctAnswer: 'obwohl',
      explanation: 'Союз "obwohl" (хотя) вводит уступительное придаточное предложение.',
    },
    {
      id: 'b1-nebensaetze-test-q4',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму в конце придаточного: "Ich weiß nicht, ob sie morgen ___ (kommen).',
      sentenceParts: ['Ich weiß nicht, ob sie morgen ', '.'],
      correctAnswer: 'kommt',
      explanation: 'В придаточном предложении с союзом "ob" спрягаемый глагол "kommt" ставится в конец.',
    },
    {
      id: 'b1-nebensaetze-test-q5',
      type: 'translation',
      question: 'Переведите на немецкий, используя придаточное времени: "После того как он поел, он пошел гулять."',
      prompt: 'После того как он поел, он пошел гулять.',
      languageDirection: 'to_german',
      correctAnswer: 'Nachdem er gegessen hatte, ging er spazieren.',
      explanation: 'Союз "nachdem" требует, чтобы действие в придаточном предшествовало действию в главном. Часто используется Plusquamperfekt в придаточном и Präteritum/Perfekt в главном.',
    },
    {
      id: 'b1-nebensaetze-test-q6',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения цели, если подлежащие в главном и придаточном разные?',
      options: ['um...zu', 'damit', 'sodass', 'indem'],
      correctAnswer: 'damit',
      explanation: '"damit" используется, когда субъекты действия в главном и придаточном предложениях различаются. "um...zu" используется, когда субъект один.',
    },
  ],
};
