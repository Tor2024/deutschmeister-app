
import type { Test } from '@/types';

export const testB1KonditionalsaetzeTyp1: Test = {
  id: 'b1-konditionalsaetze-typ1-test',
  level: 'B1',
  topic: 'Условные предложения (Typ I) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-konditionalsaetze-typ1',
  questions: [
    {
      id: 'b1-konditionalsaetze-typ1-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз для реального условия: "___ ich Zeit habe, besuche ich meine Großeltern."',
      options: ['Obwohl', 'Damit', 'Wenn', 'Weil'],
      correctAnswer: 'Wenn',
      explanation: 'Союз "wenn" (если) вводит реальное условие.',
    },
    {
      id: 'b1-konditionalsaetze-typ1-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "___ es morgen nicht regnet, machen wir einen Ausflug."',
      sentenceParts: ['', ' es morgen nicht regnet, machen wir einen Ausflug.'],
      correctAnswer: 'Wenn', // или Falls
      explanation: 'Союз "wenn" или "falls" используется для выражения реального условия в будущем.',
    },
    {
      id: 'b1-konditionalsaetze-typ1-test-q3',
      type: 'multiple_choice',
      question: 'Какое предложение построено правильно?',
      options: [
        'Fährst du mit dem Auto, wenn du nimmst deine Freunde mit.',
        'Wenn du mit dem Auto fährst, nimmst deine Freunde mit?',
        'Nimmst du deine Freunde mit, wenn du mit dem Auto fährst?'
      ],
      correctAnswer: 'Nimmst du deine Freunde mit, wenn du mit dem Auto fährst?',
      explanation: 'Если главное предложение - вопрос, оно начинается с глагола. Придаточное с "wenn" имеет глагол в конце.',
    },
    {
      id: 'b1-konditionalsaetze-typ1-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Если ты выучишь слова, ты сможешь лучше говорить по-немецки."',
      prompt: 'Если ты выучишь слова, ты сможешь лучше говорить по-немецки.',
      languageDirection: 'to_german',
      correctAnswer: 'Wenn du die Wörter lernst, kannst du besser Deutsch sprechen.',
      explanation: 'Реальное условие с "wenn". Глагол в придаточном в конце, в главном - прямой порядок.',
    },
  ],
};

