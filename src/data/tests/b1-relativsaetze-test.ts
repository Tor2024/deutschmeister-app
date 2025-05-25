
import type { Test } from '@/types';

export const testB1Relativsaetze: Test = {
  id: 'b1-relativsaetze-test',
  level: 'B1',
  topic: 'Относительные придаточные предложения (Тест)',
  questions: [
    {
      id: 'b1-relativ-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильное относительное местоимение: "Das ist der Mann, ___ Auto ich kaufen möchte."',
      options: ['der', 'dessen', 'dem', 'den'],
      correctAnswer: 'dessen',
      explanation: 'Антецедент "der Mann" (м.р.). "Auto" принадлежит этому мужчине, поэтому нужен Genitiv. Относительное местоимение Genitiv мужского рода - "dessen".',
    },
    {
      id: 'b1-relativ-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное относительное местоимение: "Die Frau, mit ___ ich gesprochen habe, ist sehr nett."',
      sentenceParts: ['Die Frau, mit ', ' ich gesprochen habe, ist sehr nett.'],
      correctAnswer: 'der',
      explanation: 'Антецедент "Die Frau" (ж.р.). Предлог "mit" требует Dativ. Относительное местоимение для женского рода Dativ - "der".',
    },
    {
      id: 'b1-relativ-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Это книга, которую я читаю."',
      prompt: 'Это книга, которую я читаю.',
      languageDirection: 'to_german',
      correctAnswer: 'Das ist das Buch, das ich lese.',
      explanation: 'Антецедент "das Buch" (ср.р.). В придаточном "ich lese das Buch" (Akkusativ). Относительное местоимение для среднего рода Akkusativ - "das".',
    },
    {
      id: 'b1-relativ-test-q4',
      type: 'multiple_choice',
      question: 'Какой предлог и относительное местоимение нужны: "Der Tisch, ___ ___ das Buch liegt, ist alt." (лежит НА столе)',
      options: ['auf der', 'auf dem', 'in dem', 'an den'],
      correctAnswer: 'auf dem',
      explanation: 'Антецедент "Der Tisch" (м.р.). "liegen auf + Dativ". Dativ м.р. - "dem". "auf dem".',
    },
    {
      id: 'b1-relativ-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте относительное местоимение: "Alles, ___ er sagt, ist wichtig."',
      sentenceParts: ['Alles, ', ' er sagt, ist wichtig.'],
      correctAnswer: 'was',
      explanation: 'После слова "alles" (всё) используется относительное местоимение "was".',
    },
    {
      id: 'b1-relativ-test-q6',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Die Kinder, ___ ich Süßigkeiten gegeben habe, haben sich gefreut."',
      options: ['die', 'den', 'denen', 'deren'],
      correctAnswer: 'denen',
      explanation: 'Антецедент "Die Kinder" (мн.ч.). Глагол "geben" требует Dativ (кому?). Относительное местоимение для мн.ч. Dativ - "denen".',
    }
  ],
};
