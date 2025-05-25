
import type { Test } from '@/types';

export const testA2NebensaetzeEinfach: Test = {
  id: 'a2-nebensaetze-einfach-test',
  level: 'A2',
  topic: 'Простые придаточные предложения (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-nebensaetze-einfach-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: Ich weiß, ___ er heute kommt.',
      options: ['ob', 'dass', 'weil', 'wenn'],
      correctAnswer: 'dass',
      explanation: 'Союз "dass" (что) используется для введения изъяснительных придаточных предложений.',
    },
    {
      id: 'a2-nebensaetze-einfach-test-q2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму: Ich bleibe zu Hause, weil ich müde ___. (sein)',
      sentenceParts: ['Ich bleibe zu Hause, weil ich müde ', '.'],
      correctAnswer: 'bin',
      explanation: 'В придаточном предложении с союзом "weil" спрягаемый глагол "bin" (от "sein" для "ich") ставится в конец.',
    },
    {
      id: 'a2-nebensaetze-einfach-test-q3',
      type: 'multiple_choice',
      question: 'Какой союз используется для введения косвенного общего вопроса (да/нет)?',
      options: ['dass', 'weil', 'wenn', 'ob'],
      correctAnswer: 'ob',
      explanation: 'Союз "ob" (ли) используется для введения косвенных общих вопросов.',
    },
    {
      id: 'a2-nebensaetze-einfach-test-q4',
      type: 'fill_in_the_blank',
      question: 'Соедините предложения: "Ich gehe spazieren. Das Wetter ist schön." Используйте "wenn".',
      sentenceParts: ['Ich gehe spazieren, ', ' das Wetter schön ', '.'],
      correctAnswer: 'wenn, ist',
      explanation: '"Wenn" используется для условия или времени. "Ich gehe spazieren, wenn das Wetter schön ist." Глагол "ist" в конце придаточного.',
    },
    {
      id: 'a2-nebensaetze-einfach-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильный порядок слов: Er fragt, ...',
      options: [
        'ob du Zeit hast?',
        'hast du ob Zeit?',
        'ob du hast Zeit?'
      ],
      correctAnswer: 'ob du Zeit hast?',
      explanation: 'В придаточном предложении с "ob" спрягаемый глагол "hast" идет в конец.',
    }
  ],
};
