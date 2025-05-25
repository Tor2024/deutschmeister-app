
import type { Test } from '@/types';

export const testC1AdverbialsaetzeVertiefung: Test = {
  id: 'c1-adverbialsaetze-vertiefung-test',
  level: 'C1',
  topic: 'Обстоятельственные придаточные предложения (Углубленно) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c1-adverbialsaetze-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз для выражения причины: "Ich kann heute nicht kommen, ___ ich einen wichtigen Termin habe."',
      options: ['obwohl', 'damit', 'weil', 'während'],
      correctAnswer: 'weil',
      explanation: 'Союз "weil" (потому что) используется для указания причины.',
    },
    {
      id: 'c1-adverbialsaetze-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий союз времени: "___ er die Nachricht erhielt, rief er sofort zurück."',
      sentenceParts: ['', ' er die Nachricht erhielt, rief er sofort zurück.'],
      correctAnswer: 'Sobald', // Также возможно "Sowie"
      explanation: 'Союз "sobald" (как только) или "sowie" указывает на действие, которое происходит немедленно после другого.',
    },
    {
      id: 'c1-adverbialsaetze-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя уступительное придаточное: "Даже если это будет стоить много, я это куплю."',
      prompt: 'Даже если это будет стоить много, я это куплю.',
      languageDirection: 'to_german',
      correctAnswer: 'Auch wenn es viel kostet, kaufe ich es.',
      // Альтернатива: Selbst wenn es viel kostet, kaufe ich es. / Wenn es auch viel kostet, kaufe ich es.
      explanation: 'Конструкция "auch wenn" (даже если) или "selbst wenn" вводит уступительное придаточное предложение.',
    },
    {
      id: 'c1-adverbialsaetze-test-q4',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения цели, если подлежащие в главном и придаточном предложениях разные?',
      options: ['um...zu', 'damit', 'indem', 'sodass'],
      correctAnswer: 'damit',
      explanation: '"damit" используется для выражения цели, когда субъекты действия (подлежащие) в главном и придаточном предложениях различаются.',
    },
    {
      id: 'c1-adverbialsaetze-test-q5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск в придаточном следствия: "Der Film war so spannend, ___ ich die Zeit vergaß."',
      sentenceParts: ['Der Film war so spannend, ', ' ich die Zeit vergaß.'],
      correctAnswer: 'dass',
      explanation: 'Конструкция "so..., dass..." (так..., что...) используется для выражения следствия.',
    },
    {
      id: 'c1-adverbialsaetze-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий, используя модальное придаточное с "indem": "Он улучшил свои знания тем, что много читал."',
      prompt: 'Он улучшил свои знания тем, что много читал.',
      languageDirection: 'to_german',
      correctAnswer: 'Er verbesserte seine Kenntnisse, indem er viel las.',
      explanation: 'Союз "indem" (тем что) используется для выражения образа действия.',
    },
    {
      id: 'c1-adverbialsaetze-test-q7',
      type: 'multiple_choice',
      question: 'Какой союз лучше всего подходит для выражения противопоставления в предложении: "Der Bruder ist sparsam, ___ die Schwester gibt gern Geld aus."?',
      options: ['während', 'solange', 'bevor', 'nachdem'],
      correctAnswer: 'während',
      explanation: 'Союз "während" в значении "тогда как, в то время как" используется для выражения противопоставления.',
    },
  ],
};
