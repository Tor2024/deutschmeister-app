
import type { Test } from '@/types';

export const testA2Adjektivsteigerung: Test = {
  id: 'a2-adjektivsteigerung-test',
  level: 'A2',
  topic: 'Степени сравнения прилагательных (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-adjsteigerung-test-q1',
      type: 'multiple_choice',
      question: 'Какая сравнительная степень (Komparativ) у прилагательного "groß"?',
      options: ['großer', 'größer', 'am größten', 'größerer'],
      correctAnswer: 'größer',
      explanation: 'Односложное прилагательное "groß" получает умлаут и окончание -er в сравнительной степени: größer.',
    },
    {
      id: 'a2-adjsteigerung-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Mein Auto ist schnell, aber dein Auto ist ___ .',
      sentenceParts: ['Mein Auto ist schnell, aber dein Auto ist ', ' .'],
      correctAnswer: 'schneller',
      explanation: 'Для сравнения используется Komparativ: schnell + er = schneller.',
    },
    {
      id: 'a2-adjsteigerung-test-q3',
      type: 'multiple_choice',
      question: 'Какая превосходная степень (Superlativ) у прилагательного "gut"?',
      options: ['am gutsten', 'am güter', 'am besten', 'besser'],
      correctAnswer: 'am besten',
      explanation: 'Прилагательное "gut" имеет особую форму Superlativ: am besten.',
    },
    {
      id: 'a2-adjsteigerung-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение сравнением: Er ist so klug ___ sein Bruder.',
      sentenceParts: ['Er ist so klug ', ' sein Bruder.'],
      correctAnswer: 'wie',
      explanation: 'Для сравнения одинаковых качеств используется конструкция "so + Positiv + wie".',
    },
    {
      id: 'a2-adjsteigerung-test-q5',
      type: 'multiple_choice',
      question: 'Какое предложение правильное?',
      options: [
        'Dieses Buch ist mehr interessant als jenes.',
        'Dieses Buch ist interessanter als jenes.',
        'Dieses Buch ist am interessantesten als jenes.'
      ],
      correctAnswer: 'Dieses Buch ist interessanter als jenes.',
      explanation: 'Сравнительная степень от "interessant" - "interessanter". Для сравнения используется "als".',
    },
    {
      id: 'a2-adjsteigerung-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "Я пью чай охотнее, чем кофе."',
      prompt: 'Я пью чай охотнее, чем кофе.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich trinke Tee lieber als Kaffee.',
      explanation: 'Сравнительная степень от "gern" (охотно) - "lieber" (охотнее).',
    }
  ],
};
