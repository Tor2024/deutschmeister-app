
import type { Test } from '@/types';

export const testA2LexikInDerStadt: Test = {
  id: 'a2-lexik-in-der-stadt-test',
  level: 'A2',
  topic: 'В городе / Ориентация (Тест)',
  questions: [
    {
      id: 'a2-lexik-stadt-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "аптека"?',
      options: ['die Bank', 'die Post', 'die Apotheke', 'das Kino'],
      correctAnswer: 'die Apotheke',
      explanation: '"Die Apotheke" означает "аптека".',
    },
    {
      id: 'a2-lexik-stadt-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Gehen Sie immer ___ ."',
      sentenceParts: ['Gehen Sie immer ', '.'],
      correctAnswer: 'geradeaus',
      explanation: '"Geradeaus" означает "прямо".',
    },
    {
      id: 'a2-lexik-stadt-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Где находится ближайший супермаркет?"',
      prompt: 'Где находится ближайший супермаркет?',
      languageDirection: 'to_german',
      correctAnswer: 'Wo ist der nächste Supermarkt?',
      explanation: '"Ближайший" - "nächste". "Wo ist der nächste Supermarkt?"',
    },
    {
      id: 'a2-lexik-stadt-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "поворачивать"?',
      options: ['überqueren', 'suchen', 'abbiegen', 'finden'],
      correctAnswer: 'abbiegen',
      explanation: '"Abbiegen" означает "поворачивать".',
    },
     {
      id: 'a2-lexik-stadt-test-q5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск: "Das Museum ist ___ der Post und der Schule."',
      sentenceParts: ['Das Museum ist ', ' der Post und der Schule.'],
      correctAnswer: 'zwischen',
      explanation: '"Zwischen" означает "между" и используется с дательным падежом (здесь подразумевается).',
    },
  ],
};
