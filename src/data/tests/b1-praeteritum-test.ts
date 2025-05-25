
import type { Test } from '@/types';

export const testB1Praeteritum: Test = {
  id: 'b1-praeteritum-test',
  level: 'B1',
  topic: 'Прошедшее время Präteritum (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-praeteritum-test-q1',
      type: 'multiple_choice',
      question: 'Какая форма Präteritum глагола "machen" (делать) для "er"?',
      options: ['machte', 'machtest', 'gemacht', 'machten'],
      correctAnswer: 'machte',
      explanation: '"Machen" - слабый глагол. Präteritum для "er/sie/es" образуется добавлением суффикса -te к основе: mach + te = machte.',
    },
    {
      id: 'b1-praeteritum-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол "sein" в Präteritum: Gestern ___ ich im Kino.',
      sentenceParts: ['Gestern ', ' ich im Kino.'],
      correctAnswer: 'war',
      explanation: 'Präteritum от глагола "sein" для местоимения "ich" (я) - "war".',
    },
    {
      id: 'b1-praeteritum-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Präteritum): "Она читала книгу."',
      prompt: 'Она читала книгу.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie las ein Buch.',
      explanation: '"Lesen" - сильный глагол. Его форма Präteritum для "sie" (она) - "las".',
    },
    {
      id: 'b1-praeteritum-test-q4',
      type: 'multiple_choice',
      question: 'Какая форма Präteritum глагола "antworten" (отвечать) для "du"?',
      options: ['antwortet', 'antwortetest', 'antworttest', 'antworten'],
      correctAnswer: 'antwortetest',
      explanation: 'Основа глагола "antworten" заканчивается на -t. Для слабых глаголов с такой основой в Präteritum перед суффиксом -te- и окончанием -st (для "du") добавляется -e-: antwort + e + te + st = antwortetest.',
    },
    {
      id: 'b1-praeteritum-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол в Präteritum: Wir ___ gestern unsere Freunde nicht. (sehen)',
      sentenceParts: ['Wir ', ' gestern unsere Freunde nicht.'],
      correctAnswer: 'sahen',
      explanation: 'Präteritum от сильного глагола "sehen" (видеть) для местоимения "wir" (мы) - "sahen".',
    },
    {
      id: 'b1-praeteritum-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий (используя Präteritum): "Мы хотели пойти в кино."',
      prompt: 'Мы хотели пойти в кино.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir wollten ins Kino gehen.',
      explanation: 'Präteritum от модального глагола "wollen" (хотеть) для "wir" (мы) - "wollten". Инфинитив основного глагола "gehen" (пойти) ставится в конце предложения.',
    },
    {
      id: 'b1-praeteritum-test-q7',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Präteritum, используя глагол "haben": Er ___ keine Zeit für uns.',
      options: ['hat', 'gehabt', 'hatte', 'hättest'],
      correctAnswer: 'hatte',
      explanation: 'Präteritum от глагола "haben" (иметь) для местоимения "er" (он) - "hatte".',
    },
  ],
};
