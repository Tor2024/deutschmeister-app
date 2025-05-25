
import type { Test } from '@/types';

export const testA1WFragen: Test = {
  id: 'a1-w-fragen-test',
  level: 'A1',
  topic: 'Вопросительные слова (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a1-w-fragen',
  questions: [
    {
      id: 'a1-w-fragen-test-q1',
      type: 'multiple_choice',
      question: 'Какое вопросительное слово вы используете, чтобы спросить о человеке?',
      options: ['Was?', 'Wer?', 'Wo?', 'Wann?'],
      correctAnswer: 'Wer?',
      explanation: '"Wer?" означает "Кто?" и используется для вопросов о людях.',
    },
    {
      id: 'a1-w-fragen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте вопросительное слово: "___ alt bist du?"',
      sentenceParts: ['', ' alt bist du?'],
      correctAnswer: 'Wie',
      explanation: '"Wie alt bist du?" означает "Сколько тебе лет?". "Wie?" также означает "Как?".',
    },
    {
      id: 'a1-w-fragen-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильный вопрос, чтобы узнать, откуда кто-то приехал:',
      options: ['Wohin kommst du?', 'Woher kommst du?', 'Warum kommst du?', 'Wann kommst du?'],
      correctAnswer: 'Woher kommst du?',
      explanation: '"Woher?" означает "Откуда?".',
    },
    {
      id: 'a1-w-fragen-test-q4',
      type: 'translation',
      question: 'Переведите вопрос на немецкий: "Что это?"',
      prompt: 'Что это?',
      languageDirection: 'to_german',
      correctAnswer: 'Was ist das?',
      explanation: '"Что?" переводится как "Was?".',
    },
    {
      id: 'a1-w-fragen-test-q5',
      type: 'fill_in_the_blank',
      question: 'Поставьте слова в правильном порядке для специального вопроса: (du / was / heute / machst ?)',
      sentenceParts: ['', ' ', ' ', ' ', '?'],
      correctAnswer: 'Was machst du heute',
      explanation: 'Порядок слов: Вопросительное слово (Was) - Глагол (machst) - Подлежащее (du) - Обстоятельство (heute).',
    },
  ],
};
