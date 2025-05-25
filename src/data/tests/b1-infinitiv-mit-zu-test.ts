
import type { Test } from '@/types';

export const testB1InfinitivMitZu: Test = {
  id: 'b1-infinitiv-mit-zu-test',
  level: 'B1',
  topic: "Инфинитивные конструкции с 'zu' (Тест)",
  testType: 'thematic',
  questions: [
    {
      id: 'b1-infinitiv-zu-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Er versucht, ___ (mich anrufen)."',
      options: ['mich anrufen', 'mich zu anrufen', 'mich anzurufen', 'anzurufen mich'],
      correctAnswer: 'mich anzurufen',
      explanation: 'После глагола "versuchen" используется "zu + Infinitiv". У глагола "anrufen" отделяемая приставка "an-", поэтому "zu" ставится между приставкой и корнем: anzurufen.',
    },
    {
      id: 'b1-infinitiv-zu-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную конструкцию: "Ich habe keine Lust, heute Abend ___ (ausgehen)."',
      sentenceParts: ['Ich habe keine Lust, heute Abend ', '.'],
      correctAnswer: 'auszugehen',
      explanation: 'После "Lust haben" используется "zu + Infinitiv". У глагола "ausgehen" отделяемая приставка "aus-", поэтому "auszugehen".',
    },
    {
      id: 'b1-infinitiv-zu-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно учить новые слова."',
      prompt: 'Важно учить новые слова.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, neue Wörter zu lernen.',
      explanation: 'Конструкция "es ist wichtig, ... zu tun".',
    },
    {
      id: 'b1-infinitiv-zu-test-q4',
      type: 'multiple_choice',
      question: 'Какая конструкция используется для выражения цели "чтобы"?',
      options: ['ohne...zu', 'um...zu', '(an)statt...zu', 'es ist Zeit...zu'],
      correctAnswer: 'um...zu',
      explanation: '"um...zu + Infinitiv" используется для выражения цели.',
    },
    {
      id: 'b1-infinitiv-zu-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Sie ging einkaufen, ___ etwas für das Abendessen ___ (kaufen)."',
      sentenceParts: ['Sie ging einkaufen, ', ' etwas für das Abendessen ', '.'],
      correctAnswer: 'um, zu kaufen',
      explanation: 'Для выражения цели "чтобы купить" используется "um ... zu kaufen".',
    },
    {
      id: 'b1-infinitiv-zu-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "Он ушел, не сказав до свидания."',
      prompt: 'Он ушел, не сказав до свидания.',
      languageDirection: 'to_german',
      correctAnswer: 'Er ging weg, ohne sich zu verabschieden.',
      explanation: 'Конструкция "ohne ... zu + Infinitiv" (sich verabschieden - прощаться).',
    },
  ],
};
