
import type { Test } from '@/types';

export const testA2LexikElektronikTechnik: Test = {
  id: 'a2-lexik-elektronik-technik-test',
  level: 'A2',
  topic: 'Электроника и техника (базовые понятия) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-elektronik-technik-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "ноутбук"?',
      options: ['der Computer', 'das Tablet', 'der Laptop', 'der Bildschirm'],
      correctAnswer: 'der Laptop',
      explanation: '"Der Laptop" означает "ноутбук".',
    },
    {
      id: 'a2-lexik-elektronik-technik-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich muss mein Handy ___, der Akku ist leer."',
      sentenceParts: ['Ich muss mein Handy ', ', der Akku ist leer.'],
      correctAnswer: 'aufladen',
      explanation: '"Aufladen" означает "заряжать".',
    },
    {
      id: 'a2-lexik-elektronik-technik-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой принтер не работает."',
      prompt: 'Мой принтер не работает.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Drucker funktioniert nicht.',
      explanation: '"Принтер" - "der Drucker". "Не работает" - "funktioniert nicht".',
    },
    {
      id: 'a2-lexik-elektronik-technik-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "выключать"?',
      options: ['einschalten', 'reparieren', 'ausschalten', 'drucken'],
      correctAnswer: 'ausschalten',
      explanation: '"Ausschalten" означает "выключать".',
    },
    {
      id: 'a2-lexik-elektronik-technik-test-q5',
      type: 'multiple_choice',
      question: 'Что вы делаете с клавиатурой (die Tastatur)?',
      options: ['Man liest damit.', 'Man schreibt damit.', 'Man telefoniert damit.', 'Man sieht damit fern.'],
      correctAnswer: 'Man schreibt damit.',
      explanation: 'На клавиатуре ("die Tastatur") пишут ("schreiben").',
    },
  ],
};
