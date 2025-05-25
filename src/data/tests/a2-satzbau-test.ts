
import type { Test } from '@/types';

export const testA2Satzbau: Test = {
  id: 'a2-satzbau-test',
  level: 'A2',
  topic: 'Порядок слов в предложении (Тест)',
  questions: [
    {
      id: 'a2-satzbau-test-q1',
      type: 'multiple_choice',
      question: 'Какое предложение имеет правильный прямой порядок слов?',
      options: [
        'Gern ich lerne Deutsch.',
        'Ich lerne gern Deutsch.',
        'Deutsch lerne ich gern.'
      ],
      correctAnswer: 'Ich lerne gern Deutsch.',
      explanation: 'Прямой порядок: Подлежащее (Ich) - Глагол (lerne) - Остальные члены (gern Deutsch).',
    },
    {
      id: 'a2-satzbau-test-q2',
      type: 'fill_in_the_blank',
      question: 'Поставьте слова в правильном порядке (обратный порядок): Morgen ___ (ich / gehen) ins Kino.',
      sentenceParts: ['Morgen ', ' ins Kino.'],
      correctAnswer: 'gehe ich',
      explanation: 'Обратный порядок: Обстоятельство (Morgen) - Глагол (gehe) - Подлежащее (ich).',
    },
    {
      id: 'a2-satzbau-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (общий вопрос): "Ты играешь на гитаре?"',
      prompt: 'Ты играешь на гитаре?',
      languageDirection: 'to_german',
      correctAnswer: 'Spielst du Gitarre?',
      explanation: 'Общий вопрос: Глагол (Spielst) - Подлежащее (du) - Остальные члены (Gitarre)?',
    },
    {
      id: 'a2-satzbau-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильный порядок слов в придаточном предложении: "Ich weiß, dass ..."',
      options: [
        'er heute kommt.',
        'kommt er heute.',
        'er kommt heute.'
      ],
      correctAnswer: 'er heute kommt.',
      explanation: 'В придаточном предложении с союзом "dass" спрягаемый глагол (kommt) ставится в самый конец.',
    },
    {
      id: 'a2-satzbau-test-q5',
      type: 'fill_in_the_blank',
      question: 'Составьте специальный вопрос: (wann / der Film / beginnen?)',
      sentenceParts: ['', ' ', ' ', '?'],
      correctAnswer: 'Wann beginnt der Film',
      explanation: 'Специальный вопрос: Вопросительное слово (Wann) - Глагол (beginnt) - Подлежащее (der Film)?',
    }
  ],
};
