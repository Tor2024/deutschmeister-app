
import type { Test } from '@/types';

export const testA2Perfekt: Test = {
  id: 'a2-perfekt-test',
  level: 'A2',
  topic: 'Прошедшее время Perfekt (Тест)',
  questions: [
    {
      id: 'a2-perfekt-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный вспомогательный глагол для Perfekt: Ich ___ gestern ins Museum ___. (gehen)',
      options: ['habe ... gegangen', 'bin ... gegangen', 'habe ... gegeht', 'bin ... gegeht'],
      correctAnswer: 'bin ... gegangen',
      explanation: 'Глагол "gehen" (идти) - это глагол движения, поэтому Perfekt образуется с вспомогательным глаголом "sein". Partizip II от "gehen" - "gegangen".',
    },
    {
      id: 'a2-perfekt-test-q2',
      type: 'fill_in_the_blank',
      question: 'Образуйте Partizip II от глагола "machen": ge___t',
      sentenceParts: ['ge', 't'],
      correctAnswer: 'mach',
      explanation: '"machen" - слабый глагол. Partizip II: ge + mach + t = gemacht.',
    },
    {
      id: 'a2-perfekt-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Perfekt): "Она прочитала эту книгу."',
      prompt: 'Она прочитала эту книгу.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie hat dieses Buch gelesen.',
      explanation: 'Глагол "lesen" (читать) образует Perfekt с "haben". Partizip II - "gelesen".',
    },
    {
      id: 'a2-perfekt-test-q4',
      type: 'multiple_choice',
      question: 'Какое Partizip II у глагола "trinken" (пить)?',
      options: ['getrinkt', 'getrunken', 'getranken', 'trunken'],
      correctAnswer: 'getrunken',
      explanation: '"trinken" - сильный глагол. Его Partizip II - "getrunken". Эту форму нужно запомнить.',
    },
    {
      id: 'a2-perfekt-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму Perfekt: Wir ___ gestern Abend einen Film ___. (sehen)',
      sentenceParts: ['Wir ', ' gestern Abend einen Film ', '.'],
      correctAnswer: 'haben, gesehen',
      explanation: 'Глагол "sehen" (видеть) образует Perfekt с "haben". Partizip II - "gesehen". "Wir haben gestern Abend einen Film gesehen."',
    },
    {
      id: 'a2-perfekt-test-q6',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Perfekt: "Поезд прибыл вовремя."',
      options: [
          'Der Zug hat pünktlich angekommen.',
          'Der Zug ist pünktlich angekommen.',
          'Der Zug ist pünktlich ankommen.',
          'Der Zug hat pünktlich ankommen.'
      ],
      correctAnswer: 'Der Zug ist pünktlich angekommen.',
      explanation: 'Глагол "ankommen" (прибывать) - глагол движения/изменения состояния, образует Perfekt с "sein". Partizip II - "angekommen".',
    }
  ],
};
