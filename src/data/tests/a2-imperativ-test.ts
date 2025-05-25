
import type { Test } from '@/types';

export const testA2Imperativ: Test = {
  id: 'a2-imperativ-test',
  level: 'A2',
  topic: 'Повелительное наклонение (Тест)',
  questions: [
    {
      id: 'a2-imperativ-test-q1',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для глагола "helfen" (помогать) для `du`?',
      options: ['Helfe!', 'Hilfst!', 'Hilf!', 'Helf!'],
      correctAnswer: 'Hilf!',
      explanation: 'Сильный глагол "helfen" меняет корневую гласную e → i в Imperativ для `du`: hilf!',
    },
    {
      id: 'a2-imperativ-test-q2',
      type: 'fill_in_the_blank',
      question: 'Образуйте Imperativ: ___ (ihr, warten) hier einen Moment!',
      sentenceParts: ['', ' hier einen Moment!'],
      correctAnswer: 'Wartet',
      explanation: 'Для `ihr` форма Imperativ "wartet" (основа на -t, добавляется -et).',
    },
    {
      id: 'a2-imperativ-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильную вежливую форму Imperativ для "anrufen": ___ Sie mich morgen ___!',
      options: ['Rufen ... an', 'Rufen Sie an', 'Anrufen Sie'],
      correctAnswer: 'Rufen ... an',
      explanation: 'Вежливая форма Imperativ для "Sie" от "anrufen": "Rufen Sie ... an!". Отделяемая приставка "an" идет в конец.',
    },
    {
      id: 'a2-imperativ-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните просьбу (форма `wir`): ___ wir heute Abend Pizza essen!',
      sentenceParts: ['', ' wir heute Abend Pizza essen!'],
      correctAnswer: 'Essen', // или Lasst uns... essen
      explanation: 'Imperativ для `wir` совпадает с Präsens: Essen wir! (Давайте поедим!). "Lasst uns Pizza essen!" также корректно, но здесь просят форму глагола.',
    },
    {
      id: 'a2-imperativ-test-q5',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для "sein" (быть) для `ihr`?',
      options: ['Sei!', 'Sein!', 'Seien!', 'Seid!'],
      correctAnswer: 'Seid!',
      explanation: 'Глагол "sein" имеет особую форму Imperativ для `ihr`: Seid!',
    }
  ],
};
