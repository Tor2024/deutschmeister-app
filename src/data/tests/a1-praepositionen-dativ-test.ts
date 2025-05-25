
import type { Test } from '@/types';

export const testA1PraepositionenDativ: Test = {
  id: 'a1-praepositionen-dativ-test',
  level: 'A1',
  topic: 'Предлоги с Dativ (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-praep-dativ-test-q1',
      type: 'multiple_choice',
      question: 'Какой падеж требует предлог "mit"?',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
      correctAnswer: 'Dativ',
      explanation: 'Предлог "mit" (с) всегда требует Dativ.',
    },
    {
      id: 'a1-praep-dativ-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Ich komme aus ___ (das Land).',
      sentenceParts: ['Ich komme aus ', '.'], // dem Land
      correctAnswer: 'dem Land',
      explanation: 'Предлог "aus" требует Dativ. "Das Land" (ср.р.) в Dativ становится "dem Land".',
    },
    {
      id: 'a1-praep-dativ-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение:',
      options: [
        'Er fährt zu seine Oma.',
        'Er fährt zu seiner Oma.',
        'Er fährt zu seinen Oma.'
      ],
      correctAnswer: 'Er fährt zu seiner Oma.',
      explanation: 'Предлог "zu" требует Dativ. "Seine Oma" (ж.р., Possessivpronomen "sein") в Dativ становится "seiner Oma".',
    },
    {
      id: 'a1-praep-dativ-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Das Geschenk ist von ___ (mein Bruder - м.р.).',
      sentenceParts: ['Das Geschenk ist von ', '.'], // meinem Bruder
      correctAnswer: 'meinem Bruder',
      explanation: 'Предлог "von" требует Dativ. "Mein Bruder" (м.р.) в Dativ становится "meinem Bruder".',
    },
    {
      id: 'a1-praep-dativ-test-q5',
      type: 'multiple_choice',
      question: 'Какой предлог используется для указания отправной точки или принадлежности и требует Dativ?',
      options: ['für', 'nach', 'von', 'um'],
      correctAnswer: 'von',
      explanation: 'Предлог "von" (от, с, о) указывает на отправную точку или принадлежность и требует Dativ.',
    }
  ],
};
