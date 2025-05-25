
import type { Test } from '@/types';

export const testA2LexikEinkaufen: Test = {
  id: 'a2-lexik-einkaufen-test',
  level: 'A2',
  topic: 'Покупки (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-einkaufen-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "супермаркет"?',
      options: ['die Bäckerei', 'der Markt', 'der Supermarkt', 'das Kaufhaus'],
      correctAnswer: 'der Supermarkt',
      explanation: '"Der Supermarkt" означает "супермаркет".',
    },
    {
      id: 'a2-lexik-einkaufen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Wie viel ___ dieser Apfel?"',
      sentenceParts: ['Wie viel ', ' dieser Apfel?'],
      correctAnswer: 'kostet',
      explanation: 'Чтобы спросить о цене, используется глагол "kosten". Для "dieser Apfel" (он) форма "kostet".',
    },
    {
      id: 'a2-lexik-einkaufen-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я ищу подарок."',
      prompt: 'Я ищу подарок.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich suche ein Geschenk.',
      explanation: '"Я ищу" - "Ich suche". "Подарок" - "das Geschenk", здесь с неопределенным артиклем "ein Geschenk".',
    },
    {
      id: 'a2-lexik-einkaufen-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "касса"?',
      options: ['die Rechnung', 'die Tüte', 'die Kasse', 'der Preis'],
      correctAnswer: 'die Kasse',
      explanation: '"Die Kasse" означает "касса".',
    },
    {
      id: 'a2-lexik-einkaufen-test-q5',
      type: 'multiple_choice',
      question: 'Что означает "bar bezahlen"?',
      options: ['платить картой', 'платить онлайн', 'платить наличными', 'получить скидку'],
      correctAnswer: 'платить наличными',
      explanation: '"Bar bezahlen" означает "платить наличными".',
    },
  ],
};
