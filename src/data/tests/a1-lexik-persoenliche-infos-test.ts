
import type { Test } from '@/types';

export const testA1LexikPersoenlicheInfos: Test = {
  id: 'a1-lexik-persoenliche-infos-test',
  level: 'A1',
  topic: 'Личная информация (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-persoenliche-infos-test-q1',
      type: 'multiple_choice',
      question: 'Как ответить на вопрос "Wie alt bist du?", если тебе 20 лет?',
      options: ['Ich bin zwanzig.', 'Ich habe zwanzig Jahre.', 'Ich bin zwanzig Jahre alt.', 'Mein Alter ist zwanzig.'],
      correctAnswer: 'Ich bin zwanzig Jahre alt.',
      explanation: 'Правильный ответ: "Ich bin [число] Jahre alt."',
    },
    {
      id: 'a1-lexik-persoenliche-infos-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ in Moskau."',
      sentenceParts: ['Ich ', ' in Moskau.'],
      correctAnswer: 'wohne',
      explanation: 'Для указания места жительства используется глагол "wohnen". "Ich wohne in..."',
    },
    {
      id: 'a1-lexik-persoenliche-infos-test-q3',
      type: 'multiple_choice',
      question: 'Как спросить "Откуда Вы родом?" (вежливо)',
      options: ['Wo wohnen Sie?', 'Woher kommen Sie?', 'Wie heißen Sie?', 'Was machen Sie?'],
      correctAnswer: 'Woher kommen Sie?',
      explanation: '"Woher kommen Sie?" используется для вопроса о происхождении.',
    },
    {
      id: 'a1-lexik-persoenliche-infos-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Моя страна - Германия."',
      prompt: 'Моя страна - Германия.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Land ist Deutschland.',
      explanation: '"Моя страна" - "Mein Land", "Германия" - "Deutschland".',
    },
  ],
};
