
import type { Test } from '@/types';

export const testB1Konjunktiv2Einfuehrung: Test = {
  id: 'b1-konjunktiv2-einfuehrung-test',
  level: 'B1',
  topic: 'Konjunktiv II (Введение) (Тест)',
  questions: [
    {
      id: 'b1-konj2-einf-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Konjunktiv II для вежливой просьбы: "___ Sie mir bitte das Buch geben?"',
      options: ['Können', 'Könntest', 'Könnten', 'Kannst'],
      correctAnswer: 'Könnten',
      explanation: 'Для вежливой просьбы к "Sie" используется "Könnten Sie...?".',
    },
    {
      id: 'b1-konj2-einf-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильные формы: "Wenn ich Zeit ___, ___ ich dich besuchen."',
      sentenceParts: ['Wenn ich Zeit ', ', ', ' ich dich besuchen.'],
      correctAnswer: 'hätte, würde',
      explanation: 'Нереальное условие в настоящем: "Wenn ich Zeit hätte (Konj. II от haben), würde ich (Konj. II с würde) dich besuchen."',
    },
    {
      id: 'b1-konj2-einf-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (вежливая просьба): "Я бы хотел стакан воды."',
      prompt: 'Я бы хотел стакан воды.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich hätte gern ein Glas Wasser.',
      explanation: 'Вежливое желание выражается через "ich hätte gern...".',
    },
    {
      id: 'b1-konj2-einf-test-q4',
      type: 'multiple_choice',
      question: 'Какая форма является Konjunktiv II от "sein" для "er/sie/es"?',
      options: ['ist', 'war', 'wäre', 'sei'],
      correctAnswer: 'wäre',
      explanation: 'Konjunktiv II от "sein" для "er/sie/es" - "wäre".',
    },
    {
      id: 'b1-konj2-einf-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните совет, используя Konjunktiv II: "Du ___ mehr schlafen."',
      sentenceParts: ['Du ', ' mehr schlafen.'],
      correctAnswer: 'solltest',
      explanation: 'Для выражения совета используется "solltest" (Konj. II от sollen).',
    },
    {
      id: 'b1-konj2-einf-test-q6',
      type: 'multiple_choice',
      question: 'Как преобразовать "Ich mache das" в Konjunktiv II с "würde"?',
      options: ['Ich würde das gemacht.', 'Ich würde das machen.', 'Ich würde das machte.'],
      correctAnswer: 'Ich würde das machen.',
      explanation: 'Konjunktiv II с "würde" образуется: würde (спрягаемая форма) + Infinitiv смыслового глагола (machen).',
    }
  ],
};
