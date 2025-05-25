
import type { Test } from '@/types';

export const testB1VerbenMitPraepositionen: Test = {
  id: 'b1-verben-mit-praepositionen-test',
  level: 'B1',
  topic: 'Глаголы с предлогами (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-verben-praep-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог: "Ich interessiere mich ___ Politik."',
      options: ['an', 'auf', 'für', 'mit'],
      correctAnswer: 'für',
      explanation: 'Глагол "sich interessieren" используется с предлогом "für + Akkusativ".',
    },
    {
      id: 'b1-verben-praep-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный предлог и артикль в нужном падеже: "Er wartet ___ (der Zug, м.р.)."',
      sentenceParts: ['Er wartet ', ' Zug.'],
      correctAnswer: 'auf den',
      explanation: 'Глагол "warten" используется с предлогом "auf + Akkusativ". "Der Zug" в Akkusativ - "den Zug".',
    },
    {
      id: 'b1-verben-praep-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я мечтаю о путешествии."',
      prompt: 'Я мечтаю о путешествии.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich träume von einer Reise.',
      explanation: 'Глагол "träumen" используется с предлогом "von + Dativ". "Eine Reise" (ж.р.) в Dativ - "einer Reise".',
    },
    {
      id: 'b1-verben-praep-test-q4',
      type: 'multiple_choice',
      question: 'Какой падеж требует глагол "sprechen" с предлогом "mit"?',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
      correctAnswer: 'Dativ',
      explanation: 'Конструкция "sprechen mit" (говорить с кем-л.) всегда требует Dativ.',
    },
    {
      id: 'b1-verben-praep-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение, используя Pronominaladverb: "Denkst du oft an deine Arbeit? - Ja, ich denke oft ___ ."',
      sentenceParts: ['Denkst du oft an deine Arbeit? - Ja, ich denke oft ', '.'],
      correctAnswer: 'daran',
      explanation: 'Для замены "an + Sache" (о работе) используется Pronominaladverb "daran" (an + Arbeit).',
    },
    {
      id: 'b1-verben-praep-test-q6',
      type: 'multiple_choice',
      question: 'Выберите правильный вопрос: "___ wartest du?" - "Auf den Bus."',
      options: ['Woran', 'Worauf', 'Womit', 'Wovon'],
      correctAnswer: 'Worauf',
      explanation: 'Для вопроса к предложному дополнению "auf + Sache" используется "Worauf?".',
    }
  ],
};
