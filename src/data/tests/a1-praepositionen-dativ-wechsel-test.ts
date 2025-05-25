
import type { Test } from '@/types';

export const testA1PraepositionenDativWechsel: Test = {
  id: 'a1-praepositionen-dativ-wechsel-test',
  level: 'A1',
  topic: 'Предлоги места с Dativ (Wo?) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a1-praepositionen-dativ-wechsel',
  questions: [
    {
      id: 'a1-praep-dativ-wechsel-test-q1',
      type: 'multiple_choice',
      question: 'Вставьте правильный артикль: "Das Bild hängt ___ Wand (ж.р.)."',
      options: ['an der', 'an die', 'an dem', 'am'],
      correctAnswer: 'an der',
      explanation: 'Вопрос "Wo hängt das Bild?". Предлог "an" требует Dativ. "Die Wand" (ж.р.) в Dativ "der Wand".',
    },
    {
      id: 'a1-praep-dativ-wechsel-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Wir sitzen ___ Tisch (м.р.)."',
      sentenceParts: ['Wir sitzen ', ' Tisch.'],
      correctAnswer: 'am', // или an dem
      explanation: 'Вопрос "Wo sitzen wir?". Предлог "an" требует Dativ. "Der Tisch" (м.р.) в Dativ "dem Tisch". "an dem" сливается в "am".',
    },
    {
      id: 'a1-praep-dativ-wechsel-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог и артикль: "Die Schuhe stehen ___ Tür (ж.р.)." (перед)',
      options: ['vor der', 'vor die', 'vor dem', 'vorm'],
      correctAnswer: 'vor der',
      explanation: 'Вопрос "Wo stehen die Schuhe?". Предлог "vor" требует Dativ. "Die Tür" (ж.р.) в Dativ "der Tür".',
    },
    {
      id: 'a1-praep-dativ-wechsel-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Кот спит под кроватью (das Bett, ср.р.)."',
      prompt: 'Кот спит под кроватью.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Katze schläft unter dem Bett.',
      explanation: 'Вопрос "Wo schläft die Katze?". Предлог "unter" требует Dativ. "Das Bett" (ср.р.) в Dativ "dem Bett".',
    },
  ],
};
