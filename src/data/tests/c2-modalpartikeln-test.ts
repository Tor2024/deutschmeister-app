
import type { Test } from '@/types';

export const testC2Modalpartikeln: Test = {
  id: 'c2-modalpartikeln-test',
  level: 'C2',
  topic: 'Модальные частицы (Modalpartikeln) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c2-modalpartikeln-test-q1',
      type: 'multiple_choice',
      question: 'Какую модальную частицу можно использовать в вопросе "Wie geht es ___ Ihnen?", чтобы сделать его более дружелюбным или выразить интерес?',
      options: ['ja', 'denn', 'wohl', 'eben'],
      correctAnswer: 'denn',
      explanation: 'Частица "denn" используется в вопросительных предложениях для придания им более мягкого, заинтересованного тона.',
    },
    {
      id: 'c2-modalpartikeln-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящую модальную частицу: "A: Du hast das sicher vergessen. B: ___, ich habe daran gedacht!"',
      sentenceParts: ['A: Du hast das sicher vergessen. B: ', ', ich habe daran gedacht!'],
      correctAnswer: 'Doch',
      explanation: 'Частица "doch" используется для возражения на утверждение (здесь, подразумеваемое отрицание в словах А).',
    },
    {
      id: 'c2-modalpartikeln-test-q3',
      type: 'multiple_choice',
      question: 'Какая частица часто используется для выражения предположения или некоторой неуверенности?',
      options: ['ja', 'eben', 'wohl', 'mal'],
      correctAnswer: 'wohl',
      explanation: '"Wohl" часто указывает на предположение или вероятность (вероятно, пожалуй).',
    },
    {
      id: 'c2-modalpartikeln-test-q4',
      type: 'fill_in_the_blank',
      question: 'Смягчите просьбу: "Gib mir ___ das Buch!"',
      sentenceParts: ['Gib mir ', ' das Buch!'],
      correctAnswer: 'mal',
      explanation: 'Частица "mal" (сокращение от einmal) смягчает просьбы и команды, делая их более неформальными.',
    },
    {
      id: 'c2-modalpartikeln-test-q5',
      type: 'multiple_choice',
      question: 'В предложении "Das ist ___ eine tolle Idee!" частица "ja" выражает:',
      options: ['Сомнение', 'Удивление или подтверждение очевидного', 'Приказ', 'Предположение'],
      correctAnswer: 'Удивление или подтверждение очевидного',
      explanation: '"Ja" в таком контексте может выражать удивление (часто положительное) или подчеркивать, что что-то является очевидным фактом.',
    },
    {
      id: 'c2-modalpartikeln-test-q6',
      type: 'translation',
      question: 'Как можно перевести предложение с модальной частицей: "Das Leben ist halt kompliziert."',
      prompt: 'Das Leben ist halt kompliziert.',
      languageDirection: 'from_german',
      correctAnswer: 'Ну, жизнь сложна. / Жизнь, она такая, сложная. / Что поделать, жизнь сложна.',
      explanation: '"Halt" (или "eben") выражает констатацию факта, с которым приходится мириться, или некоторую неизбежность.',
    }
  ],
};
