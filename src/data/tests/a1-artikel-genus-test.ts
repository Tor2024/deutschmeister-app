
import type { Test } from '@/types';

export const testA1ArtikelGenus: Test = {
  id: 'a1-artikel-genus-test',
  level: 'A1',
  topic: 'Артикли и род существительных (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-artikel-genus-test-q1',
      type: 'multiple_choice',
      question: 'Какой определенный артикль у слова "Buch" (книга) в Именительном падеже?',
      options: ['der', 'die', 'das'],
      correctAnswer: 'das',
      explanation: 'Слово "Buch" среднего рода, поэтому правильный артикль "das Buch".',
    },
    {
      id: 'a1-artikel-genus-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный неопределенный артикль: Das ist ___ Apfel.',
      sentenceParts: ['Das ist ', ' Apfel.'],
      correctAnswer: 'ein',
      explanation: 'Слово "Apfel" (яблоко) мужского рода (der Apfel). Неопределенный артикль для мужского рода в Именительном падеже - "ein".',
    },
    {
      id: 'a1-artikel-genus-test-q3',
      type: 'multiple_choice',
      question: 'Какой определенный артикль используется для всех существительных во множественном числе в Именительном падеже?',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'die',
      explanation: 'Для множественного числа всех существительных в Именительном падеже используется определенный артикль "die".',
    },
    {
      id: 'a1-artikel-genus-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните фразу: Hier sind ___ Katzen (мн.ч.).',
      sentenceParts: ['Hier sind ', ' Katzen.'], // Предполагается отсутствие артикля или слово "viele"
      correctAnswer: '', // или 'viele' если бы это было упражнение на лексику
      explanation: 'Во множественном числе неопределенный артикль отсутствует. Можно сказать "Hier sind Katzen" или "Hier sind viele Katzen". Для теста на артикли, отсутствие - верный ответ.',
    },
    {
      id: 'a1-artikel-genus-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "___ Sonne scheint." (Солнце светит - конкретное солнце)',
      options: ['Ein', 'Eine', 'Die'],
      correctAnswer: 'Die',
      explanation: 'Речь идет о конкретном, единственном в своем роде объекте (наше Солнце), поэтому используется определенный артикль. "Sonne" женского рода, поэтому "Die Sonne".',
    },
  ],
};
