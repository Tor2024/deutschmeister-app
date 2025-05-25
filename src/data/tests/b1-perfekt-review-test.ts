
import type { Test } from '@/types';

export const testB1PerfektReview: Test = {
  id: 'b1-perfekt-review-test',
  level: 'B1',
  topic: 'Perfekt vs. Präteritum (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-perfekt-review',
  questions: [
    {
      id: 'b1-perfekt-review-test-q1',
      type: 'multiple_choice',
      question: 'Выберите, какое время чаще используется в устном рассказе о вчерашнем дне для глагола "gehen" (идти):',
      options: ['ging', 'ist gegangen', 'war gegangen'],
      correctAnswer: 'ist gegangen',
      explanation: 'Для большинства глаголов движения в устной речи используется Perfekt (z.B. "ich bin gegangen").',
    },
    {
      id: 'b1-perfekt-review-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Gestern ___ ich sehr müde." (sein - используйте наиболее употребительную форму для устной речи)',
      sentenceParts: ['Gestern ', ' ich sehr müde.'],
      correctAnswer: 'war',
      explanation: 'Для глагола "sein" в устной речи о прошлом обычно используется Präteritum "war".',
    },
    {
      id: 'b1-perfekt-review-test-q3',
      type: 'multiple_choice',
      question: 'В каком стиле речи чаще всего встречается Präteritum (кроме sein/haben/модальных)?',
      options: ['В повседневных диалогах', 'В SMS-сообщениях', 'В литературных произведениях и новостях', 'В инструкциях'],
      correctAnswer: 'In literarischen Werken und Nachrichten',
      explanation: 'Präteritum является основным временем для письменного повествования.',
    },
    {
      id: 'b1-perfekt-review-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий, используя Perfekt: "Мы посмотрели интересный фильм."',
      prompt: 'Мы посмотрели интересный фильм.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir haben einen interessanten Film gesehen.',
      explanation: '"Sehen" образует Perfekt с "haben". Partizip II - "gesehen".',
    },
    {
      id: 'b1-perfekt-review-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение, используя Präteritum: "Er ___ gestern keine Zeit für uns." (haben)',
      sentenceParts: ['Er ', ' gestern keine Zeit für uns.'],
      correctAnswer: 'hatte',
      explanation: 'Для глагоla "haben" в Präteritum для "er" используется форма "hatte".',
    }
  ],
};
