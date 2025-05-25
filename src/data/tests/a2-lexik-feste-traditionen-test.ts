
import type { Test } from '@/types';

export const testA2LexikFesteTraditionen: Test = {
  id: 'a2-lexik-feste-traditionen-test',
  level: 'A2',
  topic: 'Праздники и традиции (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-feste-traditionen-test-q1',
      type: 'multiple_choice',
      question: 'Какой праздник отмечают 24-26 декабря в Германии?',
      options: ['Ostern', 'Neujahr', 'Weihnachten', 'Silvester'],
      correctAnswer: 'Weihnachten',
      explanation: '"Weihnachten" (Рождество) отмечается 24-26 декабря.',
    },
    {
      id: 'a2-lexik-feste-traditionen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ dir alles Gute zum Geburtstag!"',
      sentenceParts: ['Ich ', ' dir alles Gute zum Geburtstag!'],
      correctAnswer: 'wünsche', // или gratuliere
      explanation: '"Wünschen" (желать) или "gratulieren" (поздравлять) подходят сюда. "Ich wünsche dir..." или "Ich gratuliere dir...".',
    },
    {
      id: 'a2-lexik-feste-traditionen-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы получили много подарков."',
      prompt: 'Мы получили много подарков.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir haben viele Geschenke bekommen.',
      explanation: '"Подарки" - "die Geschenke". "Получить" - "bekommen".',
    },
    {
      id: 'a2-lexik-feste-traditionen-test-q4',
      type: 'multiple_choice',
      question: 'Что обычно ищут дети на Пасху (Ostern) в Германии?',
      options: ['Geschenke', 'Süßigkeiten', 'Ostereier', 'Weihnachtsbäume'],
      correctAnswer: 'Ostereier',
      explanation: 'На Пасху дети традиционно ищут "Ostereier" (пасхальные яйца).',
    },
    {
      id: 'a2-lexik-feste-traditionen-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните поздравление: "___ Rutsch ins neue Jahr!"',
      sentenceParts: ['', ' Rutsch ins neue Jahr!'],
      correctAnswer: 'Guten',
      explanation: 'Популярное новогоднее поздравление: "Guten Rutsch ins neue Jahr!" (С наступающим Новым годом!).',
    }
  ],
};
