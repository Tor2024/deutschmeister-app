
import type { Test } from '@/types';

export const testA2Modalverben: Test = {
  id: 'a2-modalverben-test',
  level: 'A2',
  topic: 'Модальные глаголы (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-modal-test-q1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "dürfen": Du ___ hier nicht parken.',
      sentenceParts: ['Du ', ' hier nicht parken.'],
      correctAnswer: 'darfst',
      explanation: 'Для "du" форма глагола "dürfen" - "darfst".',
    },
    {
      id: 'a2-modal-test-q2',
      type: 'multiple_choice',
      question: 'Какая форма глагола "sollen" подходит для "er/sie/es"?',
      options: ['soll', 'sollst', 'sollen', 'sollt'],
      correctAnswer: 'soll',
      explanation: 'Для "er/sie/es" используется форма "soll".',
    },
    {
      id: 'a2-modal-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны помочь ему."',
      prompt: 'Мы должны помочь ему.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen ihm helfen.',
      explanation: '"Должны" (сильная необходимость) - "müssen". Для "wir" - "müssen". "Ему" (Dativ) - "ihm". Инфинитив "helfen" в конце.',
    },
    {
      id: 'a2-modal-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение:',
      options: [
        'Ich kann gut singen das Lied.',
        'Ich kann das Lied gut singen.',
        'Ich das Lied gut singen kann.'
      ],
      correctAnswer: 'Ich kann das Lied gut singen.',
      explanation: 'Правильный порядок слов: Подлежащее - модальный глагол - дополнения/обстоятельства - инфинитив смыслового глагола.',
    },
    {
      id: 'a2-modal-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "mögen": "___ du Schokolade?"',
      sentenceParts: ['', ' du Schokolade?'],
      correctAnswer: 'Magst',
      explanation: 'Форма "mögen" для "du" - "magst".',
    }
  ],
};
