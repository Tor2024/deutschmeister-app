
import type { Test } from '@/types';

export const testA1LexikEssenTrinken: Test = {
  id: 'a1-lexik-essen-trinken-test',
  level: 'A1',
  topic: 'Еда и напитки (Тест)',
  questions: [
    {
      id: 'a1-lexik-essen-trinken-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "хлеб"?',
      options: ['die Milch', 'das Wasser', 'das Brot', 'der Apfel'],
      correctAnswer: 'das Brot',
      explanation: '"Das Brot" означает "хлеб".',
    },
    {
      id: 'a1-lexik-essen-trinken-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ gern Käse (сыр)."',
      sentenceParts: ['Ich ', ' gern Käse.'],
      correctAnswer: 'esse',
      explanation: '"Есть, кушать" по-немецки "essen". Для "ich" форма "esse".',
    },
    {
      id: 'a1-lexik-essen-trinken-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она пьет чай."',
      prompt: 'Она пьет чай.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie trinkt Tee.',
      explanation: '"Она" - "sie", "пьет" - "trinkt", "чай" - "der Tee" (здесь без артикля).',
    },
    {
      id: 'a1-lexik-essen-trinken-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "испытывать жажду / хотеть пить"?',
      options: ['Hunger haben', 'Durst haben', 'lecker sein', 'möchten'],
      correctAnswer: 'Durst haben',
      explanation: '"Durst haben" означает "хотеть пить".',
    },
    {
        id: 'a1-lexik-essen-trinken-test-q5',
        type: 'fill_in_the_blank',
        question: 'Что вы скажете, если хотите кофе? "Ich ___ einen Kaffee, bitte."',
        sentenceParts: ['Ich ', ' einen Kaffee, bitte.'],
        correctAnswer: 'möchte',
        explanation: '"Möchten" (хотел бы) - вежливая форма для выражения желания.',
      },
  ],
};
