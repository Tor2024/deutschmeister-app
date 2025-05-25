
import type { Test } from '@/types';

export const testB1LexikMedienKommunikation: Test = {
  id: 'b1-lexik-medien-kommunikation-test',
  level: 'B1',
  topic: 'СМИ и коммуникация (Тест)',
  questions: [
    {
      id: 'b1-lexik-medien-kommunikation-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "газета"?',
      options: ['die Zeitschrift', 'das Buch', 'die Zeitung', 'der Artikel'],
      correctAnswer: 'die Zeitung',
      explanation: '"Die Zeitung" означает "газета".',
    },
    {
      id: 'b1-lexik-medien-kommunikation-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ jeden Tag die Nachrichten im Internet."',
      sentenceParts: ['Ich ', ' jeden Tag die Nachrichten im Internet.'],
      correctAnswer: 'lese', // или 'sehe', 'höre' в зависимости от контекста новостей
      explanation: '"Lesen" (читать) - подходящий глагол для новостей в интернете. Также возможны "sehen" (смотреть) или "hören" (слушать).',
    },
    {
      id: 'b1-lexik-medien-kommunikation-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны поговорить об этом."',
      prompt: 'Мы должны поговорить об этом.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen darüber sprechen.',
      explanation: '"Говорить об этом" - "darüber sprechen" (sprechen über + Akkusativ; "das" становится "darüber").',
    },
    {
      id: 'b1-lexik-medien-kommunikation-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "мнение"?',
      options: ['die Information', 'die Werbung', 'die Meinung', 'die Diskussion'],
      correctAnswer: 'die Meinung',
      explanation: '"Die Meinung" означает "мнение".',
    },
  ],
};
