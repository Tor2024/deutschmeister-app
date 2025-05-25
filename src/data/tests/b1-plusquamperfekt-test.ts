
import type { Test } from '@/types';

export const testB1Plusquamperfekt: Test = {
  id: 'b1-plusquamperfekt-test',
  level: 'B1',
  topic: 'Предпрошедшее время Plusquamperfekt (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-plusquamperfekt-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный вспомогательный глагол и Partizip II: "Nachdem er ___ (ankommen), rief er seine Familie an."',
      options: ['war angekommen', 'hatte angekommen', 'ist angekommen', 'hat angekommen'],
      correctAnswer: 'war angekommen',
      explanation: 'Глагол "ankommen" образует Perfekt/Plusquamperfekt с "sein". Plusquamperfekt: war + Partizip II (angekommen).',
    },
    {
      id: 'b1-plusquamperfekt-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол в Plusquamperfekt: "Sie ___ das Buch schon ___, bevor sie den Film sah." (lesen)',
      sentenceParts: ['Sie ', ' das Buch schon ', ', bevor sie den Film sah.'],
      correctAnswer: 'hatte gelesen',
      explanation: 'Глагол "lesen" образует Perfekt/Plusquamperfekt с "haben". Plusquamperfekt: hatte + Partizip II (gelesen).',
    },
    {
      id: 'b1-plusquamperfekt-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Когда мы пришли, он уже ушел."',
      prompt: 'Когда мы пришли, он уже ушел.',
      languageDirection: 'to_german',
      correctAnswer: 'Als wir kamen, war er schon gegangen.',
      explanation: 'Действие "ушел" (Plusquamperfekt: war gegangen) произошло до "пришли" (Präteritum: kamen).',
    },
    {
      id: 'b1-plusquamperfekt-test-q4',
      type: 'multiple_choice',
      question: 'Какое предложение правильно использует Plusquamperfekt?',
      options: [
        'Ich hatte gegessen, dann ging ich spazieren.',
        'Nachdem ich gegessen hatte, ging ich spazieren.',
        'Ich ging spazieren, nachdem ich gegessen hatte.'
      ],
      correctAnswer: 'Nachdem ich gegessen hatte, ging ich spazieren.',
      explanation: 'Союз "nachdem" часто используется с Plusquamperfekt в придаточном предложении для указания предшествующего действия.',
    },
    {
      id: 'b1-plusquamperfekt-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение в Plusquamperfekt: "Er konnte nicht mitkommen, weil er sein Geld ___." (vergessen)',
      sentenceParts: ['Er konnte nicht mitkommen, weil er sein Geld ', '.'],
      correctAnswer: 'vergessen hatte',
      explanation: 'В придаточном причины с "weil", Plusquamperfekt "vergessen hatte" (глагол "vergessen" образует Perfekt с "haben").',
    }
  ],
};
