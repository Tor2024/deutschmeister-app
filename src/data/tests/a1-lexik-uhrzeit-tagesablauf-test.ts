
import type { Test } from '@/types';

export const testA1LexikUhrzeitTagesablauf: Test = {
  id: 'a1-lexik-uhrzeit-tagesablauf-test',
  level: 'A1',
  topic: 'Время (часы) и Распорядок дня (Тест)',
  questions: [
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-test-q1',
      type: 'multiple_choice',
      question: 'Как сказать по-немецки "7:15" (неофициально)?',
      options: ['sieben Uhr fünfzehn', 'Viertel nach sieben', 'Viertel vor acht', 'halb sieben'],
      correctAnswer: 'Viertel nach sieben',
      explanation: '7:15 неофициально - "Viertel nach sieben" (четверть после семи).',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ um 22:00 Uhr schlafen."',
      sentenceParts: ['Ich ', ' um 22:00 Uhr schlafen.'],
      correctAnswer: 'gehe',
      explanation: 'Глагол "schlafen gehen" (идти спать). Для "ich" форма "gehe".',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой брат завтракает в восемь часов."',
      prompt: 'Мой брат завтракает в восемь часов.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Bruder frühstückt um acht Uhr.',
      explanation: '"Завтракать" - "frühstücken". "В восемь часов" - "um acht Uhr".',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-test-q4',
      type: 'multiple_choice',
      question: 'Как спросить "Который час?"',
      options: ['Was machst du?', 'Wie viel kostet das?', 'Wie spät ist es?', 'Wann stehst du auf?'],
      correctAnswer: 'Wie spät ist es?',
      explanation: '"Wie spät ist es?" или "Wie viel Uhr ist es?" означает "Который час?".',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Nach dem Mittagessen ___ ich meine Hausaufgaben."',
      sentenceParts: ['Nach dem Mittagessen ', ' ich meine Hausaufgaben.'],
      correctAnswer: 'mache',
      explanation: 'Глагол "machen" (делать). "Hausaufgaben machen" - делать домашние задания. "Ich mache".',
    },
  ],
};
