
import type { Test } from '@/types';

export const testA2TrennbareUntrennbareVerben: Test = {
  id: 'a2-trennbare-untrennbare-verben-test',
  level: 'A2',
  topic: 'Разделяемые и неразделяемые глаголы (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a2-trennbare-untrennbare-verben',
  questions: [
    {
      id: 'a2-trenn-untrenn-test-q1',
      type: 'multiple_choice',
      question: 'Какой из следующих глаголов имеет ОТДЕЛЯЕМУЮ приставку?',
      options: ['erzählen', 'beginnen', 'einschlafen', 'gehören'],
      correctAnswer: 'einschlafen',
      explanation: 'Приставка "ein-" в "einschlafen" (засыпать) является отделяемой (ich schlafe ein). "er-", "be-", "ge-" - неотделяемые.',
    },
    {
      id: 'a2-trenn-untrenn-test-q2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол "mitbringen" в правильную форму (Präsens): "Er ___ seiner Freundin Blumen ___."',
      sentenceParts: ['Er ', ' seiner Freundin Blumen ', '.'],
      correctAnswer: 'bringt, mit',
      explanation: 'Глагол "mitbringen" (приносить с собой). Спрягаемая часть "bringt", отделяемая приставка "mit" в конце.',
    },
    {
      id: 'a2-trenn-untrenn-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Partizip II для глагола "verstehen" (неотделяемая приставка).',
      options: ['geverstanden', 'vergestanden', 'verstanden', 'versteht'],
      correctAnswer: 'verstanden',
      explanation: 'Глаголы с неотделяемыми приставками (как "ver-") образуют Partizip II без приставки "ge-".',
    },
    {
      id: 'a2-trenn-untrenn-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Поезд прибывает в 10 часов." (глагол ankommen)',
      prompt: 'Поезд прибывает в 10 часов.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Zug kommt um 10 Uhr an.',
      explanation: 'Глагол "ankommen" (прибывать) имеет отделяемую приставку "an-", которая ставится в конец предложения.',
    },
    {
      id: 'a2-trenn-untrenn-test-q5',
      type: 'multiple_choice',
      question: 'В каком предложении глагол с отделяемой приставкой используется НЕПРАВИЛЬНО в придаточном предложении?',
      options: [
        'Ich weiß, dass er jeden Tag früh aufsteht.',
        'Ich weiß, dass er steht jeden Tag früh auf.',
        'Ich weiß nicht, ob er heute Abend mitkommt.'
      ],
      correctAnswer: 'Ich weiß, dass er steht jeden Tag früh auf.',
      explanation: 'В придаточном предложении (вводимом "dass") глагол с отделяемой приставкой идет в конец целиком и не разделяется: "...dass er ... aufsteht."',
    }
  ],
};

    