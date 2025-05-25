
import type { Test } from '@/types';

export const testA2Artikel: Test = {
  id: 'a2-artikel-test',
  level: 'A2',
  topic: 'Артикли (углубленно) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-artikel-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный **определенный** артикль для слова "Hund" (собака, м.р.) в винительном падеже (Akkusativ): "Ich sehe ___ Hund."',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'den',
      explanation: 'Слово "Hund" мужского рода. В винительном падеже определенный артикль мужского рода "der" меняется на "den".',
    },
    {
      id: 'a2-artikel-test-q2',
      type: 'multiple_choice',
      question: 'Выберите правильный **неопределенный** артикль для слова "Idee" (идея, ж.р.) в винительном падеже: "Er hat ___ Idee."',
      options: ['ein', 'eine', 'einen', 'eines'],
      correctAnswer: 'eine',
      explanation: 'Слово "Idee" женского рода. Неопределенный артикль "eine" в винительном падеже для женского рода не изменяется.',
    },
    {
      id: 'a2-artikel-test-q3',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный отрицательный артикль: "Ich habe ___ Zeit (ж.р.)."',
      sentenceParts: ['Ich habe ', ' Zeit.'],
      correctAnswer: 'keine',
      explanation: '"Zeit" женского рода. Глагол "haben" требует Akkusativ (хотя для "keine" форма совпадает с Nominativ). "Keine Zeit" - нет времени.',
    },
    {
      id: 'a2-artikel-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный **определенный** артикль: "Wo sind ___ Schlüssel (мн.ч.)?"',
      sentenceParts: ['Wo sind ', ' Schlüssel?'],
      correctAnswer: 'die',
      explanation: 'Слово "Schlüssel" (ключи) здесь во множественном числе. Определенный артикль для множественного числа в именительном падеже - "die".',
    },
    {
      id: 'a2-artikel-test-q5',
      type: 'multiple_choice',
      question: 'Какое предложение верно, если речь идет о *конкретной, уже упомянутой* книге (das Buch)?',
      options: [
        'Ich lese ein Buch.',
        'Ich lese das Buch.',
        'Ich lese keinen Buch.'
      ],
      correctAnswer: 'Ich lese das Buch.',
      explanation: 'Если книга уже упоминалась или известна собеседникам, используется определенный артикль "das". Глагол "lesen" требует Akkusativ, но "das" (ср.р.) в Akkusativ не меняется.',
    },
    {
      id: 'a2-artikel-test-q6',
      type: 'fill_in_the_blank',
      question: 'Вставьте отрицательный артикль в Akkusativ: "Er kauft ___ Auto (ср.р.)."',
      sentenceParts: ['Er kauft ', ' Auto.'],
      correctAnswer: 'kein',
      explanation: '"Auto" среднего рода. Глагол "kaufen" требует Akkusativ. Отрицательный артикль "kein" для среднего рода в Akkusativ не меняется.',
    }
  ],
};
