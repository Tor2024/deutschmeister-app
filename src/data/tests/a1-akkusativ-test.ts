
import type { Test } from '@/types';

export const testA1Akkusativ: Test = {
  id: 'a1-akkusativ-test',
  level: 'A1',
  topic: 'Винительный падеж (Akkusativ) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-akkusativ-test-q1',
      type: 'multiple_choice',
      question: 'Какой артикль мужского рода в Akkusativ для "der Hund"?',
      options: ['der Hund', 'dem Hund', 'den Hund', 'des Hundes'],
      correctAnswer: 'den Hund',
      explanation: 'В Akkusativ определенный артикль мужского рода "der" меняется на "den".',
    },
    {
      id: 'a1-akkusativ-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Ich sehe ___ (eine Katze).',
      sentenceParts: ['Ich sehe ', '.'],
      correctAnswer: 'eine Katze',
      explanation: 'Слово "Katze" женского рода. В Akkusativ неопределенный артикль "eine" не меняется.',
    },
    {
      id: 'a1-akkusativ-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное местоимение в Akkusativ: "Er liebt ___ (она)."',
      options: ['sie (Nom)', 'ihr (Dat)', 'sie (Akk)', 'ihr (Poss.)'],
      correctAnswer: 'sie (Akk)',
      explanation: 'Глагол "lieben" требует Akkusativ. Местоимение "она" в Akkusativ - "sie".',
    },
    {
      id: 'a1-akkusativ-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный неопределенный артикль: "Wir brauchen ___ (ein Buch).',
      sentenceParts: ['Wir brauchen ', '.'],
      correctAnswer: 'ein Buch',
      explanation: 'Глагол "brauchen" требует Akkusativ. "Buch" среднего рода. Неопределенный артикль "ein" для среднего рода в Akkusativ не меняется.',
    },
    {
        id: 'a1-akkusativ-test-q5',
        type: 'multiple_choice',
        question: 'Как сказать "Я ищу ключ (der Schlüssel)" в Akkusativ?',
        options: [
            'Ich suche der Schlüssel.',
            'Ich suche dem Schlüssel.',
            'Ich suche den Schlüssel.'
        ],
        correctAnswer: 'Ich suche den Schlüssel.',
        explanation: 'Глагол "suchen" требует Akkusativ. "Der Schlüssel" (м.р.) в Akkusativ становится "den Schlüssel".',
    }
  ],
};
