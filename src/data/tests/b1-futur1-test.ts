
import type { Test } from '@/types';

export const testB1Futur1: Test = {
  id: 'b1-futur1-test',
  level: 'B1',
  topic: 'Будущее время Futur I (Тест)',
  questions: [
    {
      id: 'b1-futur1-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму глагола `werden` для "ihr" в Futur I:',
      options: ['wird', 'werdet', 'werden', 'wirst'],
      correctAnswer: 'werdet',
      explanation: 'Для местоимения "ihr" (вы) глагол "werden" в Präsens имеет форму "werdet".',
    },
    {
      id: 'b1-futur1-test-q2',
      type: 'fill_in_the_blank',
      question: 'Составьте предложение в Futur I: Ich ___ morgen meine Tante ___. (besuchen)',
      sentenceParts: ['Ich ', ' morgen meine Tante ', '.'],
      correctAnswer: 'werde, besuchen',
      explanation: 'Futur I: ich werde + Infinitiv (besuchen) в конце. "Ich werde morgen meine Tante besuchen."',
    },
    {
      id: 'b1-futur1-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Они скоро приедут."',
      prompt: 'Они скоро приедут.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie werden bald ankommen.',
      explanation: 'Futur I: sie werden + bald + Infinitiv (ankommen). "Ankommen" - глагол с отделяемой приставкой, в инфинитиве пишется слитно.',
    },
    {
      id: 'b1-futur1-test-q4',
      type: 'multiple_choice',
      question: 'Какое предложение выражает намерение в Futur I?',
      options: [
        'Ich habe gestern gearbeitet.',
        'Er wird wahrscheinlich schon zu Hause sein.',
        'Wir werden nächstes Jahr ein Haus bauen.'
      ],
      correctAnswer: 'Wir werden nächstes Jahr ein Haus bauen.',
      explanation: '"Wir werden ... bauen" выражает план или намерение на будущее.',
    },
    {
      id: 'b1-futur1-test-q5',
      type: 'fill_in_the_blank',
      question: 'Переделайте предложение из Präsens в Futur I: "Du lernst für die Prüfung."',
      sentenceParts: ['Du ', ' für die Prüfung ', '.'],
      correctAnswer: 'wirst, lernen',
      explanation: 'Präsens "Du lernst" становится Futur I "Du wirst lernen".',
    },
    {
      id: 'b1-futur1-test-q6',
      type: 'multiple_choice',
      question: 'В каком предложении инфинитив стоит на правильном месте для Futur I?',
      options: [
        'Sie wird das Projekt beenden nächste Woche.',
        'Sie wird nächste Woche beenden das Projekt.',
        'Sie wird nächste Woche das Projekt beenden.'
      ],
      correctAnswer: 'Sie wird nächste Woche das Projekt beenden.',
      explanation: 'В Futur I смысловой инфинитив ("beenden") всегда стоит в самом конце главного предложения.',
    }
  ],
};
